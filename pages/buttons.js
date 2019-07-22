import React, { useState } from "react";
import Components from "../components/layout/components";
import Preview from "../components/layout/previewer";

const Buttons = () => {
  const [type, setType] = useState("");

  function handleClick(e) { }

  return (
    <>
      <h3>Buttons</h3>
      <Components>
        <button className="grow" onClick={handleClick}>
          Grow
        </button>
      </Components>
      <Preview>
        prewviww
      </Preview>
      <style jsx>{`
          .grow {
            color: #1d9af2;
            background-color: #292d3e;
            border: 1px solid #1d9af2;
            border-radius: 4px;
            padding: 0 15px;
            cursor: pointer;
            height: 32px;
            font-size: 14px;
            transition: all 0.2s ease-in-out;
          }
          .grow:hover {
            transform: scale(1.1);
          }
        `}</style>

    </>
  );
};

export default Buttons;
