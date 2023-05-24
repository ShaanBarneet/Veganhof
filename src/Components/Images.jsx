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

const Container = styled.div`
  min-height: 70vh;
  padding-top: 20px;
  background-color: #25222a;
  @media (max-width: 700px) {
    height: auto;
  }
`;

const Heading = styled.h1`
  font-weight: 200;
  font-size: 33px;
  font-family: "Righteous", cursive;
  color: #96948d;
  @media (max-width: 700px) {
    font-size: 28px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  align-content: space-around;
  column-gap: 0px;
  padding: 10px 0px;
`;

const Image = styled.img`
  width: 100%;
  height: 30vh;
`;

const ImageWrapper = styled.div`
  width:30%;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    width: 45%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;





function Images() {
  return (
    <Container id="photoGallery">
      <Heading>Products</Heading>
      <Wrapper>
        <ImageWrapper>
          <Image
            src={Img1}
            title="Image"
            alt="img"
          ></Image>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={Img2}
            title="Image"
            alt="img"
          ></Image>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={Img3}
            title="Image"
            alt="img"
          ></Image>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={Img4}
            title="Image"
            alt="img"
          ></Image>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={Img5}
            title="Image"
            alt="img"
          ></Image>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={Img6}
            title="Image"
            alt="img"
          ></Image>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={Img7}
            title="Image"
            alt="img"
          ></Image>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={Img8}
            title="Image"
            alt="img"
          ></Image>
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src={Img9}
            title="Image"
            alt="img"
          ></Image>
        </ImageWrapper>
      </Wrapper>
    </Container>
  );
}

export default Images;
