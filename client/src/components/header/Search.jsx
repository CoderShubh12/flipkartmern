
import { InputBase, Box, styled } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchConatiner=styled(Box)`

background: #fff;
margin-left: 10px;
borderRadius: 5px;
width:40%;
display: flex;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

`
const InputSearchBase=styled(InputBase)`
padding-left:10px;
width:100%
font-size: unset
`
const SerachIconWrapper=styled(Box)`
color: orange;
padding:5px;
display: flex;
`

const Search = () => {
  return (
    <SearchConatiner>

        <InputSearchBase placeholder='Search for Products, brands and more'/>
        <SerachIconWrapper>

        <SearchIcon />
        </SerachIconWrapper>
    </SearchConatiner>
  )
}

export default Search