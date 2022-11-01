import React, { useState } from 'react'
import { useEffect } from 'react'
import Popup from '../popup'
import './customers.scss'

const Customers = () => {
  const [customers, setCustomers] = useState(() => { return JSON.parse(localStorage.getItem('customers')) || []})
  const [editToggle, setEditToggle] = useState(true);
  const [isHide, setisHide] = useState(true)
  const [actualId, setActualId] = useState('')
  const [editValue, seteditValue] = useState({ firstName: '', adress: '', pesel: '', id: '', rents: '',})
  
useEffect(() => {
  localStorage.setItem('customers', JSON.stringify(customers))
}, [customers])

  const editToggleSwitch = (e) => {
      e.preventDefault();
      setEditToggle(!editToggle)
  }

  const handleSubmitEdit = (e) => {
      e.preventDefault();
      const newState = [...customers];
      newState[actualId] = editValue
      setCustomers(newState);
      console.log(customers)
      setEditToggle(!editToggle)
  }

    const editRow = (e) => {
      const findId = e.target.id.toString();
      // eslint-disable-next-line eqeqeq
      const findResults = customers.filter((currElement, index) => index == findId)
      seteditValue(findResults[0]);
      setEditToggle(!editToggle)
      setActualId(findId)
    }
    const toggle = (e) => {
      e.preventDefault();
      setisHide(!isHide)
      console.log(isHide)
  }

  return (
    <div className='CustomersContainer'>
      <h1 className='Tittle'>Lista Klientów</h1>
      <button className='green ml-25' onClick={toggle}>Dodaj nowego Klienta</button>
      <Popup 
      customers={customers}
      setCustomers={setCustomers}
      isHide={isHide}
      setisHide={isHide}
      toggle={toggle}
      />

      <div className={editToggle? "popupEdit hidden": "popupEdit"}>       
      <form onSubmit={e => e.preventDefault()} >
        <div className='inputWrapper'>
          <label htmlFor='firstName'>Imię i Nazwisko</label>
          <input 
          type="text" 
          id='firstName'
          value={editValue.firstName || ""}
          onChange={e => seteditValue({...editValue, firstName: e.target.value })}
           />
        </div>
        <div className="inputWrapper">
          <label htmlFor='adres'>Adres Zameldowania</label>
          <input 
          type="text" 
          id='adres'
          value={editValue.adress || ""}
          onChange={e => seteditValue({ ...editValue, adress: e.target.value })}
           />
        </div>
        <div className="inputWrapper">
          <label htmlFor='pesel'>Pesel</label>
          <input 
          type="number" 
          id='pesel'
          value={editValue.pesel || ""}
          onChange={e => seteditValue({ ...editValue, pesel: e.target.value })}
           />
        </div>
        <div className="inputWrapper">
          <label htmlFor='identityNumber'>Nr Dokumentu Tożsamości</label>
          <input 
          type="text" 
          id='identityNumber'
          value={editValue.identityNumber || ""}
          onChange={e => seteditValue({ ...editValue, identityNumber: e.target.value })}
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor='rents'>Ile razy wynajmował konsole?</label>
          <input type="number" 
          id='rents'
          value={editValue.rents || ""}
          onChange={e => seteditValue({ ...editValue, rents: e.target.value })}
          required
          />
        </div>




        <div className="buttonWrapper">

        <button type='submit' className='green' onClick={handleSubmitEdit}>Zapisz</button>
        <button className='red' onClick={editToggleSwitch}>Anuluj</button>
        </div>
      </form>
      <div className="popupbg" onClick={editToggleSwitch}></div>
      </div>
<div className="table">
<div className="tableRow">
  <div className="tableColumn">
      <span>ID</span>
  </div>
  <div className="tableColumn">
      <span>Imię i Nazwisko</span>
  </div>
  <div className="tableColumn">
      <span>Adres</span>
  </div>
  <div className="tableColumn">
      <span>Pesel</span>
  </div>
  <div className="tableColumn">
      <span>Dokument Tożsamości</span>
  </div>
  <div className="tableColumn">
      <span>Ilość Wynajmów</span>
  </div>
</div>


{
customers.map((currElement, index) => {

  return   <div className="tableRow" id={index} onClick={editRow}>
    <div className="tableColumn">
      <span>{index+1}</span>
    </div>
    <div className="tableColumn">
      <span>{currElement.firstName}</span>
    </div>
    <div className="tableColumn">
      <span>{currElement.adress}</span>
    </div>
    <div className="tableColumn">
      <span>{currElement.pesel}</span>
    </div>
    <div className="tableColumn">
      <span>{currElement.identityNumber}</span>
    </div>
    <div className="tableColumn">
      <span>{currElement.rents}</span>
    </div>
  </div>
}
)

}

</div>

    </div>
  )
}

export default Customers
