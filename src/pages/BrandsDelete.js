import { useParams } from "react-router";
import { Link } from "react-router-dom";

function BrandsDelete() {
    const {brandId} = useParams();

    async function deleteMyBrand() {
        try {
            // Make an API call to the DELETE route!
            await fetch(`https://fashion-board-backend.onrender.com/${brandId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
        } catch(err) {
            console.log(err);
        }
    }

    return (
        <>
            <h2>confirm to delete </h2>
            <Link to='/brands'>
                <button onClick={deleteMyBrand}>Confirm, delete!</button>
            </Link>
            <Link to={`/brands/${brandId}`}>
                <button>Do not delete</button>
            </Link>
        </>
    )
}

export default BrandsDelete;