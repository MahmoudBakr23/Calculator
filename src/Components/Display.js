import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div className="Display">
      {result}
    </div>
  );
};
Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
