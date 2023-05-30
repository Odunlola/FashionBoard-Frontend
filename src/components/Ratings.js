import {useState} from 'react';
import {FiThumbsUp} from "react-icons/fi";

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
  <h1> likes: {rates} </h1>
  <button onClick={updateRates}> <FiThumbsUp/></button>
  </div>
  </> 
  
  );
  }

    
export default Ratings;