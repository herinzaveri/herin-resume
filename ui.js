"use strict";
const React = require("react");
const { Text, Spacer, Box } = require("ink");
const importJsx = require("import-jsx");
const { useState } = require("react");
const Navigator = importJsx("./Navigator");
const TabContent = importJsx("./TabContent");

const App = () => {
	const [activeTab, setActiveTab] = useState("NAME");

	const onTabChange = (tab) => {
		setActiveTab(tab.value);
	};

	return (
		<Box>
			<Navigator onTabChange={onTabChange} />
			<Spacer />
			<TabContent activeTab={activeTab} />
		</Box>
	);
};

module.exports = App;
