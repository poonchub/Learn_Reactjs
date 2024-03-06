/*
Props Spread Operator
    ถูกใช้งานเมื่อตัวแปรกับตัวข้อมูลมีชื่อที่เหมือนกัน
*/

// Example
/*  Transection flie
    const Transection = () =>{

        const data = [
            {title:"ค่ารักษาพยาบาล", amount:2000},
            {title:"ค่ารถ", amount:5000},
            {title:"เงินเดือน", amount:50000}
        ] 

        return {
            <ul>
                {data.map((element, index) => {

                    ** แบบปกติ
                    return <Item title={element.title} amount={element.amount}/>

                    ** แบบใช้ Spread Operator
                    return <Item {...element}/>
                    
                })}
            </ul>
        }
    }
*/