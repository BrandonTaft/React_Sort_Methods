import React, { useState } from 'react';
import style from "../css/newArray.module.css";

//****************** NEW ARRAY ********************* */

const GetNewArray = () => {
    const [newArray, setNewArray] = useState([]);
    const max = 10;
    const arr = [];

    for (let i = 0; i < max;) {
        let num = Math.floor(Math.random() * max + 1)
        while (arr.includes(num) === false) {
            arr.push(num)
            i++
        }
    }
    setNewArray(arr)
    


const display = newArray.map((bar, index) => {
    return (
        <div className={style.row} key={index}>

            <div className={style.bar} id={`${index}`} style={{ width: `${bar * 8}%`, height: `${bar * 8}%` }}>
                {bar}
            </div>
            <span id={`caption${index}`}></span>
        </div>
    )
});


return (
    <div>
        
        <div className={style.container}>

            <div className={style.leftDisplay}>
            <div className={style.newArray}>let arr = [{newArray.toString()}]</div>
                {display}
                </div>
            
        </div>
    </div>
)
}

export default GetNewArray