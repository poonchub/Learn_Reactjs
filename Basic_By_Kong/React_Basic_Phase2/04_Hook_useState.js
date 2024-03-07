/*
    useState
        import {useState} form 'react'
        const [stateName, funtion ที่ใช้เปลี่ยนแปลงข้อมูลใน State] = useState(ค่าเริ่มต้นของ State)

        const[name, setName] = useState("Poonchub")
        const[age, setAge] = useState(20)
        ** จะได้ Array ที่ Destructuring จาก useState
*/

const FormComponent = () =>{

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)

    const inputTitle = (event) =>{
        setTitle(event.target.value)
    }

    const inputAmount = (event) =>{
        setAmount(event.target.value)
    }

    const saveItem = (event) =>{
        event.preventDefault()      // ไม่ต้องรีเฟสหน้าเว็บใหม่
        const itemData = {
            title:title,
            amount:Number(amount)
        }
        console.log(itemData)
        setTitle('')    // เมื่อเพิ่มข้อมูลเสร็จให้เคลียร์ค่า
        setAmount(0)
    }

    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label for="">ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label for="">จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงิน(+รายรับ, -รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit">เพิ่มข้อมูลอีกที</button>
                </div>
            </form>
        </div>
    )
}
export default FormComponent