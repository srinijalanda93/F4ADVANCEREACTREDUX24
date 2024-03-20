import { Component } from "react";

export class Greeting extends Component {
  //constructor for props
  constructor(props) {
    super(props);
    this.state={value:""};
  }
  //render to compute the jsx
  render() {
   const  changeEvent=(event) =>{
        console.log(event.target)
        console.log(event.target.value);
        const newValue=event.target.value;
        this.setState({value:newValue});

    }
    return <>
    <div>
        <label htmlFor="input">Enter the Name:</label>
        <input id="input" value={this.state.value} onChange={changeEvent} />
        {/* conditional rendering */}
        {this.state.value?<p>Hello! {this.state.value}</p>:null}
    </div>
    </>;
  }
}
