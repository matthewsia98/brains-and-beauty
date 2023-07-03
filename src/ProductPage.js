import droppersImage from './photos/droppers.png';
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router-dom';
import { productList } from './Home';
const ProductPage = () => {

    const {product_id} = useParams();
    const product = productList.find(el => el.id == product_id);

    const renderTabContent = (index) => {
        if (index === 0) {
          return (
            <div>
                actives
            </div>
          );
        } else if (index === 1) {
          return (
            <div>
                {product.ingredient_list}
            </div>
          );
        } else if (index === 2) {
          return (
            <div>
                directions
            </div>
          );
        }
      };
    
    return ( 
        <div className="container-lg m-2 p-5">
        <div className="row mx-auto">
            <div className="col-md-6">    
                <div>
                    <h3>
                        {product.name}
                    </h3> 
                    <h5 className='fw-bold'>{product.brand}</h5>
                    <p className='mt-4'>{product.description}</p>
                </div>
                <div className='mt-4'>
                    <p className='text-decoration-underline'>{product.price} CAD</p>
                    <label for="quantity">Quantity</label>
                    <select id="quantity" className="form-select border-dark" style={{width:'200px'}}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                </div>
                <div className='mt-5' style={{marginBottom:"0px"}}>
                    <button 
                        style={{
                            backgroundColor: '#cccccc',
                            width:'200px',
                            padding: '10px 50px',
                            border: 'none',
                            fontSize: '16px'
                        }}
                        >
                        Add to Cart
                    </button>
                </div>

            </div>
            <div className="col-md-6">
                <img src={require(`${product.image_path}`)} alt="product" style={{ width: '100%', height: '100%'}}/>  
            </div>
        </div>
        <div className='mt-5'>
            <Tabs defaultIndex={0}>
                <TabList>
                    <Tab>Key Ingredients</Tab>
                    <Tab>Full Ingredient List</Tab>
                    <Tab>Directions</Tab>
                </TabList>
                <TabPanel>
                    {renderTabContent(0)}
                </TabPanel>
                <TabPanel>
                    {renderTabContent(1)}
                </TabPanel>
                <TabPanel>
                    {renderTabContent(2)}
                </TabPanel>
            </Tabs>
        </div>
        </div>
    );
}
 
export default ProductPage;