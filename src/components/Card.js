import { Card, Button } from 'react-bootstrap';


const SingleCard = ({ item }) => {

  return (
    <Card>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Button variant="primary">{item.buttonLink}</Button>
      </Card.Body>
    </Card>
  )
}

export default SingleCard;