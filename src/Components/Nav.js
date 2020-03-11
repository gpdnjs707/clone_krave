import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Menu from "./WithRouter";

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;

  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  @media (max-width: 600px) {
    /* justify-content: center; */
    justify-content: flex-start;
  }
`;

const Logo = styled.div`
  width: 90px;
  height: 35px;
  margin: 0 30px;
  & img {
    width: 80px;
    object-fit: cover;
  }
`;

const CollaseIcon = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    width: 30px;
    height: 30px;
    margin-left: 20px;
    background-image: url(${require("../assets/icons8-menu.png")});
    background-size: cover;
  }
`;

const CollapseMenu = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: ${props => (props.display ? "block" : "none")};
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 100%;

    background-color: black;
    z-index: 2000;
  }
`;

class Nav extends React.Component {
  state = {
    isMenuClicked: false,
    isMenuOpened: false,
    isCollapseMenu: false,
    active: 0
  };

  handleMenuClick = id => {
    console.log("click");
    const { isMenuClicked, isMenuOpened, active } = this.state;

    if (active === id) {
      this.setState({
        isMenuClicked: !isMenuClicked,
        isMenuOpened: !isMenuOpened,
        active: id
      });
    } else if (active !== id) {
      this.setState({
        isMenuClicked: true,
        isMenuOpened: !isMenuOpened,
        active: id
      });
    }
  };

  handleMenuClose = () => {
    const { isMenuClicked, isMenuOpened } = this.state;

    this.setState({
      isMenuClicked: false,
      isMenuOpened: false
    });
  };

  handleCollapse = () => {
    const { isCollapseMenu } = this.state;
    console.log("click");

    this.setState({
      isCollapseMenu: !isCollapseMenu
    });
  };

  render() {
    const { isMenuClicked, isCollapseMenu, active } = this.state;
    const { handleMenuClick, handleCollapse } = this;
    return (
      <>
        <CollapseMenu display={isCollapseMenu}></CollapseMenu>
        <Container>
          <CollaseIcon onClick={() => handleCollapse()}></CollaseIcon>

          <Logo>
            <Link to="/">
              <img src={require("../assets/logo.png")} />
            </Link>
          </Logo>
          <Menu
            menu={isMenuClicked}
            onClick={handleMenuClick}
            id={active}
            collapse={isCollapseMenu}
          />
        </Container>
      </>
    );
  }
}

export default Nav;
