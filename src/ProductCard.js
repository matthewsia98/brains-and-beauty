import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './index.css';
const ProductCard = ({product}) => {
    return (  
        <Link to={"/product/" + product.id} style={{color: 'black', textDecoration:'none'}}>
            <Card className='ms-5 mt-3 border-0' style={{ width: '80%', height:'94%'}}>
                <Card.Img variant="top" src={require(`${product.image_path}`)}/>
                <Card.Body>
                    <Card.Title className='text-center'>{product.name}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    );
}
 
export default ProductCard;