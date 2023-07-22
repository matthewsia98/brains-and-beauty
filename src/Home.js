import homephoto from './photos/homephoto.webp';
import './index.css';
import {Link} from 'react-router-dom'
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
      image_path: './photos/glycolic_acid_toning_solution.webp'
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
      image_path: './photos/bha-lotion.avif'
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
        image_path: './photos/azelaic-acid-booster.avif'
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
        image_path: './photos/resist-barrier-repair-moisturizer.avif'
      },      
      {
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
        image_path: './photos/urea-repair.jpg'
      },
      
      {
        "id": 6,
        "name": "Skin Renewing Vitamin C Serum",
        "brand": "Cerave",
        "ingredient_list": "Aqua/Water/Eau, Ascorbic Acid, Glycerin, Dimethicone, Cetearyl Ethylhexanoate, Alcohol Denat., Sodium Hydroxide, Ammonium Polyacryloyldimethyl Taurate, Panthenol, Ceramide NP, Ceramide AP, Ceramide EOP, Carbomer, Cetearyl Alcohol, Behentrimonium Methosulfate, Sodium Hyaluronate, Sodium Lauroyl Lactylate, Cholesterol, Phenoxyethanol, Tocopheryl Acetate, Disodium EDTA, Isopropyl Myristate, Caprylyl Glycol, Xanthan Gum, Phytosphingosine, Ethylhexylglycerin.",
        "description": "Cerave Skin Renewing Vitamin C Serum is a potent yet gentle lightweight serum containing 10% pure Vitamin C. It helps brighten the complexion, promote even skin tone, and improve texture. Enriched with essential Ceramides, Hyaluronic Acid, and vitamin B5, it restores the skin\'s barrier, enhances hydration, and leaves the skin soft, radiant, and healthy-looking.",
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
          "description": "Cerave Skin Renewing Night Cream is a hydrating and rejuvenating option for nighttime skincare. It contains Ceramides, Hyaluronic Acid, Niacinamide, and peptides to improve the appearance of tired skin. Suitable for all skin types, this non-greasy cream helps restore the skin barrier, retain hydration, and provides all-night moisture for a refreshed look in the morning.",
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
            },
            {
              "id": 11,
              "name":'Healing Ointment',
              "brand": "Cerave",
              "ingredient_list": 'Mineral Oil, Paraffin, Ozokerite, Dimethicone, Ceramide NP, Ceramide AP, Ceramide EOP, Carbomer, Water, Sodium Lauroyl Lactylate, Proline, Cholesterol, Phenoxyethanol, Tocopheryl Acetate, Tocopherol, Hydrolyzed Hyaluronic Acid, Panthenol, Pantolactone, Phytosphingosine, Xanthan Gum, and Ethylhexylglycerin.',
              "description": 'Cerave Healing Ointment is a specially formulated balm designed to provide temporary protection, hydration, and soothing relief for cracked, chafed, and extremely dry skin. It contains essential ceramides and hyaluronic acid to restore the skin\'s moisture barrier and promote healing. The ointment is lightweight, non-comedogenic, and suitable for all skin types. It is free of fragrance, lanolin, and dyes to minimize the risk of irritation. This versatile ointment is an ideal choice for those seeking intensive hydration and relief from skin discomfort.',
              "category": ["body"],
              "active_ingredient": ["Ceramides", "Petrolatum"],
              "price": "14.75",
              "target_concerns": ["Dryness", "Eczema"],
              "directions": "Apply before bed to lock in moisture while you sleep for hydration all night long.",
              "image_path": "./photos/healing-ointment.jpg"
            },            {
              "id": 12,
              "name":'Eczema Relief Creamy Oil',
              "brand": "Cerave",
              "ingredient_list": 'Water, Cetearyl Alcohol, Glycerin, Cetyl Alcohol, Ceteareth-20, Olea Europaea (Olive) Fruit Oil, Isononyl Isononanoate, Carthamus Tinctorius (Safflower) Seed Oil, PEG-100 Stearate, Potassium Phosphate, Allantoin, Ceramide NP, Ceramide AP, Ceramide EOP, Carbomer, Niacinamide, Glyceryl Stearate, Glycine Soja (Soybean) Oil, Behentrimonium Methosulfate, Vitis Vinifera (Grape) Seed Oil, Sodium PCA, Ophiopogon Japonicus Root Extract, Sodium Lauroyl Lactylate, Helianthus Annuus (Sunflower) Seed Oil, Cholesterol, Rosmarinus Officinalis (Rosemary) Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Phenoxyethanol, Chlorphenesin, Dipotassium Phosphate, Tocopherol, Propylheptyl Caprylate, Hydroxyacetophenone, Hydrolyzed Hyaluronic Acid, Persea Gratissima (Avocado) Oil, Xanthan Gum, Phytosphingosine, Ethylhexylglycerin.',
              "description": 'Cerave Eczema Relief Creamy Oil is a targeted eczema cream designed to moisturize and soothe dry, itchy skin associated with eczema. It contains ceramides to restore the skin barrier and retain moisture, along with colloidal oatmeal, hyaluronic acid, and safflower oil for intense hydration. This fragrance-free formula helps protect and relieve minor skin irritation and itching caused by eczema, providing comfort for eczema-prone skin.',
              "category": ["body"],
              "active_ingredient": ["Colloidal Oatmeal", "Ceramides"],
              "price": "26.77",
              "target_concerns": ["Dryness", "Eczema"],
              "directions": "Apply as needed.",
              "image_path": "./photos/creamy-oil.jpg"
            },            {
              "id": 13,
              "name":'KP Bump Eraser Body Scrub 10% AHA',
              "brand": "First Aid Beauty",
              "ingredient_list": 'Pumice, Water/Aqua/Eau, Glycolic acid, Sodium cocoyl isethionate, Lactic acid, Dimethicone, Stearic acid, Cetearyl alcohol, Sodium hydroxide, Palmitic acid, Glycerin, C12-15 alkyl benzoate, Sorbitol, Colloidal oatmeal, Tocopherol, Chrysanthemum parthenium (Feverfew) extract, Camellia sinensis leaf extract, Glycyrrhiza glabra (Licorice) root extract, Salix nigra (Willow) bark extract, Bisabolol, Hydrogenated coconut acid, Xanthan gum, Steareth-20, Steareth-21, Myristic acid, Sodium isethionate, Phenoxyethanol, Potassium sorbate, Sodium benzoate, Leuconostoc/radish root ferment filtrate, EDTA.',
              "description": 'The KP Bump Eraser Body Scrub 10% AHA is specifically designed to target dry, rough bumps commonly associated with conditions like KP, strawberry skin, and booty bumps. With a powerful combination of Glycolic and Lactic acids at a 10% AHA concentration, it effectively exfoliates the skin\'s surface. Additionally, the scrub contains Pumice to physically remove bumps, improve texture, and smoothen rough and scaly areas. It is suitable for sensitive skin and provides fast-acting results for a healthier-looking and exceptionally smooth skin.',
              "category": ["body"],
              "active_ingredient": ["Glycolic Acid", "Lactic Acid"],
              "price": "30.00",
              "target_concerns": ["Keratosis Pilaris"],
              "directions": "Apply onto wet skin and gently massage with fingertips onto problem areas. Rinse and pat dry. Follow with moisturizer. Use 1-2 times a week as tolerated. Not intended for facial use. Use only as directed. Avoid contact with eyes. If contact occurs, rinse well with water. If irritation persists, discontinue use and consult a physician. Keep out of reach of children. Anyone can use this product. A patch test is recommended for those with sensitive skin. Sunburn Alert: This product contains Glycolic and Lactic Acids that may increase your skin’s sensitivity to the sun and particularly the possibility of sunburn. Use sunscreen, wear protective clothing, and limit sun exposure while using this product and for a week afterwards.",
              "image_path": "./photos/kp.webp"
            },            {
              "id": 14,
              "name":'Weightless Body Treatment 2% BHA',
              "brand": "Paula's Choice",
              "ingredient_list": 'Water, Butylene Glycol, Cetyl Alcohol, PPG-14 Butyl Ether, Salicylic Acid, Dimethicone, Tocopheryl Acetate, Chamomilla Recutita Flower Extract, Epilobium Angustifolium Extract, Camellia Oleifera (Green Tea) Leaf Extract, Vanilla Planifolia Fruit Extract, Bisabolol, Allantoin, Cyclopentasiloxane, Cyclohexasiloxane, Dimethiconol, PEG-40 Stearate, Sorbitan Stearate, PVM/MA Decadiene Crosspolymer, Polyacrylamide, C13-14 Isoparaffin, Laureth-7, Disodium EDTA, Sodium Hydroxide, Hexylene Glycol, Caprylyl Glycol, Caprylic/Capric Triglyceride, Ethylhexylglycerin, Phenoxyethanol.',
              "description": 'This leave-on body exfoliant with 2% BHA, also known as salicylic acid, gently exfoliates built-up layers of dead skin to reveal the radiant, smooth skin hiding underneath.',
              "category": ["body"],
              "active_ingredient": ["Salicylic Acid"],
              "price": "23.52",
              "target_concerns": ["Acne", "Keratosis Pilaris"],
              "directions": "Apply a small amount to clean skin. May be used daily for all-over smoothing, or applied as a spot treatment where needed. Apply this treatment first when using with a moisturizer. For daytime, follow with a broad-spectrum sunscreen rated SPF 30 or greater.",
              "image_path": "./photos/bha-treatment.avif"
            },            {
              "id": 15,
              "name":'Clear Acne Body Spray',
              "brand": "Paula's Choice",
              "ingredient_list": 'Water, Dipropylene Glycol, Butylene Glycol, Polysorbate 20, Pentylene Glycol, Salicylic Acid, Panthenol, Sodium Hyaluronate, Dipotassium Glycyrrhizate, Glycyrrhiza Glabra (Licorice) Root Extract, Berberis Vulgaris Root Extract, Lauric Acid, Allantoin, Glycerin, PEG/PPG-17/6 Copolymer, Methyl Gluceth-20, Glycereth-26, Sodium Hydroxide, Sodium Metabisulfite, Disodium EDTA, Potassium Sorbate.',
              "description": 'A body exfoliant with salicylic acid that fights acne fast and prevents new breakouts while calming redness. The easy-to-use spray can be held at any angle to reach stubborn acne on hard-to-reach areas of the body.',
              "category": ["body"],
              "active_ingredient": ["Salicylic Acid"],
              "price": "22.43",
              "target_concerns": ["Acne"],
              "directions": "Spray evenly over affected areas. Spray on and rub in with hands or applicator for hard-to-reach areas. Allow to dry, then follow with moisturizer if desired. Do not spray directly onto face.",
              "image_path": "./photos/clear-spray.avif"
            },            {
              "id": 16,
              "name":'Restorative Skin Therapy Repairing Cream',
              "brand": "Aveeno",
              "ingredient_list": 'Water (eau), Glycerin, Distearyldimonium Chloride, Petrolatum, Isopropyl Palmitate, Cetyl Alcohol, Panthenol, Dimethicone, Avena Sativa (Oat) Kernel Flour, Benzyl Alcohol, Steareth-20, Aloe Barbadensis Leaf Extract, Sodium Chloride, Avena Sativa (Oat) Kernel Extract.',
              "description": 'The Aveeno Restorative Skin Therapy Repairing Cream features a potent blend of prebiotic oat, Aloe, and Provitamin B5. With its high concentration of prebiotic oat, this cream effectively moisturizes and soothes dry skin discomfort. Additionally, it aids in restoring the skin\'s natural moisture barrier and repairing dry, sensitive skin.',
              "category": ["body"],
              "active_ingredient": ["Colloidal Oatmeal"],
              "price": "35.60",
              "target_concerns": ["Dryness", "Eczema"],
              "directions": "Apply liberally as often as needed.",
              "image_path": "./photos/restore.jpg"
            },            {
              "id": 17,
              "name":'Eucerin Complete Repair Cleanser',
              "brand": "Eucerin",
              "ingredient_list": 'Water/Eau/Aqua, Sodium Cocoamphoacetate, Sodium Myreth Sulfate, Lauryl Glucoside, Citric Acid, Sodium Chloride, Methylpropanediol, Panthenol, Sodium Citrate, Polyquaternium-10, Coco Glucoside, PEG-40 Hydrogenated Castor Oil, Glycol Distearate, Glycerin, PEG-200 Hydrogenated Glyceryl Palmate, Sodium Benzoate',
              "description": 'This gentle cleanser for body & face can be used daily. It gently cleanses,  protecting the skin from drying out and supports the skin’s pH balance.',
              "category": ["face","body"],
              "active_ingredient": ["Glycerin"],
              "price": "12.45",
              "target_concerns": ["Dryness", "Eczema"],
              "directions": "To use, apply the product to both the face and body, ensuring the skin is wet while avoiding the delicate eye area. Then, gently massage the product onto the skin to create a lather. Once done, thoroughly rinse off the product and gently pat the skin dry.",
              "image_path": "./photos/cleanser.webp"
            },            {
              "id": 18,
              "name":'Protect + Soothe Mineral Sunscreen for Sensitive Skin SPF 30',
              "brand": "Aveeno",
              "ingredient_list": 'Aloe Barbadensis Leaf Extract, Aluminum Hydroxide, Avena Sativa (Oat) Kernel Extract, Behenyl Alcohol, C12-15 Alkyl Benzoate, Calcium Aluminum Borosilicate, Cetyl Alcohol, Chlorphenesin, Disodium EDTA, Ethylhexyl Methoxycrylene, Ethylhexylglycerin, Euphorbia Cerifera (Candelilla) Wax, Glycerin, Glyceryl Stearate, Isohexadecane, PEG-100 Stearate, Phenoxyethanol, Polyhydroxystearic Acid, Steareth-21, Stearic Acid, Tocopheryl Acetate, Triethoxycaprylylsilane, Water (eau), Xanthan Gum.',
              "description": 'Enjoy daily sun protection with a light, non-greasy feel with this broad-spectrum SPF 30 sunscreen. This fast-absorbing body sunscreen combines soothing oat and 100% mineral active ingredients and is ideal for sensitive skin.',
              "category": ["sun"],
              "uv_filters": {"Zinc Oxide":"18.7%", "Titanium Dioxide":"6.5%"},
              "price": "24.55",
              "product_type":["Hypoallergenic", "Non-Comedogenic", "Mineral Filters", "Lotion Texture", "Water Resistant"],
              "target_skinType": ["Sensitive", "Acne Prone"],
              "directions": "Apply generously and evenly 15 minutes before sun exposure for adults and children over 6 months of age. Reapply every 2 hours or after swimming, sweating, or towel drying. For children under 6 months, it's advisable to consult a doctor. Remember to limit time in the sun, especially from 10 a.m. to 2 p.m., wear protective clothing, and use sunscreen with a broad spectrum SPF of 15 or higher to reduce the risk of skin cancer and early skin aging.",
              "image_path": "./photos/aveeno_spf30.png"
            },            {
              "id": 19,
              "name":'Protect + Hydrate® Moisturizing Face Sunscreen SPF 50',
              "brand": "Aveeno",
              "ingredient_list": 'Acrylates/Dimethicone Copolymer, Alcohol Denat. , Aluminum Starch Octenylsuccinate, Ascorbyl Palmitate, Avena Sativa (Oat) Kernel Extract, Butyloctyl Salicylate, Caprylyl Methicone, Chlorphenesin, Dimethicone, Disodium EDTA, Glycerin, Glyceryl Stearate, Pentylene Glycol, Phenoxyethanol, Polyurethane-62, Silica, Sodium Acryloyldimethyltaurate/VP Crosspolymer, Sodium Hydroxide, Styrene/Acrylates Copolymer, Trideceth-6, Water (eau).',
              "description": 'Aveeno Protect + Hydrate Face Moisturizing Sunscreen SPF 50 gives you the broad-spectrum sun protection you need with the hydration your skin wants. The newest face-specific formulation is water- and sweat-resistant (80 min) and oil-free. It is also non-comedogenic, meaning it won\'t clog pores. Oxybenzone free formula.',
              "category": ["sun"],
              "uv_filters": {"Homosalate":"13.5%", "Octocrylene":"10%", "Octisalate":"5%", "Avobenzone":"3%"},
              "price": "13.67",
              "product_type":["Chemical Filters", "Lotion Texture", "Water Resistant", "Non-Comedogenic"],
              "target_skinType": ["Dry", "Acne Prone"],
              "directions": "Apply the sunscreen generously 15 minutes before sun exposure and reapply every 2 hours or after swimming, sweating, or towel drying. Children under 6 months should consult a doctor. To reduce the risk of skin cancer and early skin aging, use a broad spectrum SPF 15 or higher sunscreen and take sun protection measures such as limiting sun exposure during peak hours and wearing protective clothing.",
              "image_path": "./photos/aveeno_spf50.png"
            },            {
              "id": 20,
              "name":'Facial Moisturizing Lotion AM SPF 30',
              "brand": "Cerave",
              "ingredient_list": 'Water, Niacinamide, Glycerin, Cetearyl Alcohol, Behentrimonium Methosulfate, Dimethicone, Hydroxyethylcellulose, Aluminum Starch Octenylsuccinate, Methylparaben, Triethoxycaprylylsilane, Disodium Edta, Propylparaben, Sodium Lauroyl Lactylate, Ceramide Np, Bht, Ceramide Ap, Cholesterol, Phytosphingosine, Carbomer, Xanthan Gum, Hydrolyzed Hyaluronic Acid, Ceramide Eop.',
              "description": 'A hydrating face lotion is a key morning skincare step—and a moisturizer with SPF is critical for helping to protect the skin from damaging UV rays. CeraVe AM Facial Moisturizer Lotion is an ideal morning skincare multitasker. Featuring three essential Ceramides, Hyaluronic Acid and Niacinamide, to help restore the skin barrier, retain hydration and help sooth the skin. This Broad Spectrum SPF 30 UVA & UVB protection sunscreen contains a non-comedogenic formula with patented time-release MVE Delivery Technology for all-day hydration.',
              "category": ["sun"],
              "uv_filters": {"Homosalate":"10%", "Meradimate":"5%","Octinoxate":"5%","Octocrylene":"2%", "Zinc Oxide":"6.3%"},
              "price": "13.67",
              "product_type":["Combined Filters", "Lotion Texture", "Non-Comedogenic"],
              "target_skinType": ["Dry", "Acne Prone"],
              "directions": "Unlock the pump for first time use by twisting it to the left and pressing down several times until the product comes out. Apply liberally to the face and neck in the morning 15 minutes before sun exposure.",
              "image_path": "./photos/cerave_am.jpg"
            },
            {
              "id": 21,
              "name":'Hydro Boost Water Gel Lotion Sunscreen SPF 50',
              "brand": "Neutrogena",
              "ingredient_list": 'Acrylates/Dimethicone Copolymer, Alcohol Denat., Blue 1, Caprylyl Methicone, Chlorphenesin, Dicaprylyl Carbonate, Diisopropyl Adipate, Dimethicone, Dimethicone Crosspolymer, Disodium EDTA, Glycerin, Glyceryl Stearate, Hydrolyzed Hyaluronic Acid, Hydroxyacetophenone, Parfum, Pentylene Glycol, Phenoxyethanol, Polyurethane-62, Silica, Sodium Acryloyldimethyltaurate/VP Crosspolymer, Sodium Hydroxide, Tocopheryl Acetate, Trideceth-6, Water (eau).',
              "description": 'Neutrogena Hydro Boost Water Gel Lotion Sunscreen is a sunscreen that delivers effective broad spectrum UVA/UVB protection with a water-light feel. This lotion quenches skin with the vital hydration and contains hyaluronic acid. No white cast and is invisible under makeup. Oil-free and non-comedogenic. Oxybenzone free formula.',
              "category": ["sun"],
              "uv_filters": {"Homosalate":"15%", "Octocrylene":"10%", "Octisalate":"5%", "Avobenzone":"3%"},
              "price": "20.00",
              "product_type":["Chemical Filters", "Gel Texture", "Non-Comedogenic", 'Water Resistant'],
              "target_skinType": ["Dry", "Acne Prone"],
              "directions": "For adults and children over 6 months, apply the sunscreen generously 15 minutes before sun exposure and reapply every 2 hours, after 80 minutes of swimming or sweating, and immediately after towel drying. Sun protection measures include limiting sun time, especially from 10 a.m. to 2 p.m., and wearing protective clothing like long-sleeved shirts, pants, hats, and sunglasses. Regularly use a broad-spectrum SPF 15 or higher sunscreen to reduce the risk of skin cancer and early skin aging.",
              "image_path": "./photos/hydro_boost.png"
            },
            {
              "id": 22,
              "name":'Ultra Sheer Moisturizing Face Serum Sunscreen SPF 50+',
              "brand": "Neutrogena",
              "ingredient_list": 'Acrylates/Dimethicone Copolymer, Alcohol Denat. , Aluminum Starch Octenylsuccinate, Butyloctyl Salicylate, Chlorphenesin, Dimethicone, Disodium EDTA, Glycerin, Glyceryl Stearate, Pentylene Glycol, Phenoxyethanol, Polyurethane-62, Silica, Sodium Acryloyldimethyltaurate/VP Crosspolymer, Sodium Hydroxide, Styrene/Acrylates Copolymer, Tocopheryl Acetate, Trideceth-6, Water (eau).',
              "description": 'Neutrogena® Ultra Sheer® Moisturizing Face Serum Sunscreen SPF 50+ moisturizes and helps protect your skin against sun damage. This sheer face sunscreen offers broad spectrum UVA/UVB protection and hydration in one-step.',
              "category": ["sun"],
              "uv_filters": {"Homosalate":"13.5%", "Octocrylene":"10%", "Octisalate":"5%", "Avobenzone":"3%"},
              "price": "26.77",
              "product_type":["Chemical Filters", "Serum Texture", "Non-Comedogenic", 'Water Resistant'],
              "target_skinType": ["Dry", "Acne Prone"],
              "directions": "Adults and children over 6 months of age: Apply generously 15 minutes before sun exposure. Reapply at least every 2 hours. Reapply after 80 minutes of swimming or sweating. Reapply immediately after towel drying",
              "image_path": "./photos/ultra-sheer.jpeg"
            },
            {
              "id": 23,
              "name":'Super-Light Wrinkle Defense SPF 30',
              "brand": "Paula's Choice",
              "ingredient_list": 'Water⁠, Cyclopentasiloxane⁠, Zinc Oxide⁠, PEG-12 Dimethicone⁠, PEG/PPG-18/18 Dimethicone⁠, Lauroyl Lysine⁠, Sodium Chloride⁠, Trihydroxystearin⁠, Dimethicone Crosspolymer⁠, Resveratrol⁠, Quercetin⁠, Epigallocatechin Gallate⁠, Tocopheryl Acetate⁠, Tetrahexyldecyl Ascorbate⁠, Adenosine⁠, Bisabolol⁠, Salix Nigra (Willow) Bark Extract⁠, Punica Granatum Extract⁠, Haematococcus Pluvialis Extract⁠, Hydrolyzed Corn Starch⁠, Polysorbate 80⁠, Hydrated Silica⁠, Triethoxycaprylylsilane⁠, C12-15 Alkyl Benzoate⁠, Isopropyl Titanium Triisostearate⁠, Caprylyl Glycol⁠, Hexylene Glycol⁠, Ethylhexylglycerin⁠, Iron Oxides⁠, Phenoxyethanol⁠',
              "description": 'This lightly tinted mineral-based formula provides excellent sun protection while delivering state-of-the-art antioxidants to fortify the skin. It effectively prevents premature aging and boosts the skin\'s environmental defenses. With its silky texture, it leaves a soft matte finish, making it the ideal last step in your AM skincare routine.',
              "category": ["sun"],
              "uv_filters": {"Zinc Oxide":"13.1%"},
              "price": "56.00",
              "product_type":["Mineral Filters","Tinted", "Lotion Texture", "Non-Comedogenic", "Hypoallergenic"],
              "target_skinType": ["Dry", "Acne Prone", "Sensitive"],
              "directions": "Use as the last step in your AM skincare routine. Apply liberally 15 minutes before sun exposure. If you don’t apply liberally, you will need to reapply every two hours after your skin is exposed to direct sunlight. If you plan to swim or perspire you must apply a water-resistant sunscreen.",
              "image_path": "./photos/paulachoice_spf.jpg"
            },
            {
              "id": 24,
              "name":'Sun Face Pigment Control Fluid SPF 50+',
              "brand": "Eucerin",
              "ingredient_list": 'Aqua, C12-15 Alkyl Benzoate, Alcohol Denat., Butyl Methoxydibenzoylmethane, Ethylhexyl Triazone, Butylene Glycol DicaprylateDicaprate, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Dibutyl Adipate, Glyceryl Stearate Citrate, Silica, Phenylbenzimidazole Sulfonic Acid, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Tapioca Starch, Silica Dimethyl Silylate, Cetearyl Alcohol, Glycyrrhiza Inflata Root Extract, Glycyrrhetinic Acid, Tocopheryl Acetate, Glycerin, Copernicia Cerifera Cera, Xanthan Gum, Carrageenan, Hydroxypropyl Methylcellulose, Sodium Hydroxide, Trisodium EDTA, Hydroxyacetophenone, Phenoxyethanol, Ethylhexylglycerin, Parfum.⁠',
              "description": 'A superior facial sunscreen for all skin types that prevents sun-induced hyperpigmentation. Effectively reduces dark spots and prevents their re-appearance. Eucerin’s Advanced Spectral Technology offers high factor UVA/UVB protection and HEVIS light defense. The sunscreen also supports skin’s own DNA repair mechanism.',
              "category": ["sun"],
              "uv_filters": {"Homosalate":"13.5%", "Octocrylene":"10%", "Octisalate":"5%", "Avobenzone":"3%"},
              "price": "28.00",
              "product_type":["Chemical Filters","Lotion Texture", "Non-Comedogenic"],
              "target_skinType": ["Dry", "Acne Prone"],
              "directions": "Apply this sunscreen generously on your face before sun exposure and reapply frequently, especially after swimming, perspiring, or toweling, to maintain its original protection. Remember that reducing the quantity used will significantly lower the level of protection. Avoid staying too long in the sun, even with sunscreen. Over-exposure to the sun can be a serious health threat. Keep the product away from your eyes and allow it to absorb completely. Be cautious of contact with textiles and hard surfaces to prevent staining. Apply a maximum of four applications of products with Thiamidol® per day.",
              "image_path": "./photos/eucerin_spf.webp"
            },
            {
              "id": 25,
              "name":'Anthelios Ultra-Fluid Face Sunscreen Lotion SPF 50',
              "brand": "La Roche Posay",
              "ingredient_list": 'Aqua, Alcohol Denat, Silica, Isopropyl Myristate, Glycerin, Diisopropyl Sebacate, C12-22 Alkyl Acrylate/Hydroxyethylacrylate Copolymer, Propanediol, Perlite, Tocopherol, Triethanolamine, Caprylyl Glycol, Trisodium Ethylenediamine Disuccinate, Disodium EDTA, Hydroxyethylcellulose, Acrylates/C10-30 Alkyl Acrylate Crosspolymer.⁠',
              "description": 'Ultra-light, oil-free face sunscreen lotion with an invisible matte finish with NETLOCK technology.',
              "category": ["sun"],
              "uv_filters": {"Homosalate":"13.5%", "Octocrylene":"10%", "Octisalate":"5%", "Avobenzone":"3%"},
              "price": "58.76",
              "product_type":["Chemical Filters","Lotion Texture", "Non-Comedogenic"],
              "target_skinType": ["Dry", "Acne Prone"],
              "directions": "In the morning, follow these steps for an effective sun care routine. Firstly, start with your favorite cleanser and moisturizer to ensure a clean and hydrated base. Secondly, generously apply sunscreen to your face and neck at least 15 minutes before sun exposure. Don't forget to reapply every two hours, or more frequently if swimming, sweating, or towel-drying. Lastly, if you wish, finish your morning routine with makeup to complete your look while staying protected from the sun's harmful rays. By incorporating these steps, you can enjoy your day confidently, knowing your skin is shielded from potential sun damage.",
              "image_path": "./photos/anthelios.jpg"
            },
          {
            "id": 26,
            "name":'Oat Milk Blend Daily Moisture Shampoo',
            "brand": "Aveeno",
            "ingredient_list": 'Colloidal Oatmeal Extract, Water/Aqua/Eau, Sodium C14-16 Olefin Sulfonate, Cocamidopropyl Betaine, Glycol Distearate, Hydrolyzed Milk Protein, Prunus Amygdalus Dulcis (Sweet Almond) Seed Extract, PEG-7 Amodimethicone, Polyquaternium-22, Polyquaternium-39, PEG-150 Pentaerythrityl Tetrastearate, PPG-2 Hydroxyethyl Cocamide, Acrylates/C10-30 Alkyl Acrylate Crosspolymer, Laureth-4, Sodium Hydrolyzed Potato Starch Dodecenylsuccinate, Linoleamidopropyl PG-Dimonium Chloride Phosphate, Propylene Glycol, Citric Acid, Sodium Citrate, Hexylene Glycol, Sodium Hydroxide, Sodium Benzoate, Fragrance/Parfum.⁠',
            "description": 'Oat is the first ingredient in this scalp-soothing, farm-fresh inspired shampoo infused with almond milk for lightly nourished, soft strands. Balanced moisture for daily use and all hair types makes it the perfect shampoo for an entire family. Sulfate free shampoo, no dyes or parabens.',
            "category": ["hair"],
            "price": "16.77",
            "product_type":["Shampoo"],
            "active_ingredient":["Colloidal Oatmeal"],
            "target_hairType": ["Dry", "Damaged", "Colored", "Oily", "Curly"],
            "directions": "Apply shampoo generously to wet hair, massage into a lather through to ends, then rinse the hair thoroughly. After shampooing, follow with conditioner.",
            "image_path": "./photos/aveeno_shampoo.png"
          },
          {
            "id": 27,
            "name":'Oat Milk Blend Daily Moisture Conditioner',
            "brand": "Aveeno",
            "ingredient_list": 'Colloidal Oatmeal Extract, Cetyl Alcohol, Cetearyl Alcohol, Behentrimonium Chloride, Glycerin, Amodimethicone, Steareth-20, Hydrolyzed Milk Protein, Prunus Amygdalus Dulcis (Sweet Almond) Seed Extract, PPG-3 Benzyl Ether Myristate, Polyquaternium-47, Polyquaternium-37, PPG-1 Trideceth-6, Propylene Glycol Dicaprylate/Dicaprate, Water/Aqua/Eau, Isopropyl Alcohol, Disodium EDTA, Citric Acid, Sodium Hydroxide, Sodium Benzoate, Fragrance/Parfum.⁠',
            "description": 'Oat is the first ingredient in this scalp-soothing, farm-fresh inspired conditioner infused with almond milk for lightly nourished, soft strands. Balanced moisture for daily use and all hair types makes it the perfect conditioner for an entire family. Sulfate free conditioner, no dyes or parabens.',
            "category": ["hair"],
            "price": "20.77",
            "product_type":["Conditioner"],
            "active_ingredient":["Colloidal Oatmeal"],
            "target_hairType": ["Dry", "Damaged", "Colored", "Oily", "Curly"],
            "directions": "After shampooing, apply conditioner generously to hair, working through to ends. Wait 3-5 minutes. Rinse hair thoroughly.",
            "image_path": "./photos/aveeno_conditioner.png"
          },
          {
            "id": 28,
            "name":'Bonus Size Nº.3 Hair Perfector',
            "brand": "Olaplex",
            "ingredient_list": 'Water (Aqua/Eau), Bis-Aminopropyl Diglycol Dimaleate, Propylene Glycol, Cetearyl Alcohol, Behentrimonium Methosulfate, Cetyl Alcohol, Phenoxyethanol, Glycerin, Hydroxyethyl Ethylcellulose, Stearamidopropyl Dimethylamine , Quaternium-91, Sodium Benzoate, Cetrimonium Methosulfate, Cetrimonium Chloride, Fragrance (Parfum), Polyquaternium-37, Tetrasodium EDTA, Benzyl Benzoate, Etidronic Acid, Ascorbic Acid, Phytantriol, Tocopheryl Acetate, Aloe Barbadensis Leaf Juice, Panthenol, Simmondsia Chinensis (Jojoba) Seed Oil, Citric Acid, Potassium Sorbate.⁠',
            "description": 'This weekly pre-shampoo treatment repairs and prevents damage for stronger, healthier-looking hair after just one use. Not a conditioner, mask, or protein treatment– Nº.3 Hair Perfector™ is an innovative bond builder to repair damage where it starts, on a molecular level. That’s why it’s the little bottle stylists, editors, and healthy hair seekers swear by.',
            "category": ["hair"],
            "price": "120.00",
            "product_type":["Treatment"],
            "active_ingredient":["Glycerin"],
            "target_hairType": ["Damaged"],
            "directions": "Before shampooing, dampen hair and apply Nº3 Hair Perfector™ from roots to ends. Leave on for 10 minutes for maximum effects. Rinse well, then shampoo and condition.",
            "image_path": "./photos/olaplex_treatment.webp"
          },
          {
            "id": 29,
            "name":'Nº.4C Bond Maintenance® Clarifying Shampoo',
            "brand": "Olaplex",
            "ingredient_list": 'Water (Aqua/Eau), Sodium Lauroyl Methyl Isethionate, Cocamidopropyl Hydroxysultaine, Sodium Lauroyl Glutamate, Coco-Betaine, Disodium Laureth Sulfosuccinate, Acrylates Copolymer, Cocamidopropyl Betaine, Cocamidopropylamine Oxide, Sodium Methyl Oleoyl Taurate, Decyl Glucoside, Bis-Aminopropyl Diglycol Dimaleate, Sodium Lauryl Sulfoacetate, Phenoxyethanol, Coco-Glucoside, Lauryl Glucoside, Chlorphenesin, Panthenol, Trisodium Ethylenediamine Disuccinate, Ethylhexylglycerin, Sodium Benzoate, Polyquaternium-11, Benzoic Acid, Sodium PCA , Pentasodium Triphosphate, Sodium Lactate, Arginine, Aspartic Acid, PCA, Citric Acid, Glycine, Alanine, Serine, Valine, Isoleucine, Proline, Threonine, Histidine, Phenylalanine, Fragrance (Parfum), Citral, Hexyl Cinnamal, Limonene.⁠',
            "description": 'What makes healthy hair dull, discolored, dry, unmanageable, or oily? Buildup. Nº.4C Bond Maintenance® Clarifying Shampoo is new technology to reveal your healthiest hair. Optimize your hair repair results by removing more impurities that damage hair. Harsh clarifiers can leave hair like straw. Nº.4C is sulfate-free & pH balanced to maintain hydrated hair.',
            "category": ["hair"],
            "price": "56.00",
            "product_type":["Shampoo"],
            "active_ingredient":["Bis-Aminopropyl Diglycol Dimaleate"],
            "target_hairType": ["Oily"],
            "directions": "Apply to wet hair. Concentrate on scalp and work through to ends. Lather fully and leave on up to 5 minutes. Rinse well.",
            "image_path": "./photos/olaplex_shampoo.webp"
          },
          {
            "id": 30,
            "name":'100% Organic Cold-Pressed Moroccan Argan Oil',
            "brand": "The Ordinary",
            "ingredient_list": 'Argania Spinosa Kernel Oil.⁠',
            "description": '100% Organic Cold-Pressed Moroccan Argan Oil is a cold-pressed, organic oil that naturally hydrates the skin while combating dryness and supporting healthy-looking skin. Argan oil is rich in fatty acids, vitamins, and other compounds, which allows it to also be used in hair, increasing softness and sheen.',
            "category": ["hair"],
            "price": "12.00",
            "product_type":["Oil"],
            "active_ingredient":["Argan Oil"],
            "target_hairType": ["Dry", "Damaged"],
            "directions": "Work through damp, clean hair once daily or as needed.",
            "image_path": "./photos/argan_oil.webp"
          },
          {
            "id": 31,
            "name":'Curl Defining Cream',
            "brand": "MORROCANOIL",
            "ingredient_list": 'Aqua/Water/Eau, Cetearyl Alcohol, Glycol Stearate, Cetyl Alcohol, Parfum/Fragrance, Dimethicone, Behentrimonium Methosulfate, Ceteareth-20, Argania Spinosa (Argan) Kernel Oil, Hydrolyzed Vegetable Protein Pg-Propyl Silanetriol, PPG-1 Trideceth-6, Polyquaternium-11, Polyquaternium-37, Polyquaternium-72, Propylene Glycol Dicaprylate/Dicaprate, Butylene Glycol, Caprylyl Glycol, C10-40 Isoalkylamidopropylethyldimonium Ethosulfate, Disodium EDTA, Sodium Chloride, Potassium Sorbate, Chlorphenesin, Phenoxyethanol, Eugenol, Alpha-Isomethyl Ionone, Butylphenyl Methylpropion-ional, Linalool, Hydroxyisohexyl 3-Cyclohexene Carboxaldehyde.⁠',
            "description": 'Easily activate and define curls while hydrating hair. Moroccanoil Curl Defining Cream is one of the most popular products for curly hair. This argan oil-infused curl definer features an advanced heat-activated technology that provides a curl memory factor to fight frizz and create well-defined, natural-looking, bouncy curls that last. Winner, Curl Defining, 2022, 2019 Allure Readers\' Choice Awards',
            "category": ["hair"],
            "price": "36.00",
            "product_type":["Cream"],
            "active_ingredient":["Argan Oil"],
            "target_hairType": ["Curly"],
            "directions": "Apply 1-2 pumps to towel-dried hair. Distribute product throughout hair and diffuse to activate and define curls. For a more relaxed curl, let hair dry naturally.",
            "image_path": "./photos/curl_cream.jpg"
          },
          {
            "id": 32,
            "name":'Essence Absolue Overnight Nourishing Hair Treatment',
            "brand": "Shu Uemura",
            "ingredient_list": 'Aqua/Water, Cyclohexasiloxane, Cyclopentasiloxane, Ci 19140/Yellow 5, Ci 15985/Yellow 6, C13-14 Isoparaffin, Hydroxycitronellal, Phenoxyethanol, Polyacrylamide, Dimethiconol, Camellia Japonica Seed Oil, Isoeugenol, Laureth-7, Hexyl Cinnamal, Glycerin, Parfum/Fragrance.⁠',
            "description": 'A nourishing overnight serum featuring Japanese Red Camellia Oil that hydrates hair while you sleep to deliver shiny, soft, and less-frizzy hair by morning.',
            "category": ["hair"],
            "price": "80.00",
            "product_type":["Serum"],
            "active_ingredient":["Japanese Red Camellia Oil"],
            "target_hairType": ["Dry", "Damaged", "Curly"],
            "directions": "Before bedtime, apply one to two pumps to dry or damp hair's mid-lengths and ends, using a comb or brush for even distribution. Leave it in overnight as the lightweight formula is pillow-proof. No need to rinse in the morning; simply style hair as usual.",
            "image_path": "./photos/shu_serum.jpg"
          },



  ];
