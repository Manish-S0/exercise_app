import React, { useState } from 'react'
import { Box } from '@mui/material'
import {HeroBanner, SearchExercises, Exersises} from '../components'


const Home = () => {
  const [exercises,setExercises]= useState([]);
  const [bodyPart,setBodyPart]= useState('all');


  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exersises 
        setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    </Box>
  )
}

export default Home