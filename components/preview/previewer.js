import React, { useState } from "react";
import css from "styled-jsx/css";

export default props => {

  const [button, setButton] = useState(() => {
    return `button {
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  transition: color 0.4s ease-in-out;
}

button::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 100%;
  right: 100%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: #3cefff;
  transform-origin: center;
  transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.45s ease-in-out;
}

button:hover {
  cursor: pointer;
  color: #161616;
}

button:hover::before {
  transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
}
`
  });

  return (
    <div>
      <button >styled-jsx</button>
      <textarea
        id="story"
        name="story"
        rows="10"
        cols="50"
        value={button}
        onChange={e => {
          setButton(e.target.value);
        }}
      />

      <style jsx>{button}</style>
    </div>
  );
};
