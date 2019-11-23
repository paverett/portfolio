const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(pdf)(\?.*)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[path][name].pdf"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, "dist"),
        // Required - Routes to render.
        routes: ["/contact-me"]
      })
    ]
  }
};
