const merge = require('webpack-merge'),
    path = require('path'),
    commonConfig = require('./webpack.common.js'),
    devConfig = {
        mode: 'development',
        //inline-source-map:报错会制定错误位置和所属文件
        devtool: 'inline-source-map',
        entry: {
            app: [
                //https://github.com/gaearon/react-hot-loader
                'react-hot-loader/patch',
                path.join(__dirname, '../src/index.js')
            ]
        },
        output: {
            filename: '[name].[hash].js'
        },
        module: {
            rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }]
        }
    };

module.exports = merge({
    customizeArray(a,b, key) {
        //entry.app不合并，全替换
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);