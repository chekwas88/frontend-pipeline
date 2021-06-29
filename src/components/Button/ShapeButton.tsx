import * as React from "react";
import { classNames } from "../../utils";

type Props = {
  children: React.ReactNode;
  selected: Boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
};

export default function ShapeButton({ children, onClick, selected }: Props) {
  return (
    <button
      onClick={onClick}
      data-testid="shape-button"
      className={classNames("bttn bttn__shape", selected ? "selected" : "")}
    >
      {children}
    </button>
  );
}
