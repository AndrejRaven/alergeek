import { Badge, Col } from "react-bootstrap";

const BookDescriptionItem = ({arr, text}) => {
  return (
    <Col>
      <h6>{text}:</h6>
      {arr?.map((item, i) => (<Badge className="m-2" key={i * Math.floor(Math.random() * 100)} pill bg="dark">{item}</Badge>))}
    </Col>
  )
};

export default BookDescriptionItem;