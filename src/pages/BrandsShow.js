import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function BrandsShow () {
    const [brand, setBrand] = useState(null);
    const { brandId } = useParams();
    console.log(brandId);
    async function getBrand() {
        try {
            let myBrand = await fetch(`https://localhost:4000/${brandId}`);
            myBrand = await myBrand.json();
            setBrand(myBrand);
        } catch(error) {
            console.log(error);
        }
    }

    console.log(brand);

    function brandLoaded() {
        return(
            <>
                <h2>Name: {brand.name}</h2>
                <h3>style: {brand.style}</h3>
                <Link to={brand.website} >
                 <button> click to buy</button>
                </Link>
                <h3>Price: ${brand.price.toFixed(2)}</h3>
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
    }, []);

    return(
        <>
            {brand ? brandLoaded() : <h2>Loading...</h2>}
        </>
    )
}

export default BrandsShow;