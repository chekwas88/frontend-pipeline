import { ShapeButton } from "./Button";
import { shapes } from "../utils";
import { useShapeContext } from "../context";

export default function ShapeFilterComponent() {
  const { handleShapeFilter, shapeFilters } = useShapeContext();

  return (
    <div className="filter">
      <h2>Shapes</h2>
      <div className="filter__item">
        {shapes.map((shape, idx) => {
          const isSelected = shapeFilters.includes(shape);

          return (
            <ShapeButton
              onClick={() => handleShapeFilter(shape)}
              key={`${shape}-${idx}`}
              selected={isSelected}
            >
              {shape}
            </ShapeButton>
          );
        })}
      </div>
    </div>
  );
}
