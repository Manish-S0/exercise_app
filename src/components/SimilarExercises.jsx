import {Box,Stack,Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({targetMusclesExercise,equipmentExercise}) => {
  return (
    <Box sx={{mt:{lg:'90px',xs:'0'}}}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }}fontWeight={700} color="#000" mb="33px" >Similar Target exercises</Typography>
      <Stack direction='row' sx={{p:'2',position:'relative'}}>
        {targetMusclesExercise.length ? <HorizontalScrollbar dataset={targetMusclesExercise}/>:<Loader/>}
      </Stack>
      <Typography Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">Similar Equipment exercises
      </Typography>
      <Stack direction='row' sx={{p:'2',position:'relative'}}>
        {equipmentExercise.length ? <HorizontalScrollbar dataset={equipmentExercise}/>:<Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises