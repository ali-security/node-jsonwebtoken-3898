const semver = require('semver');

module.exports = semver.satisfies(process.version, '>=11.6.0');
