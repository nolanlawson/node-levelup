module.exports = {
    context: __dirname,
    entry: "./lib/levelup.js",
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json-loader" 
            }
        ]
    }
}
