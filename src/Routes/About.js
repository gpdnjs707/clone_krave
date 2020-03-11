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
  background-position-x: center;
  @media (max-width: 800px) {
    width: 100%;
    height: 400px;

    background-repeat: no-repeat;
  }
`;

const Desc = styled.div`
  width: 50%;
  padding: 60px;
  padding-top: 200px;
  @media (max-width: 800px) {
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

class About extends React.Component {
  render() {
    return (
      <Container>
        <Img img="https://kravebeauty.co.kr/web/season2_skin/skin1/images/about_20190426.jpg" />
        <Desc>
          <p>WHY WE DO</p>
          <span>
            안녕하세요! <strong>인텐셔널 스킨케어 브랜드 크레이브뷰티</strong>
            입니다.
            <br />
            저희는 피부에 더 바르기만을 강요하는 화장품 트렌드와 마케팅에
            휘둘렸던 과거로 인해 <br />
            피부는 물론 마음의 상처(마상..) 를 입은 사람들이 똘똘 뭉친 팀이에요.
            <br />
            <br />
            저희는 화장품 만드는 것도 재밌고 잘하기도 하지만,
            <br /> 무엇보다 세상에 할 말이 차암- 많은 사람들이에요.
            <br /> 어쩌면 하고 싶은 말을 더 많이, 더 오래 하고 싶어서
            <br /> 화장품을 만들고 있는지도 모르겠다는 생각이 들 정도로
            말이죠^^;
            <br />
            <br />
            저희는 화장품 회사로서, 유행이나 단기적인 이익을 위한 유혹에
            휩쓸리지 않고
            <br /> 피부에 꼭 필요한 것만을 만들고, 알리는 ‘목적에 맞는’ 것만
            하기 위해 노력할게요.
            <br />
            <br />
            여러분도 자기 내면의 소리를 듣고, 자신만의 답을 찾을 수 있었으면
            좋겠어요. <br />
            완벽 하지 않아도 되요. 누구에게나 맞는 정답은 없으니까요.
            <br />
            <br />
            그저 매일 바르는 화장품을, 매일의 일상을 더 즐길 수 있게 되었으면
            좋겠어요.
            <br />
            <br />
            It's Time To <strong>#PressReset</strong>
          </span>
        </Desc>
      </Container>
    );
  }
}

export default About;
