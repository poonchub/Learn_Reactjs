/*
Object
    const objectName = {
        property1 : value1,
        property2 : value2,
        property3 : value3
    }
*/
const saraly = 20000
const tel = "098-594-XXXX"

const customer = {
    customerName : "Poonchub",
    age : 20,
    address : "Sakhon-Nakhon",
    saraly : saraly,
    tel,     // ถ้าชื่อ property เหมือนกับ ตัวแปร value ใส่แค่ตัวเดียว

    // function ใน object
    getcustomerName(){
        console.log("ลูกค้าชื่อ "+this.customerName)
    },

    getAge:function(){
        console.log("ลูกค้าอายุ "+this.age)
    }

}
// แสดงข้อมูลทั้งหมดใน object
console.log(customer)

// เรียกใช้ function ใน object
customer.getcustomerName()
customer.getAge()