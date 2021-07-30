import React, {ChangeEvent} from "react";
import classes from './Settings.module.css'
import {Button} from "./Button";

export type SettingsPropsType = {
    maxValue: number,
    minValue: number,
    onChangeMaxValue: (newMaxvalue: number) => void,
    onChangeMinValue: (newMinvalue: number) => void,
    onChangeInitialValue: (newInitialvalue: number) => void,
    error: boolean,
    errorForSetButton: boolean
}

export const Settings: React.FC<SettingsPropsType> = ({
                                                          maxValue,
                                                          minValue,
                                                          onChangeMaxValue,
                                                          onChangeMinValue,
                                                          onChangeInitialValue,
                                                          error,
                                                          errorForSetButton
                                                      }) => {
    const conditionForSet: boolean = error || errorForSetButton
    const classNameForPlusOne: string = conditionForSet ? classes.btnDisabled : classes.btn
    const onSetBtn = () => {
        onChangeInitialValue(minValue)
    }
    const onChangeMaxInput = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeMaxValue(+e.currentTarget.value)

    }
    const onChangeMinInput = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeMinValue(+e.currentTarget.value)
    }
    const classForInput = error ? classes.inputError : classes.input
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <div className={classes.settingContent}>
                    <h3>max.value</h3>
                    <input className={classForInput} onChange={onChangeMaxInput} value={maxValue} type="number"/>
                </div>
                <div className={classes.settingContent}>
                    <h3>min.value</h3>
                    <input className={classForInput} onChange={onChangeMinInput} value={minValue} type="number"/>
                </div>
            </div>
            <div className={classes.buttons}>
                <Button
                    titleButton={'set'} onClick={onSetBtn} condition={conditionForSet}
                    className={classNameForPlusOne}/>

            </div>
        </div>
    );
}

