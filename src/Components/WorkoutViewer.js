import React from "react"
import ShowExercise from "./ShowExercise"
import {useState} from "react"


function WorkoutViewer(props) {
    const [exercise, setExercise] = useState("")
    const {workoutDay, currentWorkout, timer} = props

   
    
    

    
    


    

    
    return (
        <>
        <p>{`It has been ${timer} seconds`}</p>
        <ShowExercise exercise = {exercise}/>
        </>
    )
}

export default WorkoutViewer