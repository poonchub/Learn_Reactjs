/*
Chilren to Parent (Bottom-Up)
    การนำข้อมูลที่ได้จาก form มาแสดงผลที่หน้าเว็บ
    หลักการ
        1. ส่งข้อมูลจาก form ใน Children ไปที่ Parent ก่อน แล้ว Parent จะทำการเก็บข้อมูลไว้เป็น State 
        2. ทำการ Props ข้อมูลจาก State ไปที่ Children ที่จะแสดงผล
*/

// Example
/*  App.js file
    import Transection form "Transection";
    import FormComponent form "FormComponent";
    import {useState} form "react";

    function App() {

        // ข้อมูลตัวอย่าง
        const initData = [
            {id=1, title:"ค่ารักษาพยาบาล", amount:2000},
            {id=2, title:"ค่ารถ", amount:5000},
            {id=3, title:"เงินเดือน", amount:50000}
        ]

        const [items, setItems] = useState(initData)    
        ** ถ้าไม่ต้องการข้อมูลตัวอย่าง แก้ไขเป็น
        const [items, setItems] = useState([])

        const onAddNewItem = (newItem) =>{
            setItems((prevItem) => {
                return [newItem,...prevItem]
            })
        }

        return (
            <div>
                <h1>แอพบัญชีรายรับรายจ่าย</h1>
                <FormComponent onAddItem = {onAddNewItem}/>
                <Transection item = {items}/>
            </div>
        );
    }
    export default App;
*/

/*
    Transection.js flie
    import { v4 as uuidv4 } from 'uuid';

    const Transection = (props) =>{

        const {item} = props

        return {
            <ul>
                {item.map((element, index) => {

                    return <Item {...element} key={element.id}/>
                    
                })}
            </ul>
        }
    }
*/

/*  FormComponent.js flie
    import {v4 as uuidv4} form 'uuid'
    const FormComponent = (props) =>{

        const [title, setTitle] = useState('')
        const [amount, setAmount] = useState(0)

        const inputTitle = (event) =>{
            setTitle(event.target.value)
        }

        const inputAmount = (event) =>{
            setAmount(event.target.value)
        }

        const saveItem = (event) =>{
            event.preventDefault()
            const itemData = {
                id:uuidv4()
                title:title,
                amount:Number(amount)
            }
            props.onAddItem(itemData)
            setTitle('')
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
*/