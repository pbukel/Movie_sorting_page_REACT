import { useRef, useEffect } from "react";
import { Rating } from "react-simple-star-rating";

const Modal = ({ item, getModal, setModal, getFavorites, setFavorites }) => {
  //   function closeModal() {
  //     setModal(false);
  //   }

  function addtoFavorites(item) {
    setFavorites([...getFavorites, item]);
  }

  // CLICK OUTSIDE MODAL -> CLOSE MODAL
  const wrapperRef = useRef(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setModal(false);
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
    <div className="modal">
      <div ref={wrapperRef} className="insideModal">
        <img src={item.image} alt="" />
        <div className="info">
          <h2>{item.titleLtu}</h2>
          <div className="genre">
            {item.genre.map((x, i) => (
              <p key={i}>{x}</p>
            ))}
          </div>
          <Rating ratingValue={item.imdbRating * 10} readonly={true} />
          <h4>Duration: {item.duration}</h4>
          <p>{item.description}</p>
          <button onClick={() => addtoFavorites(item)} className="favorites">
            ADD TO FAVORITES
          </button>
        </div>
        {/* <button onClick={closeModal} className="close">
          X
        </button> */}
      </div>
    </div>
  );
};

export default Modal;
