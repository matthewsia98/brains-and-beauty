import droppersImage from './photos/droppers.png';
import './index.css';
import CarouselBestSellers from './CarouselBestsellers';
import ProductPage from './ProductPage';
const Home = () => {

    const productList = [{name:'Glycolic Acid 7% Toning Solution', category: ["face", "body"], brand: "The Ordinary", ingredient_list: " water (Aqua), Glycolic Acid, Rosa Damascena Flower Water, Centaurea Cyanus Flower Water, Aloe Barbadensis Leaf Water, Propanediol, Glycerin, Triethanolamine, Sodium Hyaluronate Crosspolymer, Tasmannia Lanceolata Fruit/Leaf Extract, Hamamelis Virginiana (Witch Hazel) Leaf Extract, Sodium Citrate", description:"Glycolic Acid 7% Toning Solution is an exfoliant targeted at the surface of the skin. It helps improve skin clarity, balance uneven skin tone, and correct texture over time. This formula contains a Tasmanian Pepperberry derivative of plant origin which varies in colour seasonally and this colour variation may be apparent in the formula from time to time.", active_ingredient:["Glycolic Acid"], price: 16.00, target_concerns: ["acne", "roughness", "hyperpigmentation"], image_path:"./photos/glycolic_acid_toning_solution.webp"}]

    return (  
        <section id="homepage">
            <div className="container-lg m-2 p-5">
                <div className="row mx-auto">
                    <div className="col-md-6">    
                        <h3>
                            Science-Driven Skincare for All
                        </h3> 
                        <p>
                            <br/> Brains & Beauty is an online store <br/> founded by a group of cosmetic chemists and <br/> dermatologists in 2020. <br/><br/> Our mission is to provide a carefully curated <br/> selection of affordable and effective<br/> products based on the latest research.
                        </p>                   
                        <a  style={{color: 'black'}} href="/">Get in Touch with One of Our Experts</a>
                    </div>
                    <div className="col-md-6">
                     <img src={droppersImage} alt="skincare droppers" style={{ width: '600px'}}/>  
                    </div>
                </div>
            </div>

            <div>
                <h4 className ="m-2 p-5 text-center"style={{textDecoration:'underline'}}>
                    Our Best Sellers
                </h4>
            </div>
            <div className='m-4'>
                <CarouselBestSellers bestsellers={productList}/>
            </div>
            <ProductPage />
       </section>
    );
}
 
export default Home;