// import { Drawer } from 'antd'
import { Drawer } from '@blueprintjs/core'
import React, { useEffect, useState } from 'react'
import ChatProUI from '../chat-pro-screen'

interface ChatSideDrawerProps {
  // isOpen: boolean
}

const ChatSideDrawer: React.FC<ChatSideDrawerProps> = ({ }) => {
  const [open, setOpen] = useState(window.showChatDrawer)

  useEffect(() => {
    const handleChatDrawerVisibilityChange = () => {
      setOpen(window.showChatDrawer as boolean)
    }
    const intervalId = setInterval(handleChatDrawerVisibilityChange, 500)
    return () => {
      clearInterval(intervalId);
    }
  }, [])

  return <>
    <Drawer
      isOpen={open}
      onClose={() => {
        window.showChatDrawer = false
      }}
    >
      <ChatProUI></ChatProUI>
    </Drawer>
  </>
}

export default ChatSideDrawer