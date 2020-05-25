require('@babel/register')({
  presets: ['@babel/env', '@babel/react'],
  plugins: ['babel-plugin-transform-runtime']}
);
require("@babel/polyfill");
require('./src/server')
