/*
Event
*/

// Example
const FormComponent = () =>{

    const inputTitle = (event) =>{
        console.log(event.target.value)
    }

    const inputAmount = (event) =>{
        console.log(event.target.value)
    }

    const saveItem = (event) =>{
        event.preventDefault()      // ไม่ต้องรีเฟสหน้าเว็บใหม่
        console.log("บันทึกข้อมูลสำเร็จ")
    }

    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label for="">ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle}/>
                </div>
                <div className="form-control">
                    <label for="">จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงิน(+รายรับ, -รายจ่าย)" onChange={inputAmount}/>
                </div>
                <div>
                    <button type="submit">เพิ่มข้อมูลอีกที</button>
                </div>
            </form>
        </div>
    )
}
export default FormComponent