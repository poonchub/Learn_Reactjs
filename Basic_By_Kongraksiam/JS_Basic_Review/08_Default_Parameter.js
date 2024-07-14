/*
Default Parameter
    กำหนดค่าเริ่มต้นให้กับ parameter
*/

getDataCustomer = (CustomerName, CustomerAdddress = "Bangkok") => {
    const address = `ชื่อลูกค้า : ${CustomerName}
    ที่อยู่ : ${CustomerAdddress}`

    return address
}

console.log(getDataCustomer("Poonchub"))
console.log(getDataCustomer("Poonchub","Sakhon-Nakhon"))