/*
Nested Component
    การสร้าง component ที่เขียนซ้อนกันได้
*/

// Example
// สร้าง Component แยก (สามารถสร้างแบบ external แล้วค่อย import เข้ามาได้)
const Title = () => <h1>Hello</h1>
const Descreiption = () =>  <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>

function App(){
    return (
        <div>
            {/* การเรียกใช้งาน */}
            <Title></Title>
            <Descreiption></Descreiption>
        </div>
    )
}