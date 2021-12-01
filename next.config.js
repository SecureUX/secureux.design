const isProd = process.env.NODE_ENV === "production";
const prefix = "/secureux.design";
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  reactStrictMode: true,
  basePath: isProd ? prefix : "",
  trailingSlash: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
});
