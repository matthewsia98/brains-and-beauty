import droppersImage from './photos/droppers.png';
import { Tab, Nav } from 'react-bootstrap';
import { useState } from 'react';
const ProductPage = (product) => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabSelect = (selectedTab) => {
      setActiveTab(selectedTab);
    };
    return ( 
        <div className="container-lg m-2 p-5">
        <div className="row mx-auto">
            <div className="col-md-6">    
                <div>
                    <h3>
                        Product Name
                    </h3> 
                </div>
                <div className='mt-5'>
                    <p className='text-decoration-underline'>16.00 CAD</p>
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
                <img src={droppersImage} alt="skincare droppers" style={{ width: '600px', height: '400px'}}/>  
            </div>
        </div>
        <div>
            <Nav variant="tabs" defaultActiveKey={activeTab}>
                <Nav.Item>
                <Nav.Link eventKey="tab1" onSelect={handleTabSelect}>
                    Tab 1
                </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="tab2" onSelect={handleTabSelect}>
                    Tab 2
                </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="tab3" onSelect={handleTabSelect}>
                    Tab 3
                </Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="tab1">
                <h1>Tab 1 Content</h1>
                <p>This is the content for Tab 1.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="tab2">
                <h1>Tab 2 Content</h1>
                <p>This is the content for Tab 2.</p>
                </Tab.Pane>
                <Tab.Pane eventKey="tab3">
                <h1>Tab 3 Content</h1>
                <p>This is the content for Tab 3.</p>
                </Tab.Pane>
            </Tab.Content>
        </div>
        </div>
    );
}
 
export default ProductPage;