const { Box } = require("ink");
const { default: Table } = require("ink-table");
const React = require("react");

const educationDetails = [
	{
		["Degree/Grade"]: "B.E. CE",
		["Institution"]: "AIT - Ahmedabad",
		["Score"]: "8.2 CGPA",
		["Passing Year"]: "2021",
	},
	{
		["Degree/Grade"]: "12th",
		["Institution"]: "HS Patel - Ahmedabad",
		["Score"]: "60 percentile",
		["Passing Year"]: "2017",
	},
	{
		["Degree/Grade"]: "10th",
		["Institution"]: "Hiramani - Ahmedabad",
		["Score"]: "93 percentile",
		["Passing Year"]: "2015",
	},
];

const Education = (props) => {
	return (
		<Box>
			<Table data={educationDetails} />
		</Box>
	);
};

module.exports = Education;
