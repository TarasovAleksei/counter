import React from "react";
import classes from './Counter.module.css'
import {Button} from "./Button";

export type CounterPropsType = {
    value: number|string,
    addOne: () => void,
    resetCounter: (minValue:number) => void,
    maxValue:number,
    minValue:number,
    error:boolean,
    errorForSetButton:boolean
}

export const Counter: React.FC<CounterPropsType> = ({value, addOne, resetCounter, maxValue, minValue, error, errorForSetButton}) => {
    const conditionForTitle: boolean = value < maxValue
    const conditionForPlusOne: boolean = value >= maxValue||errorForSetButton
    const conditionForReset: boolean = value === minValue||errorForSetButton
    const classNameForTitle:string = conditionForTitle || value==='enter the settings'? classes.title : classes.titleRed
    const classNameForPlusOne: string = conditionForPlusOne || error?  classes.btnDisabled : classes.btn
    const classNameForReset: string = conditionForReset || error ? classes.btnDisabled : classes.btn
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <div className={classNameForTitle}>{value}</div>
            </div>
            <div className={classes.buttons}>
                <Button titleButton={'+1'} onClick={()=>{addOne()}} condition={conditionForPlusOne}
                        className={classNameForPlusOne}/>
                <Button titleButton={'reset'} onClick={()=>resetCounter(minValue)} condition={conditionForReset}
                        className={classNameForReset}/>
            </div>
        </div>
    );
}

