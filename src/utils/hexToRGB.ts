import { Result } from "../interfaces";

const hexToRGB = (hex: string): Result => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        red: parseInt(result[1], 16),
        green: parseInt(result[2], 16),
        blue: parseInt(result[3], 16),
      }
    : {
        red: 0,
        green: 0,
        blue: 0,
      };
};

export default hexToRGB;
