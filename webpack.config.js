const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		background: ['@babel/polyfill', './src/background.js'],
		main: './src/textflow.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1,
							localIdentName: '[name]_[local]_[hash:base64]',
							sourceMap: true,
							minimize: true,
						},
					},
				],
			},
		],
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'static', to: 'static' },
				{ from: 'manifest.json', to: 'manifest.json' },
			]
		}),
	],
};
