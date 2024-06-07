// import React, { useState } from 'react'
import { Box } from '@mui/material'
import {HeroBanner, SearchExercises, Exersises} from '../components'


const Home = () => {
 

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises />
      <Exersises/>
    </Box>
  )
}

export default Home