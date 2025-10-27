import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default {
  mode: 'production', 
  entry: './js/app.js',
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: false
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'assets'),
      '@styles': path.resolve(__dirname, './'),
      '@js': path.resolve(__dirname, 'js')
    }
  }, 
  module: {
    rules: [
      { 
        test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] 
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }  
     },
     {
        test: /\.(png|jpe?g|svg|gif|webp)$/,
        type: 'asset/resource',
     }
    ]
  }, 
  target: "web",
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 5500,
    open: true,
  }
};
