import "./sdk.js"
import "./icon.js"
import "./isv-parser.js"
import "./chatui-pro.css"
import "./chatui-theme.css"
import "./index.css"

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import NavigationPanel from '../navigation'
import config from './chat-config'


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
      config: config,
      requests: {
        send: function (msg: any) {
          if (msg.type === 'text') {
            return {
              // url: { serviceUrl }, // 'https://chatgpt-service.mudkip.me/api/chat'
              url: 'https://chatgpt-service.mudkip.me/api/chat',
              type: 'post',
              contentType: 'application/json',
              dataType: 'json',
              data: {
                "Message": msg.content.text
              },
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
              }
            };
          }
        }
      },
      handlers: {
        parseResponse: function (res: any, requestType: any) {
          console.log('parse response from backend:', res, requestType)
          // if (requestType === 'send') {
          console.log('handle response: ', requestType, res)
          return [
            {
              type: 'text',
              content: {
                // text: res.content,
                text: res?.reply ? JSON.parse(res?.reply)?.content : res.errMsg
              }
            }
          ]
        }
      }
    });

    bot.run();
  }, [serviceUrl]);

  // 注意 wrapper 的高度
  return <div className='container'>
    {/* <div className='leftNavigationPanel'>
      <NavigationPanel></NavigationPanel>
    </div> */}
    <div className='chatScreen' ref={wrapper} />
  </div>;
}