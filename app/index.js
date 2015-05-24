'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the superior ' + chalk.red('Sass Boilerplate') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'generateAll',
      message: 'Would you like to generate Sass Boilerplate stylesheets?',
      default: true
    }];

    this.prompt(prompts, function(props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: {
    // stylesheets/base/
    base: function() {
      this.fs.copy(
        this.templatePath('stylesheets/base/_base.scss'),
        this.destinationPath('stylesheets/base/_base.scss')
      );
      this.fs.copy(
        this.templatePath('stylesheets/base/_fonts.scss'),
        this.destinationPath('stylesheets/base/_fonts.scss')
      );
      this.fs.copy(
        this.templatePath('stylesheets/base/_helpers.scss'),
        this.destinationPath('stylesheets/base/_helpers.scss')
      );
      this.fs.copy(
        this.templatePath('stylesheets/base/_typography.scss'),
        this.destinationPath('stylesheets/base/_typography.scss')
      );
      this.fs.copy(
        this.templatePath('stylesheets/base/README.md'),
        this.destinationPath('stylesheets/base/README.md')
      );
    },
    // stylesheets/components/
    components: function() {
      this.fs.copy(
        this.templatePath('stylesheets/components/_buttons.scss'),
        this.destinationPath('stylesheets/components/_buttons.scss')
      );
      this.fs.copy(
        this.templatePath('stylesheets/components/README.md'),
        this.destinationPath('stylesheets/components/README.md')
      );
    },
    // stylesheets/layout/
    layout: function() {
      this.fs.copy(
        this.templatePath('stylesheets/layout/**/*'),
        this.destinationPath('stylesheets/layout/')
      );
    }
  }

});
