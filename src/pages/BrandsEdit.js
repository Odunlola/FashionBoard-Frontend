import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";


function BooksEdit() {
    // const navigate = useNavigate();
    const { brandId } = useParams();
    const [brand, setBrand] = useState(null);
    const navigate = useNavigate();
    async function getBrand() {
        try {
            let myBrand = await fetch(`https://fashion-board-backend.onrender.com/${brandId}`);
            myBrand = await myBrand.json();
            setBook(myBrand);
        } catch(err) {
            console.log(err);
        }
    }
    // console.log(brand);

    useEffect(() => {
        getBrand();
    }, []);

    function handleChange(e) {
        setBook((currentState) => ({
            ...currentState,
            [e.target.name]: e.target.value
        }))
    }

    async function handleSumbit(e) {
        try{
            e.preventDefault();
            // console.log("I'm submitting my put request")
            await fetch(`https://fashion-board-backend.onrender.com/${brandId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(brand)
            });
            return navigate(`/brands/${brandId}`);
            // return redirect(`/brands/${brandId}`)
        } catch(err) {
            console.log(err);
        }
    }

    function loaded() {
        return(
            <>
                <h2>Editing {brand.name}</h2>
                <form onSubmit={handleSumbit}>
                    Name: <input type="text" value={brand.name} name="name" onChange={handleChange} />
                    Style: <input type="text" value={brand.style} name="style" onChange={handleChange} />
                    Image: <input type="text" value={brand.image} name="image" onChange={handleChange} />
                    Specialty: <input type="text" value={brand.speciality} name="specilaity" onChange={handleChange} />
                    Price: $<input type="number" value={brand.price} name="price" onChange={handleChange} />
                    <button>Submit</button>
                </form>
            </>
        )
    }

    return (
        <>
            {brand ? loaded() : <h2>Loading...</h2>}
        </>
    )
}

export default BrandsEdit;