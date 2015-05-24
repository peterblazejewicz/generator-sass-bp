'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('sass-bp:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ generateAll: true })
      .on('end', done);
  });

  it('creates base stylesheets', function () {
    assert.file([
      'stylesheets/base/_base.scss',
      'stylesheets/base/_fonts.scss',
      'stylesheets/base/_helpers.scss',
      'stylesheets/base/_typography.scss',
      'stylesheets/base/README.md'
    ]);
  });

  it('creates components stylesheets', function () {
    assert.file([
      'stylesheets/components/_buttons.scss',
      'stylesheets/components/README.md'
    ]);
  });
});
