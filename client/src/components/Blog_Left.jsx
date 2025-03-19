
import React from "react";
import styled from "styled-components";
import YouTubeIcon from '@mui/icons-material/YouTube';

const Blog_Left = () => {
  const test="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg";
  const Container = styled.div`
    background: wheat;
    height: 575px;
    position: relative;
    border-radius:20px
  `;
  const Image = styled.div`
    // background: green;
     background-image: url(${(props) => props.image});
         background-size: cover;
    background-position: center;
    height: 100%;
    height: 180px;
    width: 180px;
    position: absolute;
    top: 70px;
    left: 120px;
    border-radius: 5px;
  `;
  const Text= styled.div`
    width: 530px;
    position: absolute;
    top: 275px;
    right: 384px;
    font-size: 5vw; /* Font size relative to viewport width */
    display: flex;
    text-align: center;
    align-items: center;
    color: white;
    justify-content: center;

    /* Responsive design */
    @media (max-width: 768px) {
      font-size: 6vw; /* Adjust font size for tablets */
      width: 100%;
      top: 275px;
      right: 0;
    }

    @media (max-width: 480px) {
      font-size: 7vw; /* Adjust font size for mobile devices */
      width: 90%;
      top: 240px;
      right: 0;
    }
  `;
  const Icon=styled.div`
  // background:red;
  width:100%;
  display:flex;
  flex-direction:row;
  position:absolute;
  bottom:5px;

  justify-content:center;
  align-item:center`
  return (
    <Container>
      <Image image={test} >
        <Icon>
          <YouTubeIcon sx={{ fontSize: "25px", color: "white" }}></YouTubeIcon>
          <YouTubeIcon sx={{ fontSize: "25px", color: "white", margin:"0px 5px" }}></YouTubeIcon>
          <YouTubeIcon sx={{ fontSize: "25px", color: "white" }}></YouTubeIcon>
       
        </Icon>
        </Image>
      <Text>Hello i am muntazir</Text>
    </Container>
  );
};

export default Blog_Left;
