"use strict";

const getPicture = () => {
	const seed = Math.floor(Math.random() * 200000) + 12373245;
	return `https://avatars.dicebear.com/api/gridy/${seed}.svg`;
};

module.exports = getPicture;
