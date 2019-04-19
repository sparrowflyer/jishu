const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    commonConfig = {
        entry: {
            app: [
                path.join(__dirname, '../src/index.js')
            ],
            vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
        },
        output: {
            path: path.join(__dirname, '../dist'),
            //chunk:一个文件
            //chunkId:每个文件一个唯一标识ID
            //chunkhash: 文件内容的md5值
            //name:entry中指定的key值
            filename: '[name].[chunkhash].js',
            chunkFilename: '[name].[chunkhash].js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                //cacheDirectory是用来缓存编译结果，下次编译加速
                use: ['babel-loader?cacheDirectory=true'],
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    //<=8K的图片会被转成base64编码,直接插入HTML中,减少HTTP请求
                    options: {
                        limit: 8192
                    }
                }]
            }]
        },
        plugins: [
            //每次打包前自动清理下dist文件
            new CleanWebpackPlugin(),
            //自动把js插入你的模版index.html中
            //https://github.com/jantimon/html-webpack-plugin
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.join(__dirname, '../src/index.html')
            }),
            //https://www.webpackjs.com/plugins/hashed-module-ids-plugin/
            /*
                webpack内部维护了一个自增的id，每个module都有一个id。
                所以当增加或者删除module的时候，id就会变化，导致其它文件虽然没有变化，
                但由于id被强占，只能自增或者自减，导致整个id的顺序都错乱了。
            */
            new webpack.HashedModuleIdsPlugin()
        ],
        //https://webpack.js.org/plugins/split-chunks-plugin/#optimizationsplitchunks
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        chunks: 'initial',
                        minChunks: 2,
                        maxInitialRequests: 5,
                        minSize: 0
                    },
                    vendors: {
                        test: /node_modules/,
                        chunks: 'initial',
                        name: 'vendor',
                        priority: 10,
                        enforce: true
                    }
                }
            },
            runtimeChunk: true
        }
        //别名设置
        // resolve: {
        //     alias: {
        //         pages: path.join(__dirname, 'src/pages')
        //     }
        // }
    };

module.exports = commonConfig;