import { ChangeEvent } from 'react';
import { ExtensionAPI, OnloadArgs, PanelConfig } from '../types';
import { PARAM_AI_MODE as PARAM_AI_MODEL, PARAM_OPEN_AI_KEY, PARAM_USE_MY_OWN_OPEN_AI_KEY } from './const';

const panelConfig: PanelConfig = {
  tabTitle: "Roam Power ChatGPT",
  settings: [
    {
      id: PARAM_USE_MY_OWN_OPEN_AI_KEY,
      name: "Use My Own OpenAI key",
      description: "If you want to use your own Open AI key to get the best chatgpt experience, you need to set this to true. Believe me, if you use your own key, you will get better experience.",
      action: {
        type: "switch"
      }
    },
    {
      id: PARAM_OPEN_AI_KEY,
      name: "Open Ai Key",
      description: "Open Ai Key is used to interact with Open Ai Services. With your own open Ai key, you get better experience and performance. If you dont' have one, you can create API key here https://platform.openai.com/account/api-keys",
      action: {
        type: "input",
        placeholder: "sk-xxxxxxxxxxxxxxxxxxxxxxx",
      }
    }, {
      id: PARAM_AI_MODEL,
      name: "AI Model",
      description: `Different ai models perform differently. The model text-davinci-003 is the official Open AI ChatGPT 3.5 model, which is the most powerful one, but it takes longer time to generate the response. Some other models are also performs well, `,
      action: {
        type: 'select',
        items: [
          "gpt-3.5-turbo",
          "gpt-3.5-turbo-0301",
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
      }
    }

  ]
};

export const loadSettings = (extensionAPI: ExtensionAPI) => {
  extensionAPI.settings.panel.create(panelConfig);
  // set the default ai model to be chatgpt 3.5, wichi is text-davinci-003 
  extensionAPI.settings.set('aiModel', 'gpt-3.5-turbo')
}