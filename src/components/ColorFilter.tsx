import * as React from "react";
import { ColorButton } from "./Button/";
import { colors } from "../utils";
import { useShapeContext } from "../context";
export default function ColorFilterComponent() {
  const { handleColorFilter, colorFilters } = useShapeContext();

  return (
    <div className="filter">
      <h2>Colors</h2>
      <div data-testid="color-filter" className="filter__item">
        {colors.map((color, idx) => {
          const isSelected = colorFilters.includes(color);
          return (
            <ColorButton
              onClick={() => handleColorFilter(color)}
              selected={isSelected}
              key={`${color}-${idx}`}
              color={color}
            />
          );
        })}
      </div>
    </div>
  );
}
