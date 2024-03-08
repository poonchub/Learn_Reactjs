/*
JSX Dynamic Data
    การนำข้อมูลไปเก็บไว้ในตัวแปร แล้วค่อยทำการเรียกใช้ ซึ่งจะทำให้สามารถเปลี่ยนแปลงข้อมูลได้ง่าย

    const ComponentName = () => {
        const varName1 = "เดินห้างซื้อของ"      //สร้างตัวแปรก่อน return
        const varName2 = 5000
        return (
            <div>
                <div>{varName1}<p>{vaeName2}</p></div>      //เรียกใช้ด้วย {}
            </div>
        )
    }

*/

// Example
const Item = () => {
    const name = "เดินห้างซื้อของ"
    const amount = 5000
    return (
        <div>
            <div>{name}<p>{amount}</p></div>
        </div>
    )
}
ReactDom.render(<Item/>, document.getElementById('root'));