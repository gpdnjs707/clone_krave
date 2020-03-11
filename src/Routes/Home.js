import React from "react";
import styled, { keyframes } from "styled-components";
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.img});
  background-position-x: center;
  background-position-y: bottom;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Show = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const SectionContainer = styled.div`
  &.active .active {
    opacity: 1;
    transition-property: opacity;

    transition-duration: 1s;
    transition-timing-function: ease-in;
  }
  &.active .activePrice {
    opacity: 1;
    transition-property: opacity;

    transition-duration: 1s;
    transition-delay: 0.3s;
    transition-timing-function: ease-in;
  }
  &.active .activeBtn {
    opacity: 1;
    transition-property: opacity;

    transition-duration: 1s;
    transition-delay: 0.7s;
    transition-timing-function: ease-in;
  }
`;

const Title = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  color: #000;
  text-align: center;
  font-weight: 300;
  font-size: 32px;
  letter-spacing: 6px;
  margin-bottom: 15px;
  padding: 5px;
  white-space: pre-wrap;
  opacity: 0;
`;

const Price = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  color: #000;
  text-align: center;
  font-size: 18px;
  letter-spacing: 0.5px;
  margin-bottom: 15px;
  padding: 5px;
  opacity: 0;
`;

const Button = styled.div`
  cursor: pointer;
  width: 200px;
  line-height: 34px;
  font-size: 16px;
  padding: 7px;
  border: 2px solid #000;
  display: inline-block;
  background: rgba(255, 255, 255, 0.6);
  color: #000;
  font-weight: 700;
  text-align: center;
  opacity: 0;
  &:hover {
    background: #000;
    color: white;
    transition-property: width, height, background-color, font-size, left, top,
      right, bottom, border, color, margin, opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease;
  }
`;

const SNSContainer = styled.div`
  width: 20px;
  height: 150px;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 50px;
  right: 22px;
  overflow: hidden;
  z-index: 100;
`;

const SNSItem = styled.div`
  width: 20px;
  height: 20px;
  margin-bottom: 25px;
  background-image: url(${props => props.icon});
  background-size: cover;
  background-position: center;
`;

class Section extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 600,
      delay: 200
    });
  }
  render() {
    const { title, price, button, url } = this.props;
    return (
      <Container img={url} styles={{ backgroundImage: `url(${url})` }}>
        <Title className="active">{title}</Title>
        <Price className="activePrice">{price}</Price>
        <Button className="activeBtn">{button}</Button>
      </Container>
    );
  }
}

const Home = () => (
  <>
    <SNSContainer>
      <SNSItem icon={require("../assets/snslink_2_01.png")} />
      <SNSItem icon={require("../assets/snslink_2_03.png")} />
      <SNSItem icon={require("../assets/snslink_2_04.png")} />
    </SNSContainer>
    <ReactFullpage
      // //fullpage options
      // licenseKey={"YOUR_KEY_HERE"}
      navigation={true}
      // scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <SectionContainer className="section">
              <Section
                url="https://kravebeauty.co.kr/web/season2_skin/skin1/images/allmain_pc-min.jpg"
                title="지금 피부가 필요로 하는 것을 오쏘심플 하게 더해봐요"
                price="Oh So Simple"
                button="PRESS RESET"
              />
            </SectionContainer>
            <SectionContainer className="section">
              <Section
                url="https://kravebeauty.co.kr/web/season2_skin/skin1/images/2.jpg"
                title="그레이트 배리어"
                price="28,000원"
                button="VIEW PRODUCT"
              />
            </SectionContainer>
            <SectionContainer className="section">
              <Section
                url="https://kravebeauty.co.kr/web/season2_skin/skin1/images/3.jpg"
                title="비트 더 선 SPF 50+, PA++++"
                price="20,000원"
                button="VIEW PRODUCT"
              />
            </SectionContainer>
            <SectionContainer className="section">
              <Section
                url="https://kravebeauty.co.kr/web/season2_skin/skin1/images/4.jpg"
                title="말차 햄프 하이드레이팅 클렌저"
                price="16,000원"
                button="VIEW PRODUCT"
              />
            </SectionContainer>
          </ReactFullpage.Wrapper>
        );
      }}
    />
    <Footer />
  </>
);

export default Home;
