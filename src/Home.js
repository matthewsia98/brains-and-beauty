import droppersImage from './photos/droppers.png';
import './index.css';
import CarouselBestSellers from './CarouselBestsellers';


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
      directions:'This product is recommended for evening use, applied with a saturated cotton pad on cleansed face and neck, avoiding sensitive areas. It should not be rinsed off, and caution should be exercised regarding skin contact frequency and duration. Sunscreen and limited sun exposure are advised due to increased sun sensitivity caused by the product\'s alpha hydroxy acid content.',
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
      },
      
      {
        "id": 6,
        "name": "Skin Renewing Vitamin C Serum",
        "brand": "Cerave",
        "ingredient_list": "Aqua/Water/Eau, Ascorbic Acid, Glycerin, Dimethicone, Cetearyl Ethylhexanoate, Alcohol Denat., Sodium Hydroxide, Ammonium Polyacryloyldimethyl Taurate, Panthenol, Ceramide NP, Ceramide AP, Ceramide EOP, Carbomer, Cetearyl Alcohol, Behentrimonium Methosulfate, Sodium Hyaluronate, Sodium Lauroyl Lactylate, Cholesterol, Phenoxyethanol, Tocopheryl Acetate, Disodium EDTA, Isopropyl Myristate, Caprylyl Glycol, Xanthan Gum, Phytosphingosine, Ethylhexylglycerin.",
        "description": "CeraVe Skin Renewing Vitamin C Serum is a potent yet gentle lightweight serum containing 10% pure Vitamin C. It helps brighten the complexion, promote even skin tone, and improve texture. Enriched with essential Ceramides, Hyaluronic Acid, and vitamin B5, it restores the skin\'s barrier, enhances hydration, and leaves the skin soft, radiant, and healthy-looking.",
        "category": ['face'],
        "active_ingredient": ['Ascorbic Acid'],
        "price": "25.00",
        "target_concerns": ['Dullness', 'Signs of Aging'],
        "directions": "Apply the product evenly to the face and neck on a daily basis, taking care to avoid the eye area. In case of contact with the eyes, rinse thoroughly with water. It is recommended to store the product in a cool, dark place to maintain its quality.",
        "image_path": "./photos/vit-c.webp"
        }, 
        {
          "id": 7,
          "name": "Skin Renewing Night Cream",
          "brand": "Cerave",
          "ingredient_list": "Aqua/Water/Eau, Glycerin, Caprylic/Capric Triglyceride, Butyrospermum Parkii Butter/Shea Butter, Dimethicone/Vinyl Dimethicone Crosspolymer, Cyclopentasiloxane, Glyceryl Stearate SE, Cetyl Alcohol, Dimethicone, Saccharide Isomerate, Stearic Acid, Palmitic Acid, Glycine Soja Sterols/Soybean Sterols, Allantoin, Ceramide NP, Ceramide AP, Ceramide EOP, Carbomer, Niacinamide, Cetearyl Alcohol, Behentrimonium Methosulfate, Sodium Hydroxide, Myristic Acid, Sodium Lauroyl Lactylate, Sodium Benzoate, Sodium Citrate, Sodium Hyaluronate, Cholesterol, Phenoxyethanol, Tocopherol, Tripeptide-1, Laureth-9, Citric Acid, Caprooyl Tetrapeptide-3, Biosaccharide Gum-1, Phytosphingosine, Xanthan Gum, Dextran, Ethylhexylglycerin, Butylene Glycol.",
          "description": "CeraVe Skin Renewing Night Cream is a hydrating and rejuvenating option for nighttime skincare. It contains Ceramides, Hyaluronic Acid, Niacinamide, and peptides to improve the appearance of tired skin. Suitable for all skin types, this non-greasy cream helps restore the skin barrier, retain hydration, and provides all-night moisture for a refreshed look in the morning.",
          "category": ["face"],
          "active_ingredient": ["Peptides", "Niacinamide"],
          "price": "40.45",
          "target_concerns": ["Signs of Aging"],
          "directions": "To use the product, apply small dots of the cream to areas of the face where needed. Gently smooth the cream onto the skin until it is thoroughly absorbed. It is recommended to use the cream nightly before bedtime for optimal results.",
          "image_path": "./photos/renewing-cream.webp"
        },
        
        {
          "id": 8,
          "name": "Retinol B3 Anti-Aging Face Serum",
          "brand": "La Roche Posay",
          "ingredient_list": "Water (Aqua), Glycerin, Cetyl Alcohol, Dimethicone, Ethylhexyl Palmitate, Sodium Hyaluronate, Retinol, Niacinamide, Tocopherol, Panthenol, Phenoxyethanol, Ethylhexylglycerin, Xanthan Gum, Sodium Benzoate, Potassium Sorbate, Citric Acid.",
          "description": "The Retinol B3 Anti-Aging face serum and neck serum for aging skin and sensitive skin helps skin look smoother, more luminous, and renewed. Progressively, skin firmness recovers and photoaging signs are reduced: deep wrinkles, irregular skin texture and uneven skin complexion. Worked with dermatologists, this serum is a unique complex of pure and gradual retinol for a continuous and potent anti-wrinkle action, combined with vitamin B3 (niacinamide) for an optimal regenerating efficacy while also being suitable for sensitive skin.",
          "category": ["face"],
          "active_ingredient": ["Retinol", "Niacinamide"],
          "price": "67.55",
          "target_concerns": ["Signs of Aging"],
          "directions": "Cleanse your skin with Micellar Foaming Water. Apply 3 to 4 drops of Retinol B3 Serum in the evening on the face and neck, avoiding the eye area. Use alone or mix with moisturizer. Apply SPF during the day and store the serum in a cool, dark place for stability.",
          "image_path": "./photos/roche-posay-ret.webp"
          },
          {
            "id": 9,
            "name": "Effaclar Duo (+) Global Action Acne Face Treatment",
            "brand": "La Roche Posay",
            "ingredient_list": "Aqua, Glycerin, Dimethicone, Isocetyl Stearate, Niacinamide, Isopropyl Lauroyl Sarcosinate, Silica, Ammonium Polyacryloyldimethyl Taurate, Methyl Methacrylate Crosspolymer, Sodium Hydroxide, Poloxamer 338, Polysorbate 80, Mannose, Xanthan Gum, Zinc Pca, Isohexadecane, 2-oleamido-1,3-octadecanediol, Capryloyl Salicylic Acid, Caprylyl Glycol, Piroctone Olamine, Myristyl Myristate, Acrylamide/Sodium Acryloyldimethyltaurate Copolymer Sorbitan Oleate, Disodium Edta, Potassium Cetyl Phosphate, Vitreoscilla Ferment, Aluminum Starch Octenylsuccinate, Glyceryl Stearate Se, Parfum",
            "description": "Effaclar Duo (+) is a global action acne treatment and 24-hour hydrating face lotion that acts immediately on acne without drying the skin. Formulated with dermatological ingredients including salicylic acid. It is our best acne treatment that targets all stages of the pimple lifecycle, while ensuring perfect tolerance, even on sensitive skin. Thanks to its unique anti-recurrence action, it not only clears acne but also prevents recurring breakouts. It allows skin to heal and purifies clogged pores. This global acne treatment moisturizer has been tested on oily acne-prone skin, recurring imperfections, and persistent marks.",
            "category": ["face"],
            "active_ingredient": ["Salicylic Acid", "Niacinamide"],
            "price": "29.35",
            "target_concerns": ["Acne"],
            "directions": "Cleanse skin thoroughly before applying the product. For new users: apply EFFACLAR DUO (+) to a small area once a day for three days to test if you are sensitive to this product. If no discomfort occurs, cover the entire affected area with a thin layer. Start with one application daily, then gradually increase to two or three times daily, if needed. If dryness or peeling occurs, reduce application to once a day or every other day.",
            "image_path": "./photos/effaclar.jpg"
            },
            {
              "id": 10,
              "name": 'Multi-Peptide + HA Serum ("Buffet")',
              "brand": "The Ordinary",
              "ingredient_list": "Aqua (Water), Glycerin, Lactococcus Ferment Lysate, Acetyl Hexapeptide-8, Pentapeptide-18, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Palmitoyl Tripeptide-38, Dipeptide Diaminobutyroyl Benzylamide Diacetate, Acetylarginyltryptophyl Diphenylglycine, Sodium Hyaluronate Crosspolymer, Sodium Hyaluronate, Allantoin, Glycine, Alanine, Serine, Valine, Isoleucine, Proline, Threonine, Histidine, Phenylalanine, Arginine, Aspartic Acid, Trehalose, Fructose, Glucose, Maltose, Urea, Sodium PCA, PCA, Sodium Lactate, Citric Acid, Hydroxypropyl Cyclodextrin, Sodium Chloride, Sodium Hydroxide, Butylene Glycol, Pentylene Glycol, Acacia Senegal Gum, Xanthan Gum, Carbomer, Polysorbate 20, PPG-26-Buteth-26, PEG-40 Hydrogenated Castor Oil, Trisodium Ethylenediamine Disuccinate, Ethoxydiglycol, Sodium Benzoate, Caprylyl Glycol, Ethylhexylglycerin, Phenoxyethanol, Chlorphenesin.",
              "description": "Multi-Peptide + HA Serum (formerly known as “Buffet”) is a universal formula that combines a comprehensive array of technologies to improve skin smoothness and target multiple signs of aging at once. By utilizing four well-studied peptide technologies, skin-friendly amino acids, and multiple hyaluronic acid complexes, it helps significantly improve the appearance of crow's feet, as well as improving the feel of skin elasticity and firmness.\n This formula contains SYN™-AKE, Matrixyl™ synthe'6™, Matrixyl™ 3000, ARGIRELOX™ peptide, Hyaluronic Acid, Amino Acids, and Bio-Derivatives",
              "category": ["face"],
              "active_ingredient": ["Peptides"],
              "price": "11.45",
              "target_concerns": ["Signs of Aging"],
              "directions": "To ensure optimal usage and safety, it is recommended to apply a few drops of the product to the face both in the morning and evening. However, if any irritation or discomfort arises, it is important to immediately rinse off the product, discontinue its use, and seek medical advice from a physician. It is crucial to apply the product solely on unbroken skin and adhere to the provided directions. Prior to regular use, conducting a patch test is advisable to assess individual sensitivity. Lastly, for the safety of children, the product should be stored out of their reach.",
              "image_path": "./photos/buffet.webp"
            }

  ];
