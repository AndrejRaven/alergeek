import { Card, Button, Stack } from 'react-bootstrap';
import { useState, useEffect, useContext} from 'react';
import { FavoritesContext } from './FavouriteContext';
import { Link } from "react-router-dom";


const SingleCard = ({ item }) => {
  const [favourite, setFavourite ] = useState(false);
  const {favorites, add, remove} = useContext(FavoritesContext);

  useEffect(() => {
    checkBook()
  }, []);

  const checkBook = () => {
    if(favorites.filter(book => book.id === item.id).length > 0)
      setFavourite(true)
  }
  const handleFavourite = () => {
    if(favorites.filter(book => book.id === item.id).length === 0) {
      setFavourite(true);
      add(item); } else {
        setFavourite(false)
        remove(item)
      }
  }

  return (
    <Card>
      <Card.Img style={{ height: '460px' }} variant="top" src={item.image} />
      <Card.Body style={{ height: '160px' }}>
        <Card.Title>
          {item.title.length > 40 ? `${item.title.slice(0, 40)} ...` : item.title}
          </Card.Title>
        <Card.Text>
          {item.description.length > 100 ? `${item.description.slice(0, 100)} ...` : item.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Card.Text>
          Author: {item.author.length > 20 ? `${item.author.slice(0, 20)} ...` : item.author}
        </Card.Text>
        <Card.Text>
          Downloads: {item.downloads}
        </Card.Text>
        <Card.Text>
          Language: {item.language}
        </Card.Text>
      </Card.Footer>
      <Card.Footer>
        <Stack direction="horizontal" gap={3}>
          <Link className='btn btn-outlined px-0' to={`/books/${item.id}`}>Read more...</Link>
          <Button className="ms-auto" variant="outlined" onClick={handleFavourite} >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={favourite ? 'red' : 'current'} viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
          </Button>
        </Stack>
      </Card.Footer>
    </Card>
  )
}

export default SingleCard;