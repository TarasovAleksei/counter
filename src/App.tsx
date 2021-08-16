import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import {Counter} from "./components/Counter"
import {Settings} from "./components/Settings";
import {AppStateType} from "./reduxStore/Store";
import {
    addOneAC,
    changeInitialValueAC,
    changeMaxValueAC,
    changeMinValueAC,
    initialStateType,
    resetAC
} from "./reduxStore/counterReducer";

const App = () => {
    const {
        maxValue,
        minValue,
        value,
        error,
        errorForSetButton
    } = useSelector<AppStateType, initialStateType>(state => state.counter)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     const localMaxValue = localStorage.getItem('maxValue')
    //     if (localMaxValue)
    //         setmaxValue(JSON.parse(localMaxValue))
    //     const localMinValue = localStorage.getItem('minValue')
    //     if (localMinValue)
    //         setminValue(JSON.parse(localMinValue))
    //     const localValue = localStorage.getItem('value')
    //     if (localValue)
    //         setValue(JSON.parse(localValue))
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    //     localStorage.setItem('minValue', JSON.stringify(minValue))
    //     localStorage.setItem('value', JSON.stringify(value))
    // }, [maxValue, minValue, value])
    const onChangeMaxValue = (newMaxvalue: number) => {
        dispatch(changeMaxValueAC(newMaxvalue))
    }
    const onChangeMinValue = (newMinvalue: number) => {
        dispatch(changeMinValueAC(newMinvalue))
    }
    const onChangeInitialValue = (newMinvalue: number) => {
        dispatch(changeInitialValueAC(newMinvalue))
    }
    const addOne = () => {
        dispatch(addOneAC())
    }
    const resetCounter = (minValue: number) => {
        dispatch(resetAC(minValue))
    }

    return (
        <div className={'app'}>
            <Settings
                onChangeMaxValue={onChangeMaxValue}
                onChangeMinValue={onChangeMinValue}
                onChangeInitialValue={onChangeInitialValue}
                maxValue={maxValue}
                minValue={minValue}
                error={error}
                errorForSetButton={errorForSetButton}
            />
            <Counter value={value}
                     error={error}
                     maxValue={maxValue}
                     minValue={minValue}
                     addOne={addOne}
                     resetCounter={resetCounter}
                     errorForSetButton={errorForSetButton}/>
        </div>
    );
}

export default App;
