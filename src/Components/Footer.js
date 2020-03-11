import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 300px;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Company = styled.div`
  width: 100%;
`;

const Links = styled.div`
  width: 100%;
`;

const Escro = styled.div``;

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Company></Company>
        <Links>
          <span>
            Copyright KraveBeauty All right reserved / design by MOSEN / Hosting
            by CAFE24 / Agreement / 개인정보취급방침 / Guide
          </span>
        </Links>
        <Escro>
          <span>
            고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한
            PG사의 구매안전서비스를 이용하실 수 있습니다. 　 LG U+ 에스크로
            (서비스가입사실확인)
          </span>
        </Escro>
      </Container>
    );
  }
}

export default Footer;
