
//2. Simulating API Calls
// Write a function fetchUserData(userId) that simulates fetching user data. If the userId is 1, return:  
// json
// { "id": 1, "name": "Alice", "age": 25 }
// Otherwise, reject the promise with "User not found" after 3 seconds.  
// Use both .then().catch() and async/await to handle the promise.
// 2 Simulating API Calls
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: "Alice", age: 25 });
            } else {
                reject("User not found");
            }
        }, 3000);
    });
}
// Using .then()
fetchUserData(1).then(console.log).catch(console.error);
// Using async/await
async function getUserData() {
    try {
        const user = await fetchUserData(1);
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}
getUserData();

