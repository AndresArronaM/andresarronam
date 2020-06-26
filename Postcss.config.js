module.exports = {
    plugins:[
        require("cssnano"),
        require("autoprefixer"),
        require("postcss-uncss")
        ({
            html:[
                './dist/Index.html'
            ]
        })
    ]
}