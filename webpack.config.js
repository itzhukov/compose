var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'babel-polyfill',
		'./js/main.js'
	],
	output: {
		path: __dirname,
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	resolve: {
		extensions: ['', '.js']
	},
	watchOptions: {
		poll: true,
		aggregateTimeout: 15
	},
	devtool: 'eval-source-map',
	plugins: [
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				include: [
					path.resolve(__dirname, 'js/')
				]
			}
		]
	}
};
