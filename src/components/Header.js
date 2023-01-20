import React, { useContext } from "react"
import { FaHandPointLeft } from "react-icons/fa"
import { QuizContext } from "../quizContext"
import "./Header.css"

function Header() {
  let { counter } = useContext(QuizContext)

  return (
    <div className="Header">
      <div className="higScores">
        View High Scores <FaHandPointLeft />
      </div>

      <div className="timer">Time:{counter}</div>
    </div>
  )
}

export default Header
