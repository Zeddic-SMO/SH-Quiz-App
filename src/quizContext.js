import React, { useState, useEffect, createContext } from "react"
import QData from "./quizzes/QData"

export const QuizContext = createContext()

const QuizProvider = (props) => {
  // State Data
  let [quizQuestion, setQuizQuestion] = useState([])

  //   UseEffect to load first and make a copy of the data
  useEffect(() => {
    setQuizQuestion([...QData])
  }, [])

  // Start quiz State
  let [isLoadQuiz, setIsLoadQuiz] = useState(false)

  //   Check End of Quiz State
  let [checkEndOfQuiz, setCheckEndOfQuiz] = useState(false)

  // Timer State
  let [counter, setCounter] = useState(50)

  /*
  let activeCounterRef = useRef(null).current

   useEffect(() => {
    if (isLoadQuiz === true) {
      // console.log("timer starts")
      activeCounterRef = setInterval(activeCount, 1000)
    }

    if (counter === 0) {
      // console.log("cleared", activeCounterRef)
      setIsLoadQuiz(false)
      setCheckEndOfQuiz(true)
    }

    return () => {
      clearInterval(activeCounterRef)
    }
  }, [isLoadQuiz, counter])

  const activeCount = () => {
    counter -= 10
    setCounter(counter)
  } */

  //   Correct or Wrong Answer Notification State
  let [answerNotification, setAnswerNotification] =
    useState("Select an option!")

  // Current Question State
  let [currentQuestion, setCurrentQuestion] = useState(0)

  //   Scores State
  let [scores, setScores] = useState(0)

  //   Form Data
  let [initials, setInitials] = useState({ initials: "" })

  //   WareHouse to house all the data to be made available
  const wareHouse = {
    quizQuestion,
    setQuizQuestion,
    isLoadQuiz,
    setIsLoadQuiz,
    answerNotification,
    setAnswerNotification,
    currentQuestion,
    setCurrentQuestion,
    checkEndOfQuiz,
    setCheckEndOfQuiz,
    scores,
    setScores,
    initials,
    setInitials,
    counter,
    setCounter,
  }

  //   Return below
  return (
    <QuizContext.Provider value={wareHouse}>
      {props.children}
    </QuizContext.Provider>
  )
}
export default QuizProvider
