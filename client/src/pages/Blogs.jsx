import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import IMG from "../utils/images/logo.png";
import Blog_Left from "../components/Blog_Left";
import Blog_Right from "../components/Blog_Right";

const Blogs = () => {
  const Container = styled.div`
  display:flex;
  flex:1;
  padding:20px;
  // background:red;
  flex-direction:column;
  overflow-y:scroll`;
  const blogData = [
    {
      img: IMG,
      body: "hello i am muntazir",
    },
    {
      img: IMG,
      body: "hello i am muntazir",
    },
    {
      img: IMG,
      body: "hello i am muntazir",
    },
  ];
  return (
    <>
      <Container>
        {blogData.map((blog, index) => 
          (<div key={index} style={{marginBottom:"40px"}}>
            {index%2==0?<Blog_Left/>:<Blog_Right/>}
            {/* <img alt="#"></img>
            <p>{blog.body}</p> */}
          </div>
      ))}
      </Container>
    </>
  );
};

export default Blogs;
