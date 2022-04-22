import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from "../css/newArray.module.css";
import Prism from "prismjs";
import "../prism/prism.css";




function Home() {

    const welcome = "Hello There";

    return (
        <div className={style.method}>
            {welcome}
        </div>
    )
}

export default Home