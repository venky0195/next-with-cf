export default function handler(request, response){
  const users=[
    {name:'sanika'},
    {name: 'siddhi'},
    {name: 'shravani'}
  ];

  response.status(200).send(users);
}