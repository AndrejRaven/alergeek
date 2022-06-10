import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import NavbarComponent from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Pages/Home";
import Books from './Pages/Books';
import Favourite from './Pages/Favourite';
import Book from './Pages/Book';
import AudioBooks from './Pages/AudioBook';
import NotFound from "./components/NotFound";

function App() {
  return (
      <div className='min-vh-100 d-flex flex-column'>
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<Books />} />
            <Route path="/favorite" element={<Favourite />} />
            <Route path="/books/:id" element={<Book />} />
            <Route path="/audiobooks" element={<AudioBooks />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
