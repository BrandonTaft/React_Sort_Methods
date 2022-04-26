import React, { useState, useEffect } from 'react';
import Method from './Method';
import Prism from "prismjs";
import "../prism/prism.css";

import GetNewArray from './GetArray';


function BubbleSort(props) {

    const [text, setText] = useState([]);
    const [textTwo, setTextTwo] = useState([]);
    const [bottomText, setBottomText] = useState([]);
    const [bottomTextTwo, setBottomTextTwo] = useState([])
    const [newArray, setNewArray] = useState([]);
    const [methods, setMethods] = useState([]);
   


     
    //*************** PERFORM BUBBLE SORT **************** */

    async function bubbleSort() {
        //setMethod(bubble)
        await new Promise(resolve => setTimeout(resolve, 3000));
        const arr = newArray;
        let checked;

        do {

            checked = false
            for (let i = 0; i < arr.length; i++) {
                
                //await new Promise(resolve => setTimeout(resolve, 3000));
                //The element we are testing turns red
                document.getElementById(i).style.backgroundColor = "red";
                document.getElementById(`caption${i}`).innerText = "<<<=== arr[i]"
                if (document.getElementById(i + 1) !== null) {
                    document.getElementById(i + 1).style.backgroundColor = "blue";
                    document.getElementById(`caption${i+1}`).innerText = "<<<=== arr[i + 1]";
                }



                if (arr[i] > arr[i + 1]) {
                    setText("If arr[i] is greater than arr[i + 1]")
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    setBottomText("They swap positions and the loop moves to the next element")
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    //Swap the elements in the array since element is less than the next element
                    let tmp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = tmp;
                    //Is only changed to true when there is a swap made
                    checked = true
                }else{
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    setText("");
                    setTextTwo("If arr[i] is less than arr[i + 1]");
                    await new Promise(resolve => setTimeout(resolve, 3000));
                    setBottomTextTwo("They stay where they are and the loop continues to next element");
                    await new Promise(resolve => setTimeout(resolve, 3000));
                }
                document.getElementById(i).style.backgroundColor = "greenyellow";
                  document.getElementById(`caption${i}`).innerText = "";
                 
                if (document.getElementById(i + 1) !== null) {
                    document.getElementById(i + 1).style.backgroundColor = "red";
                    document.getElementById(`caption${i+1}`).innerText = "<<<=== arr[i]";
                }
                setText("");
                setTextTwo("");
                setBottomText("");
                setBottomTextTwo("");
                setNewArray([...arr]);
                await new Promise(resolve => setTimeout(resolve, 500));

            }
            //If a swap is not made checked will not be true thus terminating the loop
            //Ensuring loop will not run on a sorted array more than once
        } while (checked)
    }


    return (
        <div>
           <GetNewArray /> 
        </div>
    )
}

export default BubbleSort