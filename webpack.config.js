const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'web/src/app.js'),
    output: {
        path: path.resolve(__dirname, 'src/main/resources/static/built'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|otf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        limit: 1024,
                        publicPath: 'built/'
                    }
                }]
            }
        ]
    }
};