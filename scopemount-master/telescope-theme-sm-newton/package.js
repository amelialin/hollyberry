Package.describe({
  name: "montecruiseto:telescope-theme-sm-newton",
  summary: "Telescope Scopemount: Newton theme package",
  version: "0.1.11",
  git: "https://github.com/montecruiseto/scopemount.git"
});

Package.onUse(function (api) {

  api.use([
      // core dependencies
      'telescope:core@0.22.2',
      'telescope:theme-base@0.22.2',
      'telescope:theme-hubble@0.22.2'
    ]);

  api.addFiles([
      'lib/modules_newton.js'
  ], ['client', 'server']);

  api.addFiles(
    [
      // globals
      'lib/client/scss/global/_forms.scss',
      'lib/client/scss/global/_links.scss',

      // modules
      'lib/client/scss/modules/_comments.scss',
      'lib/client/scss/modules/_layout.scss',
      'lib/client/scss/modules/_nav.scss',
      'lib/client/scss/modules/_mobile_nav.scss',
      'lib/client/scss/modules/_posts.scss',
      'lib/client/scss/modules/_search.scss',
      'lib/client/scss/modules/_errors.scss',

      // partials
      'lib/client/scss/partials/_typography.scss',
      'lib/client/scss/partials/_grid.scss',
      'lib/client/scss/partials/_colors.scss',

      // screen
      'lib/client/scss/screen.scss',

      // overrides
      'lib/client/templates/post_content_newton.html',
      'lib/client/templates/post_domain_newton.html',
      'lib/client/templates/post_info_newton.html',
      'lib/client/templates/post_vote_newton.html',
      'lib/client/templates/post_vote_newton.js',

      // customizations
      'lib/client/scripts/icons_newton.js',
      'lib/client/scripts/templates_newton.js'

    ], ['client']);

});
