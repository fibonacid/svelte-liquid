const path = require("path/posix");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.svelte",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    // see below for an explanation
    alias: {
      svelte: path.resolve("node_modules", "svelte"),
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false, // necessary if you use url('/path/to/some/asset.png|jpg|gif')
            },
          },
        ],
      },
      {
        // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      filename: "[name].liquid",
      templateContent({ compilation }) {
        let css = "";
        let js = "";

        Object.keys(compilation.assets).forEach((name) => {
          if (/\.css$/.test(name))
            css += compilation.assets[name].source() + "; ";
          if (/\.js$/.test(name))
            js += compilation.assets[name].source() + "; ";
        });

        return `{%javascript%}${js}{%endjavascript%} {%stylesheet%}${css}{%endstylesheet%}`;
      },
    }),
    new MiniCssExtractPlugin(),
  ],
};
