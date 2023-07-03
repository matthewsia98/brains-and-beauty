import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ProductCard = ({product}) => {
    return (  
        <Link to={"/product/" + product.id} style={{color: 'black', textDecoration:'none'}}>
            <Card style={{ width: '90%', height:'90%'}}>
                <Card.Img variant="top" src={require(`${product.image_path}`)}/>
                <Card.Body>
                    <Card.Title className='text-center'>{product.name}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    );
}
 
export default ProductCard;