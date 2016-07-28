var webpack = require('webpack');
var path = require('path');


module.exports = {
	//to make sure, the develper is redirected to the source file,
	//rather than the bundled file
	devtool: "cheap-eval-source-map",

	//'entry' point to all the files -- webpack then intelligently
	//finds all the other files
	entry: [
		path.join(__dirname, 'public/js/app.jsx')
	],

//output folder for the bundled file
	output: {
		path: path.join(__dirname, 'public/dist'),
		filename: 'bundle.js',
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: ['babel'],
				include: path.join(__dirname, 'public')
			},
			{
				test: /\.scss$/,
		        loaders: "css-loader!sass-loader"
			}
		]
	},

	sassLoader: {
	    includePaths: [path.resolve(__dirname, "public/sass")]
	  }
};