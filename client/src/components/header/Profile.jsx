import { Box, Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'

const Profile = () => {

    const{loginUser, setLoginUser}=useContext(DataContext)
    const handlelOgout=()=>{
        setLoginUser("")

    }
  return (
    <div>
        <Box>
            <Typography>{loginUser}</Typography>
            <Button onClick={handlelOgout} >Logout</Button>
        </Box>
    </div>
  )
}

export default Profile