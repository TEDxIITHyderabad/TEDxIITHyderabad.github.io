/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
     new webpack.ProvidePlugin({
     $: "jquery",
     jQuery: "jquery",
     "window.jQuery": "jquery",
  })
  );
  return config;
},
};
module.exports = nextConfig
// rewrites: async () => [
//   {
//     source: "/public/contactus.html",
//     destination: "/pages/api/contactus.js",
//   },
//   // {
//   //   source: "/public/aboutus/about.html",
//   //   destination: "/pages/api/aboutus.js",
//   // },{
//   //   source: "/public/aboutus/ca-index.html",
//   //   destination: "/pages/api/incentives.js",
//   // },
// ]
