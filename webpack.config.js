const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:"bandle.js",
        path:path.resolve(process.cwd(),"dist")
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
          }),
          new CleanWebpackPlugin({
              cleanAfterEveryBuildPatterns: ['./dist/*.*'],
              dry: true,
              verbose: true
            }),
            new webpack.ProvidePlugin({
                $:'jquery',
                jQuery:'jquery',
                "window.jQuery":'jquery'
            })
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
        ],
      }
}