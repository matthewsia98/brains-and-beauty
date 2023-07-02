import droppersImage from './photos/droppers.png';
const ProductPage = (product) => {
    return ( 
        <div className="container-lg m-2 p-5">
        <div className="row mx-auto">
            <div className="col-md-6">    
                <h3>
                    Product Name
                </h3> 

                <button 
                    style={{
                        backgroundColor: '#cccccc',
                        padding: '10px 50px',
                        border: 'none',
                        fontSize: '16px'
                    }}
                    >
                    Add to Cart
                </button>

            </div>
            <div className="col-md-6">
                <img src={droppersImage} alt="skincare droppers" style={{ width: '600px', height: '400px'}}/>  
            </div>
        </div>
        </div>
    );
}
 
export default ProductPage;