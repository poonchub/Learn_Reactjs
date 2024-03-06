/*
Key Props UUID
    library ที่ช่วยกำหนดค่า key ไม่ให้ซ้ำกันภายใน react app

    1. Install
        ป้อนคำสั่ง npm install uuid ที่ terminal

    2. Create a UUID (ES6 module syntax)
        import { v4 as uuidv4 } from 'uuid';
*/

// Example
/*  Transection flie
    import { v4 as uuidv4 } from 'uuid';

    const Transection = () =>{

        const data = [
            {title:"ค่ารักษาพยาบาล", amount:2000},
            {title:"ค่ารถ", amount:5000},
            {title:"เงินเดือน", amount:50000}
        ] 

        return {
            <ul>
                {data.map((element, index) => {

                    return <Item {...element} key={uuidv4()}/>
                    
                })}
            </ul>
        }
    }
*/