// Enable TypeScript support
require('ts-node').register();

// Export the plugin
const path = require('path');
module.exports = require(path.join(__dirname, '../../src/index.ts'));
