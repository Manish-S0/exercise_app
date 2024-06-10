import { Box, Stack, Typography } from '@mui/material'

import logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box sx={{mt:'80px', bgcolor:'#fff8f8'}}>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <img src={logo} alt="logo" width='200px' height='40px' />
        <Typography sx={{color:'red'}}>Made by Manish</Typography>
      </Stack>
    </Box>
  )
}

export default Footer