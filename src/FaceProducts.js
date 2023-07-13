import { productList } from "./Home";
import React, { useEffect, useState } from 'react';
import ProductCard from "./ProductCard";
import { priceRanges } from "./Home";
import ProductPagination from "./productPagination";
import './index.css';

const faceProductList = productList.filter((product) =>
  product.category.includes('face')
);
const faceConcerns = ['Acne', 'Dryness', 'Dullness', 'Redness', 'Signs of Aging'];
const faceIngredients = ['Ascorbic Acid', 'Azelaic Acid', 'Glycolic Acid', 'Urea', 'Niacinamide', 'Peptides', 'Retinol', 'Salicylic Acid'];
const faceBrands = ['The Ordinary', 'Paula\'s Choice', 'La Roche Posay', 'Eucerin', 'Cerave'];

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

const FaceProducts = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [displayList, setDisplayList] = useState(faceProductList);
  const [priceFilter, setPriceFilter] = useState('0')
 
    function CheckboxList({ items, category}) {
        return (
            <div style={{ marginLeft: '5%' }}>
            {items.map((item) => (
                <div key={item}>
                <input type="checkbox" id={item} name={category} value={item}  checked={checkedItems.includes(item)} onChange={handleCheckboxChange}/>
                <label style={{ marginLeft: '3%' }}>{item}</label>
                </div>
            ))}
            </div>
        );
    }

    const filterProducts = (category, value, price) => {

      if(price === 0){
        if (category === 'concerns') {
          return faceProductList.filter((product) =>
              product.target_concerns.includes(value)
          );
          } else if (category === 'ingredients') {
          return faceProductList.filter((product) =>
              product.active_ingredient.includes(value)
          );
          } else if (category === 'brands') {
          return faceProductList.filter((product) =>
              product.brand === value 
          );
      }
      }else{
        if (category === 'concerns') {
          return faceProductList.filter((product) =>
              product.target_concerns.includes(value) &&
              parseFloat(product.price) <= parseFloat(price)
          );
          } else if (category === 'ingredients') {
          return faceProductList.filter((product) =>
              product.active_ingredient.includes(value) &&
              parseFloat(product.price) <= parseFloat(price)
          );
          } else if (category === 'brands') {
          return faceProductList.filter((product) =>
              product.brand === value &&
              parseFloat(product.price) <= parseFloat(price)
          );
      }
      }

    };
    
    const handleCheckboxChange=(e) => {
        const isChecked = e.target.checked;
        const value = e.target.value;
        let category = e.target.name;

        if(isChecked){

            setCheckedItems((prevCheckedItems) => {
                  return [...prevCheckedItems, value];
            });

            if(checkedItems.length == 0){
                setDisplayList([]);
            }
            const tempList = filterProducts(category, value, priceFilter);
            setDisplayList((prevList) => {
              const unionSet = new Set([...prevList, ...tempList]);
              return Array.from(unionSet);
            });
        }else{
            if(checkedItems.length == 1){
                setDisplayList(faceProductList);
            }else{
                const temp = checkedItems.filter((item) => item !== value);
                let filteredList = [];
                

                for (const item of temp) {
                  if(faceConcerns.includes(item)){
                    category = "concerns"
                  }else if(faceIngredients.includes(item)){
                    category = "ingredients"
                  }else{
                    category = "brands"
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
    }

    const handleDropdownChange = (event) => {
      const val = event.target.value

      let filteredList = [];
      let category ='';
      if(checkedItems.length ===0){
        filteredList = faceProductList
      }else{
        for (const item of checkedItems) {
          if(faceConcerns.includes(item)){
            category = "concerns"
          }else if(faceIngredients.includes(item)){
            category = "ingredients"
          }else{
            category = "brands"
          }
          const tempList = filterProducts(category, item, val);
          filteredList = [...filteredList, ...tempList];
        }  

      }
        const baseList = Array.from(new Set(filteredList));

        if(val === '0'){
          setDisplayList(baseList);
        }else{
          let fitleredPrice =[]

          for (const item of baseList) {
            if(parseFloat(item.price) <= parseFloat(val)){
              fitleredPrice.push(item)
            }
          }
          console.log(fitleredPrice)
          setDisplayList(fitleredPrice)
        }
        setPriceFilter(val)

    };
  
      
    return (     
      <div>
        <h3 className="d-flex justify-content-center mt-5">Face Products</h3>        
        <div className="mt-3 p-5">
        <h4 className="mb-4">Filter By</h4>
        <div className="row">
            <div className="col-3 bg-yellow">
                <div className="container-lg bg-yellow">
                    <div className="mt-4">
                        <h5>Concerns</h5>   
                        <CheckboxList items ={faceConcerns} category="concerns"/>
                    </div>
                    <div className="mt-4">
                        <h5>Ingredients</h5>   
                        <CheckboxList items ={faceIngredients} category="ingredients"/>
                    </div>  
                    <div className="my-4">
                        <h5>Brands</h5>   
                        <CheckboxList items ={faceBrands} category="brands"/>
                    </div>  
                </div>   
            </div>
            <div className="col-9 ">
            <div className="row">
                    <div className="col-9"></div>
                    <div className="col-3">
                      <div className ='mt-3'style={{ display: 'flex', flexDirection: 'column' }}>
                        <h5>Price</h5>
                        <select id="dropdown" onChange={handleDropdownChange}>
                          <option value="0">Select...</option>
                          <option value="15">Under $15</option>
                          <option value="50">Under $50</option>
                          <option value="100">Under $100</option>
                        </select>
                      </div>
                    </div>
                </div>
                <ProductPagination className='mt-5' input={displayList}></ProductPagination>
            </div>
         </div>
    </div>
  </div>

    );
}
 
export default FaceProducts;