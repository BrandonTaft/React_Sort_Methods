import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from "../css/newArray.module.css";
import Prism from "prismjs";
import "../prism/prism.css";





function NewArray() {

    const [newArray, setNewArray] = useState([]);
    const [method, setMethod] = useState([]);
    const [text, setText] = useState([]);
    const [textTwo, setTextTwo] = useState([]);
    const [bottomText, setBottomText] = useState([]);
    const [bottomTextTwo, setBottomTextTwo] = useState([])


    useEffect(() => {
        getNewArray();
        setMethod("WELCOME")
    }, [])


    //****************** NEW ARRAY ********************* */

    const getNewArray = () => {
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
        
    }


    //*************** PERFORM BUBBLE SORT **************** */

    // async function bubbleSort() {
    //     setMethod(bubble)
    //     await new Promise(resolve => setTimeout(resolve, 3000));
    //     const arr = newArray;
    //     let checked;

    //     do {

    //         checked = false
    //         for (let i = 0; i < arr.length; i++) {
                
    //             //await new Promise(resolve => setTimeout(resolve, 3000));
    //             //The element we are testing turns red
    //             document.getElementById(i).style.backgroundColor = "red";
    //             document.getElementById(`caption${i}`).innerText = "<<<=== arr[i]"
    //             if (document.getElementById(i + 1) !== null) {
    //                 document.getElementById(i + 1).style.backgroundColor = "blue";
    //                 document.getElementById(`caption${i+1}`).innerText = "<<<=== arr[i + 1]";
    //             }



    //             if (arr[i] > arr[i + 1]) {
    //                 setText("If arr[i] is greater than arr[i + 1]")
    //                 await new Promise(resolve => setTimeout(resolve, 3000));
    //                 setBottomText("They swap positions and the loop moves to the next element")
    //                 await new Promise(resolve => setTimeout(resolve, 3000));
    //                 await new Promise(resolve => setTimeout(resolve, 3000));
    //                 //Swap the elements in the array since element is less than the next element
    //                 let tmp = arr[i];
    //                 arr[i] = arr[i + 1];
    //                 arr[i + 1] = tmp;
    //                 //Is only changed to true when there is a swap made
    //                 checked = true
    //             }else{
    //                 await new Promise(resolve => setTimeout(resolve, 3000));
    //                 setText("");
    //                 setTextTwo("If arr[i] is less than arr[i + 1]");
    //                 await new Promise(resolve => setTimeout(resolve, 3000));
    //                 setBottomTextTwo("They stay where they are and the loop continues to next element");
    //                 await new Promise(resolve => setTimeout(resolve, 3000));
    //             }
    //             document.getElementById(i).style.backgroundColor = "greenyellow";
    //               document.getElementById(`caption${i}`).innerText = "";
                 
    //             if (document.getElementById(i + 1) !== null) {
    //                 document.getElementById(i + 1).style.backgroundColor = "red";
    //                 document.getElementById(`caption${i+1}`).innerText = "<<<=== arr[i]";
    //             }
    //             setText("");
    //             setTextTwo("");
    //             setBottomText("");
    //             setBottomTextTwo("");
    //             setNewArray([...arr]);
    //             await new Promise(resolve => setTimeout(resolve, 500));

    //         }
    //         //If a swap is not made checked will not be true thus terminating the loop
    //         //Ensuring loop will not run on a sorted array more than once
    //     } while (checked)
    // }

    const bubble = () => {
        setTimeout(() => Prism.highlightAll(), 0)
        console.log(newArray)
        return (
            <pre>
                <div className={style.newArray}>let arr = [{newArray.toString()}]</div>
                <code className="language-javascript">
                    {`let bubbleSort = (arr) => {

    let checked;
    do {
        checked = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;
                checked = true;
            }
        }
    } while (checked);
    return arr;
};`}

                </code>
            </pre >
        )
    }



    //**************************************************************************************** */

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
            
            <div className={style.method}>
                
                {method}
            </div>
            <div className={style.container}>

                <div className={style.leftDisplay}>
                <div className={style.newArray}>let arr = [{newArray.toString()}]</div>
                    {display}
                    </div>
                <div className={style.rightDisplay}>
                    <p className={style.text}>{text}</p>
                    <p className={style.textTwo}>{textTwo}</p>
                    <p className={style.bottomText}>{bottomText}</p>
                    <p className={style.bottomTextTwo}>{bottomTextTwo}</p>
                </div>
            </div>
        </div>
    )
}

export default NewArray