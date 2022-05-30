import "./index.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";
import { Preloader } from "./components/Preloader";
import { NotFound } from "./pages/NotFound";
import { Favourites } from "./components/Favourites";

const local_url = "https://api.thecatapi.com/v1/images/search?limit=100";

function App() {
  const [data, setData] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const addCats = (object) => {
    if (!favorite.some((alreadyFavorite) => alreadyFavorite.id === object.id)) {
      const newObject = object;
      newObject.favorite = true;
      setFavorite([...favorite, newObject]);
    }
  };
  console.log(favorite);
  const deleteCats = (object) => {
    const newArray = favorite.filter((items) => items.id !== object.id);
    setFavorite(newArray);
  };

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(local_url, {
        headers: {
          "x-api-key": "1c041488-5626-4843-a034-281edb35b23b",
        },
      });
      response = await response.json();
      setData(response);
    }

    fetchMyAPI();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            index
            element={
              <Gallery data={data} addCats={addCats} deleteCats={deleteCats} />
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/favourites"
            element={
              <Favourites
                favorite={favorite}
                addCats={addCats}
                deleteCats={deleteCats}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
