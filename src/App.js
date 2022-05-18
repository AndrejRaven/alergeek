import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import NavbarComponent from "./components/Navbar";
import HomePage from "./Pages/Home";
import Books from './Pages/Books';
import Favourite from './Pages/Favourite';


function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomePage />}  />
          <Route path="/books" element={<Books />}  />
          <Route path="/favourite" element={<Favourite />}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
