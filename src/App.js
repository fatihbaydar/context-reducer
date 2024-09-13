import React, { createContext, useState } from 'react'
import Home from './components/Home'
import data from "./data"

export const StudentContext = createContext()
const App = () => {
  
  const[students, setStudents] = useState(data)
  const changeColor = (id,newRenk) => {
    setStudents(students.map((a) =>a.id===id ? {...a, color: newRenk} : a)) 
  }
  return (
    <div>
      <StudentContext.Provider value={{students, changeColor}}>
         <Home/>
      </StudentContext.Provider>
     

    </div>
  )
}

export default App