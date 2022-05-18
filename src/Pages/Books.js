import TextMediaHeader from "../components/TextMediaHeader";
import Header from "../components/Header";
import img from '../assets/library.png';
import CardsWrapper from "../components/CardsWrapper";
import Filters from '../components/Filters';

const items = [
  {
    img: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
    title: "Book title",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonLink: 'link'
  },
  {
    img: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
    title: "Book title",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonLink: 'link'
  },
  {
    img: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
    title: "Book title",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonLink: 'link'
  },
  {
    img: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
    title: "Book title",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonLink: 'link'
  },
  {
    img: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
    title: "Book title",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonLink: 'link'
  },
  {
    img: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
    title: "Book title",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonLink: 'link'
  },
  {
    img: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
    title: "Book title",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonLink: 'link'
  },
  {
    img: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
    title: "Book title",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonLink: 'link'
  },
  {
    img: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
    title: "Book title",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonLink: 'link'
  },
  {
    img: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
    title: "Book title",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonLink: 'link'
  },
  {
    img: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
    title: "Book title",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonLink: 'link'
  },
  {
    img: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
    title: "Book title",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonLink: 'link'
  }            
  ]


const Books = () => {
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
    <CardsWrapper items={items} />
  </>
  );
}

export default Books;