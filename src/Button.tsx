import React from "react";

type ButtonPropsType = {
    titleButton: string,
    onClick: ()=>void,
    condition: boolean,
    className: string
}

export const Button: React.FC<ButtonPropsType> = ({titleButton, onClick, condition, className})=> {
    return (
        <button  disabled={condition} onClick={onClick} className={className}>{titleButton}  </button>
    )
}