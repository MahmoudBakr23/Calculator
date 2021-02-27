import PropTypes from 'prop-types';

const Button = props => {
  const { name, className, handler } = props;
  return (
    <div className="Button">
      <button type="button" className={className} onClick={() => { handler(name); }}>{name}</button>
    </div>
  );
};
Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  handler: PropTypes.isRequired,
};
Button.defaultProps = {
  className: '',
};

export default Button;
