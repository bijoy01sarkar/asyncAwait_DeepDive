//1. Basic Promise Handling
// Write a function `getUserName()` that returns a promise. The promise should resolve 
// with `"John Doe"` after 2 seconds. Call this function and log the result using:  
//    - `.then()` and `.catch()`
//    - `async/await`

// 1. Basic Promise Handling
function getUserName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("John Doe"), 2000);
    });
}
// // Using .then()
getUserName().then(console.log).catch(console.error);

// Using async/await
async function fetchUserName() {
    try {
        const name = await getUserName();
        console.log(name);
    } catch (error) {
        console.error(error);
    }
}
fetchUserName();