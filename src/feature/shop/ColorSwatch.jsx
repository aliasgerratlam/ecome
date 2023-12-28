const ColorSwatch = ({ index, colorName }) => {
  return (
    <div className="color" style={{ backgroundColor: colorName }}>
      <input type="checkbox" value={colorName} name={`color-${index}`} />
      <i className="checkbox-icon"></i>
    </div>
  );
};

export default ColorSwatch;
