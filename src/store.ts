// import { initialMessages } from './chat-pro-screen/chat-config'

import { MessageProps } from '@chatui/core';

export interface Message {
  type: 'system' | 'text' | 'card';
  content: { [key: string]: any } | {
    text: string
  } | any,
  position?: 'left' | 'right',
}

const maxMessageCount = 1000
export let historyMessages: MessageProps[] = []

export const init = () => {
  historyMessages = fetchHistoryMessages()
}


export const fetchHistoryMessages = (): MessageProps[] => {
  let storedMessages = localStorage.getItem('messages')
  return storedMessages ? JSON.parse(storedMessages) : []
}

// persistant all messages to localstorage
export const persistantMessages = (message: MessageProps) => {
  historyMessages.push(message)
  // check if messages volume exceeds the predefined max count
  while (historyMessages.length > maxMessageCount) {
    // remove the oldest message
    historyMessages = historyMessages.slice(1)
  }
  localStorage.setItem('messages', JSON.stringify(historyMessages))
}


init()