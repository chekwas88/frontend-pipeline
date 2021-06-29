export const shapes = ["oval", "square", "round", "rectangle"];
export const colors = ["red", "blue", "grey", "green", "yellow", "purple"];
export function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(" ");
}
