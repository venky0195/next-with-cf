export default function handler(request, response) {
  console.log("🚀 ~ handler ~ request:", request.body)
  const users = [
    { name: 'sanika' },
    { name: 'siddhi' },
    { name: 'shravani' }
  ];
  console.log(process.env)
  console.log(process.env.myVar,"MYVAR VALUE")

  console.log("query params", request.query)

  response.status(200).send({
    body: request.body,
    users,
    query: request.query
  });
}