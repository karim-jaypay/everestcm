module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['https://everestcmstrapi.jaypay.co.uk'],
    loader: 'imgix',
    path: ''
  },

  // For Subroutes in build folder
  trailingSlash: true,

  // Restore page scroll position when going back
  experimental: {
    scrollRestoration: true,
  },
}
