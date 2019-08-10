import React, { useState } from "react";
import Items from "../components/layout/Items";
import Previewer from "../components/layout/previewer";
import Layout from "../components/layout";
import { buttonsData } from "../data/button";
import Button from "../components/Item/Button";

const Buttons = () => {

  const [button, setButton] = useState({});

  function handleClick(button) {
    setButton(button);
  }

  return (
    <Layout>
      <Items >
        {buttonsData.map(button => {
          return (<Button key={button.name} onClick={() => { handleClick(button) }} button={button} />)
        })}
      </Items>
      <Previewer item={button} type="button" />
    </Layout >
  );
};

export default Buttons;
