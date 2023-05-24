import React from "react";
import styled from "styled-components";
import Journey from '../Images/Journey.png'
import Img4 from '../Images/Products/4.png';
import Mission from '../Images/Mission.png'
import Vision from '../Images/Vision.png'

const Container = styled.div`
  min-height: 80vh;
  padding-top: 20px;
`;
const Heading = styled.h1`
  font-weight: 200;
  font-size: 33px;
  font-family: "Righteous", cursive;
  color: #96948d;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
    padding: 20px;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 80%;
  object-fit: cover;
`;
const ImageJourney = styled.img`
  width: 25vw;
  height:45vh;
  object-fit: cover;
`;
const ImageMission = styled.img`
  width: 25vw;
  height:45vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;

`;
const Title = styled.div`
  font-weight: 200;
  font-size: 22px;
  font-family: "Josefin Sans", sans-serif;
  color: #1b1b1b;
  margin-top: 20px;
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-size: 16px;
  font-family: "Josefin Sans", sans-serif;
  color: #5e5e5e;
`;

function Aboutus() {
  return (
    <Container>
      <Heading>ABOUT US</Heading>
      <Wrapper>
        <ImgContainer>
          <Image
            src={Img4}
            alt="Video Camera"
          />
        </ImgContainer>
        <InfoContainer>
          <Title>WHO WE ARE</Title>
          <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a malesuada ex, sed iaculis purus.
          Vestibulum dignissim, nunc sed interdum posuere, nisl nibh porta leo, congue tincidunt lorem erat vitae enim. 
          Sed scelerisque justo quis dictum placerat. Cras suscipit, tellus nec cursus varius, dui dui pulvinar magna, 
          vitae molestie quam magna ut odio. Praesent vitae ullamcorper justo. Praesent auctor lacus aliquam, ullamcorper odio eu, 
          sollicitudin elit. Quisque porttitor pharetra eros sit amet pharetra. Donec commodo rhoncus velit, 
          ornare commodo nibh gravida a. Integer malesuada neque arcu, a tristique eros gravida eget. Sed at nisi felis. 
          Nunc in lacinia enim, sed feugiat ex. Duis rhoncus, sem sed sagittis venenatis, neque mauris dictum erat, vitae aliquam enim mi nec mi.
          </Desc>
        </InfoContainer>
      </Wrapper>

      <Heading>The Start</Heading>
      <Wrapper>
      <InfoContainer>
          <Title>Reason behind the birth of VEGANHOF </Title>
          <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a malesuada ex, sed iaculis purus.
          Vestibulum dignissim, nunc sed interdum posuere, nisl nibh porta leo, congue tincidunt lorem erat vitae enim. 
          Sed scelerisque justo quis dictum placerat. Cras suscipit, tellus nec cursus varius, dui dui pulvinar magna, 
          vitae molestie quam magna ut odio. Praesent vitae ullamcorper justo. Praesent auctor lacus aliquam, ullamcorper odio eu, 
          sollicitudin elit. Quisque porttitor pharetra eros sit amet pharetra. Donec commodo rhoncus velit, 
          ornare commodo nibh gravida a. Integer malesuada neque arcu, a tristique eros gravida eget. Sed at nisi felis. 
          Nunc in lacinia enim, sed feugiat ex. Duis rhoncus, sem sed sagittis venenatis, neque mauris dictum erat, vitae aliquam enim mi nec mi.
         </Desc>
        </InfoContainer>
        <ImgContainer>
          <ImageJourney
            src={Journey}
            alt="Journey Image"
          />
        </ImgContainer>
      </Wrapper>

      <Heading>Mission</Heading>
      <Wrapper>
        <ImgContainer>
          <ImageMission
            src={Mission}
            alt="Mission"
          />
        </ImgContainer>
        <InfoContainer>
          <Title>What we stand for</Title>
          <Desc>
 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a malesuada ex, sed iaculis purus.
          Vestibulum dignissim, nunc sed interdum posuere, nisl nibh porta leo, congue tincidunt lorem erat vitae enim. 
          Sed scelerisque justo quis dictum placerat. Cras suscipit, tellus nec cursus varius, dui dui pulvinar magna, 
          vitae molestie quam magna ut odio. Praesent vitae ullamcorper justo. Praesent auctor lacus aliquam, ullamcorper odio eu, 
          sollicitudin elit. Quisque porttitor pharetra eros sit amet pharetra. Donec commodo rhoncus velit, 
          ornare commodo nibh gravida a. Integer malesuada neque arcu, a tristique eros gravida eget. Sed at nisi felis. 
          Nunc in lacinia enim, sed feugiat ex. Duis rhoncus, sem sed sagittis venenatis, neque mauris dictum erat, vitae aliquam enim mi nec mi.
        

          </Desc>
        </InfoContainer>
      </Wrapper>

      <Heading>Vision</Heading>
      <Wrapper>
      <InfoContainer>
          <Title>What Defines Us </Title>
          <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a malesuada ex, sed iaculis purus.
          Vestibulum dignissim, nunc sed interdum posuere, nisl nibh porta leo, congue tincidunt lorem erat vitae enim. 
          Sed scelerisque justo quis dictum placerat. Cras suscipit, tellus nec cursus varius, dui dui pulvinar magna, 
          vitae molestie quam magna ut odio. Praesent vitae ullamcorper justo. Praesent auctor lacus aliquam, ullamcorper odio eu, 
          sollicitudin elit. Quisque porttitor pharetra eros sit amet pharetra. Donec commodo rhoncus velit, 
          ornare commodo nibh gravida a. Integer malesuada neque arcu, a tristique eros gravida eget. Sed at nisi felis. 
          Nunc in lacinia enim, sed feugiat ex. Duis rhoncus, sem sed sagittis venenatis, neque mauris dictum erat, vitae aliquam enim mi nec mi.
          </Desc>
        </InfoContainer>
        <ImgContainer>
          <ImageJourney
            src={Vision}
            alt="Vision Image"
          />
        </ImgContainer>
      </Wrapper>
    </Container>
  );
}

export default Aboutus;
