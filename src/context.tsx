import * as React from "react";
import { Shape } from "./types";
import { useShape } from "./hooks/useShape";

type ShapeContextType = {
  title: String;
  shapes: Shape[] | null;
  handleColorFilter: (color: string) => void;
  handleShapeFilter: (shape: string) => void;
  shapeFilters: String[];
  colorFilters: String[];
};

type ChildrenProp = {
  children: React.ReactNode;
};

const ShapeContext =
  React.createContext<ShapeContextType | undefined>(undefined);

export const ShapeProvider = ({ children }: ChildrenProp) => {
  const {
    shapes,
    shapeFilters,
    handleColorFilter,
    handleShapeFilter,
    title,
    colorFilters,
  } = useShape();

  return (
    <ShapeContext.Provider
      value={{
        shapes,
        shapeFilters,
        handleColorFilter,
        handleShapeFilter,
        title,
        colorFilters,
      }}
    >
      {children}
    </ShapeContext.Provider>
  );
};

export const useShapeContext = () => {
  const context = React.useContext(ShapeContext);
  if (context === undefined) {
    throw new Error(
      `useShapeContext must be used within ShapeContext Provider`
    );
  }
  return context;
};
