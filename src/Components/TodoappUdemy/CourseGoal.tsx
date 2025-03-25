import { type ReactNode } from "react"

type CourseGoalProps = {
    title: string,
    children: ReactNode,
    id: number,
    onDelete: (id: number)=>void
    
}

export default function CourseGoal({title, children, onDelete, id}: CourseGoalProps){
    return(
        <article>
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            <button onClick={()=>onDelete(id)} >Delete</button>
        </article>
    )
}