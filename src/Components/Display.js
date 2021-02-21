const Display = props => {
  const { result } = props;
  return (
    <div className="Display">
      {result}
    </div>
  );
};
Display.defaultProps = {
  result: '0',
};

export default Display;
