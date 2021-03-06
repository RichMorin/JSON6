
var JSON6 = require( ".." );
var s = `{
  "name": "@std/esm",
  "version": "0.18.0",
  "description": "Enable ES modules in Node today!",
  "keywords": "commonjs, ecmascript, export, import, modules, node, require",
  "repository": "standard-things/esm",
  "license": "MIT",
  "author": "John-David Dalton <john.david.dalton@gmail.com>",
  "main": "index.js",
  "private": true,
  "@std/esm": true,
  "engines": {
    "node": ">=4"
  },
  "scripts": {
    "prebuild:prod": "optional-dev-dependency",
    "precommit": "npm run lint",
    "prelint": "npm run pretest",
    "prepub": "npm run test:prod",
    "pretest": "npm run build -- --test",
    "pretest:prod": "npm run build:prod -- --test",
    "build": "node script/build.js",
    "build:prod": "npm run build -- --prod",
    "clean": "node script/clean.js",
    "lint": "eslint \\'**/*.{js,mjs}\\' --fix --quiet",
    "pub": "node script/publish.js",
    "test": "node script/test.js",
    "test:prod": "node script/test.js --prod"
  },
  "devDependencies": {
    "@babel/core": "^7.0.0-beta.34",
    "@babel/plugin-proposal-class-properties": "^7.0.0-beta.34",
    "@babel/plugin-transform-block-scoping": "^7.0.0-beta.34",
    "@babel/preset-env": "^7.0.0-beta.34",
    "@babel/register": "^7.0.0-beta.34",
    "acorn": "^5.2.1",
    "ava": "^0.24.0",
    "babel-eslint": "^8.0.3",
    "babel-loader": "^8.0.0-beta.0",
    "babel-plugin-transform-for-of-as-array": "^1.0.4",
    "download": "^6.2.5",
    "eslint": "^4.12.0",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-node": "^5.2.0",
    "execa": "^0.8.0",
    "fs-extra": "^4.0.3",
    "globby": "^7.1.1",
    "husky": "^0.14.3",
    "jest": "^21.2.1",
    "json-6": "^0.1.120",
    "minizlib": "^1.0.4",
    "mocha": "^4.0.1",
    "mock-stdio": "^1.0.0",
    "nop": "^1.0.0",
    "nyc": "^11.3.0",
    "optimize-js-plugin": "0.0.4",
    "optional-dev-dependency": "^2.0.1",
    "pify": "^3.0.0",
    "pm2": "^2.8.0",
    "semver": "^5.4.1",
    "trash": "^4.2.1",
    "typescript": "^2.6.1",
    "uglify-es": "^3.2.1",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "webpack": "^3.10.0",
    "webpack-bundle-analyzer": "^2.8.3",
    "webpack-common-shake": "^1.5.3",
    "yargs": "^10.0.3"
  },
  "optionalDevDependencies": {
    "node-zopfli": "^2.0.2"
  },
  "files": [
    "index.js",
    "esm.js.gz"
  ]
}`

console.log( JSON6.parse( s ) );
