import { useState } from "react";
import "../styling/s1.css";

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
  // const [state, setState] = useState(10);
  // console.log(state);
  // const increment=()=>{
  //   let curr=state+1;
  //   setState(curr); //at this place rerender take place
  // }
  // return (
  //   <>

  //   {/* <button onClick={increment} className='btn'>Update count</button>
  //     <h1>Functional component count:{state}</h1> */}
  //   </>
  // );

  const [count, setCount] = useState(0);
  const increment=()=>{
      let curr=count+1;
      setCount(curr); //at this place rerender take place
    }
    const descrement=()=>{
      let curr=count-1;
      setCount(curr); 
    }
    let price=50
  return (
    <>
      <div className="card">
        <img
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/93579704-2486-4199-8e63-cc3436f3fae5.jpg?ts=1708593038"
          alt="Blinkit"
        />
        <h3>Britannia Milk Bread</h3>
        <span className="size">400g</span>
        <div className="button">
          <b>${price}</b>

          {
            /* condition rendering */
            count === 0 ? (
              <button onClick={increment}>ADD</button>
            ) : (
              <div class="btn-group">
                <button onClick={descrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
              </div>
            )
          }
        </div>
      </div>
      <p>So the total Price is ${count*price}</p>
    </>
  );
};
