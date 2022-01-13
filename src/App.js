import { useState } from "react";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import UserContext from "./contexts/UserContext";

const initialUser = {
  id: 1,
  name: "Luis",
  favoriteMovies: [1, 2, 3],
};
function App() {
  const [user, setUser] = useState(initialUser);
  const login=()=>{
    setUser(initialUser)
  }
  const logout=()=>{
    setUser(null)
  }
  const data = { user, login, logout };

  return (
    <div>
      <UserContext.Provider value={data}>
        <Navbar></Navbar>
        <MovieList></MovieList>
      </UserContext.Provider>
    </div>
  );
}

export default App;
