import React from 'react';
import Exercise from "./Exercise.js"
import '../../../App.css';

const ExerciseList = (props) => {

  if (props.length === 0){
    return "Waiting on exercise reminders..."
  }

  const exercises = props.exercises.map((exercise, index) => {
    return (
         <li key={index} className="component-item">
        <div className="component">
        <Exercise exercise={exercise}/>
        </div>
        </li>
      )
    })

  return (
    <div>
      <ul className="component-list">
      <h4>List of exercise reminders</h4>
      {exercises}
      </ul>
    </div>
  )
}

export default ExerciseList;
