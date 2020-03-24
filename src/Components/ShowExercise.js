import React from "react"


function ShowExercise(props) {
    const {exercise} = props

    return (
        <>
        <p>{`The current exercise is ${exercise}.`}</p>
        </>
    )
}

export default ShowExercise;