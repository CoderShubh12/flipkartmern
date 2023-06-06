import React from 'react'
import {AppBar, Box, Toolbar, Typography, styled} from "@mui/material"
import Search from './Search'
import CustomButton from '../CustomButton'




const Header = () => {
    const StyledHeader=styled(AppBar)`
background:coral;
height:65px;
`

const Component=styled(Box)`
margin-left: 40px
`

const logoUrl="https://png.pngtree.com/png-vector/20210225/ourlarge/pngtree-shopping-logo-design-png-image_2951622.jpg"
  return (
    <div>
        <StyledHeader>
            <Toolbar>
                <Component>
                    <img src={logoUrl}alt="logo" style={{width:80, height:45}}></img>
                    <Box>
                        <Typography style={{fontSize:"12px", fontStyle:"italic"}}>Explore <span style={{color:"darkblue"}}>Plus</span></Typography>
                    </Box>


                </Component>
                <Search/>
                <Box style={{marginLeft:"140px"}}>
                    <CustomButton/>
                </Box>

            </Toolbar>

        </StyledHeader>
    </div>
  )
}

export default Header