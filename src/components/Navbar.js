import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from "../css/newArray.module.css";
import Prism from "prismjs";
import "../prism/prism.css";



function Navbar() {

    const [method, setMethod] = useState([])

    // const bubble = () => {
    //     setMethod("yoyoyoyo")
    //  }

    const bubble = () => {
        setTimeout(() => Prism.highlightAll(), 0)

        return (
            <pre>

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


    return (
        <div>
            <div className={style.method}>

                {method}
            </div>

            <div>
                <button onClick={() => { setMethod(bubble) }}> <Link to="/bubble">Bubble</Link> </button>
                <button > <Link to="/quick">Quick</Link> </button>
            </div>

        </div>
    )

}

export default Navbar