/*
Loop Array

    For Loop (ใช้ break, continue ได้)
        for (let i = 0 ; i < arrName.length ; i++){
            console.log(`ลำดับที่ ${i+1} = ${dataArr[i]}`)
        }

    ForEach (ใช้ break, continue ไม่ได้)
        arrName.forEach(item => {   
            console.log(`สมาชิกใน Array  = ${item}`)    
        })

    ForOf (ใช้ break, continue ได้)
        for (const element of arrName){
            console.log(`สมาชิกใน Array  = ${element}`)
        }
*/

const dataArr = [100, 200, 300, 400, 500]

// For Loop
console.log("For Loop")
for (let i = 0 ; i < dataArr.length ; i++){
    console.log(`ลำดับที่ ${i+1} = ${dataArr[i]}`)
}

// ForEach
console.log("\nForEach")
dataArr.forEach(item => {
    console.log(`สมาชิกใน Array  = ${item}`)    
})

// ForOf
console.log("\nForOf")
for (const element of dataArr){
    console.log(`สมาชิกใน Array  = ${element}`)
}