import React from 'react'
import Customer from '../components/customers'
import Sidebar from '../components/sidebar'

const CustomersPage = () => {
  return (
<div className='AppContainer'>
      <Sidebar/>
      <div className="wrapper">
      <Customer />
      </div>

    </div>
  )
}

export default CustomersPage
