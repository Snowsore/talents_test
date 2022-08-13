const path = require("path");

module.exports = (env) => {
  return {
    resolve: {
      extensions: [".js", ".jsx"],
      alias: {
        components: path.resolve(__dirname, "src/components/"),
        images: path.resolve(__dirname, "src/images/"),
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: path.resolve(__dirname, "src"),
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                ["@babel/preset-react", { runtime: "automatic" }],
              ],
            },
          },
        },
        {
          test: /\.(css)$/,
          include: path.resolve(__dirname, "src"),
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                  },
                },
              },
            },
          ],
        },
        {
          test: /\.(png)$/,
          include: path.resolve(__dirname, "src"),
          loader: "url-loader",
        },
      ],
    },
    mode: "development",
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
    },
  };
};
