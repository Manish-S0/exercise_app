
import { Box, Typography,Button } from '@mui/material'
import HeroBannerImg  from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    
    <Box sx={{ mt: { lg: '150px',md:'150px',xs: '70px' }, ml: { sm: '50px' }}} position='relative' p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography fontWeight='600' sx={{ fontSize: { lg: '44px', md: '44px', xs: '40px' } }} >
        Sweat, Fit <br /> & Strong
      </Typography>

      <Typography fontSize='22px' fontFamily='Alegreya' lineHeight='35px' mb='10px'>
        Check out the most effective exercises
      </Typography>

      <Button variant='contained' color='error' href='#exercises' sx={{ backgroundColor: '#FF2625', padding: '10px'}}>Explore Exercises</Button>

      <Typography fontWeight='600' color='#FF2625' sx={{ opacity: 0.1, display: { lg: 'block', md: 'block', xs: 'none' } }} fontSize='200px' mt={-3}>
        Exercise
      </Typography>
      <img src={HeroBannerImg} alt="banner" className="hero-banner-img" />
    </Box>
    
  )
}

export default HeroBanner