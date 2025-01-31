// always return a promise

// const p = new Promise((resolve, reject) => {
//   resolve("Promise Resolved Value!!");
// });

// async function getData() {
//   return p;
// }

//const data = getData();
//console.log(data);

//data.then((res) => console.log(res));

//****************************************

// const p1 = new Promise((resolve, reject) => {
//   //resolve("Promise Resolved Value!!");
//   setTimeout(() => {
//     resolve("Promise Resolved Value!!");
//   }, 50000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise Resolved Value 2!!");
//   }, 30000);
// });

const API_URL = "https://api.github.com/users/akshaymarch7";
// await can only be used inside an async function
async function handlePromise() {
  // console.log("Hello World");
  // //1. await pauses the execution until promise is resolved or rejected
  // //2. JS Engine was waiting for promise to resolved
  // const val = await p1;
  // console.log("Namaste JavaScript");
  // console.log(val);

  // const val2 = await p2;
  // console.log("Namaste JavaScript 2");
  // console.log(val2);

  try {
    const data = await fetch(API_URL);

    const jsonValue = await data.json();
    console.log(jsonValue);
  } catch (error) {
    console.log(error);
  }
}

handlePromise();

// function getData() {
//   // JS Engine will not wait for promise to be resolved
//   p.then((res) => console.log(res));
//   console.log("Namaste Javascript");
// }

// getData();
