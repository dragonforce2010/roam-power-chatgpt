// import { Drawer } from 'antd'
// import { Drawer } from '@blueprintjs/core'
import { Button, Drawer, Space } from 'antd';
import React, { useEffect, useState } from 'react'
import ChatProUI from '../chat-pro-screen'
import { ArrowsAltOutlined, CloseOutlined, FullscreenExitOutlined, FullscreenOutlined, LinkOutlined, ShrinkOutlined } from '@ant-design/icons';
import { EventEmitter } from 'events'

interface EventData {
  isShowChatDrawer: boolean;
}

interface ChatSideDrawerProps {
  eventEmitter: EventEmitter
}

const ChatSideDrawer: React.FC<ChatSideDrawerProps> = ({ eventEmitter }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [width, setWidth] = useState('50%')

  useEffect(() => {
    const eventHandler = (data: EventData) => {
      console.log('received event', data)
      setIsOpen(data.isShowChatDrawer)
    }
    eventEmitter.on('drawerEvent', eventHandler)
    return () => {
      eventEmitter.off('drawerEvent', eventHandler)
    }
  }, [])

  const onClose = () => {
    console.log('onclose called')
    setIsOpen(false)
  }

  return <>
    <Drawer
      title={'Roam GPT - Smart Assistant'}
      open={isOpen}
      width={width}
      onClose={onClose}
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
      <ChatProUI></ChatProUI>
    </Drawer >
  </>
}

export default ChatSideDrawer