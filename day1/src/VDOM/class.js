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
 * 4.so in the constructor we can defined the statr by assigning but for updation we need to use the method
 * 5.STATE IS PIECE OF CHANAGEABLE DATA ASSIGNED  PIECE OF  UI
 * 6.Always the EventListener need to be camelCase pass the function reference
 */
export class App extends Component {
  //constructor for the accessing the props
  /**never do this "state" is only read ony value direct update can't be done
   * this.state={count:1}
   * this.state.count+=1; 
   */
  constructor(props) {
    super(props);
    //console.log(props);
    //so inside the Component we have "state which in the object form"
    this.state = { count: 0 };
    console.log("constructor executed");
  }
  /**
   * inside the class component  <App name="hello! girls"  edc="sfc"/> =>new App({name:"srinija",edc:"sfc"})
   * inside the functional component   <App name="hello! girls"  edc="sfc"/> =>App({name:"srinija",edc:"sfc"})
   */
  render() {
    console.log("render exceuted")
    const increment=()=>{
      /**
       * so inside this function we need to change the count value 
       * by using this.setState({count:previousStoredValue+1})
       */
      let curr=this.state.count; //checks it lexical enivronment
      this.setState({count:curr+1});
    }
    return (
      <>
        <div>
          <p>Name:{this.props.name}</p>
          <p>edu:{this.props.edc}</p>
          <p>count:{this.state.count}</p>
          <button onClick={increment}>Increment</button>
        </div>

      </>
    );
  }
}

//function component
//const App =({name} =><h1>Srinija</h1>)
