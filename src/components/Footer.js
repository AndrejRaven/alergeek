import { Navbar, Container } from 'react-bootstrap';
import Spacer from './Spacer';

const Footer = () => {
  return (
    <footer className='mt-auto'>
      <Spacer space={5} />
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#" className="fs-6">&copy; Ravens Lib 2022</Navbar.Brand>
        </Container>
      </Navbar>
    </footer>
  )
}

export default Footer;