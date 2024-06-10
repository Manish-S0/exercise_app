import {useEffect, useState} from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'

import { exerciseOptions,fetchData } from '../utils/fetchData'
import  HorizontalScrollbar  from './HorizontalScrollbar'

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {

  const [search, setSearch] = useState('')

  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExerciseData=async()=>{
      const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExerciseData();

  }, [])


  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

      const searchedExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search) 
        || exercise.target.toLowerCase().includes(search) 
        || exercise.equipment.toLowerCase().includes(search) 
        || exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch('');
      setExercises(searchedExercises)
      // console.log(exerciseData)
    }
  }

  return (

    <Stack >

      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb='50px' textAlign={'center'}>
        Awesome Exercises You <br /> Should Know
      </Typography>

      <div style={{display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"}} >
        <TextField 
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1070px',md: '700px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'

          />  

        <Button className='search-btn' sx={{ bgcolor: '#FF2625',color: '#fff', textTransform: 'none', width: { lg: '173px',md: '123px', xs: '80px' }, height: '56px', fontSize: { lg: '20px', xs: '14px' }}} 
          onClick={handleSearch}>Search
        </Button>
          
      </div>
      <div style={{position:"relative", width:"100%", p:"20px"}}>
         <HorizontalScrollbar dataset={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isbodyParts/>
      </div>
    </Stack>
  )
  
  
}

export default SearchExercises