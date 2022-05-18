import { Button,
        ButtonGroup, 
        DropdownButton, 
        InputGroup, 
        Dropdown, 
        FormControl, 
        Container, 
        ButtonToolbar } from 'react-bootstrap';

const Filters = () => {
  return (
    <Container>
      <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
      <ButtonGroup className="m-2" aria-label="First group">
        <Button>1</Button>
        <Button>2</Button>

        <DropdownButton as={ButtonGroup} title="Language" id="bg-nested-dropdown">
          <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>

      <InputGroup className="m-2">
        <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
        <FormControl
          type="text"
          placeholder="Input group example"
          aria-label="Input group example"
          aria-describedby="btnGroupAddon"
        />
      </InputGroup>
      </ButtonToolbar>
    </Container>
  )
}

export default Filters;