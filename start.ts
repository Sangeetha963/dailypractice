// console.log("hello world")
// const addition = (x:number, y:number): number => {
//     return x+y
// }
// const sub = (x:number, y:number): number => {
//     return x-y
// }
// const mul = (x:number, y:number): number => {
//     return x*y
// }
// const div = (x:number, y:number): number => {
//     return x/y
// }
// const x=2
// const y=3
// console.log(addition(x,y))
// console.log(sub(x,y))
// console.log(mul(x,y))
// console.log(div(x,y))

// const prompts = require('prompts');

// (async ()=> {
//     const response = await prompts({
//         type: 'text',
//         value: 'meaning',
//         message: 'what is the meaning of life?'
//     });
//     console.log(response.meaning);
// })();
const prompts = require('prompts');

const questions = [
  {
    type: 'text',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'number',
    name: 'age',
    message: 'How old are you?'
  },
  {
    type: 'text',
    name: 'about',
    message: 'Tell something about yourself',
    initial: 'Why should I?'
},
{
    type: 'text',
    name: 'favourite',
    message: 'what is your favourite language'
},
{
    type: 'number',
    name: 'value',
    message: 'From how long your using github',
    validate: (value: number) => value < 3 ? `3+ years only for premium subscription` : true
  
}
];

(async () => {
  const response = await prompts(questions);

//   => response => { username, age, about }
// return questions;
console.log(response);
// console.log(questions);
})();
// // console.log(response.message);

// const prompts = require('prompts');

// (async () => {
//   const response = await prompts({
//     type: 'number',
//     name: 'value',
//     message: 'How old are you?',
//     validate: (value: number) => value < 18 ? `Nightclub is 18+ only` : true
//   });

//   console.log(response); // => { value: 24 }
// })();
