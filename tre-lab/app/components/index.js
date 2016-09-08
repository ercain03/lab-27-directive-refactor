'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
let listApp = angular.module('listApp', []);

require('./components')(listApp);
require('./controllers')(listApp);
