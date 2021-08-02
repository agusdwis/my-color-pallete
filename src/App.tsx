import { useState } from "react";

import "./assets/scss/index.scss";
import hexToRGB from "./utils/hexToRGB";
import hexToHSL from "./utils/hextToHSL";
import useColors from "./hooks/useColors";
import Color from "./utils/data-colors";
import isColor from "./utils/checkColor";
import { ColorObject } from "./interfaces";

import ColorBox from "./components/BoxColor";

const App: React.FC = () => {
  const [red, setRed] = useState(false);
  const [green, setGreen] = useState(false);
  const [blue, setBlue] = useState(false);
  const [saturate, setSaturate] = useState(false);

  const [addColor, setAddColor] = useState("");
  const [colors, setColors] = useColors();

  const handleAddColor = (): void => {
    let data: ColorObject[] = [...colors];

    if (isColor(addColor)) {
      if (colors && addColor !== "") {
        data = [...data, ...[{ hex: addColor, isDefault: false }]];
      }

      localStorage.removeItem("color");
      localStorage.setItem("color", JSON.stringify(data));

      setAddColor(""); //reset input form
      setColors(); //refresh color
    } else {
      alert("Ivalid Color");
    }
  };

  const handleDeleteColor = (hex: string): void => {
    let data: ColorObject[] = [...colors];

    data = data.filter((color) => color.hex !== hex);

    localStorage.removeItem("color");
    localStorage.setItem("color", JSON.stringify(data));

    setColors();
  };

  let ColorFiltered = [...Color, ...colors];

  if (red) {
    ColorFiltered = ColorFiltered.filter(
      (item) => hexToRGB(item.hex).red > 127
    );
  }

  if (green) {
    ColorFiltered = ColorFiltered.filter(
      (item) => hexToRGB(item.hex).green > 127
    );
  }

  if (blue) {
    ColorFiltered = ColorFiltered.filter(
      (item) => hexToRGB(item.hex).blue > 127
    );
  }

  if (saturate) {
    ColorFiltered = ColorFiltered.filter((item) => hexToHSL(item.hex).s > 0.5);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <p className="title">Add New Color:</p>

          <input
            onChange={(e) => setAddColor(e.target.value.toUpperCase())}
            placeholder="#FFFFFF"
            type="text"
            className="form-input"
            value={addColor}
          />

          <button onClick={() => handleAddColor()} className="form-button">
            Add
          </button>
        </div>

        <div className="filter">
          <div className="group">
            <div className="sub-filter">
              <input
                onClick={() => setRed(!red)}
                type="checkbox"
                name="filter1"
                value="red"
              />
              <label className="filter-label">
                <span>Red &gt; 50%</span>
              </label>
            </div>

            <div className="sub-filter">
              <input
                onClick={() => setGreen(!green)}
                type="checkbox"
                name="filter2"
                value="green"
              />
              <label className="filter-label">
                <span>Green &gt; 50%</span>
              </label>
            </div>

            <div className="sub-filter">
              <input
                onClick={() => setBlue(!blue)}
                type="checkbox"
                name="filter3"
                value="green"
              />
              <label className="filter-label">
                <span>Blue &gt; 50%</span>
              </label>
            </div>

            <div className="sub-filter">
              <input
                onClick={() => setSaturate(!saturate)}
                type="checkbox"
                name="filter4"
                value="green"
              />
              <label className="filter-label">
                <span>Saturation &gt; 50%</span>
              </label>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="content-container">
            {ColorFiltered.map((item, index) => (
              <ColorBox
                key={index}
                background={item.hex}
                isDefault={item.isDefault}
                handleDelete={() => handleDeleteColor(item.hex)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
