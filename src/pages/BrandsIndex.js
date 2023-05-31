import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';

function BrandsIndex () {

    const [brands, setBrands] = useState([]);
    // creating a hook with a default value set 
    const [brandsForm, setBrandsForm] = useState({
       Name: "",
       Style: "",
       Image:"",
       Specialty: "",
       Price: 0
    })

    async function getBrands() {
        try {
        
            let myBrands = await fetch('https://fashion-board-backend.onrender.com/brands')
           
            myBrands = await myBrands.json();
           
            console.log(myBrands);
            setBrands(myBrands);
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getBrands();
    }, []);

    console.log(brands);

    function loaded(arr) {
        return(
            <>
                {arr.map((brand, idx) => {
                    return(
                        <td display= 'grid' key={idx}>
                            <Link to={`/brands/${brand._id}`}>
                        
                            </Link>
                            {/* <a href="https://imgur.com/GfR14GL"><img src={brand.image} title="source: imgur.com" alt="dresses" className="Home-img"/></a>
   */}
                            <Link to ={`/brands/${brand._id}`}>< img src={brand.image} alt= "" style={{ width: 250, height: 400 }} /></Link>
                            <h2>{brand.name}</h2>
                            <h3>{brand.style}</h3>
                            <h3> ${brand.price}</h3>
                            <Link to={brand.website} target="_blank"> <button> click to buy</button></Link>
                            <h6> {brand.speciality}</h6>
                            
                            </td>
                    )
                })}
            </>
        )
    }

  
    function handleChange(e) {
         console.log(e.target);
        setBrandsForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }
     async function handleSumbit(e) {
        try {
            e.preventDefault();
            await fetch('https://fashion-board-backend.onrender.com/brands', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(brandsForm)
            })
            getBrands();
            e.target.reset();
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <>
            <form onSubmit={handleSumbit}>
                <label>Name: </label>
                <input type="text" name="name" onChange={handleChange} placeholder="Brand Name"/>
                <label>Image: </label>
                <input type="text" name="image" onChange={handleChange} placeholder="Image"/>
                <label>Style: </label>
                <input type="text" name="style" onChange={handleChange} placeholder="Style"/>
                <label>Price: $</label>
                <input type="number" name="price" onChange={handleChange} placeholder="Price"/>
                <label>Specialty: </label>
                <input type="text" name="speciality" onChange={handleChange} placeholder="specialty"/>
                <label>Website: </label>
                <input type="text" name="website" onChange={handleChange} placeholder="website"/>
                <button>Submit</button>
            </form>
            {brands.length ? loaded(brands) : <h2>Loading...</h2>}
        </>
    )
}

export default BrandsIndex;