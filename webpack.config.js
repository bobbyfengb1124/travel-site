var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, "./app/assets/scripts/app.js"),
	output: {
		path: path.resolve(__dirname, "./app/temp/scripts"),
		filename: "App.js"
	}
}






