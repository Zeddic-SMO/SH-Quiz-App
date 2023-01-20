import React, { useState, useEffect } from "react"
import QData from "./quizzes/QData"

const GlobalContext = React.createContext("")

const Provider = ({ children }) => {
  const [questions, setQuestions] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setQuestions([...QData])
  }, [])

  const store = {
    questions,
    isLoaded,
    setIsLoaded,
  }

  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  )
}

export { Provider }
export default GlobalContext
