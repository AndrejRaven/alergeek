import { Container, Row, Col, Button } from "react-bootstrap";
import SingleCard from './Card';


const CardsWrapper = ({ items, newItemLoading, bookEnded, pageNumber, onRequest }) => {

  function renderItems(arr) {
    const cards = arr.map(card => {
      return (
        <Col key={card.id} className="my-3">
          <SingleCard item={card} />
        </Col>
      )
    });

    return (
      <Row xs={1} md={4} className="g-4 my-3">
        {cards}
      </Row>
    )
  }

  const components = renderItems(items);
  return (
    <Container>
      {components}
      {onRequest ?
        <Button
          variant="primary"
          disabled={newItemLoading}
          style={{ 'display': bookEnded ? 'none' : 'block' }}
          onClick={() => onRequest(pageNumber)}>
          Load more...
        </Button>
        : null
      }
    </Container>
  )
}

export default CardsWrapper;