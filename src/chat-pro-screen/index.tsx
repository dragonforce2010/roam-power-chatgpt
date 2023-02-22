import "./sdk.js"
import "./icon.js"
import "./isv-parser.js"
import "./chatui-pro.css"
import "./chatui-theme.css"
import "./index.css"

import React, { useEffect, useRef, useState } from 'react';
import { ErrorToaster } from '../toaster'
import ReactDOM from 'react-dom';
import { chatConfig } from './chat-config'
import { allMessages, Message, persistantMessages } from '../store'


interface ChatProUIProps {
  // serviceUrl: string
}

export default function ChatProUI({
  // serviceUrl
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
      config: chatConfig,
      requests: {
        send: function (msg: any) {
          if (msg.type === 'text') {
            allMessages.push(msg)

            allMessages.push({
              type: 'text',
              content: {
                // 解析从openapi返回的结果
                text: msg.content.text
              }
            })

            // persistantMessages({
            //   type: 'text',
            //   content: {
            //     // 解析从openapi返回的结果
            //     text: msg.content.text
            //   }
            // })

            return {
              // url: 'https://chatgpt-service.mudkip.me/api/chat',
              url: 'https://ec2-54-254-24-184.ap-southeast-1.compute.amazonaws.com/ai/chat',
              type: 'post',
              contentType: 'application/json',
              dataType: 'json',
              data: {
                "Message": msg.content.text,
                "Context": contextRef.current
              },
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
              content: {
                text: 'Hmmm... Something went wrong with the chatgpt server 😔 Please try again later'
              }
            }
          }
          let replyMessage: Message = {
            type: 'text',
            content: {
              // 解析从openapi返回的结果
              text: (res?.content as string).replace(/^[\s,\.\?]+/, '')
            }
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

  // 注意 wrapper 的高度
  return <div className='container'>
    <div className='chatScreen' ref={wrapper} />
  </div>;
}