const React = require("react");
const { Box, Text, Newline } = require("ink");

const Languages = (props) => {
	return (
		<Box>
			<Text>
				<Text>- English</Text>
				<Newline />
				<Text>- Hindi</Text>
				<Newline />
				<Text>- Gujarati</Text>
			</Text>
		</Box>
	);
};

module.exports = Languages;
