/*
Props Destructuring (นิยมใช้)
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
                <Item title=data[0].title amount=data[0].amount/>
                <Item title=data[1].title amount=data[1].amount/>
                <Item title=data[2].title amount=data[2].amount/>
            </ul>
        }
    }
*/

/*  Item file
    const Item = (props) => {

        const {title, amount} = props   //นำข้อมูลมาเก็บแยกเป็นตัวแปร

        return (
            <div>
                <div>{title}<p>{amount}</p></div>
            </div>
        )
    }

    หรือ 

    const Item = ({title, amount}) => {     // ใส่ตัวแปรลงแทน props
        return (
            <div>
                <div>{title}<p>{amount}</p></div>
            </div>
        )
    }

*/