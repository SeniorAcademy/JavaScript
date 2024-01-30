
// let total = 0;

// for (let index = 0; index < numbers.length; index++){
//     total = total + numbers[index]
// }
// document.write(total)
// console.log(total)

// numbers.forEach(number => total = total + number);
// console.log(total);

// const numbers =[2, 5, 8, 15]

// let test = numbers.reduce(function(total, number){
//     return total + number
// })
// console.log(test)

// const sum1 = numbers.reduce((total, number) => {
//     return total + number
// },0)
// console.log(sum1)

// array.reduce(callback, initialValue)

// callback -- accumulator, currentValue, currentIndex, array.
// const numbers =[2, 5, 8, 15]

// const numbers = [1, 2, 3, 4, 5]
//  const result = numbers.reduce((accumulator, currentValue, currentIndex, array)=>{
//     console.log(`Step ${currentIndex + 1}:`);
//     console.log(`accumulator: ${accumulator}`)
//     console.log(`currentValue: ${currentValue}`)
//     console.log(`currentIndex: ${currentIndex}`)
//     console.log(`array: [${array}]`)

//     return accumulator + currentValue
// },0)
// console.log(`final result: ${result}`)




// const sum = numbers.reduce((accumulator, currentValue)=>{ 
//     return accumulator + currentValue;
//     //0 + 2 + 5 + 8 + 15
// },0)
// console.log(sum)




const shop = [
    {
        model: 'Samsung A71',
        price: 1700,
    },
    {
        model: 'Beko 55',
        price: 1500,
    },
    {
        model: 'Iphone 13',
        price: 2000,
    }
]

let sum = shop.reduce((value, item) => value + item.price, 0);
console.log(sum)


let sum2 = 0;
shop.forEach(item =>{
    sum2 += item.price
})
console.log(sum2)





