# Roam Power ChatGPT

This extension brings the powerful ChatGPT right into Roam, to further enrich your roam life. With the help of powerful artificial intelligence assistant powered by ChatGPT, your imagination will be fully unleashed and your creation will be greatly enhanced! Let's rock and roll!
![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F95Y-U3X2Z3.57.32.gif?alt=media&token=f6adc8c8-db87-4d6a-83ae-c609392fff9e)

![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FotZ-poMnzz.00.07.gif?alt=media&token=7428a103-2bac-4d78-84f3-869c092d224a)
## If you want to support my work
[Paypal](https://www.paypal.com/paypalme/codingmonkey)

## Main Features
- Nice Chat UI design and interaction
- Chat with smart assistant based on Open AI chatGPT in your roam
- Zero configuration before using it. Once you install this extension, then it will work, zero effort for you. You don't have to have an open ai account, you don't have to configure the key before usinig it. You can still use your own key to have a better experience.
- Flexiblely configure the chat ai model for your chat session, you can choose from below 10 ai models
  - "gpt-3.5-turbo"
  - "gpt-3.5-turbo-0301"


Note that
- Backend service provides a free chatGpt service for you, you don't have to pay for it, I will try my best to keep it running. Right now, I have built a account pool which contains 3 open ai accounts, public users are sharing these 3 open ai accounts. But note that, since you're using the public chatGpt service, the service may not be stable, may not be able to respond your question quickly, or sometimes temporary unavailable
- You can still provide and configure your own open ai key to ensure that you have the best experience. 

## Main UI
![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2F1wtt9SXlZP.png?alt=media&token=db3c8263-d7c1-42bf-978b-10b2f6d5f189)
![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FExploreSpace%2FUV4sakiMvE.png?alt=media&token=4b0296f9-0094-431e-8d31-437e0f57b38e)



## About the user data
- The message data is only stored locally in your local storage, which is safe with you. 
- Your local storage size is limited, this extension only store 1000 messages, and if you generate more than 1000 messages, the oldest messages will be removed from local storage. 1000 messages is actually a lot, which could be 2-4 weeks of chat data, that should be enough for you.

## About Ai Model
You can customize your chat ai model by setting the AI Model in the config panel. 
- You can choose GPT-3.5-Turbo-0301 which is now commonly used, powerful and smarter. 
- If you have a key which supports gpt4, then you can choose gpt4 related models, but note that it takes a bit longer time to generate response for your question. 

### GPT-4 Limited beta
GPT-4 is a large multimodal model (accepting text inputs and emitting text outputs today, with image inputs coming in the future) that can solve difficult problems with greater accuracy than any of our previous models, thanks to its broader general knowledge and advanced reasoning capabilities. Like gpt-3.5-turbo, GPT-4 is optimized for chat but works well for traditional completions tasks both using the Chat Completions API. Learn how to use GPT-4 in our GPT guide.

GPT-4 is currently in a limited beta and only accessible to those who have been granted access. Please join the waitlist to get access when capacity is available.

| Model Name | Description | Max Tokens | Training Data |
|------------|-------------|------------|---------------|
| gpt-4      | More capable than any GPT-3.5 model, able to do more complex tasks, and optimized for chat. Will be updated with our latest model iteration. | 8,192 tokens | Up to Sep 2021 |
| gpt-4-0314 | Snapshot of gpt-4 from March 14th 2023. Unlike gpt-4, this model will not receive updates, and will be deprecated 3 months after a new version is released. | 8,192 tokens | Up to Sep 2021 |
| gpt-4-32k  | Same capabilities as the base gpt-4 mode but with 4x the context length. Will be updated with our latest model iteration. | 32,768 tokens | Up to Sep 2021 |
| gpt-4-32k-0314 | Snapshot of gpt-4-32 from March 14th 2023. Unlike gpt-4-32k, this model will not receive updates, and will be deprecated 3 months after a new version is released. | 32,768 tokens | Up to Sep 2021 |


### GPT-3.5
GPT-3.5 models can understand and generate natural language or code. Our most capable and cost effective model in the GPT-3.5 family is gpt-3.5-turbo which has been optimized for chat but works well for traditional completions tasks as well.

| Model Name         | Description                                                  | Max Tokens | Training Data |
|--------------------|--------------------------------------------------------------|------------|---------------|
| gpt-3.5-turbo      | Most capable GPT-3.5 model and optimized for chat at 1/10th the cost of text-davinci-003. Will be updated with our latest model iteration. | 4,096      | Up to Sep 2021 |
| gpt-3.5-turbo-0301 | Snapshot of gpt-3.5-turbo from March 1st 2023. Unlike gpt-3.5-turbo, this model will not receive updates, and will be deprecated 3 months after a new version is released. | 4,096      | Up to Sep 2021 |


