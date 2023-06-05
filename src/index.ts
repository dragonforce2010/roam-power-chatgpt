import { EventEmitter } from 'events'
import React from 'react'
import ReactDOM from 'react-dom'
import "../types"
import { OnloadArgs } from '../types'
import ChatSideDrawer from './chat-sidedrawer'
import { loadSettings } from './panel-config'
import { init } from './store'

const eventEmitter = new EventEmitter()
const command_name_chatgpt = 'Roam GPT'

let root: HTMLElement;

const addCommands = () => {
  window.roamAlphaAPI.ui
    .commandPalette
    .addCommand({
      label: command_name_chatgpt,
      callback: () => {
        eventEmitter.emit('drawerEvent', { isShowChatDrawer: true })
        console.log('event sent')
      }
    })
}

const removeCommands = () => {
  window.roamAlphaAPI.ui.commandPalette.removeCommand({ label: command_name_chatgpt })
}

function onload({ extensionAPI }: OnloadArgs) {
  window.extensionAPI = extensionAPI
  init()
  renderComponent()
  addCommands()
  loadSettings(extensionAPI)
}

function renderComponent() {
  if (root) {
    root.remove()
  }

  root = document.createElement('div')
  ReactDOM.render(React.createElement(ChatSideDrawer, { eventEmitter }), root)
  document.body.append(root)
}

function onunload() {
  if (root) {
    root.remove()
  }
  removeCommands()
}

export default {
  onload: onload,
  onunload: onunload,
}
