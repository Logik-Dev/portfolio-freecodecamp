const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: "[name].html"
                    }
                },
                "extract-loader",
                {
                    loader: "html-loader",
                    options: {
                        attrs: ["img:src"] 
                    }
                }]
            },
            {
                test: /\.(jpg|png|gif|)$/,
                use: [
                {
                    loader: "file-loader",
                    options: {
                        name: "images/[name].[ext]"
                    }
                }]
            }
        ]
    }
}