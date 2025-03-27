import Container from "./UI/Container";
import { type Timer as TimerProsTypes } from "../../Store/timer-context";
import { useEffect, useRef, useState } from "react";
import { useTimerContext } from '../../Store/timer-context'

export default function Timer({ name, duration }: TimerProsTypes) {

    const { isRunning } = useTimerContext()

    const [remainintTime, setRemainingTime] = useState(duration * 1000)

    const interval = useRef<ReturnType<typeof setInterval> | null>(null);

    if (remainintTime <= 0 && interval.current) {
        clearInterval(interval.current)
    }

    useEffect(() => {
        if (isRunning) {
            interval.current = setInterval(() => {
                // setRemainingTime(prevtime => prevtime - 50);

                setRemainingTime((prevTime) => {
                    if (prevTime <= 0) {
                      return prevTime;
                    }
                    return prevTime - 50;
                  });
            }, 50);
        } else if (interval.current) {
            clearInterval(interval.current);
        }
    
        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        };
    }, [isRunning]);
    

    const formatTedRemainingTime = (remainintTime / 1000).toFixed(2)


    return (
        <Container>
            <h2>{name}</h2>
            <progress max={duration * 1000} value={remainintTime} />
            <p>{formatTedRemainingTime}</p>

        </Container>
    )
}