const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'client') + '/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module:{
        loaders: [
            {
                test: /jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:{
                    presets: ['react', 'es2015', 'stage-2']
                }
            }
        ]
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'client'),
        historyApiFallback: true
    }
}