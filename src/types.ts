export type ComponentProps = {
  children: React.ReactNode;
};

export type Props = {
  cx?: String;
  cy?: String;
  x?: number;
  y?: number;
  r?: number;
  ry?: number;
  rx?: number;
  points?: String;
  width?: String;
  height?: String;
  fill: String;
  stroke?: String;
};

export type Shape = {
  name: String;
  shape: string;
  props: Props;
};