export const bestSellers = [1,2,3,6,8]
export const priceRanges = ['Under $15', 'Under $50', 'Under $100']
export const actives = {
  'Ascorbic Acid': 'A potent antioxidant that helps brighten the skin, even out skin tone, and protect against environmental damage. It also aids in collagen production and reduces the appearance of fine lines and wrinkles.',
  'Azelaic Acid': 'Helps to unclog pores, reduce inflammation, and minimize the appearance of blemishes and redness. It can also regulate skin pigmentation, making it beneficial for hyperpigmentation concerns.',
  'Glycolic Acid': 'An exfoliating ingredient that helps remove dead skin cells, improve skin texture, and promote a brighter complexion. It stimulates collagen production, reduces the appearance of fine lines, and enhances the absorption of other skincare products.',
  'Urea': 'Provides hydration to the skin, helps to soften and smooth rough patches, and supports the skin\'s natural exfoliation process. It has excellent water-binding properties, making it effective for dry and rough skin conditions.',
  'Niacinamide': 'Helps to regulate oil production, improve skin\'s elasticity, and minimize the appearance of pores and fine lines. It also strengthens the skin barrier, evens out skin tone, and reduces redness and blotchiness.',
  'Peptides': 'These amino acid compounds support collagen production, promote skin firmness, and help reduce the appearance of wrinkles. They can improve skin elasticity, hydration, and overall texture, resulting in a more youthful-looking complexion.',
  'Retinol': 'A form of vitamin A that aids in reducing the appearance of fine lines, wrinkles, and uneven skin tone. It stimulates cell turnover, increases collagen production, and improves skin texture and firmness. It is important to use retinol products with caution and gradually build tolerance.',
  'Salicylic Acid': 'Effective for treating acne-prone skin by unclogging pores, reducing inflammation, and promoting clearer skin. It helps to exfoliate the skin\'s surface and penetrate into the pores, preventing acne breakouts and improving overall skin texture.'
};



const Home = () => {

    return (  
        <section id="homepage">
            <div className="container-lg m-2 p-5">
                <div className="row mx-3">
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
                     <img src={droppersImage} alt="skincare droppers" style={{ width: '110%', height:'100%'}}/>  
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