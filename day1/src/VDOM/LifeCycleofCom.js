import { Component } from "react";
/**
 * Life cycle of component method
 * a.Mounting phase
 * b.updating phase
 * c.death phase
 * Heavy code shouldn't be passed/exectued during rendering the component as it block the return code
 */

/**
 * Function Component and useState hooks in function component
 * whenever we need to update on the UI we need to trigger re render
 * or re execution of render();
 */
 export class Practice extends Component{
    //constructors for props
    constructor(props){
        super(props)
        this.state={count:10};
    }
    //render() for JSX
    render(){
        const incre=() =>{
            //this.setState(args) args =>obj,function
            //the function take an parameter for the previousstateValue;
            //setState internally invoke the function
            this.setState((previousValue) =>{
                console.log(previousValue) //object state
                return {count:previousValue.count+2}
            })
        }
       return(<>
       <h1>Count:{this.state.count}</h1>
       <button onClick={incre}>Click me!</button></>) 
        
    }
    componentDidMount(){
        //this will get executed only once that too when the constructor is executed
        //this method will get executed only one time in life cycle of the component
        console.log("created phase")
    }
    componentDidUpdate(){
        console.log("when there is update in the setState")
    }
    componentWillUnmount(){
        console.log("unmounting is executed");
        //used to executed when the piece of UI is distached
    }
 }