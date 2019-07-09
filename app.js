// Filter Method
const scores = [10, 20, 60, 40, 50, 70, 90, 30];
const filteredScores = scores.filter(score => {
    return score > 40;

})
console.log(filteredScores);
const users = [
    {name: 'shaun', premium: true},
    {name: 'mike', premium: false},
    {name: 'olen' ,premium: true},
    {name: 'Ma' , premium: false}
]
const filteredUsers = users.filter(user => {
    return user.premium === false;
})
console.log(filteredUsers)

// Map Method

const prices = [20, 10, 30, 25, 15, 40 , 80, 5];
const salePrices = prices.map(price => {
    return price / 2;
})
console.log(salePrices);

const products = [
    {name: 'goldfish' , price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
]
const saleProducts = products.map(product => {
    if (product.price > 30 ){
        return product.price / 2;
    }
    else {
        return product;
    }
})
console.log(saleProducts);

// Reduce Method
const points = [10, 20, 60, 40, 70, 90, 30];

const result = points.reduce((acc, curr)=> {
    if (curr > 50 ){
        acc++
    }
        return acc;
}, 0);
console.log(result); 

const players = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 60},
    {player: 'waluigi', score: 1},
    {player: 'waluigi', score: 1},
    {player: 'luigi', score: 100}
]
const playerResult = players.reduce((acc, curr)=> {
    if (curr.player === 'waluigi'){
        acc += curr.score;
    }
    return acc;
}, 0);
console.log(playerResult);
// sort Method is DESTRUCTIVE
const names = ['mario', 'luigi', 'shaun', 'chun-li', 'yoshi', 'waluigi'];
names.sort();
console.log(names)
names.reverse();
console.log(names);

// ex2 sorting num
const numbers = [10, 50 , 20, 5, 35, 70, 45];
numbers.sort();
console.log(numbers);
numbers.reverse();
console.log(numbers);

// ex3 reverse sorting obj
const champions = [
    {names : 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70}
]
champions.sort((champA, champB) => {
    if (champA.score > champB.score ) {
        return -1;
    } else if (champB.score > champA.score){
        return 1;
    } else {
        return 0;
    }
});
console.log(champions);
// ex3 shortened way
champions.sort((champA, champB)=> champB.score - champA.score);

// Chaining Arrays

// const filtered = products.filter(product => product.price > 20)
// const promos = filtered.map(product => {
   // return `the ${product.name} is ${product.price / 2} euros`
// })

// more concise and shortened version 
const filtered = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price / 2} euros`);
    console.log(filtered);