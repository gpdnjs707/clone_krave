import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Img = styled.div`
  width: 50%;
  height: 100vh;
  background-image: url(${props => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 800px) {
    width: 100%;
    height: 400px;
  }
  @media (max-width: 375px) {
    height: 250px;
  }
`;

const Desc = styled.div`
  width: 50%;
  padding: 60px;
  padding-top: 150px;

  @media (max-width: 800px) {
    padding-top: 50px;
    width: 100%;
  }
  @media (max-width: 375px) {
    padding: 25px;
    padding-top: 50px;

    width: 100%;
  }
  & p {
    font-size: 28px;
    letter-spacing: 2px;
    margin-bottom: 50px;
    font-weight: 700;
  }
  & span {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.8px;
  }
`;

const Video = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

class Brandstory extends React.Component {
  render() {
    return (
      <Container>
        <Img img="https://kravebeauty.co.kr/web/season2_skin/skin1/images/brandstory_img.jpg" />
        <Desc>
          <p>WHAT WE DO</p>
          <span>
            언제부터 스킨케어가 이렇게 어려워졌나요?
            <br />
            스킨케어 제품과 정보는 넘쳐나지만 오히려 명쾌한 해답보다는 혼란만
            가중되고 있죠. <br />
            크레이브뷰티는 여기에 리셋 버튼을 제공하고자 태어났어요. <br />
            우리, 지금까지 학습해온 스킨케어는 모두 잊고, 다시 근본으로
            돌아가요. <br />
            더도 말고, 덜도 말고, 피부가 원하는 것만 채워주세요. 그럼 피부도
            최상의 컨디션으로 보답할거에요.
            <br />
            <br />
          </span>
          <Video>
            <iframe
              src="https://www.youtube.com/embed/ybF8vMnivK4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Video>
        </Desc>
      </Container>
    );
  }
}

export default Brandstory;
