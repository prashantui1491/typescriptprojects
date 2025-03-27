import { createContext, ReactNode, useContext, useReducer } from "react";




export type Timer = {
    name: string,
    duration: number
}

type TimerState = {
    isRunning: boolean,
    timers: Timer[]
}

type TimerContextValue = TimerState & {
    addTimer: (timerData: Timer) => void,
    startTimers: () => void
    stopTimers: () => void
}

type TimerOcntextProviderProps = {
    children: ReactNode
}

const initialState: TimerState = {
    isRunning: true,
    timers: []
}


type StartTimerAction = {
    type: `START_TIMER`
}

type StopTimerAction = {
    type: `STOP_TIMER`
}

type AddTimerActions = {
    type: `ADD_TIMER`,
    payload: Timer
}

type Actions = StartTimerAction | StopTimerAction | AddTimerActions



export const TimerContext = createContext<TimerContextValue | null>(null)

export function useTimerContext(){

    const timerCtx = useContext(TimerContext)

    if(timerCtx === null){
        throw new Error("Timercontex should not be null")
    }
    return timerCtx
}


function TimerReducer(state: TimerState, action: Actions): TimerState{
    if(action.type === 'START_TIMER' ){
        return{
            ...state,
            isRunning: true
        }
    }

    if(action.type === 'STOP_TIMER' ){
        return{
            ...state,
            isRunning: false
        }
    }

    if(action.type === "ADD_TIMER"){
        return{
            ...state,
            timers: [
                ...state.timers,
                {
                    name: action.payload.name,
                    duration: action.payload.duration
                }
            ]
        }
    }

    return state

}


export default function TimerContextProvider({children}: TimerOcntextProviderProps){

    const [timerState, dispatch] = useReducer(TimerReducer, initialState)

    const ctx: TimerContextValue = {
        timers: timerState.timers,
        isRunning: timerState.isRunning,
        addTimer(timerData){
            dispatch({type: "ADD_TIMER", payload: timerData })
        },
        startTimers(){
            dispatch({type: "START_TIMER"})
        },
        stopTimers() {
            dispatch({type: "STOP_TIMER"})
        },
    }

   return( <TimerContext.Provider value={ctx}>
        {children}
    </TimerContext.Provider>)

}