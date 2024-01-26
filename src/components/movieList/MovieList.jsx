import { useState } from "react";
import MovieMap from "../movieMap/MovieMap";
import NewMovies from "../newMovies/NewMovies";

const MovieList = () => {
	const [movieses, setMovieses] = useState([]);
	const [filtered, setFiltered] = useState([]);
	console.log(filtered);
	return (
		<div>
			<NewMovies
				movieses={movieses}
				setMovieses={setMovieses}
				setFiltered={setFiltered}
			/>
			<MovieMap movieses={filtered} setFiltered={setFiltered} />
		</div>
	);
};

export default MovieList;
