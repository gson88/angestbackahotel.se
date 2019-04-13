const path = require('path');

class CustomResolverPlugin {
  constructor (basePath) {
    this.basePath = basePath;
  }

  apply (compiler) {
    compiler.hooks.resolve.tap('CustomResolverPlugin', request => {
      if (request.request.startsWith('/') && !request.request.startsWith('/Users/')) {
        request.request = path.join(this.basePath, `.${request.request}`);
      }
    });
  }
}

module.exports = CustomResolverPlugin;