import React from "react";
import Button from "./Button"
const ButtonList = () =>{
    return(
        <div className="flex">
            <Button name="All"/>
            <Button name="Songs"/>
            <Button name="Cricket"/>
            <Button name="Movies"/>
            <Button name="News"/>
            <Button name="Live"/>
            <Button name="Cooking"/>
            <Button name="BGMI"/>
            <Button name="T-Series"/>
            </div>
    )
}

export default ButtonList;