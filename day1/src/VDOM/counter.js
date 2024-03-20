import { Component } from "react";
//using class component
export class Counter extends Component {
  //constructor for props
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  //render method to compute the jsx
  render() {
    const increment = () => {
      //onclick the button count need to increment by one
      let curr = this.state.count;
      this.setState({count:curr+1});
    };
    let obj={
        fontSize:'20px',
    }
    return (
      <>
        <p style={{fontSize:'29px',fontWeight:'bold'}}>Count:{this.state.count}</p>
        <button onClick={increment}>Increment</button>
      </>
    );
  }
}
