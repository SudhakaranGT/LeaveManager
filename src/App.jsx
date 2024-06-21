import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/hero'
import History from './Components/History/History'
import LeaveForm from './Components/CreateLeave/LeaveForm'
const App = () => {
  console.log("App is started..!")
  return (
    <div>
      <Navbar/>
      <Hero />
      <History/>
      <LeaveForm/>
    </div>
  )
}

export default App
