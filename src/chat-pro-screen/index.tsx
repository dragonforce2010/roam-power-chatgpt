import "./sdk.js"
import "./icon.js"
import "./isv-parser.js"
import "./chatui-pro.css"
import "./chatui-theme.css"
import "./index.css"

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import NavigationPanel from '../navigation'
import { chatConfig, allMessages, Message } from './chat-config'


interface ChatProUIProps {
  // serviceUrl: strin
}

export default function ChatProUI({
  // serviceUrl
}: ChatProUIProps) {
  const wrapper = useRef();

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

            return {
              url: 'https://chatgpt-service.mudkip.me/api/chat',
              type: 'post',
              contentType: 'application/json',
              dataType: 'json',
              data: {
                "Message": msg.content.text
              },
            };
          }
        }
      },
      handlers: {
        parseResponse: function (res: any, requestType: any) {
          console.log('parse response from backend:', res, requestType)
          // console.log('handle response: ', requestType, res)
          let replyMessage: Message = {
            type: 'text',
            content: {
              // 解析从apaas的faas返回的结果
              // text: res?.reply ? JSON.parse(res?.reply)?.content : res.errMsg 
              // 解析从openapi返回的结果
              text: (res?.content as string).replace(/^[\s,\.\?]+/, '')
            }
          }
          allMessages.push(replyMessage)
          // save messages each time when get a response from chatgpt
          localStorage.setItem('messages', JSON.stringify(allMessages))
          return replyMessage
        }
      }
    });

    bot.run();
  }, []);

  // 注意 wrapper 的高度
  return <div className='container'>
    {/* <div className='leftNavigationPanel'>
      <NavigationPanel></NavigationPanel>
    </div> */}
    <div className='chatScreen' ref={wrapper} />
  </div>;
}