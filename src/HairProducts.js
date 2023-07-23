import { productList } from "./Home";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductPagination from "./productPagination";
import "./index.css";
import hairProds from "./photos/hairprods.webp";

const hairProductList = productList.filter((product) =>
  product.category.includes("hair"),
);
const hairType = ["Dry", "Oily", "Curly", "Colored", "Damaged"];
const productType = [
  "Shampoo",
  "Conditioner",
  "Treatment",
  "Mask",
  "Cream",
  "Oil",
  "Serum",
];
const hairBrands = [
  "Aveeno",
  "The Ordinary",
  "Olaplex",
  "MORROCANOIL",
  "Shu Uemura",
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

const HairProducts = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [displayList, setDisplayList] = useState(hairProductList);
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
      if (category === "hairType") {
        return hairProductList.filter((product) =>
          product.target_hairType.includes(value),
        );
      } else if (category === "prodType") {
        return hairProductList.filter((product) =>
          product.product_type.includes(value),
        );
      } else if (category === "brands") {
        return hairProductList.filter((product) => product.brand === value);
      }
    } else {
      if (category === "hairType") {
        return hairProductList.filter(
          (product) =>
            product.target_hairType.includes(value) &&
            parseFloat(product.price) <= parseFloat(price),
        );
      } else if (category === "prodType") {
        return hairProductList.filter(
          (product) =>
            product.product_type.includes(value) &&
            parseFloat(product.price) <= parseFloat(price),
        );
      } else if (category === "brands") {
        return hairProductList.filter(
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
        setDisplayList(hairProductList);
      } else {
        const temp = checkedItems.filter((item) => item !== value);
        let filteredList = [];

        for (const item of temp) {
          if (hairType.includes(item)) {
            category = "hairType";
          } else if (productType.includes(item)) {
            category = "prodType";
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
      filteredList = hairProductList;
    } else {
      for (const item of checkedItems) {
        if (hairType.includes(item)) {
          category = "hairType";
        } else if (productType.includes(item)) {
          category = "prodType";
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
        <img
          src={hairProds}
          alt="kid applying hairscreen"
          style={{ width: "100%" }}
        />
        <div
          style={{ position: "absolute", top: "25%", right: "5%", zIndex: 1 }}
        >
          <h2>Hair Care</h2>
          <p className="mt-3" style={{ fontSize: "1.5vw" }}>
            Let us help you unlock healthy hair!
          </p>
        </div>
      </div>

      <div className="p-4">
        <h4 className="mb-4">Filter By</h4>
        <div className="row">
          <div className="col-3 bg-yellow">
            <div className="container-lg bg-yellow">
              <div className="mt-4">
                <h5>Hair Type</h5>
                <CheckboxList items={hairType} category="hairType" />
              </div>
              <div className="mt-4">
                <h5>Product Type</h5>
                <CheckboxList items={productType} category="prodType" />
              </div>
              <div className="my-4">
                <h5>Brands</h5>
                <CheckboxList items={hairBrands} category="brands" />
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

export default HairProducts;
