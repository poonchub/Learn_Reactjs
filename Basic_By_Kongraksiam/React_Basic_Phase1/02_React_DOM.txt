/*
React DOM Rendedr HTML
    เมื่อหน้าเว็บโหลดเสร็จ Web Browser จะสร้าง DOM ของหน้านั้นขึ้นมาโดยมอง HTML เป็นโครงสร้างต้นไม้(ก้อน object) หรือเรียกว่า DOM (Document Object Model)

    ReactDOM.render()
        จะทำการสร้าง DOM (Virtual DOM) ที่มีลัษณะของโครงสร้างต้นไม้ แล้วนำโครงสร้างดังกล่าวใส่ลงไปยัง DOM จริงๆ(Real DOM) ซึ่งเป็นวิธีในการ Render JSX ออกมาแสดงผลทางหน้าจอ เช่น

        ReactDOM.render(<p>Hello World</p>, document.getElementById('root'));

        หรือ

        const data = (
            <div>
                <h1>Poonchub</h1>
            </div>
        );
        ReactDOM.render(data, document.getElementById('root'));

        หรือ

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        );
*/