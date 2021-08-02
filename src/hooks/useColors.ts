import { useState, useEffect } from "react";
import { ColorObject } from "../interfaces";

type Result = [colors: ColorObject[], setColor: () => void];

const useColors = (): Result => {
  const [colors, setColors] = useState([]);
  const [status, setStatus] = useState(false);

  const getColor = (): void => {
    const localColor: any | null = localStorage.getItem("color");

    if (localColor) {
      setColors(JSON.parse(localColor));
    }
  };

  const setColor = (): void => {
    setStatus(!status);
  };

  useEffect(() => {
    getColor();

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return [colors, setColor];
};

export default useColors;
