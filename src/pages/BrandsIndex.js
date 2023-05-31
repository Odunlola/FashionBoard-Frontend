import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function BrandsIndex () {
    // I want to keep track of if I've grabbed my books array yet
    const [brands, setBrands] = useState([]);
    // I'm creating a hook with a default value set for each element of my form
    const [brandsForm, setBrandsForm] = useState({
       Name: "",
        Style: "",
        Price: 0
    })

    async function getBrands() {
        try {
            // I want to fetch information from API. I'm going to be using localhost because render is insanely slow.
            let myBrands = await fetch('http://localhost:4000/brands')
            // The next thing I need to do is, because information we send is sent as a string, I need to parse it.
            myBrands = await myBrands.json();
            // Updating the value of my hook, which I'm calling books.
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
                        <div key={idx}>
                            <Link to={`/brands/${brand._id}`}>
                                <h2>Style: {brand.Style}</h2>
                            </Link>
                            <h3>Name: {brand.name}</h3>
                            <h3>Price: ${brand.price.toFixed(2)}</h3>
                            <hr />
                        </div>
                    )
                })}
            </>
        )
    }

    // I'm going to be updating the value of the bookForm whenever there's a change made to the form
    function handleChange(e) {
        // I want to take the previous state, which is something built into the set hooks for React, and then update what it was to become the same object execept the e.target
        console.log(e.target);
        setBrandsForm((previousFormState) => ({
            ...previousFormState,
            [e.target.name]: e.target.value
        }))
    }
    // console.log(booksForm);
    // I want to actually add whatever a user submits to my database. And then I want to update the books rendering on my page with that new item.
    async function handleSumbit(e) {
        try {
            // I don't want to reload this page because that defeats the purpose of React
            e.preventDefault();
            // I want to fetch but with a post request so I need to add in some options
            await fetch('http://localhost:4000/brands', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                // I have to specify that what I'm sending, as with most things that are sent, is going to be a string.
                body: JSON.stringify(brandsForm)
            })
            // console.log(myNewBook);
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
                <label>Author: </label>
                <input type="text" name="style" onChange={handleChange} placeholder="Style"/>
                <label>Price: $</label>
                <input type="number" name="price" onChange={handleChange} placeholder="Price"/>
                <button>Submit</button>
            </form>
            {brands.length ? loaded(brands) : <h2>Loading...</h2>}
        </>
    )
}

export default BrandsIndex;