import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
const Header = () => {
  return (
    <MainHeader>
      {/* anchor tag se page refresh hota thaa but navlink se bina page refresh huwe content load ho jata hai */}
      {/* isiliye NavLink use kr rhe */}
      <NavLink to="/">
        <img src="./images/logo.png" alt="logo" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`

  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: clearInterval;
  position: relative;

  .logo {
    height: 5rem;
  }
`;

export default Header;
