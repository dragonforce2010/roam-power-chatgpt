// import { Drawer } from 'antd'
import { Drawer } from '@blueprintjs/core'
import React, { useEffect, useState } from 'react'
import ChatProUI from '../chat-pro-screen'

interface ChatSideDrawerProps {
}

const ChatSideDrawer: React.FC<ChatSideDrawerProps> = ({ }) => {
  const [open, setOpen] = useState(window.showChatDrawer)
  const [model, setModel] = useState(window.extensionAPI.settings.get('aiModel') as string)
  const [openAiKey, setOpenAiKey] = useState(window.extensionAPI.settings.get('openAiKey') as string)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOpen(window.showChatDrawer as boolean)
      setModel(window.extensionAPI.settings.get('aiModel') as string)
      setOpenAiKey(window.extensionAPI.settings.get('openAiKey') as string)
    }, 100)
    return () => {
      clearInterval(intervalId);
    }
  }, [])

  return <>
    <Drawer
      isOpen={open}
      size={"60%"}
      onClose={() => {
        window.showChatDrawer = false
      }}
    >
      <ChatProUI model={model} openAiKey={openAiKey}></ChatProUI>
    </Drawer>
  </>
}

export default ChatSideDrawer