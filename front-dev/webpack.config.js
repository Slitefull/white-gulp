const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const webpackConfig = (devMode, directories) => {
    return {
        entry: {
            main: path.join(__dirname, directories.src, 'js/main.js'),
        },
        output: {
            path: devMode ? path.join(__dirname, directories.dev, 'js/') : path.join(__dirname, directories.public, 'js/'),
            filename: '[name].js',
        },
        devtool: devMode ? 'source-map' : '',
        mode: devMode ? 'development' : 'production',
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env']
                    }
                }
            ]
        },
        plugins: [],
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        name: 'vendors',
                        test: /node_modules/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            },
            minimizer: [
            new UglifyJsPlugin({
                    test: /\.js(\?.*)?$/i,
                    sourceMap: true,
                    extractComments: true
                })
      ],
        },
    };
};

module.exports = webpackConfig;
