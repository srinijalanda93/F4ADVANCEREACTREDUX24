/**React is JS libary CDN:content Delivery Network
 * Intro of React
 * always do the selective update
 * larger community
 * React.createElement();
 * ReactDOM.render(h1,divObj);
 * ReactDOM.createRoot(domNode)
 */

//creation the h1 using vanilla JS
// const divObj=document.getElementById("root");
// console.log(divObj);

// const h1=React.createElement("h1",{id:"test",className:"Abc",style:{color:"red"}},"HelloWorld");
// ReactDOM.render(h1,divObj);
// console.log(h1);

const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode); //using createRoot
const h1=React.createElement("h1",{id:"test",className:"Abc",style:{color:"red"}},"Srinija World");
root.render(h1);


