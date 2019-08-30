const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  buildPath: 'build', // build directory name
  sourcePath: 'src', // source files directory name
  compiledCssName: 'bundled.css', // should change in the html
  compiledJSName: 'bundled.js', // should change in the html
  serverPort: 3000 // webpack server port for development
};

// extract css for prod
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//https://www.npmjs.com/package/autoprefixer fix browser prefixes
const autoprefixer = require('autoprefixer');

// uglify js for prod
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const resolvePaths = relativePath => path.resolve(appDirectory, relativePath);
const publicPath = resolvePaths(config.buildPath);
const sourcePath = resolvePaths(config.sourcePath);

const bundleExtractPlugin = new MiniCssExtractPlugin({
  filename: config.compiledCssName
});

module.exports = env => {
  const isDev = env.development || false;
  const plugins = [bundleExtractPlugin];
  let devServer = {};

  if (isDev) {
    devServer = {
      contentBase: publicPath,
      disableHostCheck: true,
      historyApiFallback: true,
      port: config.serverPort,
      hot: true
    };
  }

  if (!isDev) {
    plugins.push(new UglifyJSPlugin());
    plugins.push(new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      DEBUG: true
    }));
  }

  plugins.push(new CopyPlugin([{
    from: `${config.sourcePath}/assets/`,
    to: ''
  }]));

  return {
    entry: {
      js: ['babel-polyfill', `${sourcePath}/index.js`],
    },
    devtool: (isDev) ? 'source-map' : 'eval',
    output: {
      path: publicPath,
      filename: config.compiledJSName
    },
    plugins: plugins,
    devServer: devServer,
    module: {
      rules: [
        {
          test: /.(bmp|gif|jpe?g|png|svg)$/,
          exclude: /node_modules/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loaders: ['babel-loader']
        },
        {
          test: /\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: isDev,
                camelCase: 'dashes',
                localIdentName: (isDev) ? '[local]' : '[name]__[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: 'inline',
                plugins: () => [
                  autoprefixer({
                    flexbox: 'no-2009'
                  })
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDev
              }
            }
          ],
        }
      ]
    }
  };
};
