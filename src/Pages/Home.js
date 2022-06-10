import TextMediaHeader from "../components/TextMediaHeader";
import Header from "../components/Header";
import CardsWrapper from "../components/CardsWrapper";
import ErrorMessage from '../components/errorMessage/ErrorMessage';
import useBooksService from "../services/BooksService";
import CardSkeleton from "../components/CardSkeleton";
import { useState, useEffect } from "react";


const HomePage = () => {
  const [bookList, setBookList] = useState([]);

  const { loading, error, getBooks } = useBooksService();

  useEffect(() => {
    onRequest();
  }, [])

  const onRequest = () => {
    getBooks()
      .then(onCharListLoaded)
  }

  const onCharListLoaded = (newBookList) => {
    setBookList(newBookList.books.slice(0, 8));

  }

  const errorMessage = error ? <ErrorMessage /> : null;
  const placeholder = loading ? <CardSkeleton /> : null;
  return (
    <>
      <div className="bg-info">
        <TextMediaHeader
          title="Greatings my friend!"
          text="This is a library of free books that you can read and download from this webpage.
         Acordingly to the private property policy it is 100% legal so you dont break any law. Please enjoy the big Ravens library 100% free. Enjoy your reading"
          image="https://pngimg.com/uploads/book/book_PNG51045.png"
          alt="random image"
          btnLink="/books"
          btnText="Go to books" />
      </div>
      <Header title="Check most popular books!" center />
      {placeholder}
      {errorMessage}
      <CardsWrapper items={bookList} />
    </>
  )
}

export default HomePage;