import axios from "axios";
import React, { useEffect, useState } from "react";

const MakeRequest = () => {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setproducts(response.data);
      setloading(false);
    };

    fetchProducts();
  }, []);

  const delProd = (index) => {
    let newProd = products;
    newProd.splice(index, 1);
    console.log(index);
    console.log(newProd);
    console.log(products)
    setproducts(newProd);
  };
  return (
    <div>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="d-flex flex-wrap gap-3">
          {products.map((product, index) => (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card’s content.
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => delProd(product.id)}
                >
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MakeRequest;
