import { Stack, Typography,Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import EquipmentImage from '../assets/icons/equipment.png'
import TargetImage from '../assets/icons/target.png'


const Details = ({ exerciseDetail }) => {

  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

  const ExtraDetail=[
    {
      key:bodyPart,
      icon:BodyPartImage,
      name:bodyPart,
    },
    {
      key:bodyPart,
      icon: EquipmentImage,
      name:equipment,
    },
    {
      key:bodyPart,
      icon:TargetImage,
      name:target,
    }
  ]

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt="body-part" className='detail-image' style={{width:'1500px',height:'500px'}}/>


      <Stack sx={{ gap: { lg: '30px', xs: '20px' } }}>

        <Typography variant="h3" textTransform="capitalize" fontWeight="bold">
          {name}
        </Typography>
    
        <Typography variant="h6" sx={{ color: '#000', textTransform: 'capitalize' }}>
          Exercises keep you strong. {name} {` `}
          is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
        </Typography>

        {ExtraDetail.map((item)=>(
          <Stack key={item.name} sx={{flexDirection:'row', alignItems:'center', gap:'24px' }}>

            <Button sx={{background:'#fff2db',borderRadius:'50%',width:'100px',height:'100px'}}>
              <img src={item.icon} alt={item.name} style={{width:'50px',height:'50px'}} />
            </Button>
            <Typography>{item.name}</Typography>
          </Stack>
        ))}

    
    
    
      </Stack>


    </Stack>
  )
}

export default Details