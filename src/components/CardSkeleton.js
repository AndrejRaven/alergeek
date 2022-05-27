import { Placeholder, Container, Row, Card, Col } from 'react-bootstrap';

const CardSkeleton = () => {

  const Item = () => {
    return (
      <Col className="my-3">
        <Card>
          <Placeholder as={Card.Img} style={{ height: '460px' }} bg="dark" variant="top" animation="glow" />
          <Card.Body style={{ height: '160px' }}>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
              <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
          </Card.Body>
          <Card.Footer>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={8} />
              <Placeholder xs={8} />
              <Placeholder xs={8} />
            </Placeholder>
          </Card.Footer>
          <Card.Footer>
            <Placeholder.Button variant="outlined" xs={3} />
          </Card.Footer>
        </Card>
      </Col>
    )
  }

  return (
    <Container>
      <Row xs={1} md={4} className="g-4 my-3">
        <Item />
        <Item />
        <Item />
        <Item />
      </Row>
    </Container>
  )
};

export default CardSkeleton;