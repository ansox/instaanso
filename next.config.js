const redirects = require('./configs/redirects');

module.exports = {
  trailingSlash: true,
  async redirects() {
    return redirects;
  },
};
