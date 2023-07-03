import { productList } from "./Home";
import { faceProducts } from "./Home";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import ProductCard from "./ProductCard";
import { Pagination } from 'react-bootstrap';
import { priceRanges } from "./Home";
const faceProductList = productList.filter((product) =>
  faceProducts.includes(product.id)
);
const faceConcerns = ['Acne', 'Dryness',  'Dullness', 'Redness', 'Signs of Aging']
const faceIngredients = ['Ascorbic Acid','Azelaic Acid', 'Glycolic Acid',  'Niacinamide', 'Peptides', 'Retinol', 'Salicylic Acid']


function Items({ currentItems }) {
    return(
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

    const itemsPerPage= 6;
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = faceProductList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(faceProductList.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % faceProductList.length;
        setItemOffset(newOffset);
    };

    function CheckboxList({ items}) {
    return (
        <div style={{ marginLeft: '5%' }}>
        {items.map((item) => (
            <div key={item}>
            <input type="checkbox" id={item} name={item} value={item}/>
            <label style={{ marginLeft: '3%' }}>{item}</label>
            </div>
        ))}
        </div>
    );
}
      
    return (     
        <div className="mt-3 p-5">
            <h3 className="mb-4">Face Products</h3>
            <div className="row">
                <div className="col-3 bg-yellow">
                    <div className="container-lg bg-yellow">
                        <div className="mt-4">
                            <h4>Concerns</h4>   
                            <CheckboxList items ={faceConcerns}/>
                        </div>
                        <div className="mt-4">
                            <h4>Ingredients</h4>   
                            <CheckboxList items ={faceIngredients}/>
                        </div>     
                        <div className="my-4">
                            <h4>Price</h4>   
                            <CheckboxList items ={priceRanges}/>
                        </div>   
                    </div>   
                </div>
                <div className="col-9">
                    <div className="row">
                    <Items currentItems={currentItems} />
                    </div>
                    <ReactPaginate className="pagination-container"
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    activeClassName={'active'}
                   />
                </div>
            </div>
        </div>
    );
}
 
export default FaceProducts;