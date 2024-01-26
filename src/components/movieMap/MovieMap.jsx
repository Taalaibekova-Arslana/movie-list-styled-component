import MovieCard from "../movieCard/MovieCard";
import css from "./MovieMap.module.css";

const MovieMap = ({ movieses }) => {
	return (
		<div className={css.container}>
			{movieses.map(({ id, name, img, genre }) => (
				<MovieCard key={id} name={name} img={img} genre={genre} />
			))}
		</div>
	);
};

export default MovieMap;
