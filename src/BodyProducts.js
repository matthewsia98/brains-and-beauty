import { productList } from "./Home";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductPagination from "./productPagination";
import "./index.css";
import bodyProds from "./photos/bodyprods.jpg";

const bodyProductList = productList.filter((product) =>
  product.category.includes("body"),
);
const bodyConcerns = [
  "Acne",
  "Dryness",
  "Eczema",
  "Keratosis Pilaris",
  "Scars",
];
const bodyIngredients = [
  "Colloidal Oatmeal",
  "Ceramides",
  "Glycolic Acid",
  "Glycerin",
  "Lactic Acid",
  "Urea",
  "Petrolatum",
  "Salicylic Acid",
];
const bodyBrands = [
  "Aveeno",
  "The Ordinary",
  "Paula's Choice",
  "Eucerin",
  "Cerave",
  "First Aid Beauty",
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className="col-md-4" key={item.id}>
            <ProductCard product={item} />
          </div>
        ))}
    </>
  );
}

const BodyProducts = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [displayList, setDisplayList] = useState(bodyProductList);
  const [priceFilter, setPriceFilter] = useState("0");

  function CheckboxList({ items, category }) {
    return (
      <div style={{ marginLeft: "5%" }}>
        {items.map((item) => (
          <div key={item}>
            <input
              type="checkbox"
              id={item}
              name={category}
              value={item}
              checked={checkedItems.includes(item)}
              onChange={handleCheckboxChange}
            />
            <label style={{ marginLeft: "3%" }}>{item}</label>
          </div>
        ))}
      </div>
    );
  }

  const filterProducts = (category, value, price) => {
    if (price === "0") {
      if (category === "concerns") {
        return bodyProductList.filter((product) =>
          product.target_concerns.includes(value),
        );
      } else if (category === "ingredients") {
        return bodyProductList.filter((product) =>
          product.active_ingredient.includes(value),
        );
      } else if (category === "brands") {
        return bodyProductList.filter((product) => product.brand === value);
      }
    } else {
      if (category === "concerns") {
        return bodyProductList.filter(
          (product) =>
            product.target_concerns.includes(value) &&
            parseFloat(product.price) <= parseFloat(price),
        );
      } else if (category === "ingredients") {
        return bodyProductList.filter(
          (product) =>
            product.active_ingredient.includes(value) &&
            parseFloat(product.price) <= parseFloat(price),
        );
      } else if (category === "brands") {
        return bodyProductList.filter(
          (product) =>
            product.brand === value &&
            parseFloat(product.price) <= parseFloat(price),
        );
      }
    }
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    const value = e.target.value;
    let category = e.target.name;

    if (isChecked) {
      setCheckedItems((prevCheckedItems) => {
        return [...prevCheckedItems, value];
      });

      if (checkedItems.length == 0) {
        setDisplayList([]);
      }
      const tempList = filterProducts(category, value, priceFilter);
      setDisplayList((prevList) => {
        const unionSet = new Set([...prevList, ...tempList]);
        return Array.from(unionSet);
      });
    } else {
      if (checkedItems.length == 1) {
        setDisplayList(bodyProductList);
      } else {
        const temp = checkedItems.filter((item) => item !== value);
        let filteredList = [];

        for (const item of temp) {
          if (bodyConcerns.includes(item)) {
            category = "concerns";
          } else if (bodyIngredients.includes(item)) {
            category = "ingredients";
          } else {
            category = "brands";
          }
          const tempList = filterProducts(category, item, priceFilter);
          filteredList = [...filteredList, ...tempList];
        }

        const unionSet = new Set(filteredList);
        setDisplayList(Array.from(unionSet));
      }
      setCheckedItems((prevCheckedItems) => {
        return prevCheckedItems.filter((item) => item !== value);
      });
    }
  };

  const handleDropdownChange = (event) => {
    const val = event.target.value;

    let filteredList = [];
    let category = "";
    if (checkedItems.length === 0) {
      filteredList = bodyProductList;
    } else {
      for (const item of checkedItems) {
        if (bodyConcerns.includes(item)) {
          category = "concerns";
        } else if (bodyIngredients.includes(item)) {
          category = "ingredients";
        } else {
          category = "brands";
        }
        const tempList = filterProducts(category, item, val);
        filteredList = [...filteredList, ...tempList];
      }
    }
    const baseList = Array.from(new Set(filteredList));

    if (val === "0") {
      setDisplayList(baseList);
    } else {
      let fitleredPrice = [];

      for (const item of baseList) {
        if (parseFloat(item.price) <= parseFloat(val)) {
          fitleredPrice.push(item);
        }
      }
      console.log(fitleredPrice);
      setDisplayList(fitleredPrice);
    }
    setPriceFilter(val);
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <img src={bodyProds} alt="women smiling" style={{ width: "100%" }} />
        <div
          style={{ position: "absolute", top: "25%", right: "12%", zIndex: 1 }}
        >
          <h2>Body Products</h2>
          <p className="mt-3" style={{ fontSize: "1.5vw" }}>
            Discover the essence of self-care with our
          </p>
          <p style={{ fontSize: "1.5vw" }}>
            {" "}
            selection of effective and affordable body products!
          </p>
        </div>
      </div>
      <div className="p-4">
        <h4 className="mb-4">Filter By</h4>
        <div className="row">
          <div className="col-3 bg-yellow">
            <div className="container-lg bg-yellow">
              <div className="mt-4">
                <h5>Concerns</h5>
                <CheckboxList items={bodyConcerns} category="concerns" />
              </div>
              <div className="mt-4">
                <h5>Ingredients</h5>
                <CheckboxList items={bodyIngredients} category="ingredients" />
              </div>
              <div className="my-4">
                <h5>Brands</h5>
                <CheckboxList items={bodyBrands} category="brands" />
              </div>
            </div>
          </div>
          <div className="col-9 ">
            <div className="row">
              <div className="col-9"></div>
              <div className="col-3">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h5>Price</h5>
                  <select id="dropdown" onChange={handleDropdownChange}>
                    <option value="0"></option>
                    <option value="15">Under $15</option>
                    <option value="50">Under $50</option>
                    <option value="100">Under $100</option>
                  </select>
                </div>
              </div>
            </div>
            <ProductPagination
              className="mt-5"
              input={displayList}
            ></ProductPagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyProducts;
