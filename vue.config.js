module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/v-resize' : '/',
    pages: {
        index: {
            entry: "examples/main.js",
            template: "public/index.html",
            filename: "index.html"
        }
    },
   
};