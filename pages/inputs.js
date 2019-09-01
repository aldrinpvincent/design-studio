import React, { useState } from "react";
import Items from "../components/layout/Items";
import Previewer from "../components/layout/previewer";
import Layout from "../components/layout";
import { inputsData } from "../data/input";
import Item from "../components/Item";

const Buttons = () => {

  const [button, setButton] = useState({});

  function handleClick(button) {
    setButton(button);
  }

  return (
    <Layout>
      <Items >
        {inputsData.map(input => {
          return (<Item key={input.name} onClick={() => { handleClick(input) }} item={input} />)
        })}
      </Items>
      <Previewer item={button} />
    </Layout >
  );
};

export default Buttons;
