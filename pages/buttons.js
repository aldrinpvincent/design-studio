import React, { useState } from "react";
import Snippet from "../components/code";

const Buttons = () => {
  const [type, setType] = useState("");

  function handleClick(e) {}

  return (
    <>
      <h3>Buttons</h3>
      <section className="container">
        <section className="left-half">
          <button className="grow" onClick={handleClick}>
            Grow
          </button>
        </section>
        <section className="right-half">
          <Snippet>{type}</Snippet>
        </section>

        <style jsx>{`
          .container {
            display: flex;
          }
          .left-half {
            flex: 1;
            padding: 1rem;
          }
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

          .right-half {
            flex: 1;
            padding: 1rem;
          }
        `}</style>
      </section>
    </>
  );
};

export default Buttons;
