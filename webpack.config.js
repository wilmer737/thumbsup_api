const path = require('path');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        './app/index.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
       extensions: ['.js', '.jsx', '.node']
   }
};
