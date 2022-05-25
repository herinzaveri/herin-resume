const React = require("react");
const { Text, Box } = require("ink");

const pages = require("./pages");

const TabContent = (props) => {
	const { activeTab = "NAME" } = props;

	const ActivePage = pages[activeTab];

	return (
		<Box borderStyle="round" borderColor="green" width="80%">
			<ActivePage />
		</Box>
	);
};

module.exports = TabContent;
