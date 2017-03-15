module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/images/*',
    'dist/assets/icons/*'
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html',
  runtimeCaching: [{
    // urlPattern: /node-hnapi\.herokuapp\.com/,
    urlPattern: /localhost:8000/,
    handler: 'networkFirst'
  }]
};
