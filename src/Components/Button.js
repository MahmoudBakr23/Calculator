import PropTypes from 'prop-types';

const Button = props => {
  const { name, className } = props;
  return (
    <div className="Button">
      <button type="button" className={className}>{name}</button>
    </div>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
