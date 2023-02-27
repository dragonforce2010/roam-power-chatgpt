import React, { useState } from 'react'
import { Ctx } from '../chat-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Icon } from "@blueprintjs/core";
import './index.css'

interface CodeEditorProps {
  data: { code: string };
  ctx: Ctx;
  meta: any;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ data, ctx, meta }) => {
  const copyCodeToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = data.code;
    document.body.appendChild(el);
    el.select();
    const currentScrollPosition = window.scrollY;
    document.execCommand('copy', false);
    window.scrollTo(0, currentScrollPosition);
    document.body.removeChild(el);
  }

  return <div className='code-render-container'>
    <Icon className='icon' icon="duplicate" onClick={copyCodeToClipboard} />
    <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLine wrapLongLines>
      {data.code}
    </SyntaxHighlighter>
  </div>
}

export default CodeEditor