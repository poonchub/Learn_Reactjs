/*
React JSX
    รูปแบบการเขียน JSX (เขียน HTML ใน Javascript)
        1. สามารถเขียนใน <div>/<section>/<article>/<React.Fragment>/<> ก็ได้ และต้องมีการกำหนด Tag เปิด-ปิด ทุกครั้ง
        2. การใส่ Class Style ที่เป็น Attribute ใน JSX จะมีารกำหนด className แทน class เนื่องจากคำว่า class เผ็น keyword

    เขียนแบบ <div>
    function ComponentName(){
        return (
            <div>
                <div><h1>Hello</h1></div>
            </div>
        );
    }

    เขียนแบบ <section>/<article>
    function ComponentName(){
        return (
            <section>
                <article><h1>Hello</h1></article>
            </section>
        );
    }

    เขียนแบบ <React.Fragment>
    function ComponentName(){
        return (
            <React.Fragment>
                <article><h1>Hello</h1></article>
            </React.Fragment>
        );
    }

    เขียนแบบ <>
    function ComponentName(){
        return (
            <>
                <div><h1>Hello</h1></div>
            </>
        );
    }
*/