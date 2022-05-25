const React = require("react");
const { Text, Box, Newline } = require("ink");

const Contact = (props) => {
	return (
		<Box>
			<Text>
				<Text>Email : herin.zaveri2@gmail.com</Text>
				<Newline />
				<Text>Mobile : +91 - 9601101503</Text>
				<Newline />
				<Text>LinkedIn : linkedin.com/in/herinzaveri</Text>
			</Text>
		</Box>
	);
};

module.exports = Contact;
