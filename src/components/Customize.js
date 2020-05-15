import React from "react"
import CustomizeHeader from './CustomizeHeader'

export default function Customize (props){
    return (
        
          <form className="main__form">
            <CustomizeHeader />
            {props.Features}
          </form>
    )
}