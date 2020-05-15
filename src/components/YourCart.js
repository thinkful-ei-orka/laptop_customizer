import React from "react"

export default function YourCart (props){
    return (
        <>
            <h2>Your cart</h2>
            {props.Summary}
        </>
    )
}