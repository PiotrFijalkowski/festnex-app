import React from 'react'
import RentNow from '../components/rentnow'
import Sidebar from '../components/sidebar'

const RentPage = () => {
  return (
<div className='AppContainer'>
      <Sidebar/>
      <div className="wrapper">
          <h1>Aktualnie wynajmowane</h1>
      <RentNow />
      </div>
    </div>
  )
}

export default RentPage
