import React, {useState} from 'react'

const Popup = ({customers, setCustomers, isHide, setisHide, toggle}) => {
  const [name, setName] = useState({ firstName: '', adress: '', pesel: '', id: '', rents: '',})

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomers([ ...customers,  name])
    setName('');
    setisHide(!isHide)
  }



  return (
    <div className={isHide? "popup hidden": "popup"}>       
    <form onSubmit={e => e.preventDefault()} >
      <div className="inputWrapper">
        <label htmlFor='firstName'>Imię i Nazwisko</label>
        <input 
        type="text" 
        id='firstName'
        value={name.firstName || ""}
        onChange={e => setName({ ...name, firstName: e.target.value })}
         />
      </div>
      <div className="inputWrapper">
        <label htmlFor='adres'>Adres Zameldowania</label>
        <input 
        type="text" 
        id='adres'
        value={name.adress  || ""}
        onChange={e => setName({ ...name, adress: e.target.value })}
         />
      </div>
      <div className="inputWrapper">
        <label htmlFor='pesel'>Pesel</label>
        <input 
        type="text" 
        id='pesel'
        value={name.pesel  || ""}
        onChange={e => setName({ ...name, pesel: e.target.value })}
         />
      </div>
      <div className="inputWrapper">
        <label htmlFor='identityNumber'>Nr Dokumentu Tożsamości</label>
        <input 
        type="text" 
        id='identityNumber'
        value={name.id  || ""}
        onChange={e => setName({ ...name, identityNumber: e.target.value })}
        />
      </div>
      <div className="inputWrapper">
        <label htmlFor='rents'>Ile razy wynajmował konsole?</label>
        <input type="number" 
        id='rents'
        value={name.rents  || ""}
        onChange={e => setName({ ...name, rents: e.target.value })}
        required
        />
      </div>




      <div className="buttonWrapper">

      <button type='submit' className='green' onClick={handleSubmit}>Dodaj</button>
      <button className='red' onClick={toggle}>Zamknij</button>
      </div>
    </form>
    <div className="popupbg" onClick={toggle}></div>
    </div>
  )
}

export default Popup
