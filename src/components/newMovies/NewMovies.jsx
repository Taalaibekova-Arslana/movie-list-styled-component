import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const StyleAddButton = styled.button`
	border-radius: 8px;
	border: 1px solid transparent;
	padding: 0.6em 1.2em;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	background-color: #5d00ff89;
	cursor: pointer;
	transition: border-color 0.25s;
	&:hover {
		border-color: #646cff;
	}
	&:focus {
		&:focus-visible {
			outline: 4px auto -webkit-focus-ring-color;
		}
	}
`;

const StyleInput = styled.input`
	font-size: 16px;
	width: 400px;
	height: 40px;
	border-radius: 20px;
	background-color: #ea00ff90;
	&::placeholder {
		color: white;
	}
`;
const StyleButton = styled.button`
	border-radius: 8px;
	border: 1px solid transparent;
	padding: 0.6em 1.2em;
	font-size: 1em;
	font-weight: 500;
	font-family: inherit;
	background-color: #01b8f57b;
	cursor: pointer;
	transition: border-color 0.25s;
	&:hover {
		border-color: #646cff;
	}
	&:focus {
		&:focus-visible {
			outline: 4px auto -webkit-focus-ring-color;
		}
	}
`;
const NewMovies = ({ movieses, setMovieses, setFiltered }) => {
	const [movieName, setMovieName] = useState("");
	const [movieImg, setMovieImg] = useState("");
	const [movieGenre, setMovieGenre] = useState("");

	const addMovies = () => {
		if (movieName === "" || movieGenre === "" || movieImg === "") {
			alert("Пожалуйста заполните поле!");
		} else {
			const addMovieObj = {
				id: Math.random(),
				name: movieName,
				img: movieImg,
				genre: movieGenre,
			};
			setMovieses([...movieses, addMovieObj]);
			setFiltered([...movieses, addMovieObj]);
			setMovieName("");
			setMovieImg("");
			setMovieGenre("");
		}
	};

	const filterMovie = (genre) => {
		const filteringes = movieses.filter((item) => item.genre === genre);
		setFiltered(filteringes);
	};

	return (
		<div>
			<div>
				<StyleButton onClick={() => filterMovie("Комедия")}>
					Комедия
				</StyleButton>
				<StyleButton onClick={() => filterMovie("Ужастик")}>
					Ужастик
				</StyleButton>
				<StyleButton onClick={() => filterMovie("Драма")}>Драма</StyleButton>
				<StyleButton onClick={() => filterMovie("Криминал")}>
					Криминал
				</StyleButton>
			</div>
			<div>
				<StyleInput
					value={movieName}
					type="text"
					placeholder="Name Movie"
					onChange={(e) => setMovieName(e.target.value)}></StyleInput>
				<StyleInput
					value={movieImg}
					type="text"
					placeholder="Image"
					onChange={(e) => setMovieImg(e.target.value)}></StyleInput>
				<StyleInput
					value={movieGenre}
					type="text"
					placeholder="Genre"
					onChange={(e) => setMovieGenre(e.target.value)}></StyleInput>

				<StyleAddButton onClick={addMovies}>Добавить</StyleAddButton>
			</div>
		</div>
	);
};

export default NewMovies;
