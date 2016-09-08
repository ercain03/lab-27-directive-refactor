'use strict';

module.exports = function(app) {
  require('./list-controller.js')(app);
  require('./note-controller.js')(app);
  require('./note-form-controller.js')(app);
  require('./list-form-controller.js')(app);
};
