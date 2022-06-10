import { Form, InputGroup, FormControl, Col } from 'react-bootstrap';

const InputWrapper = ({ placeholder, seterFunction, labelText }) => {
  return (
    <Form.Group as={Col} md="4">
    <h5>{labelText}</h5>
    <FormControl
      type="text"
      placeholder={placeholder}
      aria-label="Input group example"
      aria-describedby="btnGroupAddon"
      onChange={(e) => seterFunction(e.target.value)}
    />
  </Form.Group>
  )
}

export default InputWrapper;