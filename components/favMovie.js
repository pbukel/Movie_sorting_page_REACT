import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const FavMovie = ({ item, setFavorites, getFavorites, index }) => {
  const [rating, setRating] = useState(0); // initial rating value

  function deleteFromFav() {
    let arr = getFavorites;
    arr.splice(index, 1);

    setFavorites([...arr]);
  }

  return (
    <div className="one_movie">
      <img src={item.image} alt="" />
      <h2>{item.titleLtu}</h2>
      <div className="genre">
        {item.genre.map((x, i) => (
          <p key={i}>{x}</p>
        ))}
      </div>
      <Rating ratingValue={item.imdbRating * 10} readonly={true} />
      <h4>Duration: {item.duration}</h4>
      <button onClick={deleteFromFav} className="delete">
        DELETE
      </button>
    </div>
  );
};

export default FavMovie;
