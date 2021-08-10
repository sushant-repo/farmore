const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin')


module.exports = {
    entry: path.resolve(__dirname,'..', "./src/index.js"),
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },{
                test: /\.(css)$/,
                use:['style-loader','css-loader'],
            },{
                test: /\.(jpg|png|jpeg|svg)$/,
                use: {
                  loader: 'url-loader',
                },
              },{
                
                 test: /\.(woff|woff2|eot|ttf)$/, 
                 use: {
                     loader: 'file-loader' 
                 },
              },
        ]
    },
    resolve:{
        extensions: ['*','.js','.jsx']
    },
    output: {
        path: path.resolve(__dirname,'..','./dist'),
        filename: "bundle.js"
    },
    watch: true,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
         new HtmlWebpackPlugin({
             title:"FarMoreCo",
             template: path.resolve(__dirname,'..','./src/index.html'),
         }),
        //  new BrowserSyncPlugin({
        //     // browse to http://localhost:3000/ during development,
        //     // ./public directory is being served
        //     host: 'localhost',
        //     port: 8080,
        //     server: { baseDir: ['dist'] }
        //   })
        ],
        devServer: {
            contentBase: path.resolve(__dirname,'..', "./dist"),
            historyApiFallback: true,
            hot: true,
            // port: 3000
        },
      
};