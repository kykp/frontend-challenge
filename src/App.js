import "./index.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";
import { Preloader } from "./components/Preloader";
import { Favourites } from "./components/Favourites";

const local_url = "https://api.thecatapi.com/v1/images/search?limit=100";

function App() {
  const [data, setData] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const addCats = (object) => {
    const newArray = data.map((element) => {
      if (object.id === element.id && !element.like) {
        element.like = true;
        setFavorite([...favorite, element]);
        return element;
      } else if (object.id === element.id && element.like) {
        element.like = false;
        let newFavorite = favorite.filter((e) => e.id !== element.id);

        setFavorite(newFavorite);
        return element;
      }
      return element;
    });
    setData(newArray);
  };

  console.log(favorite);
  // const addCats = (object) => {
  //   if (!favorite.some((alreadyFavorite) => alreadyFavorite.id === object.id)) {
  //     setFavorite([...favorite, object]);
  //   }
  // };

  // const deleteCats = (object) => {
  //   const newArray = favorite.filter((items) => items.id !== object.id);
  //   setFavorite(newArray);
  // };

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(local_url, {
        headers: {
          "x-api-key": "1c041488-5626-4843-a034-281edb35b23b",
        },
      });
      response = await response.json();
      const newData = response.map((e) => {
        e.like = false;
        return e;
      });
      setData(newData);
    }

    fetchMyAPI();
  }, []);

  return (
    <div className="App container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/frontend-challenge"
            element={
              data.length ? (
                <Gallery
                  data={data}
                  addCats={addCats}
                  // deleteCats={deleteCats}
                />
              ) : (
                <Preloader />
              )
            }
          />
          <Route
            path="/favourites"
            element={
              <Favourites
                favorite={favorite}
                addCats={addCats}
                // deleteCats={deleteCats}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
