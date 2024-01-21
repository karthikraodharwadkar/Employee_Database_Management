import React, { useContext } from 'react'
import { employeeContext } from '../../App'
import EmployeeListCard from './EmployeeListCard'

export default function EmployeeList() {

    const {employeeData} =  useContext(employeeContext)

  return (
    <div className='employee-list-container'>
        <div className='empoloyee-list-header'>
            Employee List
        </div>
        <div className='employee-list'>
            {employeeData?.map((employee,index)=>{
                return(
                    <div key={index}>
                        <EmployeeListCard employee={employee}/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
