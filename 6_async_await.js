// 6. Timeout with Async/Await
// Write a function wait(ms) that returns a promise that resolves after 'ms' milliseconds.  
// Use async/await to pause execution for 5 seconds before logging "Done waiting!".
// 6. Timeout with Async/Await

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function delayExecution() {
    await wait(5000);
    console.log("Done waiting!");
}
delayExecution();
