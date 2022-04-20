import React, { useState, useEffect } from 'react';
import style from "../css/newArray.module.css";
import Prism from "prismjs";
import "../prism/prism.css";





function NewArray() {

    const [newArray, setNewArray] = useState([]);
    const [method, setMethod] = useState([]);
    const [text, setText] = useState([]);
    const [bottomText, setBottomText] = useState([]);
    const [captionTwo, setCaptionTwo] = useState([]);


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

    async function bubbleSort() {
        setMethod(bubble)
        await new Promise(resolve => setTimeout(resolve, 1000));
        const arr = newArray;
        const len = arr.length;
        const caption = document.getElementById('caption')
        let checked;

        do {

            checked = false
            for (let i = 0; i < len; i++) {
                setText("");
                setBottomText("");
                //The element we are testing turns red
                document.getElementById(i).style.backgroundColor = "red";
                if (document.getElementById(i + 1) !== null) {
                    document.getElementById(i + 1).style.backgroundColor = "blue";
                }



                if (arr[i] > arr[i + 1]) {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    setText("If arr[i] is greater then arr[i + 1]")
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    //Swap the elements in the array since element is less than the next element
                    let tmp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = tmp;
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    setBottomText("They Swap Positions")
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    //Is only changed to true when there is a swap made
                    checked = true
                }else{
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    setText("If arr[i] is less then arr[i + 1]");
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    setBottomText("They stay where they are and the loop moves on");
                    await new Promise(resolve => setTimeout(resolve, 1000));
                }
                document.getElementById(i).style.backgroundColor = "greenyellow";
                if (document.getElementById(i + 1) !== null) {
                    document.getElementById(i + 1).style.backgroundColor = "red";
                }
                setNewArray([...arr])
                await new Promise(resolve => setTimeout(resolve, 1000));

            }
            //If a swap is not made checked will not be true thus terminating the loop
            //Ensuring loop will not run on a sorted array more than once
        } while (checked)
    }

    const bubble = () => {
        setTimeout(() => Prism.highlightAll(), 0)
        return (
            <pre>
                <code className="language-javascript">
                    {`let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let checked;
    do {
        checked = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                checked = true;
            }
        }
    } while (checked);
    return inputArr;
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
                <span id="caption"></span>
            </div>
        )
    });


    return (
        <div>
            <button onClick={getNewArray} > Get New Array </button>
            <button onClick={bubbleSort} > Bubble Sort </button>
            <div className={style.method}>
                {method}
            </div>
            <div className={style.container}>
                <div className={style.leftDisplay}>{display}</div>
                <div className={style.rightDisplay}>
                    {text}
                    {bottomText}
                </div>
            </div>
        </div>
    )
}

export default NewArray