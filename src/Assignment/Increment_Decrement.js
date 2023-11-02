import { useState } from "react"
import React from 'react'
import './Assign_Ques.css'

const Increment_Decrement = () => {
    const[count,setcount] = useState(0);

    const incrementCount = () => {
        setcount(count+1);
    }
    const decrementcount = () => {
        setcount(count-1);
    }
    const resetcount = () => {
        setcount(0);
    }
  return (
    <div>
        <h1>* Create Increment decrement state change by button click?</h1>
        <div className="btn">
        <h1 className="count">React Web</h1>
            <h1 className="count">{count}</h1>
            <button className="button" onClick={incrementCount}>Increment</button>
            <button className="button" onClick={decrementcount}>Decrement</button> <br />
            <button className="button" onClick={resetcount}>Reset</button>
        </div>
    </div>
  )
}

export default Increment_Decrement