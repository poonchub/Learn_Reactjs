/*
Key Properties
    Key เป็น property ที่อยู่ใน JSX โดย Key จะมีค่าไม่ซ้ำกัน กำหนดขึ้นเพื่อให้ react นำไปเช็คว่ามี component ใดบ้างที่เปลี่ยนแปลงค่าไปในการ render หน้าเว็บ
*/

// Example
/*  Transection flie
    const Transection = () =>{

        const data = [
            {id=1, title:"ค่ารักษาพยาบาล", amount:2000},
            {id=2, title:"ค่ารถ", amount:5000},
            {id=3, title:"เงินเดือน", amount:50000}
        ] 

        return {
            <ul>
                {data.map((element, index) => {

                    return <Item {...element} key={element.id}/>
                    
                })}
            </ul>
        }
    }
*/