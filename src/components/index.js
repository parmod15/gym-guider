import React from "react";
import { ReactDOM , createRoot } from "react-dom/client";
import NavBar from "./NavBar";
import Body from "./Body";

const AppLayout = () =>{
    return (
        <>
        <NavBar/>
        <Body/>
        </>
    )
}


const root = createRoot(document.getElementById("root"));

root.render(<AppLayout/>);