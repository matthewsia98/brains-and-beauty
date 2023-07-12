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

    const filterProducts = (category, value) => {
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
            const tempList = filterProducts(category, value);
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
                  const tempList = filterProducts(category, item);
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
      
    return (     
        <div className="mt-3 p-5">
            <h3 className="mb-4">Face Products</h3>
            <div className="row">
                <div className="col-3 bg-yellow">
                    <div className="container-lg bg-yellow">
                        <div className="mt-4">
                            <h4>Concerns</h4>   
                            <CheckboxList items ={faceConcerns} category="concerns"/>
                        </div>
                        <div className="mt-4">
                            <h4>Ingredients</h4>   
                            <CheckboxList items ={faceIngredients} category="ingredients"/>
                        </div>  
                        <div className="my-4">
                            <h4>Brands</h4>   
                            <CheckboxList items ={faceBrands} category="brands"/>
                        </div>  
                    </div>   
                </div>
                <div className="col-9">
                    <ProductPagination input={displayList}></ProductPagination>
                </div>
            </div>
        </div>
    );
}
 
export default FaceProducts;