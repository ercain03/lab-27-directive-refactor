'use strict';

module.exports = (app) => {
  app.directive('apListFormDirective', function() {
    return {
      controller: 'ListFormController',
      controllerAs: 'ctrl',
      template: require('./list-form-template.html'),
      transclude: true,
      scope: {
        buttonText: '@',
        save: '&',
        list: '='
      }
    };
  });
};
