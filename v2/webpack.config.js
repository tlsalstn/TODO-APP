const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    devServer: {
        port: 3000,
        stats: "errors-only"
    },
    entry: ["@babel/polyfill", "./src/index.tsx"],
    output: {
        path: path.join(__dirname, "/build"),
        filename: "bundle.min.js"
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                include: path.join(__dirname, "/src"),
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s(a|c)ss?$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}