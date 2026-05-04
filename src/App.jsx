import React from 'react'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import RightSide from './components/RightSide/RightSide'
import DashBoard from './components/Dashboard/Dashboard'
function App() {

  return (

    <div className="App">
      <div className="AppGlass">
        <SideBar />
        <DashBoard/>
        <RightSide/>
      </div>
    </div>
  )
  
}

export default App
