/*
การค้นข้อมูลใน Array

    .indexOf(data)      ผลการหาจะได้ index ของข้อมูล ถ้าไม่มีจะได้ -1
    .find(data)         ผลการหาจะได้ตัวข้อมูล ถ้าไม่มีจะได้ undefined
    .findIndex(data)    ผลการหาจะได้ index ของข้อมูล ถ้าไม่มีจะได้ -1

*/

const color = ["red", "blue", "green", "yellow"]

//  indexOf(data)
const result1 = color.indexOf("red")
console.log(result1)

// find(data)
const result2 = color.find(item => item === "red")
console.log(result2)

// findIndex(data)
const result3 = color.findIndex(item => item === "red")
console.log(result3)