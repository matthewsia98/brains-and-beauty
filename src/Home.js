import droppersImage from './photos/droppers.png';
import './index.css';
import CarouselBestSellers from './CarouselBestsellers';
// export const productList = [
//     {id: 1, name:'Glycolic Acid 7% Toning Solution', brand: "The Ordinary", ingredient_list: " water (Aqua), Glycolic Acid, Rosa Damascena Flower Water, Centaurea Cyanus Flower Water, Aloe Barbadensis Leaf Water, Propanediol, Glycerin, Triethanolamine, Sodium Hyaluronate Crosspolymer, Tasmannia Lanceolata Fruit/Leaf Extract, Hamamelis Virginiana (Witch Hazel) Leaf Extract, Sodium Citrate", description:"Glycolic Acid 7% Toning Solution is an exfoliant targeted at the surface of the skin. It helps improve skin clarity, balance uneven skin tone, and correct texture over time. This formula contains a Tasmanian Pepperberry derivative of plant origin which varies in colour seasonally and this colour variation may be apparent in the formula from time to time.", category :["face", "body"], active_ingredient:["Glycolic Acid"], price: '16.00', target_concerns: ["Acne", "Dullness", "Hyperpigmentation"], image_path:"./photos/glycolic_acid_toning_solution.webp"},
//     {id: 2, name:'Glycolic Acid 7% Toning Solution', brand: "The Ordinary", ingredient_list: " water (Aqua), Glycolic Acid, Rosa Damascena Flower Water, Centaurea Cyanus Flower Water, Aloe Barbadensis Leaf Water, Propanediol, Glycerin, Triethanolamine, Sodium Hyaluronate Crosspolymer, Tasmannia Lanceolata Fruit/Leaf Extract, Hamamelis Virginiana (Witch Hazel) Leaf Extract, Sodium Citrate", description:"Glycolic Acid 7% Toning Solution is an exfoliant targeted at the surface of the skin. It helps improve skin clarity, balance uneven skin tone, and correct texture over time. This formula contains a Tasmanian Pepperberry derivative of plant origin which varies in colour seasonally and this colour variation may be apparent in the formula from time to time.", category :["face", "body"], active_ingredient:["Glycolic Acid"], price: '16.00', target_concerns: ["Acne", "Dullness", "Hyperpigmentation"], image_path:"./photos/glycolic_acid_toning_solution.webp"},
//     {id: 3, name:'Glycolic Acid 7% Toning Solution', brand: "The Ordinary", ingredient_list: " water (Aqua), Glycolic Acid, Rosa Damascena Flower Water, Centaurea Cyanus Flower Water, Aloe Barbadensis Leaf Water, Propanediol, Glycerin, Triethanolamine, Sodium Hyaluronate Crosspolymer, Tasmannia Lanceolata Fruit/Leaf Extract, Hamamelis Virginiana (Witch Hazel) Leaf Extract, Sodium Citrate", description:"Glycolic Acid 7% Toning Solution is an exfoliant targeted at the surface of the skin. It helps improve skin clarity, balance uneven skin tone, and correct texture over time. This formula contains a Tasmanian Pepperberry derivative of plant origin which varies in colour seasonally and this colour variation may be apparent in the formula from time to time.", category :["face", "body"], active_ingredient:["Glycolic Acid"], price: '16.00', target_concerns: ["Acne", "Dullness", "Hyperpigmentation"], image_path:"./photos/glycolic_acid_toning_solution.webp"},
//     {id: 4, name:'Glycolic Acid 7% Toning Solution', brand: "The Ordinary", ingredient_list: " water (Aqua), Glycolic Acid, Rosa Damascena Flower Water, Centaurea Cyanus Flower Water, Aloe Barbadensis Leaf Water, Propanediol, Glycerin, Triethanolamine, Sodium Hyaluronate Crosspolymer, Tasmannia Lanceolata Fruit/Leaf Extract, Hamamelis Virginiana (Witch Hazel) Leaf Extract, Sodium Citrate", description:"Glycolic Acid 7% Toning Solution is an exfoliant targeted at the surface of the skin. It helps improve skin clarity, balance uneven skin tone, and correct texture over time. This formula contains a Tasmanian Pepperberry derivative of plant origin which varies in colour seasonally and this colour variation may be apparent in the formula from time to time.", category :["face", "body"], active_ingredient:["Glycolic Acid"], price: '16.00', target_concerns: ["Acne", "Dullness", "Hyperpigmentation"], image_path:"./photos/glycolic_acid_toning_solution.webp"},
//     {id: 5, name:'Glycolic Acid 7% Toning Solution', brand: "The Ordinary", ingredient_list: " water (Aqua), Glycolic Acid, Rosa Damascena Flower Water, Centaurea Cyanus Flower Water, Aloe Barbadensis Leaf Water, Propanediol, Glycerin, Triethanolamine, Sodium Hyaluronate Crosspolymer, Tasmannia Lanceolata Fruit/Leaf Extract, Hamamelis Virginiana (Witch Hazel) Leaf Extract, Sodium Citrate", description:"Glycolic Acid 7% Toning Solution is an exfoliant targeted at the surface of the skin. It helps improve skin clarity, balance uneven skin tone, and correct texture over time. This formula contains a Tasmanian Pepperberry derivative of plant origin which varies in colour seasonally and this colour variation may be apparent in the formula from time to time.", category :["face", "body"], active_ingredient:["Glycolic Acid"], price: '16.00', target_concerns: ["Acne", "Dullness", "Hyperpigmentation"], image_path:"./photos/glycolic_acid_toning_solution.webp"},
//     {id: 6, name:'Glycolic Acid 7% Toning Solution', brand: "The Ordinary", ingredient_list: " water (Aqua), Glycolic Acid, Rosa Damascena Flower Water, Centaurea Cyanus Flower Water, Aloe Barbadensis Leaf Water, Propanediol, Glycerin, Triethanolamine, Sodium Hyaluronate Crosspolymer, Tasmannia Lanceolata Fruit/Leaf Extract, Hamamelis Virginiana (Witch Hazel) Leaf Extract, Sodium Citrate", description:"Glycolic Acid 7% Toning Solution is an exfoliant targeted at the surface of the skin. It helps improve skin clarity, balance uneven skin tone, and correct texture over time. This formula contains a Tasmanian Pepperberry derivative of plant origin which varies in colour seasonally and this colour variation may be apparent in the formula from time to time.", category :["face", "body"], active_ingredient:["Glycolic Acid"], price: '16.00', target_concerns: ["Acne", "Dullness", "Hyperpigmentation"], image_path:"./photos/glycolic_acid_toning_solution.webp"}
// ]

