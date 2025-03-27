import Timer from "./Timer";
import {useTimerContext} from '../../Store/timer-context'

export default function Timers(){

    const {timers} = useTimerContext()

    return(
        <ul>
            {
                timers.map((timer)=>(
                    <li key={timer.name}>
                        <Timer {...timer}/>
                    </li>
                ))
            }
        </ul>
    )
    
}