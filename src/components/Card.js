import { Card, Button } from 'react-bootstrap';


const SingleCard = ({ item }) => {

  return (
    <Card>
      <Card.Img style={{ height: '460px' }} variant="top" src={item.image} />
      <Card.Body style={{ height: '160px' }}>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description.length > 100 ? `${item.description.slice(0, 100)} ...` : item.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text>
          Author: {item.author.length > 20 ? `${item.author.slice(0, 20)} ...` : item.author}
        </Card.Text>
        <Card.Text>
          Downloads: {item.downloads}
        </Card.Text>
        <Card.Text>
          Language: {item.language}
        </Card.Text>
      </Card.Footer>
      <Card.Footer>
        <Button className='px-0' variant="outlined">Read more...</Button>
      </Card.Footer>
    </Card>
  )
}

export default SingleCard;