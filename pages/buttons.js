import React, { useState } from "react";
import Components from "../components/layout/components";
import Preview from "../components/layout/previewer";
import Layout from "../components/layout";

const Buttons = () => {
  const [type, setType] = useState("");


  const html = <button>button</button>



  function handleClick(e) { }

  return (
    <Layout>
      <h3>Buttons</h3>
      <Components>
        <button onClick={handleClick}>
          Grow
        </button>
      </Components>
      <Preview html={html}>
        prewviww
      </Preview>
      <style jsx>{`
          .button {
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
          .button:hover {
            transform: scale(1.1);
          }
        `}</style>
    </Layout >
  );
};

export default Buttons;
