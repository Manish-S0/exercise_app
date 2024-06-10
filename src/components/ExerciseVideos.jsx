
import { Box,Typography,Stack } from '@mui/material'

const ExerciseVideos = ({exerciseVideos,name}) => {
  console.log(exerciseVideos)
  // if (!exerciseVideos.length) return 'Loading...';
  return (
    <Box sx={{marginTop:{lg:'200px',sx:'20px'}}} p='20px'>
      <Typography variant='h4' mb='30px'>
        Watch <span style={{color:'red', textTransform:'capitalize'}}>{name} </span>exercise videos

      </Typography>
      <Stack justifyContent='flex-start'  alignItems='center' flexWrap='wrap'
      sx={{flexDirection:{lg:'row'}, gap:{lg:'110px', xs:'0'}}}>
         
        {/* {exerciseVideos?.slice(0,2).map((item,index)=>(
          <a 
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'>

              <img src={item.video.thumbnails[0].url} alt={item.video.title} />

          </a>
        ))} */}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos