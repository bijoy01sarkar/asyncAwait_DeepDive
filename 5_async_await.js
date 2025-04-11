
// 5. Chaining Promises
// Write a function orderPizza() that returns a promise resolving to "Pizza ordered".  
// Then chain another function makePizza() that returns "Pizza is being made".  
// Finally, add a function deliverPizza() that returns "Pizza delivered".  
// Handle this using both .then() chaining and async/await.
// 5. Chaining Promises
function orderPizza() {
    return Promise.resolve("Pizza ordered");
}
function makePizza() {
    return Promise.resolve("Pizza is being made");
}
function deliverPizza() {
    return Promise.resolve("Pizza delivered");
}
orderPizza()
    .then((res) => {
        console.log(res);
        return makePizza();
    })
    .then((res) => {
        console.log(res);
        return deliverPizza();
    })
    .then(console.log)
    .catch(console.error);
// Using async/await
async function processPizza() {
    try {
        console.log(await orderPizza());
        console.log(await makePizza());
        console.log(await deliverPizza());
    } catch (error) {
        console.error(error);
    }
}
processPizza();

