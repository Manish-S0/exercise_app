
import PropTypes from 'prop-types';
// import BodyPart from './BodyPart';

const HorizontalScrollbar = ({dataset}) => {
  return (
    <div>
      {dataset.map((item)=>(
        <div key={item.id || item}
        style={{margin:"0 40px", cursor:"pointer"}}
          >
          {item}
        </div>
      ))}
    </div>
  )
}

HorizontalScrollbar.propTypes = {
  dataset: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default HorizontalScrollbar