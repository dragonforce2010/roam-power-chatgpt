import "../types"
import { Drawer } from '@blueprintjs/core'
import ReactDOM from 'react-dom'
import React from 'react'
import ChatSideDrawer from './chat-sidedrawer'
import { init } from './store'

const command_name_chatgpt = 'chatgpt'
let root: HTMLElement;
window.showChatDrawer = true;

const addCommands = () => {
  window.roamAlphaAPI.ui
    .commandPalette
    .addCommand({
      label: command_name_chatgpt,
      callback: () => {
        window.showChatDrawer = true
      }
    })
}

const removeCommands = () => {
  window.roamAlphaAPI.ui.commandPalette.removeCommand({ label: command_name_chatgpt })
}

function onload() {
  init()
  renderComponent()
  addCommands()
}

function renderComponent() {
  if (root) {
    root.remove()
  }

  root = document.createElement('div')
  ReactDOM.render(React.createElement(ChatSideDrawer), root)
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
