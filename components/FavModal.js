import { useRef, useEffect } from "react";
import FavMovie from "./favMovie";

const FavoritePage = ({
  getFavorites,
  setShowFav,
  setFavorites,
  getAnim,
  getHorro,
  getAction,
  getDrama,
}) => {
  function close() {
    setShowFav(false);
  }
  //   let anim = getFavorites.filter((x) => x.genre === "Animaciniai");
  //   console.log(anim.length);

  // CLICK OUTSIDE MODAL -> CLOSE MODAL
  const wrapperRef = useRef(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowFav(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  // CLICK OUTSIDE MODAL -> CLOSE MODAL

  return (
    <div className="favorite">
      <div className="statistika">
        <h2>Animation: {getAnim}</h2>
        <h2>Horror: {getHorro}</h2>
        <h2>Drama: {getDrama}</h2>
        <h2>Action: {getAction}</h2>
        <button onClick={close} className="closeFav">
          CLOSE
        </button>
      </div>
      <div ref={wrapperRef} className="box">
        {getFavorites.map((x, i) => (
          <FavMovie
            index={i}
            key={i}
            item={x}
            setFavorites={setFavorites}
            getFavorites={getFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
