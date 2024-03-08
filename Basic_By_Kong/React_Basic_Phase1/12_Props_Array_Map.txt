/*
Props and Array Map
    นำข้อมูลใน Array มา Map และแสดงข้อมูลตามจำนวนข้อมูลที่มีใน Array
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
                    return <Item title={element.title} amount={element.amount}/>
                })}
            </ul>
        }
    }
*/