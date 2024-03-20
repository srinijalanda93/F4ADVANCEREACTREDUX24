// export const navbar=<nav>navbar</nav>
export const navbar=(title,description) =>{
    return (<>
    <nav>{title}</nav>
    <h3>{description}</h3>
    </>)
}

export const Navbar=(props) =>{
    return (<>
            <nav>{props.title}</nav>
             <h3>{props.description}</h3>
           </>) 
}

export const Information =(props) =>{
    return (<>
        <img src={props.Imageurl} alt={props.altName}/>
         <h3>{props.title}</h3>
         <p>{props.weight}</p>
         <div className="dflex"><span>${props.price}</span><button>ADD</button></div>
       </>) 
}