/*
Spread Operator
    ใช้ในการกระจายสมาชิกใน array ออกมาใช้งานโดยใช้เครื่องหมาย ... หน้าตัวแปร array
*/

const newArr = [100, 200, 300]
const data1 = [10, 20, newArr]
const data2 = [10, 20, ...newArr]   // Spread Operator

console.log(data1)
console.log(data2)

const data3 = [10, 20, 100, 200, 300]
const newNum = [40, 50]
data2.push(newNum)
data3.push(...newNum)   // Spread Operator
console.log(data2)
console.log(data3)