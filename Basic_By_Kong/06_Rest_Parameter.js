/*
Rest Parameter
    ใช้ในการส่งค่า parameter เข้าไปทำงานใน function โดยไม่จำกัดจำนวน โดยใช้เครื่องหมาย ...
*/

function summation(...number){
    let total = 0
    for(let i of number){
        total+=i
    }
    return total
}

console.log(summation(100, 200))
console.log(summation(30, 40, 50))
console.log(summation(11, 22, 33, 44 ,55))