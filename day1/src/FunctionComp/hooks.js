import { useState } from "react";
//Asynchronous NATURE OF FUNCTIONAL COMPONENTS
//NON-primitive Datatype
/**Explaining the execution process of the below code.
 * 1st time render count=0 (set) return UI with count:0;
 * Onclicking the increment BUTTON ->increment() invokes inside it..
 * run line by line once it finf the function of setCount(0+1) =>react makes Queue
 * Queue:[setCount(0+1)] after 2nd line setCount(f_reference) this pushed into queue
 *  queue:[setCount(0+1),f_reference]; as setCount are method React will trigger re render of function take place
 * so SECOND RENDER  const [count,setCount]=useState(); during 2nd RENDER WE NEED the latest value
 * where the React make them to Queue Up so this Queues started Executing one by one
 *  queue:[setCount(0+1),f_reference];  so executes the setCount(1) now count=1;
 * f_reference(prev) this will invokes where the previous will Take the latest value from the count=1 so prev=1;
 * return Prev+10 =>1+10; so FINALLY count is not 1 it is "11";
 *
 *
 * ALL ABOUT THE 2ND RENDER EXECUTION OF QUEUED UP METHOD;
 */
export const Hooks = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(23);
  const increment = () => {
    let curr = count;
    //as soon the setCount() invoked it won't upadate the count/state during the RE-render(next render) updation happens
    setCount(curr + 1);
    setCount((prev) => {
      return prev + 10;
    });
  };
  return (
    <>
      <h1>Async useState,lazy initallization</h1>
      <h1>Count:{count}</h1>
      <h2>Age:{age}</h2>
      <button onClick={increment}>Increment</button>
    </>
  );
};

//non-primitive

export function Displays() {
  const [student, setStudent] = useState(["srinija", "sudha", "sirisha"]);
  const [input,setInput]=useState({value:''});
  console.log("hello");
  //   const addUser = () => {
  //     //Harry styles;
  //     student.push("harry"); //here demerit student =>#400
  //     //setStudent(student); //passing #400
  //     //for this we need new reference of same value deepcopy
  //     setStudent([...student]); //->best way
  //   };

  const addUser =()=>{
    setStudent((prev) =>{
        return ([...prev,"Taylor"]);
    })
  }
  const addHere = (eventObj) => {
    console.log(eventObj.target.value);
    setInput({value:eventObj.target.value});
  };
  return (
    <>
      <input  placeholder="add the new USER" onChange={addHere} />
      {/* <button onClick={addHere}>ADD</button> */}
      <div>
        {student.map((student, index) => (
          <p key={index}>{student}</p>
        ))}
        {
           <h1>using input:{input.value}</h1> 
        }
      </div>

      <button onClick={addUser}>Add user</button>
    </>
  );
}
