// # 7️⃣ Fetching Multiple Users (Async/Await Loop)
// Create an array of user IDs: `[1, 2, 3]`. Write an `async function fetchAllUsers(userIds)` that loops through each user ID and fetches user data one-by-one using `fetchUserData(userId)` (from assignment 2). Log each user's data after fetching.
// // 7️⃣ Fetching Multiple Users (Async/Await Loop)
const userIds = [1, 2, 3];
async function fetchAllUsers(userIds) {
    for (const id of userIds) {
        try {
            const user = await fetchUserData(id);
            console.log(user);
        } catch (error) {
            console.error(error);
        }
    }
}
fetchAllUsers(userIds);
