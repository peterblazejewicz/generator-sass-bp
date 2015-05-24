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
        this.templatePath('stylesheets/base/**/*'),
        this.destinationPath('stylesheets/base/')
      );
    },
    // stylesheets/components/
    components: function() {
      this.fs.copy(
        this.templatePath('stylesheets/components/**/*'),
        this.destinationPath('stylesheets/components/')
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
