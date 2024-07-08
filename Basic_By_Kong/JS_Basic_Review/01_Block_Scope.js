/*
Block Scope (let/constant)
    การประกาศใช้งาน let แทน var เนื่องจาก var เป็นตัวแปรที่ถูกมองเป็น global variable สามารถทำงานทะลุขอบเขตได้(block scope)

    การใช้งาน const ในการประกาศตัวแปรที่เก็บค่าคงที่
*/

// การเขียนแบบเดิม
var x = 10
if (x==10){
    var y = 500
    console.log("y ใน= "+y)
}
console.log("y นอก= "+y)   // เจอ y ที่ด้านนอกซึ่งผิด

// การเขียนแบบใหม่
var x = 10
if (x==10){
    let z = 500
    console.log("z ใน = "+z)
}
console.log("z นอก = "+z)   // ไม่เจอ y ที่ด้านนอกซึ่งถูก