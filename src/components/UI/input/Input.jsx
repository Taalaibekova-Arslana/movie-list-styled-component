import React from "react";

const Input = ({ type, text, placeholder }) => {
	return (
		<div>
			<input type={type} text={text} placeholder={placeholder} />
		</div>
	);
};

export default Input;
