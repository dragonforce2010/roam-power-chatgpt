import "./sdk.js"
import "./icon.js"
import "./isv-parser.js"
import "./chatui-pro.css"
import "./chatui-theme.css"
import "./index.css"

import React, { useEffect, useRef, useState } from 'react';
import { ErrorToaster } from '../toaster'
import { getChatConfig } from './chat-config'
import { allMessages, Message, persistantMessages } from '../store'
import { PARAM_OPEN_AI_KEY, PARAM_USE_MY_OWN_OPEN_AI_KEY, SERVICE_API_CHATV1, SERVICE_API_CHATV2, SERVICE_HOST } from '../const'
import CodeEditor from '../chat-card/code-render'


interface ChatProUIProps {
  model?: string;
  openAiKey?: string;
}

export default function ChatProUI({
  model,
  openAiKey,
}: ChatProUIProps) {
  const wrapper = useRef();
  const [chatContext, setChatContext] = useState('')
  const contextRef = useRef(chatContext)

  const checkIfContainsCodeSnippet = (content: string): boolean => {
    const pattern = /(\b(public|private|protected|class|function|if|else|for|while|do|switch|case|break|continue|try|catch|finally|throw|import|export|const|let|var|new|return|await|async)\b|\/\/.*|\/\*(.|[\r\n])*?\*\/)/;
    console.log('pattern.test:', pattern.test(content))
    return pattern.test(content);
  }

  useEffect(() => {
    contextRef.current = chatContext
  }, [chatContext])

  useEffect(() => {
    const bot = new window.ChatSDK({
      root: wrapper.current,
      config: getChatConfig(),
      components: {
        'code-editor': CodeEditor,
        'default': <div>hello world</div>
      },
      requests: {
        send: function (msg: any) {
          if (msg.type === 'text') {
            allMessages.push({
              type: 'text',
              content: {
                text: msg.content.text
              },
              position: 'right'
            })

            let chatServiceEndpint
            if (window.extensionAPI.settings.get(PARAM_USE_MY_OWN_OPEN_AI_KEY)) {
              chatServiceEndpint = `${SERVICE_HOST}${SERVICE_API_CHATV1}`
            } else {
              chatServiceEndpint = `${SERVICE_HOST}${SERVICE_API_CHATV2}`
            }

            return {
              url: chatServiceEndpint,
              type: 'post',
              contentType: 'application/json',
              dataType: 'json',
              data: {
                "Message": msg.content.text,
                "Context": contextRef.current,
                "Model": model,
                "OpenAiKey": openAiKey
              },
              error: function (xhr: any, status: any, error: any) {
                alert(error)
              }
            };
          }
        }
      },
      handlers: {
        parseResponse: function (res: any, requestType: any) {
          if (res?.error) {
            ErrorToaster.show(res.error)
            return {
              type: 'text',
              position: 'left',
              content: {
                text: 'Hmmm... Something went wrong with the chatgpt server 😔 Please try again later'
              }
            }
          }

          console.log(res?.content)

          let replyMessage: Message
          if (checkIfContainsCodeSnippet(res?.content as string)) {
            replyMessage = {
              type: 'card',
              position: 'left',
              content: {
                code: 'code-editor',
                data: {
                  code: (res?.content as string).replace(/^[\s,\.\?]+/, '')
                }
              }
            }
          } else {
            replyMessage = {
              type: 'text',
              position: 'left',
              content: {
                text: (res?.content as string).replace(/^[\s,\.\?]+/, '')
              },
            }
          }

          // save messages each time when get a response from chatgpt
          persistantMessages(replyMessage)
          setChatContext(res?.context)
          return replyMessage
        }
      }
    });

    bot.run();
  }, []);

  return <div className='container'>
    <div className='chatScreen' ref={wrapper} />
  </div>;
}