import { useRef, type FormEvent } from "react"

type newGoalProp = {
    onAddGoal: (goal: string, summary: string)=>void
}

export default function NewGoal({onAddGoal}:newGoalProp){

    const goal = useRef<HTMLInputElement>(null)
    const summary = useRef<HTMLInputElement>(null)

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()

        const enteredGoal = goal.current!.value
        const enteredSummury = summary.current!.value
        onAddGoal(enteredGoal, enteredSummury)
        event.currentTarget.reset()
    }

    return(
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Your Goal</label>
                <input type="text" id="goal" ref={goal}/>
            </p>
            <p>
                <label htmlFor="summary">Short summury</label>
                <input type="text" id="summary" ref={summary}/>
            </p>
           <button>Add Goal</button>
        </form>
    )
}