import { FC, useState } from "react";
import { ColorBox, ColorPalette } from "./ColorPicker.styles";

// copied
const colors = ["#173F5F", "#20639B", "#3CAEA3", "#F6D55C", "#ED553B"];

const ColorPickerComponent: FC<{ onColorSelect: (color: string) => void }> = (
  props
) => {
  const [selectedColor, setSelectedColor] = useState(-1);

  const onClickHandler = (index: number) => {
    setSelectedColor(index);
    props.onColorSelect(colors[index]);
  };

  return (
    <ColorPalette>
      {colors.map((color, index) => (
        <ColorBox
          key={color}
          border={selectedColor === index}
          colorCode={color}
          onClick={onClickHandler.bind(null, index)}
        />
      ))}
    </ColorPalette>
  );
};

export default ColorPickerComponent;
