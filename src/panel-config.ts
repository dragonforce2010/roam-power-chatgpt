import { ChangeEvent } from 'react';
import { ExtensionAPI, OnloadArgs, PanelConfig } from '../types';
import { PARAM_AI_MODE as PARAM_AI_MODEL, PARAM_OPEN_AI_KEY } from './const';

const panelConfig: PanelConfig = {
  tabTitle: "Roam Power ChatGPT",
  settings: [
    {
      id: PARAM_OPEN_AI_KEY,
      name: "Open Ai Key",
      description: "Open Ai Key is used to interact with Open Ai Services. With your own open Ai key, you get better experience and performance",
      action: {
        type: "input",
        placeholder: "sk-xxxxxxxxxxxxxxxxxxxxxxx",
        // onChange: (e: ChangeEvent<HTMLInputElement>) => {
        //   console.log(e.target.value);
        // },
      }
    }, {
      id: PARAM_AI_MODEL,
      name: "AI Model",
      description: `Different ai models perform differently. The model text-davinci-003 is the official Open AI ChatGPT 3.5 model, which is the most powerful one, but it takes longer time to generate the response. Some other models are also performs well, `,
      action: {
        type: 'select',
        items: [
          "text-davinci-003",
          "text-davinci-002",
          "text-davinci-001",
          "text-curie-001",
          "davinci-instruct-beta",
          "text-babbage-001",
          "text-ada-001",
          "davinci",
          "curie-instruct-beta",
          "curie",
          "ada",
          "babbage",
        ],
        // onChange(e) {
        //   console.log(e)
        // },
      }
    }

  ]
};

export const loadSettings = (extensionAPI: ExtensionAPI) => {
  extensionAPI.settings.panel.create(panelConfig);
  extensionAPI.settings.set('aiModel', 'text-davinci-003')
}