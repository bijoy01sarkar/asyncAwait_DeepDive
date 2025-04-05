
// # 4️⃣ Handling Promise Rejection (try/catch)
// Write a function `fetchData(url)` that simulates a network request. If the URL is `"valid.com"`, resolve with `"Data received"` after 2 seconds. Otherwise, reject with `"Invalid URL"`.  
// Use `async/await` and handle errors with `try/catch`.
// 4️⃣ Handling Promise Rejection (try/catch)
function fetchData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            url === "valid.com" ? resolve("Data received") : reject("Invalid URL");
        }, 2000);
    });
}
async function getData() {
    try {
        const data = await fetchData("valid.com");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
getData();
