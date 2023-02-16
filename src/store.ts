import { chatConfig, initialMessages } from './chat-pro-screen/chat-config'

export interface Message {
  type: 'system' | 'text' | 'card';
  content: { [key: string]: any } | {
    text: string
  }
}

const maxMessageCount = 1

export const fetchHistoryMessages = (): Message[] => {
  let storedMessages = localStorage.getItem('messages')
  console.log('stored messages: ', storedMessages)
  return storedMessages ? JSON.parse(storedMessages) : []
}


export let allMessages: Message[] = fetchHistoryMessages()

// persistant all messages to localstorage
export const persistantMessages = (message: Message) => {
  allMessages.push(message)
  // check if messages volume exceeds the predefined max count
  while (allMessages.length >= maxMessageCount) {
    // remove the oldest message
    allMessages = allMessages.slice(1)
  }
  localStorage.setItem('messages', JSON.stringify(allMessages))
}