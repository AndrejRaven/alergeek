import { Container, Button } from 'react-bootstrap'
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const AudioBooks = () => {
  const back = useNavigate();

  return (
    <Container>
      <Container className="mt-5">
        <Header title='Page in progress. Please check later' center />
        <Button className="ms-auto" onClick={() => back(-1)} variant="secondary">Go back</Button>
      </Container>
    </Container>
  )
}

export default AudioBooks;