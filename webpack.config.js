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
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000
    }
};