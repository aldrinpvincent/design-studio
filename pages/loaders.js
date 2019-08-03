import React, { useState } from "react";
import Items from "../components/layout/Items";
import Previewer from "../components/layout/previewer";
import Layout from "../components/layout";
import { loadersData } from "../data/loader";
import Button from "../components/Item/Button";
import Loader from "../components/Item/Loader";

const Loaders = () => {

    const [loader, setLoader] = useState({});
    function handleClick(loader) {
        setLoader(loader);
    }

    return (
        <Layout>
            <Items>
                {loadersData.map(loader => {
                    return (<Loader key={loader.name} onClick={() => { handleClick(loader) }} loader={loader} />)
                })}
            </Items>
            <Previewer item={loader} type="div" />
        </Layout >
    );
};

export default Loaders;
