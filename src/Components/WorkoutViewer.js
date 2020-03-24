import React from "react"
import ShowExercise from "./ShowExercise"
import {useState} from "react"


function WorkoutViewer(props) {
    const [exercise, setExercise] = useState("")
    const {workoutDay, currentWorkout, timer, setTimer} = props

    // while (timer < 10) {
    //     setTimeout(() => {
    //         setTimer(timer + 1);
    //     },1000)
    // }

    
    


    

    
    return (
        <>
        <p>{`The timer is ${timer}`}</p>
        <ShowExercise exercise = {exercise}/>
        </>
    )
}

export default WorkoutViewer