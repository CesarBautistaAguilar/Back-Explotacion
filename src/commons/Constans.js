module.exports = {
  CONTEXT_NAME: process.env.CONTEXT_NAME || 'example',
  VERSION: process.env.VERSION || 'v1',
  PORT: process.env.PORT || 5000,
  URI: process.env.URI || 'mongodb://localhost:27017/integration',
  URL_MAMBU: process.env.URL_MAMBU,
  AUTH: process.env.AUTH
}
