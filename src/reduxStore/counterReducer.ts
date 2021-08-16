const initialState = {
    minValue: 0,
    maxValue: 5,
    value: 0,
    error: false,
    errorForSetButton: true
}
export type initialStateType = {
    minValue: number,
    maxValue: number,
    value: number | string,
    error: boolean,
    errorForSetButton: boolean
}

export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'CHANGE-MAX-VALUE':
            if (state.minValue >= 0 && state.minValue < action.newMaxvalue)
            return {
                ...state,
                maxValue: action.newMaxvalue,
                errorForSetButton: false,
                value: 'enter the settings',
                error: false
            }
            else return {
                ...state,
                maxValue: action.newMaxvalue,
                errorForSetButton: false,
                value: 'error',
                error: true
            }
        case 'CHANGE-MIN-VALUE':
            if(action.newMinvalue >= 0 && action.newMinvalue < state.maxValue)
            return {
                ...state,
                minValue: action.newMinvalue,
                errorForSetButton: false,
                value: 'enter the settings',
                error: false
            }
            else return {
                ...state,
                minValue: action.newMinvalue,
                errorForSetButton: false,
                value: 'error',
                error: true
            }
        case "CHANGE-INITIAL-VALUE":
            if (action.newMinvalue >= 0 && action.newMinvalue < state.maxValue)
                return {
                    ...state,
                    value: action.newMinvalue,
                }
            else return {
                ...state,
                error: !state.error
            }
        case "ADD-ONE": {
            if (state.value < state.maxValue && !state.error)
                return {
                    ...state,
                    value: +state.value + 1
                }
            else return state
        }
        case "RESET":
            if (!state.error)
                return {
                    ...state,
                    value: action.minValue
                }
            else return state
        default:
            return state
    }
}

type ActionsType =
    ChangeMaxValueActionType
    | ChangeMinValueActionType
    | ChangeInitialValueActionType
    | AddOneActionType
    | ResetActionType
export type ChangeMaxValueActionType = ReturnType<typeof changeMaxValueAC>
export type ChangeMinValueActionType = ReturnType<typeof changeMinValueAC>
export type ChangeInitialValueActionType = ReturnType<typeof changeInitialValueAC>
export type AddOneActionType = ReturnType<typeof addOneAC>
export type ResetActionType = ReturnType<typeof resetAC>
export const changeMaxValueAC = (newMaxvalue: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        newMaxvalue
    } as const
}
export const changeMinValueAC = (newMinvalue: number) => {
    return {
        type: 'CHANGE-MIN-VALUE',
        newMinvalue
    } as const
}
export const changeInitialValueAC = (newMinvalue: number) => {
    return {
        type: 'CHANGE-INITIAL-VALUE',
        newMinvalue
    } as const
}
export const addOneAC = () => {
    return {
        type: 'ADD-ONE',
    } as const
}
export const resetAC = (minValue: number) => {
    return {
        type: 'RESET',
        minValue
    } as const
}