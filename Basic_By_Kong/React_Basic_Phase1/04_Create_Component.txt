/*
Component
    ใน React การจะสร้างหน้าเว็บขึ้นมาได้นั้นจะใช้สิ่งที่เรียกว่า Component โดย Component คือ ส่วนย่อยแต่ละส่วนของหน้าเว็บที่นำมาประกอบกัน โดยจะเขียนด้วยภาษา JavaScript เพื่อทำหน้าตาแต่ละส่วนของเว็บหรือส่วนย่อยนั้นๆ มา แทนที่จะเขียนใน HTML แทน

    แต่ใน React จะไม่เขียน HTML ใน HTML แต่จะเขียนใน JavaScript แทน ซึ่งจะใช้ส่วนที่เรียกว่า JSX (JavaScript XML) ที่ทำให้ใส่ HTML เข้าไปเขียนใน JavaScript ได้ ดังนั้น React คือ การสร้างหน้าเว็บด้วยภาษา JavaScript ที่มี HTML แทรกอยู่ ก็คือ JSX นั่นเอง !

    รูปแบบการสร้าง Component
        1. Class Component
        2. Functional Component
            ** โดยทั้งคู่จะ Return HTML ออกมาและเขียน JSX ด้านในส่วนของการ Return
        3. External Component
            ** การเรียกใช้ต้อง import
                import  ComponentName from './ComponentFileName'

        
*/

// Functional Component
function HelloComponent(){      // ชื่อ function ขึ้นต้นด้วยพิมพ์ใหญ่
    return <h1>สวัสดี Component แบบ Function</h1>
}
ReactDom.render(<HelloComponent/>, document.getElementById('root'));

// Class Component (มีความสามารถในการทำงานมากกว่าแบบ function)
class HelloComponent extends React.Component{
    render(){
        return <h1>สวัสดี Component แบบ Class</h1>;
    }
}
ReactDom.render(<HelloComponent/>, document.getElementById('root'));

// External Component (สร้างเป็นไฟล์ไว้ด้านนอกที่มีนามสกุล .js จากนั้นก็นำเข้ามาทำงานในหน้าเว็บ)
function HelloComponent(){      // ชื่อ function ขึ้นต้นด้วยพิมพ์ใหญ่
    return <h1>สวัสดี Component แบบ External</h1>
}
export default HelloComponent