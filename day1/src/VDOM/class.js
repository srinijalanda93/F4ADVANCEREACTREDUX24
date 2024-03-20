import { Component } from "react";
//class component in Javascript
// function App() {
//   return (
//     <>
//       <div className="App">
//         <h1>hello function component</h1>
//       </div>
//     </>
//   );
// }

//for the functional componet no need of the Component class and
//render() method
//using about functional code we need to convert into class Component
//for this we neet to import the Component from the React
//to make a class component we need to inherit Component class using extend
/**
 * 1.for class component we need to use render() which returns the jsx
 * 2.to access the props we need to implement the constructor
 * 3.state is predefined inside the Component alway in object format we can dothe change of this.state inside the constructor
 */
export class App extends Component {
  //constructor for the accessing the props
  /**never do this "state" is only read ony value direct update can't be done
   * this.state={count:1}
   * this.state.count+=1; 
   */
  constructor(props) {
    super(props);
    console.log(props);
    //so inside the Component we have "state which in the object form"
    this.state = { count: 0 };
  }
  /**
   * inside the class component  <App name="hello! girls"  edc="sfc"/> =>new App({name:"srinija",edc:"sfc"})
   * inside the functional component   <App name="hello! girls"  edc="sfc"/> =>App({name:"srinija",edc:"sfc"})
   */
  render() {
    return (
      <>
        <div>
          
          <h1>
            Name:{this.props.name} ,age:{this.props.age},count:{" "}
            {this.state.count}
          </h1>
        </div>
      </>
    );
  }
}

//function component
//const App =({name} =><h1>Srinija</h1>)
