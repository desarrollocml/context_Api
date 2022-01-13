import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import MoviesProvider from "./contexts/MovieContext";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <div>
      <UserProvider>
        <MoviesProvider>
          <Navbar></Navbar>
          <MovieList></MovieList>
        </MoviesProvider>
      </UserProvider>
    </div>
  );
}

export default App;
