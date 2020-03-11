import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 150px;
  padding-top: 150px;
  justify-content: center;
`;

const Title = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 5px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
`;

const Grid = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const GridList = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

const GridItem = styled.li`
  width: 18px;
  height: 18px;
  margin-left: 12px;
  background-image: url(${props => props.icon});
  background-size: 18px;
  background-repeat: no-repeat;
`;

const ProductList = styled.div`
  width: 100%;
  display: grid;

  &.grid3 {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
  }
  &.grid4 {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
  }
  &.grid5 {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
  }
`;

const ProductItemContainer = styled.div`
  width: 100%;
  margin-bottom: 25px;
`;

const ProductImg = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 130%;
  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const ProductInfo = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px 0;

  & p.name {
    height: 24px;
    font-size: 12px;
    color: #555555;
    margin-bottom: 10px;
    overflow: hidden;
  }
  & p.price {
    font-size: 12px;
    color: #008bcc;
    font-weight: bold;
    margin-bottom: 10px;
  }
  & p.local {
    font-size: 12px;
    color: #555555;
    margin-bottom: 5px;
  }
  & p.shippingFee {
    font-size: 12px;
    color: #555555;
    margin-bottom: 5px;
  }
  & p.shipping {
    font-size: 12px;
    color: #555555;
  }
`;

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      currentGrid: "grid3"
    };
  }

  componentDidMount() {
    this._getList();
  }

  _getList() {
    const apiUrl = "dummy/product_list.json";

    axios
      .get(apiUrl)
      .then(data => {
        this.setState({
          productList: data.data.productList
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleGrid = id => {
    if (id === 3) {
      this.setState({
        currentGrid: "grid3"
      });
    } else if (id === 4) {
      this.setState({
        currentGrid: "grid4"
      });
    } else if (id === 5) {
      this.setState({
        currentGrid: "grid5"
      });
    }
  };
  render() {
    const { productList, currentGrid } = this.state;
    const { handleGrid } = this;
    const list = productList.map(
      ({ id, name, price, local, shippingFee, shipping, category, img }) => (
        <ProductItemContainer key={id}>
          <ProductImg>
            <img src={img} />
          </ProductImg>
          <ProductInfo>
            <p className="name">{name}</p>
            <p className="price">{price}</p>
            <p className="local">
              국내/해외배송: <strong>{local}</strong>
            </p>
            <p className="shippingFee">
              배송비: <strong>{shippingFee}</strong>
            </p>
            <p className="shipping">
              배송방법: <strong>{shipping}</strong>
            </p>
          </ProductInfo>
        </ProductItemContainer>
      )
    );
    return (
      <Container>
        <Title>ALL</Title>
        <Grid>
          <GridList>
            <GridItem
              icon={require("../../assets/toggle_list_btn_03.png")}
              onClick={() => handleGrid(3)}
            />
            <GridItem
              icon={require("../../assets/toggle_list_btn_04.png")}
              onClick={() => handleGrid(4)}
            />
            <GridItem
              icon={require("../../assets/toggle_list_btn_05.png")}
              onClick={() => handleGrid(5)}
            />
          </GridList>
        </Grid>
        <ProductList className={currentGrid}>{list}</ProductList>
      </Container>
    );
  }
}

export default Product;
