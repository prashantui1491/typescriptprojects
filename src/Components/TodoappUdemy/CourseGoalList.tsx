import CourseGoal from "./CourseGoal"
import {CourseGoalType} from './Parent'
import InfoBox from "./InfoBox"
import { type ReactNode } from "react"

type CourseGoalListType = {
    goals: CourseGoalType[],
    onDeleteGoal: (id: number)=> void
    
}

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListType){

    if(goals.length === 0){
        return(
            <InfoBox mode="hint"> You have no goals set, start adding</InfoBox>
        )
    }

    let warningBox: ReactNode

    if(goals.length >= 4){
        warningBox = (
            <InfoBox mode="warning" seviarity= "high"> You are setting too many goals, dont put too much in your plate !!!</InfoBox>
        )

    }
    return(
        <>
        {warningBox}

        {/* {goals.length >=4 && <InfoBox mode="warning"> You are setting too many goals, dont put too much in your plate !!!</InfoBox> } */}
        <ul>
        {
            goals && goals.map((goal) => (
                <li key={goal.id}>

                    <CourseGoal title={goal.title} onDelete={onDeleteGoal} id={goal.id}>
                        <span>{goal.description}</span>
                    </CourseGoal>

                </li>
            ))
        }
    </ul>
    </>

    )
}