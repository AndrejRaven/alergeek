import { Container, Button } from 'react-bootstrap'
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const back = useNavigate();

  return (
    <Container className="mt-5">
      <Header title='Nothing found from your request' center />
      <Button className="ms-auto" onClick={() => back(-1)} variant="secondary">Go back</Button>
    </Container>
  );
};

export default NotFound;