/**
 * what is VDOM ?
 * Adavantage :effective performance
 * demerit:RAM consumpition of copy of VDOM.
 * Virtual document object method  used for the react efficent performace
 * used on the updated RDOM sync wise
 * 
 * 
 * Rom--->VDOM1--->VDOM2
 * RDOM->real dom 
 * VDOM 1-> maintain the copy of rdom (light weight mean only neccessary pros) in the RAM 
 * VDOM2 ->this will get the update Dom things from the RestAPI(server)
 * 
 * VDOM1---->VDOM2 (here comparsion take place between the vdom1 and vdom2 using optimized algorithm call diffing)
 * Diffing algorithm is used to compute the difference blw the VDOM and VDOM2 (updated newly created VDOM2)
 * and make to sync with the RDOM we call it as Reconcillation
 * Making updated nodes insync with RDOM is RECONCILLATION
 */
// let divRoot=document.getElementById('root')
// let arr=['rajesh',"avin","rahul","karan"];
// //we want n related string meaning "avin","karan" using onchange method 
// //we make the new dom with the updated string
// let updatestr=[];
// updatestr.forEach((element)=>{
//     let obj=document.createElement('p');
//     package.innerText=element;
//     divRoot.appendChild(obj)
// })





