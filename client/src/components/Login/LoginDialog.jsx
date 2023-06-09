import React, { useState, useSyncExternalStore } from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, Button, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { authenticateSignup } from '../../service/api';


const Component=styled(Box)`
height: 70vh;
width: 90vh;


`

const Image=styled(Box)`
background: coral url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png') center 85% no-repeat ;
height: 100%;
width:40%;
padding: 45px 35px;
& > p , &> h5{
    color: #FFFFff;
    font-weight:400;

}
`

const Wrapper= styled(Box)`
display: flex;
flex-direction: column;
padding: 45px 30px;
flex: 1;
& > div, & > button, & > p{
    margin-top :20px;
}
text-align: center;

`

const LoginButton= styled(Button)`
text-transform:none;
background:#1F74BA;
color: Black;
height: 48px;
`
const RequestOtp= styled(Button)`
text-transform:none;
background:#fff;
color: #2874f0;
height: 48px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/20%)

`

const Text=styled(Typography)`

font-size:12px
color:#878787 

`

const CreateAccount= styled(Typography)`
font-size: 12px;
color:#2874f0 ;
cursor: pointer;
font-weight: 400;


`

const signupValues={
    phonenumber:"",
    password:'',
    firstname:"",
    lastname:"",
    email:''}


const accountInitailValue={
    Login:{
        view:"login",
        heading:"Login",
        subheading:"Get Access to your orders, website and Recommendations."
    },
    signup:{
        view:"signup",
        heading:"Looks like you're new here",
        subheading:"Sign up with your mobile to get started",
    }
}
const LoginDialog = ({login, setLogin}) => {

    const [account, ToggleAccount]=useState(accountInitailValue.Login)
    const [signup, setSignUp]= useState(signupValues)

    const toggleSignUp=()=>{
        console.log("clicked")
        ToggleAccount(accountInitailValue.signup)

    }
    

    const handleChange=(e)=>{
        setSignUp({...signup,[e.target.name]:e.target.value})
        
    }

    const handlesignUp= async()=>{
        console.log("clicked")
      const response =  await authenticateSignup(signup)

      console.log(response, "response")

    }

    console.log('values', signup)

    const handleSignup=async()=>{
        console.log("check")
        const response =  await authenticateSignup(signup)

        console.log(response, "response")

    }

    
  return (<>
    <Dialog open={login} onClose={()=>setLogin(false)} PaperProps={{sx:{maxWidth:"unset"}}}>
        <Component>
            <Box style={{display: "flex", height:"100%"}}>

            <Image>
                <Typography>{account.heading}</Typography>
                <h4>{account.subheading}</h4>
            </Image>

            {account.view==="login" ?   <Wrapper>
                <TextField variant='standard' label='Enter Email/Mobile Number' onChange={handleChange}/>
                <TextField variant='standard' label='Enter Password/' onChange={handleChange}/>
                <Text>By Continuing, you agree to flipkart Terms of use and Privacy Policy</Text>
                <LoginButton>Login</LoginButton>
                <Typography>Or</Typography>
                <RequestOtp>Request OTP</RequestOtp>
                <CreateAccount onClick={toggleSignUp}>New To Flipkart? Create An Account</CreateAccount>
            </Wrapper> :

              <Wrapper>
              <TextField variant='standard' label='Enter Email/Mobile Number' name="email" onChange={handleChange}/>
              <TextField variant='standard' label='Enter Password' name="password" onChange={handleChange}/>
              <TextField variant='standard' label='Enter Phonenumber' name="phonenumber" onChange={handleChange}/>
              <TextField variant='standard' label='Enter firstname' name="firstname" onChange={handleChange}/>
              <TextField variant='standard' label='Enter lastname/'name="lastname" onChange={handleChange}/>
              <Text>By Continuing, you agree to flipkart Terms of use and Privacy Policy</Text>
            
       <LoginButton onClick={handleSignup}>Continue</LoginButton>
       {/* <Button >Check</Button> */}
          </Wrapper>
             }
          
            </Box>
        </Component>

    </Dialog>
  </>

  )
}

export default LoginDialog