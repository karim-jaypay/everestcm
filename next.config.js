module.exports = {
  reactStrictMode: true,

  images: {
    //domains: ['everestcmstrapi.jaypay.co.uk'],
    loader: 'imgix',
    path: 'https://everestcmstrapi.jaypay.co.uk'
  },
  
  // For Subroutes in build folder
  trailingSlash: true,

  // Restore page scroll position when going back
  experimental: {
    scrollRestoration: true,
  },
}
