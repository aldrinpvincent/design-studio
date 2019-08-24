import React, { useState } from "react";
import Items from "../components/layout/Items";
import Previewer from "../components/layout/previewer";
import Layout from "../components/layout";
import { loadersData } from "../data/loader";
import Item from "../components/Item";
const Loaders = () => {

    const [loader, setLoader] = useState({});
    function handleClick(loader) {
        setLoader(loader);
    }

    return (
        <Layout>
            <Items>
                {loadersData.map(loader => {
                    return (<Item key={loader.name} onClick={() => { handleClick(loader) }} item={loader} />)
                })}
            </Items>
            <Previewer item={loader} />
        </Layout >
    );
};

export default Loaders;
