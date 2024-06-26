
import { useContext } from 'react';
import { Box, Typography} from '@mui/material';
import BodyPart from './BodyPart';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';




const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow" >
      <img src={RightArrowIcon} alt="right-arrow"/>
    </Typography>
  );
};
const HorizontalScrollbar = ({dataset, bodyPart, setBodyPart,isbodyParts}) => {
  return (
    <Box mt={4} sx={{position:'static'}}>
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {dataset.map((item)=>(
        <Box 
          key={item.id || item}          
          m="0 40px"
        >
          {isbodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/> : <ExerciseCard exercise={item} />
          }
        </Box>
      ))}
    </ScrollMenu>
    </Box>
  )
}

// HorizontalScrollbar.propTypes = {
//   dataset: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//   })).isRequired,
// };

export default HorizontalScrollbar;