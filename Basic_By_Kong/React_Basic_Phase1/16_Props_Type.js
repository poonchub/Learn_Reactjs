/*
Props Type
    กำหนด type ให้กับ property เพื่อตรวจสอบข้อมูล ให้การแสดงผลข้อมูลถูกต้อง หรือบังคับให้ต้องกำหนดค่า props ทุกครั้งที่มีการเรียกใช้งาน component

    การติดตั้ง
        npm install --save prop-types

    Importing
        import PropType form 'props-types'      //ES6
        var PropType = require('props-types')   //ES5 with npm

    การใช้งาน 
        componentName.propTypes = {
            propertyName: propertyType
        }
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

/*  Item file
    import PropType form 'props-types'

    const Item = (props) => {

        const {title, amount} = props

        return (
            <div>
                <div>{title}<p>{amount}</p></div>
            </div>
        )
    }

    ** การใช้งาน
    Item.propTypes={
        title:PropTypes.string.isRequired,      //.isRequired คือบังคับให้ป้อนข้อมูลนี้
        amount:PropTypes.number.isRequired
    }

*/