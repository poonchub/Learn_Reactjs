/*
Array Map

    const newArrName = arrName.map(item =>{
        const a = item*2
        return a
    })

    หรือ

    const newArrName = arrName.map(item => item*2)

    หรือ

    const newArrName = data.map((item,index) =>{
        return `วันที่ ${index+1} สภาพอากาศ : ${item}`
    })

*/

// Example 1
const dataArr = [1, 2, 3, 4, 5]
console.log(dataArr)
const result = dataArr.map(item =>{
    const a = item*2
    return a
})
console.log(result)

// Example 2
const data = ["ฝนตก", "แดดออก", "พายุ", "หมอก", "ปลอดโปร่ง", "หนาว"]
const day = data.map((item,i) =>{
    return `วันที่ ${i+1} สภาพอากาศ : ${item}`
})
console.log(day)

// Example 3
const data2 = [
    {day:"01/01/2566", weather:"แดดร้อน", temp:30},
    {day:"05/01/2566", weather:"ฝนตก", temp:21},
    {day:"11/01/2566", weather:"ปลอดโปร่ง", temp:25},
    {day:"25/01/2566", weather:"หนาว", temp:16}
]
const x = data2.map((item) =>{
    return item.weather
})
console.log(x)