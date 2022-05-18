import { Container, Row, Col } from "react-bootstrap";
import SingleCard from './Card';

const CardsWrapper = ({ items }) => {

  return (
    <Container>
      <Row xs={1} md={4} className="g-4 my-3">
        {items.map((item, i) => (
          <Col key={i} className="my-3">
            <SingleCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default CardsWrapper;