import { Rating } from "react-simple-star-rating";

const Movie = ({ item, setModal, setModalItem }) => {
  function showModal(item) {
    setModalItem(item);
    setModal(true);
  }

  return (
    <div onClick={() => showModal(item)} className="one_movie">
      <img src={item.image} alt="" />
      <h2>{item.titleLtu}</h2>
      <div className="genre">
        {item.genre.map((x, i) => (
          <p key={i}>{x}</p>
        ))}
      </div>
      <Rating ratingValue={item.imdbRating * 10} readonly={true} />
      <h4>Duration: {item.duration}</h4>
    </div>
  );
};

export default Movie;
