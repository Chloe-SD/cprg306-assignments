"use client"
import React, { UseState } from "react";

// This is an in class example of a form.
// code-along practice, not intended for use in the site. 

//use sate
const [name, setName] = UseState("")

const HandleFormSubmit=()=>{
    // event.PreventDefault();
    console.log("Form submitted");
};

<div>
    <form onSubmit={HandleFormSubmit}>
        <input type="text" placeholder="Enter Product Name"
        ></input>
        <button></button>
    </form>
</div>

