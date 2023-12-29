const ColorSwatch = ({
  index,
  colorName,
  type = 'checkbox',
  setColor,
  color,
}) => {
  if (type === 'radio')
    return (
      <div className="color" style={{ backgroundColor: colorName }}>
        <input
          type="radio"
          value={colorName}
          name={`color`}
          onChange={(e) => setColor(e.target.value)}
          checked={colorName === color}
        />
        <i className="checkbox-icon"></i>
      </div>
    );

  return (
    <div className="color" style={{ backgroundColor: colorName }}>
      <input type="checkbox" value={colorName} name={`color-${index}`} />
      <i className="checkbox-icon"></i>
    </div>
  );
};

export default ColorSwatch;
