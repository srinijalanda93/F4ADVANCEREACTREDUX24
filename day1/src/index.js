import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
//import {navbar} from "./ModulesTopic/navbar"
// import {Product} from "./ModulesTopic/product"
//import {Information} from "./ModulesTopic/navbar";
import { App } from "./VDOM/class";

//const h1=React.createElement("h2",{id:"s"},"helloworld!");

const root = ReactDOM.createRoot(document.getElementById("root"));
// const url="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/93579704-2486-4199-8e63-cc3436f3fae5.jpg?ts=1708593038";
// let cost=50
// let title="Britannia Milk Bread"
// root.render(
// <>
// <Information Imageurl={url} altName="Blinkit"  title={title} weight="400g" price={cost}/>
// </>
// )

root.render(
  <>
    <App name="hello! girls"  edc="sfc"/>
  </>
);
