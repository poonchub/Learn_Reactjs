/*
Array Reduce

    const newVar = arrName.reduce((value, item) => {
        const total = item+value
        return total
    }, ค่าเริ่มต้น)

    หรือ
    
    const newVar = arrName.reduce((value, item) => item+value, ค่าเริ่มต้น)

*/

// Exaample 1
const dataArr1 = [1, 2, 3, 4, 5, 6]
const result1 = dataArr1.reduce((value, item) => {
    const total = item+value
    return total
}, 0)
console.log(result1)

// Exaample 2
const cart = [
    {name:"กระเป๋า", price:500},
    {name:"รองเท้า", price:1000},
    {name:"เสื้อ", price:300},
]
const result2 = cart.reduce((value, item) => {
    const total = item.price+value
    return total
}, 0)
console.log(`ลูกค้าต้องชำระเงิน ${result2} บาท`)