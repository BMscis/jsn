const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry:{
    context: path.resolve(__dirname,'src'),
    app:'./src/index.js',
    homepage:'./src/home/homepage.js',
    catalog:'./src/content/content.js',
    profile:'./src/profile/profile.js',
  }
  ,
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      //css
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      //images
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      //fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      //data
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader',
        ],
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader',
        ],
      },
    ],
    
  },
  plugins:[
    new HtmlWebpackPlugin(
    {
      chunks:['app'],
      title:'Jasena Productions',
      filename:'index.html',
      template:'./index.html',

    }
  )]
};