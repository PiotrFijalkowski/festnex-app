import React from 'react'
import { useState } from 'react'
import { RentNowBox, RentNowBoxDateFrom, RentNowBoxEndDate, RentNowBoxPrice, RentNowBoxText, RentNowBoxTitle, RentNowContainer } from './RentNowElements'
import './rentnow.scss'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const RentNow = () => {
const [xboxSS1, setxboxSS1] = useState({
  name: 'Xbox Series S#1', 
  rent: true, 
  customer: 'Sebastian Szkiłądź', 
  datestart: '13-08-2022 19:55', 
  dateend: '-',
  price: '15PLN' })

const [inRent, setinRent] = useState([])
const options = [
  'Xbox Series S#1', 'Xbox Series S#2'
];
const customersName = JSON.parse(localStorage.getItem('customers'));
const customersNameSort = customersName.map((nameMapped, index) => {
  return nameMapped.firstName
})
const defaultOption = options[0];

const ButtonRentHandler  = (e) => {
  e.preventDefault();
  console.log('click')

}
const DropdownHandler  = (e) => {
  console.log(e.value)

  
}

  return (
    <>
    <div className='button-container'>
      
      <button className='addrentbutton' onClick={ButtonRentHandler} >Dodaj Wynajem</button>
      <Dropdown options={options} value={defaultOption} onChange={DropdownHandler} placeholder="Select an option" />
      <Dropdown options={customersNameSort} value={customersNameSort[0]} onChange={DropdownHandler} placeholder="Select an option" />
    </div>
      <RentNowContainer>
        <RentNowBox>
          <RentNowBoxTitle>{xboxSS1.name}</RentNowBoxTitle>
          <RentNowBoxText>{xboxSS1.customer}</RentNowBoxText>
          <RentNowBoxDateFrom>{xboxSS1.datestart}</RentNowBoxDateFrom>
          <RentNowBoxEndDate>{xboxSS1.dateend}</RentNowBoxEndDate>
          <RentNowBoxPrice>{xboxSS1.price}</RentNowBoxPrice>
        </RentNowBox>
      </RentNowContainer>
    </>
  )
}

export default RentNow
