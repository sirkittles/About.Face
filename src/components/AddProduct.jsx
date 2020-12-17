import React, { useState } from "react";
import axios from "axios";

const AddProduct = (props) => {
  const [name, setName] = useState("");
  const [productType, setProductType] = useState("");
  const [added, setAdded] = useState(false);
  const [toggleAdd, setToggleAdd] = useState(false);
  //change later when types are added to the airtable
  const productTypes = ["first cleanser", "second cleanser", "toner", "essence", "serum", "moisturizer", "face oil", "sunscreen"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      productType,
    };

    await axios.post(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/products`,
      { fields: fields },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": `application/json`,
        },
      }
    );
    setName("");
  };

  const handleClick = () => {
    setAdded(true);
    setTimeout(() => {
      props.setGetProducts(!props.getProducts);
      setAdded(false);
      setToggleAdd(!toggleAdd);
    }, 2000);
  };

  const handleAdd = () => {
    setToggleAdd(!toggleAdd);
  };

  return (
    <div className="add-product-container">
      <button id="product-add-button" onClick={handleAdd}>{(toggleAdd) ? "Close" : "Add Product"}</button>
      {toggleAdd && (
        <form onSubmit={handleSubmit}>
          <h3>New Product:</h3>
          <label htmlFor="new-product-name"></label>
          <input
            name="name"
            type="text"
            placeholder="product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            name="productType"
            type="text"
            id="product-type"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          >
            <option value="">select</option>
            {productTypes.map((type, i) => {
              return (
                <option key={i}>
                  {type}
                </option>
              );
            })};
          </select>
          <button type="submit" onClick={handleClick}>
            {added ? "Adding!" : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
};

export default AddProduct;
