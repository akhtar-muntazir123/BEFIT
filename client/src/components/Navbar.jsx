import { React, useState } from "react";
import styled from "styled-components";
import { Link as LinkR, NavLink } from "react-router-dom";
import MenuRounded from "@mui/icons-material/MenuRounded";
import LogoImage from "../utils/images/Logo.png";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import {logout} from "../redux/reducers/userSlice";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg_primary};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: black;
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary + 20};
`;

const NavContainer = styled.div`
width:100%;
max-width:1400px;
padding:0 24px;
display:flex; g
gap :14px;align-items:center;
justify-content:space-between;
font-size:1rem;
`;
const NavLogo = styled(LinkR)`
  font-family: "Lexend Deca", sans-serif;
  font-optical-sizing: auto;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 6px;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  font-size: 20px;
`;
const Logo = styled.img`
  height: 42px;
`;
const Mobileicon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
const NavItems = styled.ul`
  transition: all 0.5s ease;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Navlink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  &.active {
    color: ${({ theme }) => theme.primary};
    border-bottom: 1.8px solid ${({ theme }) => theme.primary};
  }
  font-weight: 500;
  cursor: pointer;
  transition: all 1s slide-in;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const UserContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 6px;
  gap: 16px;
  color: ${({ theme }) => theme.primary};
`;
const TextButton = styled.div`
text-align:end;color:${({ theme }) => theme.secondary}
cursor:pointer;
font-size:16px;
transition:all 0.3s ease`;

const MobileMenu = styled.ul`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 80%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light};
  position: absolute;
  top: 60px;
  transition: all 0.5s ease;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};

  // display:none
`;

const Navbar = ({ currentUser }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  console.log(currentUser?.name[0])
  return (
    <Nav>
      <NavContainer>
        <Mobileicon
          style={{ padding: "15px" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuRounded sx={{ color: "inherit" }} />{" "}
        </Mobileicon>
        <NavLogo to="/">
          <Logo src={LogoImage} />
          Befit
        </NavLogo>
        <MobileMenu isOpen={isOpen}>
          <Navlink to="/">Dashboard</Navlink>
          <Navlink to="/workouts">Workouts</Navlink>
          <Navlink to="/Tutorial">Tutorial</Navlink>
          <Navlink to="/blogs">Blogs</Navlink>
          <Navlink to="/contact">Contact</Navlink>
        </MobileMenu>
        <NavItems>
          <Navlink to="/">Dashboard</Navlink>
          <Navlink to="/workouts">Workouts</Navlink>
          <Navlink to="/Tutorial">Tutorial</Navlink>
          <Navlink to="/blogs">Blogs</Navlink>
          <Navlink to="/contact">Contact</Navlink>
        </NavItems>
        <UserContainer>
          <Avatar src={currentUser?.img}>{currentUser?.name[0].toUpperCase()}</Avatar>
          <TextButton 
          onClick={()=>{dispatch(logout())}}
          >Logout</TextButton>
        </UserContainer>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
