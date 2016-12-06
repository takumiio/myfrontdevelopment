var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LessExtractPlugin = new ExtractTextPlugin("[name].css");
var HtmlExtractPlugin = new ExtractTextPlugin("[name].htm");

module.exports = {
    entry: {
        app:   "./src/app.js",
        style: "./src/style.less",
        index: "./src/index.htm",
    },
    output: {
        path: "./public",
        publicPath: "/",
        filename: "[name].js"
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }, {
                test: /\.less$/,
                loader: LessExtractPlugin.extract("style-loader", "css-loader!less-loader")
            }, {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_compnents)/,
                loader: "babel",
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.html?$/,
                loader: HtmlExtractPlugin.extract('html')
            }
        ]
    },
    plugins: [
        LessExtractPlugin,
        HtmlExtractPlugin
    ]
};
