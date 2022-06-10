import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const TextMediaHeader = ({ title, text, image, altText, btnLink, btnText }) => {
  return (
    <Container className="text-white pb-5">
      <Row>
        <Col md={6} xs={12}>
          <div className="d-flex flex-column h-100 justify-content-center">
            <h1 className='my-4'>{title}</h1>
            <p className="fs-4">{text}</p>
            {btnLink ?
              <div>
                <Link to={btnLink} className="btn btn-primary my-4">{btnText}</Link>
              </div> : null}
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