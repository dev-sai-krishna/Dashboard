import { useState } from 'react';
import './SideBar.css'
import Logo from '../../imgs/logo.png'

import { SidebarData } from '../../Data/Data'
import { IoExitOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import {motion} from 'framer-motion'

const SideBar = () => {

  const [selected, setSelected] = useState(0)
  const [expanded, setExpanded] = useState(true)

  const sidebarVariants ={
    true:{
      left: '0'
    },
    false:{
      left: '-60%'
    }
  }

  return (
    <>
    <div className="bars"
     style={expanded ? {left: "60%"} : {left: "8%"}}
     onClick={() => setExpanded(!expanded)}>
      <FaBars />
    </div>
    <motion.div 
  className='sidebar' 
  variants={sidebarVariants}
  animate={window.innerWidth <= 768 ? expanded.toString() : "true"}
>
       <div className="logo">
        <img src={Logo} alt="" />
        <h2>Sh<span>o</span>ps</h2>
       </div>

       <div className="menu">
        
        {SidebarData.map((item, index) =>{
          return(
            <div className={selected===index?"menuItem active" : "menuItem"}
            key={index}
            onClick={() => setSelected(index)}
            >
              <item.icon className='icon'/>
              <span>{item.heading}</span>
            </div>
          )
        })}

        <div className="menuItem">
          <IoExitOutline />
        </div>
       </div>
    </motion.div>
    </>
  )
}

export default SideBar