export const productList = [
    {
      id: 1,
      name: 'Glycolic Acid 7% Toning Solution',
      brand: 'The Ordinary',
      ingredient_list:
        'water (Aqua), Glycolic Acid, Rosa Damascena Flower Water, Centaurea Cyanus Flower Water, Aloe Barbadensis Leaf Water, Propanediol, Glycerin, Triethanolamine, Sodium Hyaluronate Crosspolymer, Tasmannia Lanceolata Fruit/Leaf Extract, Hamamelis Virginiana (Witch Hazel) Leaf Extract, Sodium Citrate.',
      description:
        'Glycolic Acid 7% Toning Solution is an exfoliant targeted at the surface of the skin. It helps improve skin clarity, balance uneven skin tone, and correct texture over time. This formula contains a Tasmanian Pepperberry derivative of plant origin which varies in colour seasonally and this colour variation may be apparent in the formula from time to time.',
      category: ['face', 'body'],
      active_ingredient: ['Glycolic Acid'],
      price: '16.00',
      target_concerns: ['Acne', 'Dullness', 'Hyperpigmentation'],
      directions:'hi',
      image_path: './photos/glycolic_acid_toning_solution.webp',
    },
    {
      id: 2,
      name: '2% BHA Lotion Exfoliant',
      brand: 'Paula\'s Choice',
      ingredient_list: 'Lauric Acid, Glycerin, Camellia Sinensis, Epilobium Angustifolium Extract, Salicylic Acid, Avena Sativa Kernel Extract, Glycyrrhiza Glabra, Allantoin',
      description: 'This skin-softening leave-on lotion exfoliant with 2% BHA is a completely non-abrasive way to shed built-up layers of dead skin to reveal the radiant, smooth skin hiding underneath.',
      category: ['face'],
      active_ingredient: ['Salicylic Acid'],
      price: '30.00',
      target_concerns: ['Acne', 'Dullness'],
      directions: 'Apply 1-2 pumps over entire face and neck, including the eye area (avoid lash line and eyelids) after cleansing and toning. Do not rinse. Apply every other day and note skin\'s response. Then use up to twice daily. For daytime, always finish with SPF 30+. For nighttime, follow with the rest of your routine. If you have a salicylate allergy, check with your physician before using any products that contain salicylic acid.',
      image_path: './photos/bha-lotion.avif',
    },
    {
        id: 3,
        name: '10% Azelaic Acid Booster',
        brand: 'Paula\'s Choice',
        ingredient_list: 'Azelaic Acid, Salicylic Acid, Adenosine, Allantoin, Boerhavia Diffusa Root Extract.',
        description: 'This unique formula uses potent azelaic acid, plus other powerhouse ingredients to clarify uneven tone, target stubborn spots and soothe irritation resulting in smoother, more radiant, younger-looking skin.',
        category: ['face'],
        active_ingredient: ['Azelaic Acid'],
        price: '20.00',
        target_concerns: ['Acne', 'Redness'],
        directions:'Once or twice daily, apply to face and neck. May be used alone or added to your favorite moisturizer or serum. For daytime, always follow with a sunscreen. If you have a salicylate allergy, check with your physician before using any products that contain salicylic acid.',
        image_path: './photos/azelaic-acid-booster.avif',
      },
      {
        id: 4,
        name: 'Barrier Repair Moisturizer with Retinol',
        brand: 'Paula\'s Choice',
        ingredient_list: 'Licorice Extract, Tocopheryl Acetate, Lecithin, Glycine Soja Seed Extract, Punica Granatum Extract, Palmitoyl Tripeptide-1, Tetrahydrodemethoxydiferuloylmethane, Retinol, Camellia Oleifera, Adenosine, Pomegranate Extract, Ceramide NP, Licorice Root, Squalane, Butyrospermum Parkii, Glycine Soja Oil, Chamomilla Recutita Flower Extract, Tetrahydrobisdemethoxydiferuloylmethane, Tetrahydrodiferuloylmethane, Shea Butter.',
        description: 'A remarkable skin-renewing anti-aging moisturizer that nourishes dehydrated skin while promoting a firmer-looking, radiant complexion.',
        category: ['face'],
        active_ingredient: ['Retinol'],
        price: '55.00',
        target_concerns: ['Signs of Aging'],
        directions:'Ideal for softening and smoothing the face, neck and eye area. At night, use as the last step in your skincare routine. For daytime, follow with a broad-spectrum sunscreen rated SPF 30 or greater.',
        image_path: './photos/resist-barrier-repair-moisturizer.avif',
      },      {
        id: 5,
        name: 'Barrier Repair Moisturizer with Retinol',
        brand: 'Eucerin',
        ingredient_list:'Aqua Water Eau, Glycerin, Urea-Uree, Cyclomethicone, Ethylhexyl Cocoate, Caprylic-Capric-Triglyceride, Helianthus Annuus, Isopropyl Stearate, Polyglyceryl-2 Dipolyhydroxystearate, Squalane, Sodium Lactate, Butyrospermum Parkii Shea Butter, Polyglyceryl-3 Diisostearate, Hydrogenated Castor Oil, Benzyl Alcohol, Magnesium Sulfate, Sodium Starch Octenylsuccinate, Lactic Acid, Methylparaben, Disodium EDTA, Ceramide 3, BHT.' ,
        description: 'Eucerin Replenishing Face Creme Night 5% Urea is an intensive overnight face cream for dry and tight-feeling skin. Enriched with Urea and Lactate, two compounds that bind moisture, it instantly hydrates dry facial skin, reducing the feeling of tightness. In addition to reducing roughness by maintaining skin hydration (rough skin is often caused by a lack of moisture), Eucerin Replenishing Face Cream Night 5% Urea also smoothes the skin.',
        category: ['face'],
        active_ingredient: ['Urea'],
        price: '17.25',
        target_concerns: ['Dryness'],
        directions:'Start by cleansing your face, then pat dry. Gently massage the cream into your face and neck. Use every evening.',
        image_path: './photos/urea-repair.jpg',
      }

  ];
export const bestSellers = [1,2,3]
export const priceRanges = ['Under $15', 'Under $50', 'Under $100']

const Home = () => {

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
                     <img src={droppersImage} alt="skincare droppers" style={{ width: '120%'}}/>  
                    </div>
                </div>
            </div>

            <div>
                <h4 className ="m-2 p-5 text-center"style={{textDecoration:'underline'}}>
                    Our Best Sellers
                </h4>
            </div>
            <div className='m-4'>
                <CarouselBestSellers products={productList}/>
            </div>
       </section>
    );
}
 
export default Home;