const path = require("path")

module.exports = {
  entry : "./src/entry",
  output : {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js"
  },
  resolve: {
    alias: {
        react: path.resolve('./node_modules/react'),
    }
}
}
