/*
Arrow Funtion
    เป็นรูปแบบการเขียน function ให้มีความกระชับมากขึ้น
    แบบเก่า
        function functionName(paramiter){
            statement
        }

    แบบใหม่
        functionName = (paramiter) =>{
            statement
        }
        หรือ
        functionName = (paramiter) => statement
*/

function fullName1(fname, lname){
    return fname+" "+lname
}
console.log(fullName1("Poonchub","Nanawan"))

fullName2 = (fname, lname) => fname+" "+lname
console.log(fullName2("Poonchub","Nanawan"))