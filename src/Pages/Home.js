import TextMediaHeader from "../components/TextMediaHeader";
import Header from "../components/Header";
import CardsWrapper from "../components/CardsWrapper";

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


const HomePage = () => {
  return (
    <>
      <div className="bg-info">
        <TextMediaHeader
          title="Greatings my friend!"
          text="This is a library of free books that you can read and download from this webpage.
         Acordingly to the private property policy it is 100% legal so you dont break any law. Please enjoy the big Ravens library 100% free. Enjoy your reading"
          image="https://pngimg.com/uploads/book/book_PNG51045.png"
          alt="random image" />
      </div>
      <Header title="Check most popular books!" />
      <CardsWrapper items={items} />
    </>
  )
}

export default HomePage;