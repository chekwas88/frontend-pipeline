import * as React from "react";
import { Shape } from "../types";
import shapesJson from "../shapes.json";
import { colors, shapes as figures } from "../utils";

export function useShape() {
  const [shapes, setShapes] = React.useState<Shape[] | null>(shapesJson);
  const [colorFilters, setColorFilters] = React.useState<String[]>([]);
  const [shapeFilters, setShapeFilters] = React.useState<String[]>([]);
  const [title, setTitle] = React.useState<String>("All Items");

  const handlefilter = React.useCallback(
    (shapes: Shape[]) => {
      if (colorFilters.length && shapeFilters.length) {
        const updatedShapes = shapes
          .filter((item) => shapeFilters.includes(item.name))
          .filter((it) => colorFilters.includes(it.props.fill));
        setShapes(updatedShapes);
      } else if (colorFilters.length) {
        const updatedShapes = shapes.filter((item) =>
          colorFilters.includes(item.props.fill)
        );
        setShapes(updatedShapes);
      } else if (shapeFilters.length) {
        const updatedShapes = shapes.filter((item) =>
          shapeFilters.includes(item.name)
        );
        setShapes(updatedShapes);
      } else {
        setShapes(shapes);
      }
    },
    [colorFilters, shapeFilters]
  );

  const handleTitle = React.useCallback(() => {
    if (
      colorFilters.length === colors.length &&
      shapeFilters.length === figures.length
    ) {
      setTitle("All Items");
      return;
    }
    if (
      (colorFilters.length > 1 && shapeFilters.length > 1) ||
      (colorFilters.length > 1 && !shapeFilters.length) ||
      (shapeFilters.length > 1 && !colorFilters.length)
    ) {
      setTitle("Multiple Items");
    }

    if (
      (colorFilters.length === colors.length || !colorFilters.length) &&
      shapeFilters.length === 1
    ) {
      let shape = shapeFilters[0];
      setTitle(`All ${shape} Items`);
    }
    if (
      (shapeFilters.length === figures.length || !shapeFilters.length) &&
      colorFilters.length === 1
    ) {
      let color = colorFilters[0];
      setTitle(`All ${color} Items`);
    }
    if (colorFilters.length > 1 && shapeFilters.length === 1) {
      let shape = shapeFilters[0];
      setTitle(`Multiple ${shape} Items`);
    }
    if (shapeFilters.length > 1 && colorFilters.length === 1) {
      let color = colorFilters[0];
      setTitle(`Multiple ${color} Items`);
    }

    if (shapeFilters.length === 1 && colorFilters.length === 1) {
      let color = colorFilters[0];
      let shape = shapeFilters[0];
      setTitle(`${color} ${shape} Items`);
    }
  }, [colorFilters, shapeFilters]);

  React.useEffect(() => {
    handlefilter(shapesJson);
    handleTitle();
  }, [handlefilter, handleTitle]);

  function handleColorFilter(color: String): void {
    setColorFilters((prevState) =>
      prevState.includes(color)
        ? prevState.filter((item) => item !== color)
        : prevState.concat(color)
    );
  }

  function handleShapeFilter(shape: String): void {
    setShapeFilters((prevState) =>
      prevState.includes(shape)
        ? prevState.filter((item) => item !== shape)
        : prevState.concat(shape)
    );
  }

  return {
    shapes,
    handleColorFilter,
    handleShapeFilter,
    shapeFilters,
    colorFilters,
    title,
  };
}
