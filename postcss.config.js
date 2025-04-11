module.exports = {
    plugins: {
      'postcss-normalize': {
        forceImport: true,
        allowDuplicates: false
      },
      'postcss-font-magician': {
        display: 'swap',
        foundries: 'google'
      }
    }
  }