import React from 'react';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import ReactCodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dracula } from '@uiw/codemirror-theme-dracula'
import { languages } from '@codemirror/language-data';
import { html } from '@codemirror/lang-html'
import { java } from '@codemirror/lang-java'
import { json } from '@codemirror/lang-json'
import { less } from '@codemirror/lang-less'
import { php } from '@codemirror/lang-php'
import { python } from '@codemirror/lang-python'
import { rust } from '@codemirror/lang-rust'
import { sass } from '@codemirror/lang-sass'
import { sql } from '@codemirror/lang-sql'
import { xml } from '@codemirror/lang-xml'
import { clojure } from '@nextjournal/lang-clojure'
import { csharp } from '@replit/codemirror-lang-csharp'
import { Bubble } from '@chatui/core';
import './index.css'

interface Props {
  code: string
}

const CodeEidtor: React.FC<Props> = ({
  code
}) => {
  const isJson = (text: string) => {
    try {
      JSON.parse(text)
      return true
    } catch (err) {
      return false
    }
  }

  const isMarkdown = (text: string) => {
    // 匹配 Markdown 格式的标题
    const headerRegex = /^#+\s+.*/gm;
    // 匹配 Markdown 格式的列表
    const listRegex = /^[\*\-\+] .*/gm;
    // 匹配 Markdown 格式的链接
    const linkRegex = /\[.+\]\(.+\)/gm;
    // 匹配 Markdown 格式的强调
    const emphasisRegex = /(\*|_){1,2}.+(\*|_){1,2}/gm;

    // 匹配 Table
    const tableRegex = /^\|.*\|\s*\n\|.*\|.*\|\s*\n(?:\|.*\|.*\|\s*\n?)*/gm;

    // 检查文本是否包含上述标记
    return (
      headerRegex.test(text) ||
      listRegex.test(text) ||
      linkRegex.test(text) ||
      emphasisRegex.test(text) ||
      tableRegex.test(text)
    );
  }

  if ((code as string)?.includes('```')) {
    const regex = /```(\w+)/;
    const match = code.match(regex);
    if (match) {
      const lang = match[1].toLowerCase();
      switch (lang) {
        case 'javascript':
          return <ReactCodeMirror
            value={code}
            extensions={[
              javascript({ jsx: true }),
            ]}
            theme={dracula}
            basicSetup={{
              lineNumbers: false,
            }}
          ></ReactCodeMirror>
        case 'html':
          return <ReactCodeMirror
            value={code}
            extensions={[
              html(),
            ]}
            theme={dracula}
            basicSetup={{
              lineNumbers: false,
            }}
          ></ReactCodeMirror>
        case 'java':
          return <ReactCodeMirror
            value={code}
            extensions={[
              java(),
            ]}
            theme={dracula}
            basicSetup={{
              lineNumbers: false,
            }}
          ></ReactCodeMirror>
        case 'json':
          return <ReactCodeMirror
            value={code}
            extensions={[
              json()
            ]}
            theme={dracula}
            basicSetup={{
              lineNumbers: false,
            }}
          ></ReactCodeMirror>
        case 'less':
          return <ReactCodeMirror
            value={code}
            extensions={[
              less()
            ]}
            theme={dracula}
            basicSetup={{
              lineNumbers: false,
            }}
          ></ReactCodeMirror>
        case 'php':
          return <ReactCodeMirror
            value={code}
            extensions={[
              php(),
            ]}
            theme={dracula}
            basicSetup={{
              lineNumbers: false,
            }}
          ></ReactCodeMirror>
        case 'python':
          return <ReactCodeMirror
            value={code}
            extensions={[
              python(),
            ]}
            theme={dracula}
            basicSetup={{
              lineNumbers: false,
            }}
          ></ReactCodeMirror>
        case 'rust':
          return <ReactCodeMirror
            value={code}
            extensions={[
              rust()
            ]}
            theme={dracula}
            basicSetup={{
              lineNumbers: false,
            }}
          ></ReactCodeMirror>
        case 'sass':
          return <ReactCodeMirror
            value={code}
            extensions={[
              sass()
            ]}
            theme={dracula}
            basicSetup={{
              lineNumbers: false,
            }}
          ></ReactCodeMirror>
        case 'sql':
          return <ReactCodeMirror
            value={code}
            extensions={[
              sql()
            ]}
            theme={dracula}
            basicSetup={{
              lineNumbers: false,
            }}
          ></ReactCodeMirror>
        case 'xml':
          return <ReactCodeMirror
            value={code}
            extensions={[
              xml()
            ]}
            theme={dracula}
            basicSetup={{
              lineNumbers: false,
            }}
          ></ReactCodeMirror>
        case 'clojure':
          return <ReactCodeMirror
            value={code}
            extensions={[
              clojure()
            ]}
            theme={dracula}
            basicSetup={{
              lineNumbers: false,
            }}
          ></ReactCodeMirror>
        case 'csharp':
          return <ReactCodeMirror
            value={code}
            extensions={[
              csharp()
            ]}
            theme={dracula}
            basicSetup={{
              lineNumbers: false,
            }}
          ></ReactCodeMirror>
        default:
          return <ReactCodeMirror
            value={code}
            extensions={[
              java()
            ]}
            theme={dracula}
            basicSetup={{
              lineNumbers: false,
            }}
          ></ReactCodeMirror>
      }
    }

    return <ReactCodeMirror
      value={code}
      extensions={[
        java()
      ]}
      theme={dracula}
      basicSetup={{
        lineNumbers: false,
      }}
    ></ReactCodeMirror>
  }

  if (code.toLocaleLowerCase().includes('json') || isJson(code)) {
    return <ReactCodeMirror
      value={code}
      extensions={[json()]}
      theme={dracula}
      basicSetup={{
        lineNumbers: false,
      }}
    ></ReactCodeMirror>
  }

  if (code.toLocaleLowerCase().includes('sql')) {
    return <ReactCodeMirror
      value={code}
      extensions={[sql()]}

      theme={dracula}
      basicSetup={{
        lineNumbers: false,
      }}
    ></ReactCodeMirror>
  }
  if (code.toLocaleLowerCase().includes('c#')) {
    return <ReactCodeMirror
      value={code}
      extensions={[csharp()]}
      theme={dracula}
      basicSetup={{
        lineNumbers: false,
      }}
    ></ReactCodeMirror>
  }

  if (code.toLocaleLowerCase().includes('xml')) {
    return <ReactCodeMirror
      value={code}
      extensions={[xml()]}
      theme={dracula}
      basicSetup={{
        lineNumbers: false,
      }}
    ></ReactCodeMirror>
  }

  if (isMarkdown(code)) {
    return <ReactCodeMirror
      value={code}
      extensions={[
        markdown({ base: markdownLanguage, codeLanguages: languages }),
      ]}
      theme={dracula}
      basicSetup={{
        lineNumbers: false,
      }}
    ></ReactCodeMirror>
  }

  if (code.includes('Hmmm, something went wrong')) {
    return <Bubble style={{ color: "red" }} content={code} />;
  }
  return <Bubble content={code} />;
}

export default CodeEidtor