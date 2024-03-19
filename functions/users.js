export default function handler(request, response) {
  const users = [
    { name: 'sanika' },
    { name: 'siddhi' },
    { name: 'shravani' }
  ];
  console.log(process.env)
  console.log(process.env.myVar,"MYVAR VALUE")

  response.status(200).send({
    body: request.body,
    users
  });
}