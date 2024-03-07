/*
React Hook
    State 
        คือ ตัวแปรที่เก็บข้อมูลภายใน component คล้ายๆ กับ Props แต่การใช้งาน Props นั้น ข้อมูลจะไม่สามารถเปลี่ยนแปลงค่าได้ แต่ State สามารถทำได้

        ฉะนั้น ถ้าต้องการให้ข้อมูลภายในแอพสามารถเปลี่ยนแปลงค่าได้ในระหว่างารรันแอพก็จะใช้ State ซึ่งรูปแบบเดิมจะเขียนภายใน component

        Stateless คือ State ที่ไม่มีการเปลี่ยนแปลงค่า(props)
        Steateful คือ State ที่มีการเปลี่ยนแปลงค่า

    Hook 
        ใช้สำหรับจัดการเกี่ยวกับ State หรือ ฟีเจอร์ต่างๆที่อยู่ใน React โดยไม่ต้องเขียนคำสั่งใน class component แต่จะเขียนใน functional component แทน

    การใช้งาน React Hook
        1. เขียนใน functional component
        2. เขียนในส่วนของ top-level ของ function (อย่าเขียนใน condition, loop, nested function นอกจาจะเขียน Custom Hook)

    ตัวอย่าง React Hook
        1. useState
        2. useEffect
        3. useReducer
        4. useContext
        5. useMemo
        6. useCallBack
*/