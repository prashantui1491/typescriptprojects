import { useContext } from "react"
import ButtonCustom from "./UI/ButtonCustom"
import {useTimerContext } from "../../Store/timer-context"

export default function Header(){

    const timerCts = useTimerContext()
    return(
        <header>
            <h1>React timer</h1>
            <ButtonCustom onClick={timerCts.isRunning ? timerCts.stopTimers : timerCts.startTimers}>{timerCts.isRunning ? "Stop Timer" : "Start Timer"}</ButtonCustom>
            
        </header>
    )
}