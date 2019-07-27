import React, { useState } from "react";
import Items from "../components/layout/components";
import Preview from "../components/layout/previewer";
import Layout from "../components/layout";
import { buttonsData } from "../data/button";
import Item from "../components/Item/Button";

const Buttons = () => {

  const [button, setButton] = useState({});

  function handleClick(button) {
    setButton(button);
  }

  return (
    <Layout>
      <Items>
        {buttonsData.map(button => {
          return (<Item key={button.name} onClick={() => { handleClick(button) }} data={button} />)

        })}
      </Items>
      <Preview data={button}>
        prewviww
      </Preview>
    </Layout >
  );
};

export default Buttons;
