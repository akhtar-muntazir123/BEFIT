import {React,useState} from 'react'
import styled from 'styled-components'
import LOGO from '../utils/images/Logo.png'
import AUTHIMAGE from '../utils/images/AuthImage.jpg'
import Signin from '../components/SignIn';
import Signup from '../components/Signup';
const Container=styled.div`
flex:1;
height:100%;
display:flex;
background:${({theme})=>theme.bg};
@media(max-width:700px)
{
flex-direction:column;
}`;

const Left=styled.div`
flex:1;
@media(max-width:700px)
{
display:none;
}`;

const Right=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:40px;
gap:16px;
align-items:center;
justify-content:center
`;

const Logo=styled.img`
position:absolute;
top:40px;
left:60px;
width:70px;
z-index:10; `

const Image=styled.img`position:relative;
width:100%;
height:100%`
const Text= styled.div`font-size:16px;
text-align:center;
color:${({theme})=>theme.text_secondary}
margin-top:16px`

const TextButton= styled.span`
color:${({theme})=>theme.primary};
cursor:pointer;
font-weight:500;
margin-left:2px;
transition: all 0.2s ease`

const Authentication = () => {
  const [login,setLogin]=useState(false)
  return (
    <Container>
      <Left>
        <Logo src={LOGO}/>
        <Image src={AUTHIMAGE}/>
      </Left>
      <Right>
        {!login?(<>
        <Signin/>
        <Text>Don't have an account ? 
        <TextButton onClick={()=>{setLogin(true)}}>SignUp</TextButton>         
        </Text>
         </>):
         <>
         <Signup/>
         <Text>Already have an account , 
         <TextButton onClick={()=>{setLogin(false)}}>Signin .</TextButton> 
         </Text></>}
      </Right>
    </Container>
  )
}

export default Authentication
