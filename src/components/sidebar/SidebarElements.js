import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'


export const SidebarWrapper = styled.div`
width: 150px;
background-color: #0C003C;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const NavLink = styled(LinkR)`
  cursor: pointer;
  text-decoration: none;
  display: block;
`

export const NavLinkButton = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
color: white;
font-size: 24px;
font-weight: 900;
`