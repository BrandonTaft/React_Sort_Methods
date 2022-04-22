import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Navbar(){

    return(
        <div>
            <button  > <Link to="/">Bubble</Link> </button>
            <button  > <Link to="/quick">Quick</Link> </button>
            </div>
    )

}

export default Navbar