const React = require("react");
const importJsx = require("import-jsx");

const Name = importJsx("./Name.js");
const Contact = importJsx("./Contact.js");
const Education = importJsx("./Education.js");
const Skills = importJsx("./Skills.js");
const Languages = importJsx("./Languages.js");
const Experience = importJsx("./Experience.js");

module.exports = {
	NAME: Name,
	CONTACT: Contact,
	EDUCATION: Education,
	SKILLS: Skills,
	LANGUAGES: Languages,
	EXPERIENCE: Experience,
};
