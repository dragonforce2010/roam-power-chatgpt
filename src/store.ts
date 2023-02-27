import { initialMessages } from './chat-pro-screen/chat-config'

export interface Message {
  type: 'system' | 'text' | 'card';
  content: { [key: string]: any } | {
    text: string
  } | any,
  position?: 'left' | 'right',
}

const maxMessageCount = 1000
export let allMessages: Message[] = []

export const init = () => {
  allMessages = fetchHistoryMessages()
}


export const fetchHistoryMessages = (): Message[] => {
  let storedMessages = localStorage.getItem('messages')
  return storedMessages ? JSON.parse(storedMessages) : []
}

// persistant all messages to localstorage
export const persistantMessages = (message: Message) => {
  allMessages.push(message)
  // check if messages volume exceeds the predefined max count
  while (allMessages.length > maxMessageCount) {
    // remove the oldest message
    allMessages = allMessages.slice(1)
  }
  localStorage.setItem('messages', JSON.stringify(allMessages))
}


init()