const React = require("react");
const importJsx = require("import-jsx");
const { Box } = require("ink");
const { default: SelectInput } = require("ink-select-input");

const tabList = [
	{ label: "Name", value: "NAME" },
	{ label: "Contact", value: "CONTACT" },
	{ label: "Education", value: "EDUCATION" },
	{ label: "Skills", value: "SKILLS" },
	{ label: "Languages", value: "LANGUAGES" },
	{ label: "Experience", value: "EXPERIENCE" },
];

const Navigator = (props) => {
	const { tab, onTabChange } = props;
	return (
		<Box>
			<SelectInput items={tabList} onHighlight={onTabChange} />
		</Box>
	);
};

module.exports = Navigator;
