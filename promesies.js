function orderBurguer (burguerType){
    return new Promise ((resolve, reject) => {
        console.assert.log (`Starting to prepare yoy ${burguerType}`);

        setTimeout (() => {
            console.log (`${burguerType} is ready `);
            resolve (`Here is your order : ${burguerType}`);
        }, 2000);
    });
}

console.log ("Ordering burguer...");
orderBurguer ("Cheeseburguer")
.then((order) => console.log (order))
.catch((err) => console.eror ("Error during order", err));

async function orderAndServe (burguerType){
    try{
    console.log ("Ordering burguer...");
    const order = orderBurguer(burguerType);
    console.log (order);
} catch (err){
    console.error (err);
}
}

orderAndServe ("Portobello");