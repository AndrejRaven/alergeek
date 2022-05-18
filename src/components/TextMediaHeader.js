import { Container, Row, Col, Image, Button } from "react-bootstrap";

const TextMediaHeader = ({ title, text, image, altText }) => {
  return (
    <Container className="text-white pb-5">
      <Row>
        <Col md={6} xs={12}>
          <div className="d-flex flex-column h-100 justify-content-center">
            <h1 className='my-4'>{title}</h1>
            <p className="fs-4">{text}</p>
            <div>
              <Button className="my-4">To the books</Button>
            </div>
          </div>
        </Col>
        <Col md={6} xs={12}>
          <div className="m-5">
            <Image
              fluid
              alt={altText}
              src={image} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default TextMediaHeader;