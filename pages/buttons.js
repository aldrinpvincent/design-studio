import React, { useState } from "react";
import Items from "../components/layout/Items";
import Previewer from "../components/layout/previewer";
import Layout from "../components/layout";
import { buttonsData } from "../data/button";
import Item from "../components/Item";

const Buttons = () => {

  const [button, setButton] = useState({});

  function handleClick(button) {
    setButton(button);
  }

  return (
    <Layout>
      <Items >
        {buttonsData.map(button => {
          return (<Item key={button.name} onClick={() => { handleClick(button) }} item={button} />)
        })}
      </Items>
      <Previewer item={button} />
    </Layout >
  );
};

export default Buttons;
