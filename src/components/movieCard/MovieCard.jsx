import css from "../movieCard/MovieCard.module.css";

const MovieCard = ({ id, name, img, genre }) => {
	return (
		<div className={css.container}>
			<div className={css.card} key={id}>
				<img className={css.image} src={img} alt={name} />
				<div className={css.text}>
					<h2 className={css.h2}>{name}</h2>
					<p>{genre}</p>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
