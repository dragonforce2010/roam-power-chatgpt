import React from 'react'
import ReactDOM from 'react-dom'
import CodeMirror from '@uiw/react-codemirror'
import { Ctx } from '../chat-types';
import { Message } from '../store';

interface CodeEditorProps {
  data: Message;
  ctx: Ctx;
  meta: any;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ data, ctx, meta }) => {
  console.log('data', data)
  console.log('ctx', ctx)
  console.log('meta', meta)

  // ctx.appendMessage({
    // type: 'codeEditor',
    // position: 'left',
    // content: data
  // })
  return <CodeMirror
    // value={data.content.text}
    value="/**↵ * Definition for a binary tree node.↵ * publi… 1, inEnd);↵        ↵        return root;↵    }↵}"
    theme="dark"
    readOnly
  ></CodeMirror>
}

export default CodeEditor