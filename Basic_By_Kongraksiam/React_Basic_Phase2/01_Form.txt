/*
Form
    สร้างแบบฟอร์มรับค่า และนำข้อมูลมาแสดงผล
*/

// Example
const FormComponent = () =>{
    return (
        <div>
            <form>
                <div className="form-control">
                    <label for="">ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ"/>
                </div>
                <div className="form-control">
                    <label for="">จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงิน(+รายรับ, -รายจ่าย)"/>
                </div>
                <div>
                    <button type="submit">เพิ่มข้อมูลอีกที</button>
                </div>
            </form>
        </div>
    )
}
export default FormComponent