/**Module
 * in Module we can make any "one  only" default export
 * for the named export we need to deconstruct using {withthe Variable name }
 *JSX =javascript Xml render(<><h1>{variable}</h1></>)
 *Components is a function takes the props as arguments which are used to computed the JSX 
 */
import React from "react";
import  ReactDOM  from "react-dom";
export const a = () => {
  console.log("the named export");
};
export let b = "my name is srinija lanada";
export let arr = [12, "srinija", "sudha", {}];
export let s = 2345;
const obj = {
  name: "winLow",
  age: 22,
  edc: "sfc",
};
export default obj;

const root = ReactDOM.createRoot(document.getElementById("root"));
//const h1=React.createElement("h2",{id:"s"},"helloworld!");
//instead of using create we can do this also
// const h1=<h1>SUGA Min 1993</h1> this is JSX javascript XML
//for Babel compiler is responsible to convert it. =>jsx ---babel-->reactElement
//xml is like tag based thing
//"ADVANTAGE OF USING XML is we can bind the variable using {} notation"
//JSX takes only one tag inside it so we use <> </> fragement

// const str=" HELLO srinija Ananda Rao"
// const dynamicID='tesxt'
// //const pTag=<p id={dynamicID}>{str}</p>
// let props={id:'srinija',className:"abd"}
// //const pTag=<p id={props.id} className={props.className}>{str}</p>
// //what if we have huge props using the spread operators
// const pTag=<p {...props}>{str}</p>

//when we have the multiple tag inside one tag we use the fragement <> HTML TAGS </>
// const divTag=(<div>
//     <h1>JSX</h1>
//     <h2>Fragement</h2>
//     <h3>Multiple lines</h3>
// </div>)
// root.render(divTag);

//Using React.Fragment as wrapper
const divTag = (
  <React.Fragment>
    <h1>JSX</h1>
    <h2>Fragement</h2>
    <h3>Multiple lines</h3>
  </React.Fragment>
);
root.render(divTag);

let arr1 = [
  "php",
  "c",
  "java",
  "suga",
  "zendaya",
  "tomholland",
  "chris",
  "batman",
];
//lets render the above arr
// let paras=[<p>{arr[0]}</p>,<p>{arr[1]}</p>,<p>{arr[2]}</p>,<p>{arr[3]}</p>,<p>{arr[4]}</p>];
// const div=(<>
// {paras}
// </>);

//let make a dynamic p tag accessing the each text inside it.
// let paras=[];
// arr.forEach((elements) =>{
//     paras.push(<p>{elements}</p>)
// })

// const div=(<>{paras}</>)
// root.render(div);

let paras = arr1.map((elements) => {
  return <p>{elements}</p>;
});

const div = <>{paras}</>;
root.render(div);

//----------------------------------------------------------------
//COMPONENT
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import {Navbar} from "./ModulesTopic/navbar"
// import {Product} from "./ModulesTopic/product"
// const root = ReactDOM.createRoot(document.getElementById("root"));
// //const h1=React.createElement("h2",{id:"s"},"helloworld!");

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //<><App/></>
// // );

// //let we give the dynamical values
// const title="NAVBARRRR";
// const description="Happiee shopping";
// //in the below we are passing the code in form of js but we can also use it in the xml
// root.render(<>
// {/* {navbar(title,description)}   */}
// <Navbar title={title} description={description}/>
// <Navbar title={'Blackpink'} description={"whatsapp pairs!! lalal"}/>

// {Product()}
// {/* <Product name={"Hallowen"}/> */}
// </>);


// /**{ <navbar title={title} description={description}/>  } =>internal work is
//  * navbar ({title:title,description:description}) 
//  * as single argument so in Navbar also it will take object props 
//  */
// //The babel compiler used on custom compoent tag so always component in the Upper case
// /**
//  * Component in react is JS function/class/customized along with props (arguments) and returns the computed JSX 
//  */
