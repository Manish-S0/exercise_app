// import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon  from '../assets/icons/gym.png'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    
    <Stack type='button' alignItems='center' justifyContent='center' className='bodyPart-card'
    sx={{
        borderTop: bodyPart === item ? '4px solid #FF2625':'',
        background: '#fff',
        borderBottomLeftRadius: '20px',
        width: '200px',
        height: '210px',
        cursor: 'pointer',
        gap: '30px'
      }}
      onClick={() => {setBodyPart(item); 
      window.scrollTo({top: 1800, left: 100, behavior: 'smooth'});}}>

      <img src={Icon} alt="dumbbell" style={{width:'100px',height:'100px',paddingTop:'15px'}} />

      <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart