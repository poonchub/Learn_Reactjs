/*
String
    MultiLine String
        สามารถทำงานกับข้อความยาวๆได้ โดยการขึ้นบรรทัดใหม่แล้วไม่มีข้อผิดพลาดเกิดขึ้นโดยใช้ `

    Interpolation
        สามารถแทรกตัวแปรลงในพื้นที่ string ได้โดยใช้ ${ชื่อตัวแปร} ร่วมกับ `

    เกิด error ทำงานไม่ได้
        const address = "ชื่อลูกค้า : Poonchub 
        ที่อยู่ 555/12 
        ถนนสุรนารี 
        อ.เมือง 
        จ.นครราชสีมา 
        เบอร์ : 098-594-XXXX"
*/

// MultiLine String
const address1 = `ชื่อลูกค้า : Poonchub 
ที่อยู่ 555/12 
ถนนสุรนารี 
อ.เมือง 
จ.นครราชสีมา 
เบอร์ : 098-594-XXXX\n`
console.log(address1)

// Interpolation
let customerName = "Nanawan"
let add = "74/10 ถนนสุรนารี อ.เมือง จ.นครราชสีมา "
let number = "065-944-XXXX"
const address2 = `ชื่อลูกค้า : ${customerName} 
ที่อยู่ ${add} 
เบอร์ : ${number}`
console.log(address2)