const isColor = (strColor: string): boolean => {
  let s = new Option().style;
  s.color = strColor;
  let condition1 = s.color === strColor;
  let condition2 = /^#[0-9A-F]{6}$/i.test(strColor);
  if (condition1 === true || condition2 === true) {
    return true;
  } else {
    return false;
  }
};

export default isColor;
