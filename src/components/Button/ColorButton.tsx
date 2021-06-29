import * as React from "react";
import { classNames } from "../../utils";
type Props = {
  color: String;
  selected: Boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
};

export default function ColorButton({ color, selected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        `bttn bttn__color ${color}`,
        selected ? "selected" : ""
      )}
      data-testid="color-button"
    />
  );
}
