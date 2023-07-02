import { Card } from 'react-bootstrap';
const ProductCard = ({product}) => {
    return (  
        <Card style={{ width: '200px'}}>
            <Card.Img variant="top" src={require(`${product.image_path}`)}/>
            <Card.Body>
            <Card.Title className='text-center'>{product.name}</Card.Title>
            </Card.Body>
        </Card>
    );
}
 
export default ProductCard;