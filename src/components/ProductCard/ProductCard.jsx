import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteCard = async () => {
    try {
      let response = await axios.delete(
        `https://dummyjson.com/products/${props.product.id}`
      );
      setIsDeleted(response.data.isDeleted);
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  console.log(props);

  return (
    <>
      {isDeleted ? null : (
        <div className="col-24 col-md-12">
          <div key={props.product.id} className="card">
            <img
              src={props.product.thumbnail}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{props.product.title}</h5>
              <p className="card-text">{props.product.description}</p>
              <Link
                to={"/products/" + props.product.id}
                className="btn btn-primary"
              >
                Detail
              </Link>
              <button onClick={deleteCard} className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}



export default ProductCard;
