import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import LogoImg from "../assests/logo.svg";

const NavBarContainer = styled.div`
  width: 100%;
  height: 80px;
  z-index: 20;
  background: white;
`;

const NavBarWrapper = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  width: 128px;
  height: 22px;
  background: url(${LogoImg});
  background-size: 100% 100%;
  cursor: pointer;
`;

const Nav = styled.nav`
  flex: 1;
  position: relative;
  padding-left: 50px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0 15px;
  font-size: 16px;
  color: black;
  line-height: 80px;
  font-weight: 700;
`;

const Search = styled.div`
  right: 235px;
  position: absolute;
`;

const SearchWrapper = styled.div`
  width: 220px;
  height: 36px;
  position: relative;
  box-sizing: border-box;
  background: rgba(179, 191, 201, 0.15);
  line-height: 33px;
  padding-left: 37px;
  border-radius: 19px;
`;

const Input = styled.input`
  color: white;
  width: 196px;
  border: transparent;
  background: transparent;
  font-size: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 110px;
  color: white;
  cursor: pointer;
  height: 36px;
  font-size: 16px;
  box-sizing: border-box;
  background: #007cff;
  text-align: center;
  line-height: 36px;
  border-radius: 21px;
  outline: none;
  border: none;
`;

const Navbar = () => {
  return (
    <NavBarContainer>
      <NavBarWrapper>
        <Logo />
        <Nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/">MARKET</NavLink>
          <NavLink to="/">TRADE</NavLink>
          <NavLink to="/">PRICING</NavLink>
          <NavLink to="/">DOWNLOAD</NavLink>
          <NavLink to="/">HELP</NavLink>
        </Nav>
        <Search>
          <SearchWrapper>
            <Input type="text" placeholder="Symbol/Name" />
          </SearchWrapper>
        </Search>
        <ButtonContainer>
          <Button
            css={`
              background: white;
              color: #037cff;
            `}
          >
            SIGN UP
          </Button>
          <Button>LOG IN</Button>
        </ButtonContainer>
      </NavBarWrapper>
    </NavBarContainer>
  );
};

export default Navbar;
