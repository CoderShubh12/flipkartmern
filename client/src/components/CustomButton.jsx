import { Box, Button, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from './Login/LoginDialog';
const Wrapper= styled(Box)`
display: flex;
margin: 0 3% 0 auto;
& > button, & > p, &> div{
    margin-right : 40px;
    font-size: 14px;
}
`

const Conatiainer=styled(Box)`
display: flex`

const LoginButton= styled(Button)`

background-color: #fff;
color : coral;
margin-left: 10px;
text-transform:none;
font-weight: 600;
`

const CustomButton = () => {
  const [logindia, setLoginDia]= useState(false)


  return (
    <Wrapper>
        <LoginButton variant='contained' onClick={()=>setLoginDia(true)}>Login</LoginButton>
        <Typography style={{marginTop:3, width:135}}>Become a seller </Typography>
        <Typography style={{marginTop:3}}>More </Typography>
        <Conatiainer>
            <ShoppingCartIcon/>
            <Typography>Cart</Typography>
        </Conatiainer>
     {logindia===true?   <LoginDialog login={logindia} setLogin={setLoginDia}/>
     : ""} 


    </Wrapper>
  )
}

export default CustomButton