---

# Chat AI

A simple Node.js wrapper for interacting with **DeepSeek** and other open-source AI chat models directly through their official endpoints — no API key required.

---

## Features

* Access **DeepSeek** chat models without an API key
* Supports multiple AI models (DeepSeek, OpenAI OSS, Kimi, LLaMA, Gemma, Mistral, Phi, Qwen, etc.)
* Automatically fetches runtime configuration (`nonce`, `ajax_url`) from the website
* Lightweight and easy to integrate with bots, CLI tools, or web services

---

## Installation

Make sure you have [Node.js](https://nodejs.org) version 18 or higher installed.

```bash
npm install axios form-data
```

Save the following script as `chatai.js`.

---

## Usage

```js
const { chatai } = require('./chatai');

(async () => {
  try {
    const res = await chatai({
      input: "Hello! Who are you?",
      model: "deepseek-v3"
    });

    console.log(res);
  } catch (err) {
    console.error(err.message);
  }
})();
```

---

## Parameters

| Name    | Type   | Default         | Description                  |
| ------- | ------ | --------------- | ---------------------------- |
| `input` | String | `"Hii"`         | The message you want to send |
| `model` | String | `"deepseek-v3"` | The model to use             |

---

## Available Models

```js
const listModels = [
  // DeepSeek
  "deepseek-v3",
  "deepseek-r1",

  // OpenAI OSS
  "gpt-oss-120b",
  "gpt-oss-20b",

  // Kimi
  "kimi-k2-instruct",

  // LLaMA
  "llama4-maverick-instruct-basic",
  "llama-v3p1-405b-instruct",
  "llama-v3p1-8b-instruct",

  // Gemma
  "gemma-3-27b-it",
  "codegemma-7b",

  // Mistral
  "mistral-small-24b-instruct-2501",
  "mistral-nemo-instruct-2407",
  "mixtral-8x22b-instruct",

  // Phi
  "phi-3-vision-128k-instruct",
  "phi-3-mini-128k-instruct",

  // Qwen
  "qwen3-235b-a22b-thinking-2507",
  "qwen3-coder-480b-a35b-instruct",
  "qwen3-235b-a22b-instruct-2507",
];
```

---

## Example Output

```json
{
  "success": true,
  "message": "Hello! I am DeepSeek-V3, ready to help you."
}
```

---

## Notes

* This script scrapes configuration values from `deep-seek.chat`.
  If the site changes structure, you may need to update the code.
* Use responsibly and avoid sending excessive requests.

---
