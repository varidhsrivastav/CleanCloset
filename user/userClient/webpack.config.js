const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:3001/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: "file-loader",
            
          },
        ],
      },

      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "userClient",
      filename: "remoteEntry.js",
      remotes: {
        userClient: "userClient@http://localhost:3001/remoteEntry.js",
        donationClient : "donationClient@http://localhost:3002/remoteEntry.js",
      },
      exposes: {
        "./Navbar": "./src/Componants/Pages/Navbar/Navbar.jsx",
        "./Footer": "./src/Componants/Pages/Footer/Footer.jsx",
        "./AboutUs": "./src/Componants/Pages/AboutUs/AboutUs.jsx",
        "./ContactUs": "./src/Componants/Pages/ContactUs/ContactUs.jsx",
        "./LandingPage" : "./src/Componants/Pages/LandingPage/LandingPage.jsx",
        "./LazyLoad": "./src/Componants/Pages/LazyLoad/LazyLoad.jsx",
        
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
