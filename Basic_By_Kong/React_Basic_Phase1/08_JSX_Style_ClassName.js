/*
JSX Style and ClassName
    การกำหนด Style ให้กับ JSX เพื่อให้มีความสวยงาม
*/

// Example แบบ Inline
/* แทรก style={{property1:"value1", property2:"value2"}} ใน Tag */
const Item1 = () => {
    const name = "เดินห้างซื้อของ"
    const amount = 5000
    return (
        <div>
            <div style={{color:'red', textAlign:'center'}}>{name}<p>{amount}</p></div>
        </div>
    )
}
ReactDom.render(<Item1/>, document.getElementById('root'));


// Example แบบ External
/* 
    สร้าง ไฟล์ CSS แล้วค่อยทำการ import มาใช้ 
        import './CssFileName.css'

        แทรก className="classNameInCss" ใน Tag
*/

// CssFileName.css
// .item{
//     color: red;
// }

import './CssFileName.css'
const Item2 = () => {
    const name = "เดินห้างซื้อของ"
    const amount = 5000
    return (
        <div>
            <div className='item'>{name}<p>{amount}</p></div>
        </div>
    )
}
ReactDom.render(<Item2/>, document.getElementById('root'));