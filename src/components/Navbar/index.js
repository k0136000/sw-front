import React from 'react'
import {Nav,NavLink,NavLink2,Bars,NavMenu,NavBtn,NavBtnLink} from "./NavbarElements";
import Logo2 from '../Logo2'
const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink2 to="/">
                <Logo2 />
            </NavLink2>
            <Bars />
            <NavMenu>
                <NavLink to="/sheet-list" activeStyle>
                    악보 리스트
                </NavLink>
                <NavLink to="/convert" activeStyle>
                    악보 변환
                </NavLink>
                <NavLink to="/sheet-regist" activeStyle>
                    악보 등록
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink >로그인</NavBtnLink>
            </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar
