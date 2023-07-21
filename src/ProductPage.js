import droppersImage from './photos/droppers.png';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from './CartContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router-dom';
import { productList } from './Home';
import './index.css';
import { actives } from './Home';
const ProductPage = () => {
    const { product_id } = useParams();
    const product = productList.find((el) => el.id == product_id);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const { cartItems, setCartItems } = useContext(CartContext);


    const addToCart = () => {
      const existingCartItemIndex = cartItems.findIndex((item) => item.id === product.id);
    
      if (existingCartItemIndex !== -1) {
        const updatedCart = cartItems.map((item, index) => {
          if (index === existingCartItemIndex) {
            return { ...item, quantity: item.quantity + selectedQuantity };
          }
          return item;
        });
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      } else {
        const newCartItem = {
          id: product.id,
          name: product.name,
          quantity: selectedQuantity,
          price: parseFloat(product.price)
        };
        const newCart = [...cartItems, newCartItem];
        setCartItems(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
      }
    };
    
    

      
  const handleQuantityChange = (e) => {
    setSelectedQuantity(Number(e.target.value));
  };
      
    

    const renderTabContent = (index) => {
        if (index === 0) {
            if(product.category == "sun"){
                return (
                    <div>
                    {Object.entries(product.uv_filters).map(([ingredient, percentage]) => (
                      <div key={ingredient}>
                        <strong>{ingredient}:</strong> {percentage}
                      </div>
                    ))}
                  </div>
                )
            }else{
                return (
                    <div>
                      {product.active_ingredient.map((ingredient) => (
                        <div key={ingredient}><strong>{ingredient}:</strong> {actives[ingredient]}</div>
                      ))}
                    </div>
                  );
            }
        }else if (index === 1) {
          return (
            <div>
                {product.ingredient_list}
            </div>
          );
        } else if (index === 2) {
          return (
            <div>
                {product.directions}
            </div>
          );
        }
      };
    
    const createTabs = () => {
        if (product.category == "sun"){
            return(
                <div className='mt-5'>
                <Tabs defaultIndex={0}>
                    <TabList>
                        <Tab>UV Filters</Tab>
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
            );
        }else{
            return (
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
            );
        }
    }
    
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
                    <select id="quantity" className="form-select border-dark" onChange={handleQuantityChange} style={{width:'200px'}}>
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
                        onClick={addToCart}
                        >
                        Add to Cart
                    </button>
                </div>

            </div>
            <div className="col-md-6">
                <img className='ms-5' src={require(`${product.image_path}`)} alt="product" style={{ width: '100%', height: '100%'}}/>  
            </div>
        </div>
        {createTabs()}
        </div>
    );
}
 
export default ProductPage;