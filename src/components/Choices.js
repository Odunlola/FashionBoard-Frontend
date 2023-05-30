import { useState } from "react";

function Choices(props) {
    const [speciality, setSpeciality] =useState(props.choice.speciality);
    function changeSpeciality () {
        setSpeciality(speciality + 1)
    }
    console.log(props)
    return(
        <div> 
       <h6>Name: {props.choice.name}</h6>
       <h6>Website: {props.choice.website}</h6>
       <div class="speciality">
        </div><h6>Speciality: {speciality}</h6><button onClick={changeSpeciality}>+</button>
       <hr/>
        </div>

    )
}

export default Choices;