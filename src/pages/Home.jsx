import  { useState } from 'react'
import { Box } from '@mui/material'
import {HeroBanner, SearchExercises, Exersises} from '../components'



const Home = () => {
  const [exercises,setExercises]= useState([]);
  const [bodyPart,setBodyPart]= useState('all');

  console.log(bodyPart)

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exersises 
      setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} 
      />
    </Box>
  )
}

export default Home