import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function BrandsShow () {
    let [brand, setBrand] = useState(null);
     let { brandId } = useParams();
    // console.log(brandId);
    async function getBrand() {
        try {
            let myBrand = await fetch(`https://fashion-board-backend.onrender.com/${brandId}`);
            myBrand = await myBrand.json();
            setBrand(myBrand);
        } catch(error) {
            console.log(error);
        }
    }

    // console.log(brand);

    function brandLoaded() {
        return(
            <>
                <h2>{brand.name}</h2>
                <Link to ={brand.image}>< img src={brand.image} style={{ width: 200, height: 200 }} /></Link>
                <h3>Style: {brand.style}</h3>
                <Link to={brand.website} > <button> click to buy</button></Link>
                <h3>Price: ${brand.price}</h3>
                <h3>Specialty: {brand.speciality}</h3>
                <Link to={`/brands/${brandId}/edit`}>
                    <button>Edit</button>
                </Link>
                <Link to={`/brands/${brandId}/delete`}>
                    <button>Delete</button>
                </Link>
            </>
        )
    }

    useEffect(() => {
        getBrand();
    },);

    return(
        <>
            {brand ? brandLoaded() : <h2>Loading...</h2>}
        </>
    )
}

export default BrandsShow;