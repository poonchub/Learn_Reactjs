/*
React Properties 
    คือ ตัวแปรที่สามารถส่งเข้าไปใน component ได้ ผ่านการกำหนด attribute ส่งผลให้ component แต่ละตัวสามารถรับค่าจากด้านนอกเข้าไปทำงานได้

        <componentName propertyName = valueProperty/>

*/

// Example
/*  Transection flie
    const Transection = () =>{
        return {
            <ul>
                <Item title="ค่ารักษาพยาบาล" amount="2000"/>
                <Item title="ค่ารถ" amount="5000"/>
                <Item title="เงินเดือน" amount="50000"/>
            </ul>
        }
    }
*/

/*  Item file
    const Item = (props) => {
        return (
            <div>
                <div>{props.title}<p>{prop.amount}</p></div>
            </div>
        )
    }
*/