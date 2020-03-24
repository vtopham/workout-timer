import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import WorkoutSelector from "./Components/WorkoutSelector"
import WorkoutViewer from "./Components/WorkoutViewer"

function App() {
  const [currentWorkout, setCurrentWorkout] = useState("21-day-abs");
  const [workoutDay, setWorkoutDay] = useState(3);
  const [timer, setTimer] = useState(0);

  setTimeout(() => { //rerenders and calls the function again
    setTimer(timer + 1);
},1000)

  return (
    <div className="App">
      <WorkoutSelector workoutDay = {workoutDay}/>
      <WorkoutViewer currentWorkout = {currentWorkout} workoutDay = {workoutDay} timer = {timer} setTimer = {setTimer}/>
      
    </div>
  );
}

export default App;
