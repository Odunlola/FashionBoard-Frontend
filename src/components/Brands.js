import Choices from "./Choices"

function Brands() { 
    const fashionBrands = [
        {
        name: "Vane Styles",
        website:"wwww.shopvanestyle.com",
        speciality: "Clothes, Jewelry, Shoes"
        },
        {
        name: "Frock Avenue",
        website:"www.frockavenue.com",
        speciality: "Clothes, Jewelry, Shoes"
        },
        {
        name: "KHOI",
        website:"www.shopkhoi.com",
        speciality: "Clothes, Jewelry, Shoes"
        },
        {
        name: "Monica Collections",
        website:"https://www.instagram.com/monicacollections__",
        speciality: "Clothes, Jewelry, Shoes"
        }
    ]
         return(
            <>
            <h2> Stylish Brands to Curate your Wardrobe </h2>
            {fashionBrands.map((brand,idx) => {
                return <div key={idx}><Choices choice={brand} /> </div>
            })}
            </>
         )

   
}

export default Brands;