import useBooksService from "../services/BooksService";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import { Container, Row, Col, Image, Stack, Badge, Button } from "react-bootstrap";
import Header from '../components/Header';
import DownloadLink from '../components/DownloadLink';
import BookDescriptionItem from '../components/BookDescriptionItem';

const langName = new Intl.DisplayNames(['en'], { type: 'language' });

const Book = () => {
  const [book, setBook] = useState({});
  const { loading, error, getBook } = useBooksService();
  const { id } = useParams();
  const [links, setLinks] = useState([]);
  const back = useNavigate();
  useEffect(() => {
    onRequest();
  }, [])

  const onRequest = () => {
    getBook(id)
      .then(onCharListLoaded)
      .catch(() => onCharListLoaded(null))
  }

  const onCharListLoaded = (newBook) => {
    setBook(newBook);
    setLinks(createLinks(newBook));
  }

  const createLinks = ({ resources }) => {
    const uriRegex = /h.htm/;
    const readableLink = resources.filter(res => uriRegex.test(res.uri));
    const epubLink = resources.filter(res => res.type === 'application/epub+zip');
    const zipLink = resources.filter(res => res.type === 'application/zip');
    const mobipocketLink = resources.filter(res => res.type === 'application/x-mobipocket-ebook');
    const rdfLink = resources.filter(res => res.type === 'application/rdf+xml');
    const txtLink = resources.filter(res => res.type === 'text/plain; charset=utf-8');

    return {
      readableLink,
      epubLink,
      zipLink,
      mobipocketLink,
      rdfLink,
      txtLink
    };
  }

  const errorMessage = error ? <ErrorMessage /> : null;
  return (
    <>
      {errorMessage}
      <Container>
        <Row className="g-4">
          <Col xs={12} md={4}>
            <Image className="my-5" style={{ minHeight: '460px' }} fluid src={book.image} />
          </Col>
          <Col xs={12} md={8}>
            <Header title={book.title} />
            <h5>{book.description}</h5>

            <div className="mt-4">
              <Stack direction="horizontal" gap={3}>
                <h6>Languages:</h6>
                {book.language ? book.language.map((lang) => (<Badge key={lang} pill bg="dark">{langName.of(lang)}</Badge>)) : null}
              </Stack>
              <BookDescriptionItem text="Subjects" arr={book.subjects} />
              <Stack direction="horizontal" gap={3}>
                <h6>Agents:</h6>
                {book.agents ? book.agents.map(author => (<Badge key={author.id} pill bg="dark">{author.type}: {author.person}</Badge>)) : null}
              </Stack>
              <BookDescriptionItem text="Bookshelves" arr={book.bookshelves} />
              <h6>Downloads: <Badge pill bg="dark">{book.downloads}</Badge></h6>
            </div>
          </Col>
          <Col xs={12}>
            <h2>You also can download this book in diferent formats:</h2>
            <Row xs={1} md={6} className="g-4 my-3">
              {links.epubLink?.map(link => (<DownloadLink key={link.id} link={link.uri} text='Download epub' />))}
              {links.rdfLink?.map(link => (<DownloadLink key={link.id} link={link.uri} text='Download rdf' />))}
              {links.mobipocketLink?.map(link => (<DownloadLink key={link.id} link={link.uri} text='Download kindle' />))}
              {links.txtLink?.map(link => (<DownloadLink key={link.id} link={link.uri} text='Download txt' />))}
              {links.zipLink?.map(link => (<DownloadLink key={link.id} link={link.uri} text='Download zip' />))}
            </Row>

            <div className="mt-5">
              <h2>Or you can read it online:</h2>
              <Stack direction="horizontal" gap={3}>
                {links.readableLink?.map(link => (<a className="btn btn-secondary mt-2"  key={link.id} href={link.uri} variant="secondary">Read online</a>))}
                <Button className="ms-auto" onClick={() => back(-1)} variant="secondary">Back</Button>
              </Stack>
            </div>
          </Col>
        </Row>
      </Container>
    </>

  )
}

export default Book;