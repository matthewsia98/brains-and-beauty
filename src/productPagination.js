import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProductCard from "./ProductCard";
import './index.css';
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

const ProductPagination= ({input}) => {
    const itemsPerPage = 9;
    const [itemOffset, setItemOffset] = useState(0);
  
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = input.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(input.length / itemsPerPage);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % input.length;
        setItemOffset(newOffset);
    };

    return (  
            <div>
                <div className="row" >
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
    );
}
 
export default ProductPagination;