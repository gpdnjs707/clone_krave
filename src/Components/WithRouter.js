import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const List = styled.ul`
  display: flex;
  height: 35px;
  line-height: 35px;
  justify-items: center;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  width: 120px;
  height: 35px;
  justify-items: center;
  align-items: center;
  text-align: left;
  font-weight: bold;
  & :hover {
    font-weight: bold;
    opacity: 0.5;
    transition-property: opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease;
  }
`;
const menuMove = keyframes`
    0% {
       height: 0px;
    }
    100% {
        height: 200px;
    }
`;

const SubList = styled.ul`
  display: none;
  &.showSub {
    margin-top: 15px;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: flex-start;
    animation: ${menuMove} 0.7s ease;
  }
`;

const SubItem = styled.li`
  font-size: 12px;
  line-height: 12px;
  font-weight: normal;
  margin: 5px 0px;
  & :hover {
    font-weight: bold;
    opacity: 1;
  }
`;

const CollaseMenuContainer = styled;

class Menu extends React.Component {
  render() {
    const {
      location: { pathname },
      menu,
      onClick,
      id
    } = this.props;
    return (
      <List>
        <ListItem onClick={() => onClick(0)}>
          <span>KRAVE BEAUTY</span>
          <SubList className={menu && id === 0 ? "showSub" : null}>
            <SubItem current={pathname === "/about"} menu>
              <Link to="/about">WHY WE DO</Link>
            </SubItem>
            <SubItem>
              <Link to="/brandstory">WHAT WE DO</Link>
            </SubItem>
            <SubItem>FOUNDER</SubItem>
          </SubList>
        </ListItem>
        <ListItem onClick={() => onClick(1)}>
          <span>PRODUCT</span>
          <SubList className={menu && id === 1 ? "showSub" : null}>
            <SubItem current={pathname === "/product"} menu>
              <Link to="/product">ALL</Link>
            </SubItem>
            <SubItem>WHAT WE DO</SubItem>
            <SubItem>FOUNDER</SubItem>
          </SubList>
        </ListItem>
        <ListItem>COMMUNITY</ListItem>
        <ListItem>BLOG</ListItem>
      </List>
    );
  }
}

export default withRouter(Menu);
