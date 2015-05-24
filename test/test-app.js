'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('sass-bp:app', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../app'))
      .withOptions({
        skipInstall: true
      })
      .withPrompts({
        generateAll: true
      })
      .on('end', done);
  });

  it('creates base stylesheets', function() {
    assert.file([
      'stylesheets/base/_base.scss',
      'stylesheets/base/_fonts.scss',
      'stylesheets/base/_helpers.scss',
      'stylesheets/base/_typography.scss',
      'stylesheets/base/README.md'
    ]);
  });

  it('creates components stylesheets', function() {
    assert.file([
      'stylesheets/components/_buttons.scss',
      'stylesheets/components/README.md'
    ]);
  });

  it('creates layout stylesheets', function() {
    assert.file([
      'stylesheets/layout/_footer.scss',
      'stylesheets/layout/_header.scss',
      'stylesheets/layout/README.md'
    ]);
  });

  it('creates pages stylesheets', function() {
    assert.file([
      'stylesheets/pages/_home.scss',
      'stylesheets/pages/README.md'
    ]);
  });

  it('creates themes stylesheets', function() {
    assert.file([
      'stylesheets/themes/_default.scss',
      'stylesheets/themes/README.md'
    ]);
  });

  it('creates utils stylesheets', function() {
    assert.file([
      'stylesheets/utils/_functions.scss',
      'stylesheets/utils/_mixins.scss',
      'stylesheets/utils/_variables.scss',
      'stylesheets/utils/README.md'
    ]);
  });

  it('creates vendor stylesheets', function() {
    assert.file([
      'stylesheets/vendor/_normalize.scss',
      'stylesheets/vendor/README.md'
    ]);
  });

  it('creates main stylesheet', function() {
    assert.file([
      'stylesheets/main.scss',
      'stylesheets/README.md'
    ]);
  });

});
