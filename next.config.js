const path = require("path")
const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
})
const withPWA = require("next-pwa")({
  dest: "public", // Destination directory for the PWA files
  disable: false, // Disable PWA in development mode
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
});
module.exports = withPWA(withMDX({
  pageExtensions: ["js", "jsx", "mdx", "md"],
  images: {
    domains: ["img.musicthread.app"],
  },
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias["@"] = path.resolve("./")

    // if (!dev && !isServer) {
    //   Object.assign(config.resolve.alias, {
    //     react: "preact/compat",
    //     "react-dom/test-utils": "preact/test-utils",
    //     "react-dom": "preact/compat",
    //   })
    // }

    return config
  },
}))
