import React,{useState} from 'react'
import styled from 'styled-components'
import TextInput from './TextInput'
import Button from './Button'
import UserSignIn from "../api"
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../redux/reducers/userSlice'

const Container= styled.div`
width:100%;
max-width:500px;
display:flex;
flex-direction:column;
gap:36px`
const Title= styled.div`
font-size:30px;
font-weight:800;
color:${({theme})=>theme.text_primary}`
const Span= styled.span`
font-size:16px
font-weight:800;
color:${({theme})=>theme.text_secondary}`


const SignIn = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateInputs=()=>{
    if (!email||!password)
    {
      alert("please fill all the fields");
      return false;
    }
    return(true)
  }
  const handleSignin=async()=>{
    setLoading(true);     
    setButtonDisabled(true);

    //need alerting for wrong
    if (validateInputs())
      {
        await UserSignIn({email,password}).then((res)=>{
          console.log("res",res)
          dispatch(loginSuccess(res.data));
          alert("login successful")
          setLoading(false);     
          setButtonDisabled(false);
        })
        .catch((err)=>{
          alert("wrong credentials")
          setLoading(false);
          setButtonDisabled(false);
          // alert(err.res.data.message);
        })
      }        
  }
  return (
    <Container>
       <div>
        <Title>Welcome to BEFIT👋</Title>
        <Span>Please login with your details here</Span>
       </div>
       <div
       style={{
        display:"flex",
        gap:"20px",
        flexDirection:"column"
       }}>
        <TextInput
        label="Email Address"
        placeholder="Enter your email adress"
        value={email}
        handleChange={(e)=>setEmail(e.target.value)}
        />
        <TextInput
        label="Password"
        placeholder="Enter your password"
        value={password}
        handleChange={(e)=>setPassword(e.target.value)}
   
        />
        <Button 
        text="Signin"
        onClick={handleSignin}
        isLoading={loading}
        isDisabled={buttonDisabled}/>
       </div>
    </Container>
  )
}

export default SignIn
