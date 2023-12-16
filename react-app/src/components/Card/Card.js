const checkRating = (rating)=>{
    if (rating && rating !== 'null') {
        if (rating >= 7) {
          return "green";
        } else if (rating > 5) {
          return "orange";
        } else if (rating < 5) {
          return "red";
        }
      }else return ''
}



export default function Card(props) {
    const {movie} = props
    const rating = movie.rating || movie.ratingImdb || movie.ratingKinopoisk 
    return (<div className="movie" onClick={(event)=>console.log(movie.kinopoiskId)}>
        <div className="movie__cover-inner">
            <img className="movie__cover" src={movie.posterUrlPreview} alt={movie.nameRu} />
            <div className="movie__cover--darkened"></div>
        </div>
        <div className="movie__info">
            <div className="movie__title">
                {movie.nameRu}
            </div>
            <div className="movie__category">
                {movie.genres.map((genres) => genres.genre ).join(' | ')}
            </div>{rating && rating !== 'null' && <div className={'movie__average movie__average--'+ checkRating(rating)}>{rating}</div>}
            </div>
        </div>)
}