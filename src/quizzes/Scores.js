import React, { useState, useContext } from "react"
import { QuizContext } from "../quizContext"
import HighScore from "./HighScore"

function Scores() {
  let { quizQuestion, scores, initials, setInitials } = useContext(QuizContext)

  let [highScore, setHighScore] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    highScore = true
    setHighScore(highScore)
  }
  const handleChange = (e) => {
    setInitials({ ...initials, initials: e.target.value })
  }
  return highScore ? (
    <HighScore />
  ) : (
    <>
      <div className="container" style={{ textAlign: "center" }}>
        <h2>All Done!</h2>
        <p>
          Your final score is{" "}
          <h3 style={{ display: "inline-block" }}>
            {scores + " / " + quizQuestion.length}
          </h3>
        </p>
        <p>
          <form onSubmit={handleSubmit}>
            Enter initials:{" "}
            <input
              type="text"
              name="initials"
              onChange={handleChange}
              value={initials.initials}
              style={{
                padding: "10px",
                margin: "0px 5px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />
            <button>Submit</button>
          </form>
        </p>
      </div>
    </>
  )
}
export default Scores
