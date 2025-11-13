/**
 * # Chat Ai
 * 
 * # Author: akhfhid 
**/

const FormData = require("form-data");
const axios = require("axios")

async function chatai({ input = "Hii", model = "deepseek-v3" }) {
  try {
    const headers = {
      'origin': 'https://deep-seek.chat',
      'user-agent': 'Mozilla/5.0 (Android 15; Mobile; SM-F958; rv:130.0) Gecko/130.0 Firefox/130.0'
    };
    
    const wp = await axios.get(headers.origin, { headers }).then(dt => dt.data)
    const jz = wp.match(/window\.DeepSeekConfig = ({[\s\S]*?});/);
    
    let config;
    if (jz && jz[1]) {
      config = JSON.parse(jz[1])
    } else {
      throw new Error("Not found config in website")
    }
    
    const form = new FormData();
    form.append('action', 'deepseek_chat');
    form.append('nonce', config.nonce);
    form.append('message', input);
    form.append('model', model);
    form.append('save_conversation', `0`);
    form.append('session_only', `1`);

    const res = await axios.post(config.ajax_url, form, {
      headers: { ...headers, ...form.getHeaders() }
    })
    return res.data
  } catch(e) {
    throw new Error("Something eror, message:" + e.message)
  }
}
