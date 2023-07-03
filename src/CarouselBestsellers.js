import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useState } from 'react';
import ProductCard from './ProductCard';
import { bestSellers } from './Home';

const CarouselBestSellers  = ({products}) => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return ( 
      <Carousel responsive={responsive}>
        {products.map((item) => (
          bestSellers.includes(item.id) ? (
            <div key={item.id}>
              <ProductCard product={item} />
            </div>
          ) : null
        ))}
 
      </Carousel>

    );
}
 
export default CarouselBestSellers;