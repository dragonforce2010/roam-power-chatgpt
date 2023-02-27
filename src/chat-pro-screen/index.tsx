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
import { PARAM_OPEN_AI_KEY, SERVICE_API_CHATV1, SERVICE_API_CHATV2, SERVICE_HOST } from '../const'


interface ChatProUIProps {
  model: string;
  openAiKey: string;
}

export default function ChatProUI({
  model,
  openAiKey,
}: ChatProUIProps) {
  const wrapper = useRef();
  const [chatContext, setChatContext] = useState('')
  const contextRef = useRef(chatContext)

  useEffect(() => {
    contextRef.current = chatContext
  }, [chatContext])

  useEffect(() => {
    const bot = new window.ChatSDK({
      root: wrapper.current,
      components: {
        'hello': <div>hello world</div>
      },
      config: getChatConfig(),
      requests: {
        send: function (msg: any) {
          // if (window.extensionAPI.settings.get('openAiKey') === null || window.extensionAPI.settings.get('openAiKey') === '') {
          //   ErrorToaster.show({
          //     icon: 'error',
          //     message: 'open ai key is not provided!'
          //   })
          //   return
          // }
          ErrorToaster.show({
            icon: 'error',
            message: 'open ai key is not provided!'
          })
          console.log('show error message')
          if (msg.type === 'text') {
            allMessages.push({
              type: 'text',
              content: {
                text: msg.content.text
              },
              position: 'right'
            })

            let chatServiceEndpint
            if (window.extensionAPI.settings.get(PARAM_OPEN_AI_KEY) && window.extensionAPI.settings.get(PARAM_OPEN_AI_KEY)) {
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
          console.log('parse response from backend:', res, requestType)
          console.log('res?.error', res?.error)
          if (res?.error) {
            alert(res?.error)
            ErrorToaster.show(res.error)
            return {
              type: 'text',
              position: 'left',
              content: {
                text: 'Hmmm... Something went wrong with the chatgpt server 😔 Please try again later'
              }
            }
          }
          let replyMessage: Message = {
            type: 'text',
            position: 'left',
            content: {
              text: (res?.content as string).replace(/^[\s,\.\?]+/, '')
            },
          }
          // save messages each time when get a response from chatgpt
          persistantMessages(replyMessage)
          setChatContext(res?.context)
          console.log(res?.content)
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