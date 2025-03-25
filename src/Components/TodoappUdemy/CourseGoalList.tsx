import CourseGoal from "./CourseGoal"
import {CourseGoalType} from './Parent'

type CourseGoalListType = {
    goals: CourseGoalType[],
    onDeleteGoal: (id: number)=> void
    
}

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListType){
    return(
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

    )
}