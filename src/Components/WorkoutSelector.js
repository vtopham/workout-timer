import React from "react"

function WorkoutSelector(props) {
    const {workoutDay} = props
    return (
        <>
        <h1>This is where the Workout Selector will go</h1>

        <p> {`You are on workout day ${workoutDay}.`}</p>
        </>
    )
}

export default WorkoutSelector