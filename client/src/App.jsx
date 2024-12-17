import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { ThemeProvider, styled } from "styled-components";
import { lightTheme } from "./utils/Themes";
import { Routes,Route,BrowserRouter } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Workouts from "./pages/Workouts";
import Blogs from "./pages/Blogs"
import Contact from "./pages/Contact"

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
background:${({ theme }) => theme.bg};
color:${({ theme }) => theme.text_primary};
overflow-x:hidden;
overflow-y:hidden;
transition all 0.2s ease`;

function App() {
  // true if the usser is logged in  else false he/she will be directed to nav page
  const {currentUser}=useSelector((state)=>state.user);
  console.log("current user",currentUser)
  // const currentUser={name:['Muntazir'],
  //   img:'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-1170x780.jpg'
  // };
  console.log("hi")
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        {currentUser ? (
          <Container>
            <Navbar currentUser={currentUser}/>
            <Routes>
              <Route path="/" exact element={<Dashboard/>}></Route>
              <Route path="/workouts" exact element={<Workouts/>}></Route>
              <Route path="/tutorial" exact element={<Workouts/>}></Route>
              <Route path="/blogs" exact element={<Blogs/>}></Route>
              <Route path="/contact" exact element={<Contact/>}></Route>
            </Routes>
          </Container>
        ) : (
          <Container>
            <Authentication />
          </Container>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
