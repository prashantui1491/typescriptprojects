import React, { useState } from 'react';
import logo from './logo.svg';
import Header from './Header';
import goalImage from './assets/goals.jpg'
import CourseGoalList from './CourseGoalList'
import NewGoal from './NewGoal';

export type CourseGoalType = {
  title: string,
  description: string,
  id: number
}


function Parent() {

  const [goals, setGoals] = useState<CourseGoalType[]>([])

  function handleAddGoal(goal:string, summary: string) {
    setGoals((prevgoals) => {
      const newGoal: CourseGoalType = {
        id: Math.random(),
        title: goal,
        description: summary
      }

      return ([...prevgoals, newGoal])
    })
  }

  function handleGoalDelete(id: number){
    setGoals((prevGoals)=>prevGoals.filter((goal)=>goal.id!== id))
  }

  return (
    <main>
      <Header image={{ src: goalImage, alt: "A list of goals" }}>
        <h1>Your course Goals</h1>

      </Header>
      <NewGoal onAddGoal = {handleAddGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal ={handleGoalDelete} />

      

    </main>
  );
}

export default Parent;
