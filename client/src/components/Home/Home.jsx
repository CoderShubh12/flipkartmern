import { Box } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import styled from '@emotion/styled'

const Component=styled(Box)`
padding: 10px 10px;
background-color:#f2f2f2;
`


const Home = () => {
  return (
    <div style={{color : "black"}}>
        <Navbar/>
        <Component>

        <Banner/>
        </Component>
    </div>
  )
}

export default Home