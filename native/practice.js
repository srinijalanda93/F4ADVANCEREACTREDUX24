/**
 * THIS DOCUMENT IS FOR REVISION
 * 
 */
/**
 * what is React?
 * React is JS library created by FaceBook
 * React is UI library
 * React is used to make the selective updation
 * React is a tool used to build the components
 * React can be used to develop single-page.
 */
/**
 * using cdn link we can create a React element
 */
//<div id="root">INSERT THE H1 TAG</div> using vanilla JS
//The BELOW USING VANNILLA JS WE CREATE H1 AND APPEND TO DIVTAGOBJ

// const divTagObj=document.getElementById('root');
// const h1=document.createElement('h1');
// h1.innerText='using Vanilla JS h1 tag';
// //push into the divTagObj
// divTagObj.appendChild(h1);


/**React,ReactDOM are the huge object
 * but for react we need to createElement we call it as react element
 * 
 */
//ReactDom.createRoot('document node') 
//React.createElement('tag',props,'innertext/innerHtml')

const divTagObj = document.getElementById('root');
const domNode = document.createElement("div");
const root = ReactDOM.createRoot(divTagObj); // used to createRoot
const h2 = React.createElement('h2', { id: "srinija", className: "coder", style: { color: "blue" } }, "REACT ELEMENT");
root.render(h2);
// divTagObj.appendChild(h1); 