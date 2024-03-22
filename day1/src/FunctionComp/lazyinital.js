/**
 * Lazy initalization
 * when the useState is encounter where it need to depends on the
 * pre processing data.
 * passing "FUNCTION" inside the argument we call it as lazy Initallization
 */
import {useState} from 'react';
function calSum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum +=i;
    }
    return sum
}
export const Lazy = ({ n }) => {
 // const [count, setCount] = useState(calSum(n)); //exectued for each time
const [count,setCount]=useState(() =>calSum(n)); //only one time calSum is called so we call it as Lazy
  return (
    <>
      <h1>Count:{count}</h1>
    </>
  );
};
