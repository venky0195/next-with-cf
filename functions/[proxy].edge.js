import Personalization from '@contentstack/personalization-sdk-js';

export async function handler(req, context) {
  console.log("🚀 ~ handler ~ req:", req.url)
  console.log(context.env)
  console.log(context.waitUntil)
  const res = await fetch(`https://random-data-api.com/api/v2/appliances`);
  let response = await res.json();
  response = {
    ...response,
    time: new Date()
  }
  return new Response(JSON.stringify(response), {
    headers: {
      'X-Message': 'Change response headers'
    }
  })
}