import TextMediaHeader from "../components/TextMediaHeader";
import Header from "../components/Header";
import img from '../assets/library.png';
import audiobook from '../assets/audiobook.png'
import Filters from '../components/Filters';
import CardsWrapper from '../components/CardsWrapper';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import useBooksService from "../services/BooksService";
import { useState, useEffect } from "react";
import CardSkeleton from '../components/CardSkeleton';
import NotFound from '../components/NotFound';
import Spacer from '../components/Spacer';
import { Container } from "react-bootstrap";

const Books = () => {
  const [count, setCount] = useState(0);
  const [bookList, setBookList] = useState([]);
  const [filters, setFilters ] = useState('');
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [bookEnded, setBookEnded] = useState(false);
  const { loading, error, getBooks } = useBooksService();

  useEffect(() => {
    onRequest(pageNumber, true);
  }, [])

  const onRequest = (pageNumber, initial, filters) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true)
    getBooks(pageNumber, filters)
      .then(onCharListLoaded)
  }

  const onCharListLoaded = (newBookList) => {
    setBookList(bookList => [...bookList, ...newBookList.books])
    setNewItemLoading(false)
    setPageNumber(pageNumber => pageNumber + 1)
    setCount(newBookList.count)
    setBookEnded(bookEnded => newBookList.next)
  }

  const errorMessage = error ? <ErrorMessage /> : null;
  const placeholder = loading && !newItemLoading ? <CardSkeleton /> : null;


  return (
    <>
      <div className="bg-success">
        <TextMediaHeader
          title="Big Library with 1000`s of books"
          text="You can choose books in 12 languages, 40 geneours, and you can read it right here in this webpage or download it in 3 formats. Afterall you can add book to your 
        favourites books and read it after."
          btnLink="/favorite"
          btnText="Check favorite"
          image={img}
          alt="random image" />
      </div>
      <Header title="Filter books with our great filters!" center />
      <Filters 
        onRequest={onRequest} 
        setBookList={setBookList}
        setPageNumber={setPageNumber}
        setFilters={setFilters}
        count={count} />
      <div>
        {placeholder}
        {errorMessage}
        <CardsWrapper 
          filters={filters}
          onRequest={onRequest}
          items={bookList} 
          newItemLoading={newItemLoading} 
          bookEnded={bookEnded} 
          pageNumber={pageNumber} />
      </div>
      <Spacer space={5} />
      <Container style={{ background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,108,253,1) 61%)' }}>
        <TextMediaHeader
          title="Check our audio books"
          text="No time to read? Check our audio books library that include more then 1000 audio books."
          image={audiobook}
          btnLink="/audiobooks"
          btnText="Go to audiobooks"
          alt="random image" />
      </Container>
      <Spacer space={5} />
    </>
  );
}

export default Books;