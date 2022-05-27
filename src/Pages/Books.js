import TextMediaHeader from "../components/TextMediaHeader";
import Header from "../components/Header";
import img from '../assets/library.png';
import Filters from '../components/Filters';
import CardsWrapper from '../components/CardsWrapper';
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import useBooksService from "../services/BooksService";
import { useState, useEffect } from "react";
import CardSkeleton from '../components/CardSkeleton';

const Books = () => {
  const [bookList, setBookList] = useState([]);
  const [newItemLoading, setNewItemLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [bookEnded, setBookEnded] = useState(false);
  const { loading, error, getBooks } = useBooksService();

  useEffect(() => {
    console.log('render')
    onRequest(pageNumber, true);
  }, [])

  const onRequest = (pageNumber, initial) => {
    initial ? setNewItemLoading(false) : setNewItemLoading(true)
    getBooks(pageNumber)
      .then(onCharListLoaded)
  }

  const onCharListLoaded = (newBookList) => {
    let ended = false
    // if (newCharList.length < 9) {
    // 	ended = true;
    // }
    setBookList(bookList => [...bookList, ...newBookList])
    setNewItemLoading(false)
    setPageNumber(pageNumber => pageNumber + 1)
    setBookEnded(bookEnded => ended)
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
          image={img}
          alt="random image" />
      </div>
      <Header title="Filter books with our great filters!" />
      <Filters />
      <div>
        {placeholder}
        {errorMessage}
        <CardsWrapper 
          onRequest={onRequest}
          items={bookList} 
          newItemLoading={newItemLoading} 
          bookEnded={bookEnded} 
          pageNumber={pageNumber} />
      </div>
    </>
  );
}

export default Books;