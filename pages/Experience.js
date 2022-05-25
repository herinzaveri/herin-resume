const { Box } = require("ink");
const { default: Table } = require("ink-table");
const React = require("react");

const experienceDetails = [
	{
		["Company"]: "Rapidops Inc",
		["Position"]: "Intern",
		["Location"]: "Ahmedabad",
		["From"]: "January 2021",
		["To"]: "June 2021",
	},
	{
		["Company"]: "Rapidops Inc",
		["Position"]: "Jr. Software Engineer",
		["Location"]: "Ahmedabad",
		["From"]: "July 2021",
		["To"]: "January 2022",
	},
	{
		["Company"]: "Toddle",
		["Position"]: "Intern",
		["Location"]: "Remote",
		["From"]: "February 2022",
		["To"]: "May 2022",
	},
];

const Experience = (props) => {
	return (
		<Box>
			<Table data={experienceDetails} />
		</Box>
	);
};

module.exports = Experience;
