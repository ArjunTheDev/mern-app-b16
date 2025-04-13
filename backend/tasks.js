console.log("Start");

process.nextTick(() => console.log("process.nextTick"));

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise.then"));

console.log("End");
