/*
Array Filter
    การคัดกรอง array

    const nweArrName = arrName.filter(e => {
        return เงื่อนไข (ใส่ได้หลายเงื่อนไขเชื่อมด้วย &)
    })

    หรือ
    
    const nweArrName = arrName.filter(e => เงื่อนไข1).filter(e => เงื่อนไข2)
        
*/

// Example 1
const dataArr1 = [1, 2, 3, 4, 5, 6]
const result1 = dataArr1.filter(e => {
    return e%2==1
})
console.log(result1)

// Example 2
const dataArr2 = [
    {name:"Poonchub", salary:20000, department:"โปรแกรมเมอร์"},
    {name:"Pong", salary:15000, department:"นักการตลาด"},
    {name:"Punk", salary:12000, department:"วิศวกรโครงสร้าง"},
]
const result2 = dataArr2.filter(e => {
    return e.salary>12000 & e.department=="โปรแกรมเมอร์"
})
console.log(result2)