/*
Array Function

    .join("สิ่งที่ใส่คั่น")            แปลง array เป็น string
    .concat(array ที่ต้องการต่อ)    ต่อข้อมูลใน array ด้วย array
    .push(data)                 เพิ่มข้อมูลที่ตำแหน่งท้ายสุดใน array 
    .pop()                      ลบข้อมูลที่ตำแหน่งท้ายสุดใน array
    .shift()                    ลบข้อมูลที่ตำแหน่งหน้าสุดใน array
    .unshift(data)              เพิ่มข้อมูลที่ตำแหน่งหน้าสุดใน array
    .splice(ตำแหน่งจะลบ,จำนวน,ข้อมูลใหม่)   ลบข้อมูลเป็นช่วง
    .slice(start,stop,step)     ตัดเอาข้อมูลเป็นช่วง 

*/

// join()
const dataArr1 = [100, 200, 300]
console.log(dataArr1)
const dataStr = dataArr1.join("-")
console.log(dataStr)

// concat()
const dataArr2 = [100, 200, 300]
const newataArr = [5, 10, 15]
const conArr = dataArr2.concat(newataArr)
console.log(conArr)

// push()
const dataArr3 = [100, 200, 300]
dataArr3.push(500)
console.log(dataArr3)

//  pop()
const dataArr4 = [100, 200, 300]
dataArr4.pop()
console.log(dataArr4)

// shift()
const dataArr5 = [100, 200, 300]
dataArr5.shift()
console.log(dataArr5)

// unshift()
const dataArr6 = [100, 200, 300]
dataArr6.unshift(400)
console.log(dataArr6)

// splice()
const dataArr7 = [100, 200, 300, 400, 500]
dataArr7.splice(0, 2)
console.log(dataArr7)

// slice()
const dataArr8 = [100, 200, 300, 400, 500]
const newdataArr8 = dataArr8.slice(0, 2)
console.log(newdataArr8)