// const names=`["spongebob","patrick","squidward","sandy"]`

// const person=`{
//     "name":"spongebob",
//     "age":30,
//     "isemployed":true,
//     "hobbies": ["jellyfihing","karate","cooking"]
// }`

// const people=`[
//   {
//     "name": "spongebob",
//     "age": 30,
//     "isemployed": true
//   },
//   {
//     "name": "patrick",
//     "age": 34,
//     "isemployed": false
//   },

//   {
//     "name": "squridward",
//     "age": 50,
//     "isemployed": true
//   },

//   {
//     "name": "sandy",
//     "age": 27,
//     "isemployed": false
//   }
// ]`;

// const parsed=JSON.parse(person)
// console.log(people)

fetch("person.json")
  .then((response) => response.json())
  .then((value) => console.log(value));
