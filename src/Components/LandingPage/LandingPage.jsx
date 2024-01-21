import React from 'react'
import Header from '../Header/Header'
import EmployeeList from '../EmployeeList/EmployeeList'
import EmployeeDetail from '../EmployeeDetail/EmployeeDetail'
import "./LandingPage.scss"

export default function LandingPage() {

  return (
    <div className='landingPage-container'>
        <div className='landingPage-header'>
            <Header/>
        </div>
        <div className='landingPage-body'>
            <EmployeeList/>
            <div className='horizontal-line'></div>
            <EmployeeDetail/>
        </div>
        
    </div>
  )
}
