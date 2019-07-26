import React, { useState } from "react";
import Components from "../components/layout/components";
import Preview from "../components/layout/previewer";
import Layout from "../components/layout";
import { buttonsData } from "../data/button";



const Buttons = () => {

  function handleClick(e) { }

  return (
    <Layout>
      <Components>
        <button onClick={handleClick}>
          Grow
        </button>
      </Components>
      <Preview data={buttonsData}>
        prewviww
      </Preview>
    </Layout >
  );
};

export default Buttons;
