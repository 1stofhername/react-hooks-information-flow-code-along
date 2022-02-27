import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);

  function onChangeColor (){
    setColor(randomColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={onChangeColor} />
      <Child onChangeColor={onChangeColor} />
    </div>
  );
}

export default Parent;
