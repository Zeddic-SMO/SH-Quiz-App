import React, { useContext } from "react"
import { QuizContext } from "../quizContext"

const styleDiv = {
  border: "1px solid #ccc",
  padding: "35px",
  borderRadius: "25px",
  boxShadow: "5px 5px 4px #ccc",
  height: "220px",
}

const btn = {
  padding: "15px",
  borderRadius: "8px",
  border: "none",
  color: "#fff",
  backgroundColor: "#218380",
  fontWeight: "bold",
}
function HighScore() {
  let { initials, scores } = useContext(QuizContext)
  return (
    <div style={styleDiv}>
      <h1>High Scores</h1>
      <ol>
        <li>
          <h3>
            {initials.initials} - {scores}
          </h3>
        </li>
      </ol>

      <button className="btn" style={{ marginRight: "10px" }}>
        Go Back
      </button>
      <button className="btn">Clear High Scores</button>
    </div>
  )
}

export default HighScore
