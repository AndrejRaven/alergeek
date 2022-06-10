import { useState, useEffect, useContext } from "react";
import { FavoritesContext } from '../components/FavouriteContext';
import TextMediaHeader from "../components/TextMediaHeader";
import Header from "../components/Header";
import CardsWrapper from "../components/CardsWrapper";
import audiobook from '../assets/audiobook.png';
import NoResultPlaceholder from "../components/NoResultPlaceholder";

const Favourite = () => {
  const [bookList, setBookList] = useState([]);
  const { favorites } = useContext(FavoritesContext);

  useEffect(() => {
    onBookListChange()
  }, [favorites])

  const onBookListChange = () => {
    setBookList(favorites)
  }

  const noFavouriteBooks = favorites.length === 0 ? <NoResultPlaceholder /> : null;

  return (
    <>
      <div style={{ background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,108,253,1) 61%)' }}>
        <TextMediaHeader
          title="Check our audio books"
          text="No time to read? Check our audio books library that include more then 1000 audio books."
          image={audiobook}
          btnLink="/audiobooks"
          btnText="Go to audiobooks"
          alt="random image" />
      </div>
      <Header title="Here is your favourite book list!" center />
      <CardsWrapper items={bookList} />
      {noFavouriteBooks}
    </>
  );

}

export default Favourite;