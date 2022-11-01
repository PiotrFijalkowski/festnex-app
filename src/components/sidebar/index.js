import React from 'react'
import { NavLink, NavLinkButton, SidebarWrapper } from './SidebarElements'

const Sidebar = () => {
  return (
    <div>
      <SidebarWrapper>
      <NavLink to='/'>
          <NavLinkButton>
            Strona Główna
          </NavLinkButton>
        </NavLink>
      <NavLink to='/customers'>
          <NavLinkButton>
            Klienci
          </NavLinkButton>
        </NavLink>
      <NavLink to='/rent'>
          <NavLinkButton>
            Wynajem
          </NavLinkButton>
        </NavLink>
      </SidebarWrapper>
      

      
    </div>
  )
}

export default Sidebar
