/*
Destructuring (การสลายโครงสร้าง)
    คือ การกำหนดค่าที่อยู่ภายใน array หรือ object ให้กับตัวแปร โดยใช้วิธีการจับคู่ตัวแปรกับค่าใน array หรือ object

        Array
            const arrName = [value1, value2]
            const [var1, var2] = arrName

        Object
            const objName = [parameter1:value1, parameter2:value2]
            const [parameter1:var1, parameter2:var2] = objName
            หรือ
            const [parameter1,parameter2] = objName     ถ้าชื่อ var กับ parameter เหมือนกัน
*/

// Array
const colors = ["white", "red"]
const [a, b] = colors
console.log(a)
console.log(b)

const animal = ["cat", "dog", "sneck"]
const [,,sneck] = animal    // ละส่วนที่ไม่ต้องการ
console.log(sneck)

// Object
const product = {
    productName : "Computer",
    price : 30000,
    stock : 20
}
const {productName:productName, price:price, stock:stock} = product
console.log(productName)
console.log(price)
console.log(stock)