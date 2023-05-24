import React from "react";
import styled from "styled-components";
import Img1 from '../Images/Products/1.png';
import Img2 from '../Images/Products/2.png';
import Img3 from '../Images/Products/3.jpg';
import Img4 from '../Images/Products/4.png';
import Img5 from '../Images/Products/5.png';
import Img6 from '../Images/Products/6.png';
import Img7 from '../Images/Products/7.png';
import Img8 from '../Images/Products/8.png';
import Img9 from '../Images/Products/9.png';
import Img10 from '../Images/Products/10.png';
import Img11 from '../Images/Products/11.png';



const Container = styled.div`
  background-color: #25222a;
  height: 80vh;
  @media (max-width: 768px) {
    height: auto;
  }
`;
const Wrapper = styled.div`
  padding: 25px;
  display: flex;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const CarouselContainer = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #25222a;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px;
  height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
`;
const InfoWrapper = styled.div`
  width: 80%;
`;
const Title = styled.div`
  font-family: "Righteous", cursive;
  font-weight: 200;
  color: white;
  font-size: 4vw;
  text-align: center;
`;
const Desc = styled.p`
  margin: 15px 0px;
  color: #dfdfdc;
  font-size: 2vw;
  font-family: "Josefin Sans", sans-serif;
  @media (max-width: 768px) {
    font-size: 3vw;
  }
`;
const Button = styled.button`
  padding: 15px;
  background-color: #dfdfdc;
  cursor: pointer;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 500;
  &:hover {
    background-color: aliceblue;
  }
  @media (max-width: 768px) {
    padding: 7px;
  }
`;

const Introduction = () => {
  return (
    <Container>
      <Wrapper>
        <CarouselContainer>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item">
                <img class="d-block w-100" src={Img1} alt="First slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={Img2} alt="Second slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={Img3} alt="Third slide"/>
              </div>
              <div class="carousel-item active">
                <img class="d-block w-100" src={Img4} alt="Fourth slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={Img5} alt="Fifth slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={Img6} alt="Sixth slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={Img7} alt="Seventh slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={Img8} alt="Eighth slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={Img9} alt="Nineth slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={Img10} alt="Tenth slide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={Img11} alt="Eleventh slide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </CarouselContainer>
        <InfoContainer>
          <InfoWrapper>
            <Title>VEGANHOF</Title>
            <Desc>the organic santury</Desc>
            <a href="#photoGallery">
              <Button>Our Products</Button>
            </a>
          </InfoWrapper>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Introduction;
