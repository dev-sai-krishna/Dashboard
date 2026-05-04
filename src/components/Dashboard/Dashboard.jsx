import React from 'react'
import './Dashboard.css'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'

const DashBoard = () => {
  return (
    <div className="dashBoard">
        <h1>Dashboard</h1>
        <Cards />
        <Table />
    </div>
  )
}

export default DashBoard
