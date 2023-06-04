// import { Drawer } from 'antd'
// import { Drawer } from '@blueprintjs/core'
import { Button, Drawer, Space } from 'antd';
import React, { useEffect, useState } from 'react'
import ChatProUI from '../chat-pro-screen'
import { ArrowsAltOutlined, CloseOutlined, FullscreenExitOutlined, FullscreenOutlined, LinkOutlined, ShrinkOutlined } from '@ant-design/icons';


interface ChatSideDrawerProps {
}

const ChatSideDrawer: React.FC<ChatSideDrawerProps> = ({ }) => {
  const [isOpen, setIsOpen] = useState(window.showChatDrawer)
  const [width, setWidth] = useState('50%')
  const [model, setModel] = useState(window.extensionAPI.settings.get('aiModel') as string)
  const [openAiKey, setOpenAiKey] = useState(window.extensionAPI.settings.get('openAiKey') as string)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsOpen(window.showChatDrawer as boolean)
      setModel(window.extensionAPI.settings.get('aiModel') as string)
      setOpenAiKey(window.extensionAPI.settings.get('openAiKey') as string)
    }, 100)
    return () => {
      clearInterval(intervalId);
    }
  }, [])

  const onClose = () => {
    setIsOpen(false)
    window.showChatDrawer = false
  }

  return <>
    <Drawer
      title={'Roam GPT - Smart Assistant'}
      open={isOpen}
      width={width}
      onClose={() => {
        window.showChatDrawer = false
      }}
      extra={
        <Space>
          {width == "100%" ?
            <FullscreenExitOutlined onClick={() => setWidth("50%")} rev={undefined} /> :
            <FullscreenOutlined onClick={() => setWidth("100%")} rev={undefined} />}
          {width === "50%" ?
            <ArrowsAltOutlined onClick={() => setWidth("80%")} rev={undefined} /> :
            <ShrinkOutlined onClick={() => setWidth("50%")} rev={undefined} />}
          <CloseOutlined onClick={onClose} rev={undefined} />
        </Space>
      }
    >
      <ChatProUI model={model} openAiKey={openAiKey}></ChatProUI>
    </Drawer >
  </>
}

export default ChatSideDrawer