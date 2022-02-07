const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  reactStrictMode: true,
  basePath: "",
  assetPrefix: "",
  pageExtensions: ["ts", "tsx", "mdx"],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
