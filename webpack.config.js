var webpack = require('webpack');

module.exports = {
    watch: true,
    entry: {
        "signin": __dirname + "/public/react_view/signin_v.js"
    },
    output: {
        path: __dirname + '/public/dist',
        filename: '[name].bundle.js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.js$/, loader: 'babel-loader!jsx-loader?harmony', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader!jsx-loader?harmony', exclude: /node_modules/ }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
    ]
};