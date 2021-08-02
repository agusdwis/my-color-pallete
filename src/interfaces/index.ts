export type ColorObject = {
  hex: string;
  isDefault: boolean;
};

export interface Result {
  red: number;
  green: number;
  blue: number;
}

export interface ResultHSL {
  h: number;
  s: number;
  l: number;
}

export interface IProps {
  key: number;
  background: string;
  isDefault: boolean;
  handleDelete: () => void;
}
