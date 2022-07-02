import "./App.css";

import { useState, useEffect } from "react";
import movies from "./assets/movies.json";
import Movie from "./components/Movie";
import Modal from "./components/Modal";
import FavoritePage from "./components/FavModal";

function App() {
  const [getModal, setModal] = useState(false);
  const [getModalItem, setModalItem] = useState([]);
  const [getFavorites, setFavorites] = useState([]);
  const [getShowFav, setShowFav] = useState(false);

  const slicedArray = movies.slice(0, 20);

  function showFav() {
    setShowFav(true);
  }

  const [getAnim, setAnim] = useState(0);
  const [getHorro, setHorro] = useState(0);
  const [getDrama, setDrama] = useState(0);
  const [getAction, setAction] = useState(0);

  function checking(item) {
    //
    if (item.includes("Animaciniai")) setAnim(getAnim + 1);
    if (item.includes("Dramos")) setDrama(getDrama + 1);
    if (item.includes("Veiksmo")) setAction(getAction + 1);
    if (item.includes("Siaubo")) setHorro(getHorro + 1);

    // if (item.includes("Animaciniai")) console.log(item);
    // if (item.includes("Dramos")) console.log(item);
    // if (item.includes("Veiksmo")) console.log(item);
    // if (item.includes("Siaubo")) console.log(item);
  }

  useEffect(() => {
    let anim = 0;
    setAnim(0);
    let dram = 0;
    setDrama(0);
    let horo = 0;
    setHorro(0);
    let action = 0;
    setAction(0);
    getFavorites.map((x) => {
      if (x.genre.includes("Animaciniai")) {
        anim = anim + 1;
        setAnim(anim);
      }
      if (x.genre.includes("Dramos")) {
        dram = dram + 1;
        setDrama(dram);
      }
      if (x.genre.includes("Veiksmo")) {
        action = action + 1;
        setAction(action);
      }
      if (x.genre.includes("Siaubo")) {
        horo = horo + 1;
        setHorro(horo);
      }
    });
  }, [getFavorites]);

  return (
    <div className="App">
      <div className="fav">
        <button onClick={showFav}>FAVORITES ({getFavorites.length})</button>
      </div>
      <div className="allmovies">
        {/* main movie load */}
        {slicedArray.map((x, i) => (
          <Movie
            getModal={getModal}
            setModal={setModal}
            key={i}
            item={x}
            setModalItem={setModalItem}
          />
        ))}
        {/* modal with movie info */}
        {getModal && (
          <Modal
            setModal={setModal}
            item={getModalItem}
            setFavorites={setFavorites}
            getFavorites={getFavorites}
          />
        )}
        {/* modal with favorites */}
        {getShowFav && (
          <FavoritePage
            getFavorites={getFavorites}
            setShowFav={setShowFav}
            setFavorites={setFavorites}
            getAnim={getAnim}
            getDrama={getDrama}
            getHorro={getHorro}
            getAction={getAction}
          />
        )}
      </div>
    </div>
  );
}

export default App;
