const path = require('path');

module.exports = {
	entry: './frontend/entry.jsx',
	output: {
		path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					query: {
						presets: ['@babel/env', '@babel/react']
					}
				},
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '*']
	},
	devtool: 'source-map'
};
