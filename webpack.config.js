var HtmlWebpackPlugin = require('html-webpack-plugin');

var htmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: [
		'./src/index.js'
	],
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
		]
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist'
	},
	plugins: [htmlWebpackPluginConfig]
};