import { InputGroup, FormControl, Form, Col } from 'react-bootstrap';

const NumberInputWrapper = ({ header, seterFunctionFrom, seterFunctionTo }) => {
  return (
    <Form.Group as={Col} md="4">
      <h5>{header}</h5>
      <InputGroup className='d-flex justify-space-between'>
        <InputGroup.Text id="btnGroupAddon">From</InputGroup.Text>
        <FormControl
          type="number"
          placeholder='from'
          aria-label="download range min"
          aria-describedby="btnGroupAddon"
          onChange={(e) => seterFunctionFrom(e.target.value)}
        />
        <InputGroup.Text id="btnGroupAddon">To</InputGroup.Text>
        <FormControl
          type="number"
          placeholder='to'
          aria-label="download range max"
          aria-describedby="btnGroupAddon"
          onChange={(e) => seterFunctionTo(e.target.value)}
        />
      </InputGroup>
    </Form.Group>
  );
};

export default NumberInputWrapper;