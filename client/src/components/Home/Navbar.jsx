import { Box, Image, Typography } from '@mui/material'
import React from 'react'
import { navData } from '../../constant/Data'
import styled from '@emotion/styled'


const Component= styled(Box)`
display: flex;
margin:60px 130px 0 130px;
justify-content: space-between

`
const Container= styled(Box)`
padding: 12px 8px;
text-align: center;

`
const Text=styled(Typography)`
font-size: 14px;
font-weight: 600px;
font-family:inherit;
`


const Navbar = () => {
  return (
    <Component>
        {navData.map((navItem)=>{
            return<Container>
                <img width="64px" src={navItem.url}></img>
                <Text>{navItem.text}</Text>
            </Container>
        })}

    </Component>
  )
}

export default Navbar