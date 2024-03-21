
/**
 * 1.FC are alternative of class component
 * CC are introduec in the ES6..
 * 2.for Functional component unlike CC no need to inherits the Component from React-Libary
 * 3. All the life cycle component are exceuted in the F
 * 4.To maintain the state Managment and  Life cycle in Function Component we use the hooks concept
 * HOOKS ARE PLAIN JAVASCRIPT function developed by the react team
 * //useState is a  hooks  function used to manage the state in FC
 * Hooks alway used inside a function
 */
import { useState } from "react";
import "./VDOM/counter.css";
export const FunctionComp = () => {
  /**console.log(typeof useState) //is a function
    let value=useState();
    console.log(value) //gives the [undefined,f] of length 2
    **/
  /**
   * [sate,setState] here state take the args of useState(values)
   * value can be primitive /non primitive
   * args need to one eithe primitive or non primitive
   */
  /**
   * in Fc rendering / re render mean executing whole function (whole fun is render method)
   */
  const [state, setState] = useState(10);
  console.log(state);
  const increment=()=>{
    let curr=state+1;
    setState(curr); //at this place rerender take place
  }
  return (
    <>
    <button onClick={increment}>Update count</button>
      <h1>Functional component count:{state}</h1>
    </>
  );
};
