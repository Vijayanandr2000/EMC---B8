/*
sync and async:

sync: In order
async: Which task completeing will execute first


Promise:
*/

console.log(1);

setTimeout(() => {
  console.log("2");
}, 2000);

console.log(3);




