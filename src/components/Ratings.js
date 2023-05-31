import {useState} from 'react';
import {FiThumbsUp} from "react-icons/fi";
import {FiHeart} from "react-icons/fi";
function Ratings() {
  const [rates, setRates] = useState(0)
   function updateRates () {
    let currentRates = rates;
    currentRates ++;
    setRates(currentRates)
}
  return (
 <> 
 <div>
  {/* <p> <FiHeart/>: {rates} </p> */}
 <a><button onClick={updateRates}> <FiHeart/>: {rates} </button></a>
  </div>
  </> 
  
  );
  }

    
export default Ratings;