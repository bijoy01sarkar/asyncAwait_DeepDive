// 3. Multiple Promises (Promise.all)
// Write two functions:
// 1. fetchPosts() → Returns a promise that resolves to ["Post 1", "Post 2", "Post 3"] after 2 seconds.
// 2. fetchComments() → Returns a promise that resolves to ["Comment A", "Comment B", "Comment C"] after 3 seconds.
// Use Promise.all() to fetch both posts and comments together and print them.

// 3. Multiple Promises (Promise.all)
function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 2000);
    });
}
function fetchComments() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Comment A", "Comment B", "Comment C"]), 3000);
    });
}
Promise.all([fetchPosts(), fetchComments()])
    .then(console.log)
    .catch(console.error);