export const bestSellers = [1,2,3,6,8]
export const actives = {
  'Ascorbic Acid': 'A potent antioxidant that helps brighten the skin, even out skin tone, and protect against environmental damage. It also aids in collagen production and reduces the appearance of fine lines and wrinkles.',
  'Azelaic Acid': 'Helps to unclog pores, reduce inflammation, and minimize the appearance of blemishes and redness. It can also regulate skin pigmentation, making it beneficial for hyperpigmentation concerns.',
  'Glycolic Acid': 'An exfoliating ingredient that helps remove dead skin cells, improve skin texture, and promote a brighter complexion. It stimulates collagen production, reduces the appearance of fine lines, and enhances the absorption of other skincare products.',
  'Urea': 'Provides hydration to the skin, helps to soften and smooth rough patches, and supports the skin\'s natural exfoliation process. It has excellent water-binding properties, making it effective for dry and rough skin conditions.',
  'Niacinamide': 'Helps to regulate oil production, improve skin\'s elasticity, and minimize the appearance of pores and fine lines. It also strengthens the skin barrier, evens out skin tone, and reduces redness and blotchiness.',
  'Peptides': 'These amino acid compounds support collagen production, promote skin firmness, and help reduce the appearance of wrinkles. They can improve skin elasticity, hydration, and overall texture, resulting in a more youthful-looking complexion.',
  'Retinol': 'A form of vitamin A that aids in reducing the appearance of fine lines, wrinkles, and uneven skin tone. It stimulates cell turnover, increases collagen production, and improves skin texture and firmness. It is important to use retinol products with caution and gradually build tolerance.',
  'Salicylic Acid': 'Effective for treating acne-prone skin by unclogging pores, reducing inflammation, and promoting clearer skin. It helps to exfoliate the skin\'s surface and penetrate into the pores, preventing acne breakouts and improving overall skin texture.',
  'Ceramides': 'Essential lipids that help form the skin\'s protective barrier and retain moisture. They strengthen the skin\'s natural barrier function, improve hydration, and protect against environmental stressors. Ceramides are beneficial for dry and damaged skin, helping to restore and maintain a healthy skin barrier.',
  'Petrolatum': 'A highly effective occlusive ingredient that forms a protective barrier on the skin\'s surface. It helps to prevent moisture loss, soothe and protect dry, chapped, or irritated skin. Petrolatum is commonly used in skincare products to provide long-lasting hydration and promote skin healing.',
  'Colloidal Oatmeal': 'A natural ingredient derived from finely ground oats, colloidal oatmeal has soothing and calming properties. It forms a protective barrier on the skin, helps retain moisture, and reduces itching and redness. It is commonly used to alleviate dry, itchy, and irritated skin conditions, including eczema.',
  'Lactic Acid': 'An alpha hydroxy acid (AHA) that gently exfoliates the skin, promoting a smoother and more even complexion. It helps improve skin texture, reduce the appearance of fine lines, and enhance skin radiance. Lactic acid also has hydrating properties, keeping the skin moisturized and plump. Suitable for various skin types, it is commonly found in skincare products for its exfoliating and rejuvenating benefits.',
  'Glycerin': 'A moisturizing ingredient that helps hydrate the skin by attracting and retaining moisture. It forms a protective barrier on the skin, preventing moisture loss and keeping the skin soft and supple. Glycerin also has emollient properties, which help to smooth and improve the texture of the skin. It is commonly used in skincare products for its ability to provide long-lasting hydration and improve the overall appearance of the skin.',
  'Bis-Aminopropyl Diglycol Dimaleate': 'A specialized and patented ingredient widely recognized for its bond-maintaining and bond-building properties in the hair care industry. It targets and strengthens the disulfide bonds within the hair\'s protein structure, which can become damaged due to chemical treatments and environmental stressors. By preserving and restoring these bonds, this ingredient helps to improve the overall health and resilience of the hair, reducing breakage and enhancing its appearance.',
  "Argan Oil": "A natural oil derived from the kernels of the argan tree, native to Morocco. Argan oil is highly regarded for its nourishing and moisturizing properties for hair. Rich in essential fatty acids, antioxidants, and vitamin E, this oil helps to deeply hydrate and condition the hair, leaving it soft, smooth, and manageable. It can also improve hair elasticity, reducing the risk of breakage and split ends. Argan oil is known to add a natural shine to the hair and protect it from environmental damage and heat styling. Additionally, it is often used to tame frizz and promote a healthy scalp, making it a popular ingredient in hair care products designed to restore and maintain the overall health and appearance of the hair.",
  'Japanese Red Camellia Oil': 'Derived from the seeds of the Camellia japonica plant, Japanese Red Camellia Oil, also known as Tsubaki Oil, is a cherished beauty secret in Japanese hair care. Rich in oleic acid, linoleic acid, and antioxidants, this lightweight and non-greasy oil nourishes and protects the hair, leaving it smooth, shiny, and manageable. Japanese Red Camellia Oil is known to penetrate deeply into the hair shaft, helping to improve moisture retention and strengthen the hair from within. It also provides protection against environmental stressors and heat styling damage. Embraced for centuries in Japan, this luxurious oil is now celebrated globally for its ability to promote healthy, lustrous, and beautifully conditioned hair.'

};



const Home = () => {

    return (  
      <div>
        <section id="homepage">
        <div class="image-container">
          <img src={homephoto} style={{width:'100%' , height: '80vh'}} alt="lab"/>
          <div class="black-box">
            <div className='text-light text-center my-5'>
                        <h3>
                            Science-Driven Skincare for All
                        </h3> 
                        <p>
                            <br/> Brains & Beauty is an online store <br/> founded by a group of cosmetic chemists and <br/> dermatologists in 2020. <br/><br/> Our mission is to provide a carefully curated <br/> selection of affordable and effective<br/> products based on the latest research.
                        </p>                   
                        <Link to="/support" style={{color: 'white'}}>Get in Touch with One of Our Experts</Link>
            </div>
          </div>
        </div>

            <div>
                <h3 className ="mt-5 text-center">
                    Our Best Sellers
                </h3>
            </div>
            <div className='m-4'>
                <CarouselBestSellers products={productList}/>
            </div>
       </section>
      </div>
    );
}
 
export default Home;