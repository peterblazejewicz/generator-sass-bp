'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({

  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);
    this.option('skip-welcome-message', {
      desc: 'Skip welcome message',
      type: Boolean,
      defaults: false
    });
    this.skipWelcome = this.options['skip-welcome-message'];
  },

  prompting: function() {
    var done = this.async();

    if (!this.skipWelcome) {
      this.log(yosay(
        'Welcome to the superior ' + chalk.red('Sass Boilerplate') + ' generator!'
      ));
    }

    this.prompt({
      type: 'confirm',
      name: 'generateAll',
      message: 'Would you like to generate Sass Boilerplate stylesheets?',
      default: true
    }, function(props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: {
    // stylesheets/base/
    base: function() {
      if (this.props.generateAll) {
        this.fs.copy(
          this.templatePath('stylesheets/base/**/*'),
          this.destinationPath('stylesheets/base/')
        );
      }
    },
    // stylesheets/components/
    components: function() {
      if (this.props.generateAll) {
        this.fs.copy(
          this.templatePath('stylesheets/components/**/*'),
          this.destinationPath('stylesheets/components/')
        );
      }
    },
    // stylesheets/layout/
    layout: function() {
      if (this.props.generateAll) {
        this.fs.copy(
          this.templatePath('stylesheets/layout/**/*'),
          this.destinationPath('stylesheets/layout/')
        );
      }
    },
    // stylesheets/pages
    pages: function() {
      if (this.props.generateAll) {
        this.fs.copy(
          this.templatePath('stylesheets/pages/**/*'),
          this.destinationPath('stylesheets/pages/')
        );
      }
    },
    // stylesheets/themes
    themes: function() {
      if (this.props.generateAll) {
        this.fs.copy(
          this.templatePath('stylesheets/themes/**/*'),
          this.destinationPath('stylesheets/themes/')
        );
      }
    },
    // stylesheets/utils
    utils: function() {
      if (this.props.generateAll) {
        this.fs.copy(
          this.templatePath('stylesheets/utils/**/*'),
          this.destinationPath('stylesheets/utils/')
        );
      }
    },
    // stylesheets/vendor
    vendor: function() {
      if (this.props.generateAll) {
        this.fs.copy(
          this.templatePath('stylesheets/vendor/**/*'),
          this.destinationPath('stylesheets/vendor/')
        );
      }
    },
    // stylesheets/
    main: function() {
      if (this.props.generateAll) {
        this.fs.copy(
          this.templatePath('stylesheets/main.scss'),
          this.destinationPath('stylesheets/main.scss')
        );
        this.fs.copy(
          this.templatePath('stylesheets/README.md'),
          this.destinationPath('stylesheets/README.md')
        );
      }
    }
  },

  end: function() {
    if (this.props.generateAll && !this.skipWelcome) {
      this.log(chalk.yellow('All done!'));
    }
  }

});
