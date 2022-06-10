import { Row, Col, Container, Placeholder, Card, Stack, Button } from 'react-bootstrap';

const NoResultPlaceholder = () => {
  return (
    <Container className="mt-0">
      <Row xs={1} md={4} className="g-4">
        <Col></Col>
        <Col className="my-3">
          <Card>
            <Placeholder as={Card.Img} style={{ height: '260px' }} bg="dark" variant="top" animation="glow" />
            <Card.Body style={{ height: '160px' }}>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={6} /> <Placeholder xs={8} />
              </Placeholder>
            </Card.Body>
            <Card.Footer>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={8} />
              </Placeholder>
            </Card.Footer>
            <Card.Footer>
              <Stack direction="horizontal" gap={3}>
                <Placeholder.Button variant="outlined" xs={3} />
                <div className="ms-auto" variant="outlined" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={'red'} viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                  </svg>
                </div>
              </Stack>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={6} xs={12} className="d-flex flex-column my-3">
          <h4>You have no favorite books yet</h4>
          <div>
            <p>Check our books library and find your new favorite book</p>
            <Stack gap={3} direction="horizontal">
              <Button>To the books</Button>
              <Button>Homepage</Button>
            </Stack>
          </div>
          <div className="mt-auto">
            <h5>To add book to yours favorite list please click <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={'current'} viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg> icon.
            </h5>
          </div>
        </Col>
      </Row>
    </Container >
  );
};

export default NoResultPlaceholder;