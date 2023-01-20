import React, { useContext } from "react"
import { QuizContext } from "./quizContext"
import "./App.css"
import Question from "./quizzes/Question"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  let { isLoadQuiz, setIsLoadQuiz } = useContext(QuizContext)
 

  const loadQuizQuestions = () => {
    isLoadQuiz = true
    setIsLoadQuiz(isLoadQuiz)
  }
  const StartCard = () => {
    return (
      <div className="container">
        <h1>Coding Quiz Challenge</h1>
        <p>
          Try to answer the following code-related questions within the time
          limit.
        </p>
        <p>
          Keep in mind that incorrect answer will penalize your score/time by
          ten seconds!
        </p>
        <button onClick={loadQuizQuestions}>Start Quiz</button>
      </div>
    )
  }
  return (
    <>
      <Header />
      <main>{isLoadQuiz ? <Question /> : <StartCard />}</main>
      <Footer />
    </>
  )
}

export default App
