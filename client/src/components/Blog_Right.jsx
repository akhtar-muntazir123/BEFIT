import React from "react";
import styled from "styled-components";

const Blog_Right = () => {
  const test =
    "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg";

  const Container = styled.div`
    background: wheat;
    height: 575px;
    position: relative;
    border-radius: 20px;
  `;
  const Image = styled.div`
    // background: green;
    background: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    height: 100%;
    height: 180px;
    width: 180px;
    position: absolute;
    top: 70px;
    right: 120px;
    border-radius: 5px;
  `;
  const Text = styled.div`
    width: 530px;
    /* background: blue; */
    position: absolute;
    top: 275px;
    left: 384px;
    font-size: 60px;
    display: flex;
    text-align: center;

    color: white;
    justify-content: center;
  `;
  return (
    <Container>
      <Image image={test}></Image>
      <Text>Hello i am muntazir</Text>
    </Container>
  );
};

export default Blog_Right;
