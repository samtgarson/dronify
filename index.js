#! /usr/bin/env node
require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/commands/init.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _init = __webpack_require__(\"./src/inquiries/init.js\");\n\nvar _init2 = _interopRequireDefault(_init);\n\nvar _installer = __webpack_require__(\"./src/services/installer.js\");\n\nvar _installer2 = _interopRequireDefault(_installer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nexports.default = function () {\n  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(cmd) {\n    var view, svc;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return (0, _init2.default)(cmd);\n\n          case 2:\n            view = _context.sent;\n            svc = new _installer2.default(view);\n\n            svc.on('start', function (name) {\n              return cmd.log(name);\n            });\n            svc.on('finish', function (name) {\n              return cmd.log(name);\n            });\n\n            _context.next = 8;\n            return svc.run();\n\n          case 8:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tbWFuZHMvaW5pdC5qcz9jOTAwIl0sIm5hbWVzIjpbImNtZCIsInZpZXciLCJzdmMiLCJvbiIsImxvZyIsIm5hbWUiLCJydW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozt1REFFZSxpQkFBTUEsR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNNLG9CQUFLQSxHQUFMLENBRE47O0FBQUE7QUFDUEMsZ0JBRE87QUFFUEMsZUFGTyxHQUVELHdCQUFjRCxJQUFkLENBRkM7O0FBR2JDLGdCQUFJQyxFQUFKLENBQU8sT0FBUCxFQUFnQjtBQUFBLHFCQUFRSCxJQUFJSSxHQUFKLENBQVFDLElBQVIsQ0FBUjtBQUFBLGFBQWhCO0FBQ0FILGdCQUFJQyxFQUFKLENBQU8sUUFBUCxFQUFpQjtBQUFBLHFCQUFRSCxJQUFJSSxHQUFKLENBQVFDLElBQVIsQ0FBUjtBQUFBLGFBQWpCOztBQUphO0FBQUEsbUJBTVBILElBQUlJLEdBQUosRUFOTzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6Ii4vc3JjL2NvbW1hbmRzL2luaXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW5pdCBmcm9tICcuLi9pbnF1aXJpZXMvaW5pdCdcbmltcG9ydCBJbnN0YWxsZXIgZnJvbSAnLi4vc2VydmljZXMvaW5zdGFsbGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBjbWQgPT4ge1xuICBjb25zdCB2aWV3ID0gYXdhaXQgaW5pdChjbWQpXG4gIGNvbnN0IHN2YyA9IG5ldyBJbnN0YWxsZXIodmlldylcbiAgc3ZjLm9uKCdzdGFydCcsIG5hbWUgPT4gY21kLmxvZyhuYW1lKSlcbiAgc3ZjLm9uKCdmaW5pc2gnLCBuYW1lID0+IGNtZC5sb2cobmFtZSkpXG4gIFxuICBhd2FpdCBzdmMucnVuKClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tYW5kcy9pbml0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),

/***/ "./src/inquiries/init.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _chalk = __webpack_require__(3);\n\nvar _chalk2 = _interopRequireDefault(_chalk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar path = process.cwd().split('/');\nvar defaultName = path[path.length - 1];\n\nvar q = function q(t) {\n  return _chalk2.default.dim('>') + ' ' + t + ' ';\n};\nvar required = function required(v) {\n  return !!v.length;\n};\n\nvar questions = [{\n  type: 'input',\n  name: 'name',\n  message: q('Application name'),\n  default: defaultName,\n  validate: required\n}, {\n  type: 'input',\n  name: 'org',\n  message: q('Organisation'),\n  validate: required\n}, {\n  type: 'checkbox',\n  name: 'lang',\n  message: q('Languages to be tested on Drone (optional)'),\n  choices: ['ruby', 'javascript'],\n  filter: function filter(arr) {\n    return arr.reduce(function (hsh, l) {\n      return _extends({}, hsh, _defineProperty({}, l, true));\n    }, {});\n  }\n}, {\n  type: 'list',\n  name: 'repoHost',\n  message: q('Container image registry'),\n  default: 'quay.io',\n  choices: ['quay.io', 'hub.docker.com']\n}, {\n  type: 'input',\n  name: 'droneServer',\n  message: q('Drone Server URI'),\n  default: process.env.DRONE_SERVER\n}, {\n  type: 'input',\n  name: 'domain',\n  message: q('Target deploy domain'),\n  default: 'staging.yourdomain.com'\n}, {\n  type: 'input',\n  name: 'imagePullSecretName',\n  message: q('K8S Secret Key'),\n  default: function _default(ans) {\n    return ans.org.toLowerCase() + '-k8s-deploy-pull-secret';\n  }\n}];\n\nvar repoEnvVars = {\n  'quay.io': { repoUserEnv: 'QUAY_USERNAME', repoPassEnf: 'QUAY_PASSWORD' },\n  'hub.docker.com': { repoUserEnv: 'DOCKER_USERNAME', repoPassEnf: 'DOCKER_PASSWORD' }\n};\n\nexports.default = function () {\n  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(cmd) {\n    var answers, view;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return cmd.prompt(questions);\n\n          case 2:\n            answers = _context.sent;\n            view = _extends({}, answers, repoEnvVars[answers.repoHost], {\n              repo: answers.repoHost + '/' + answers.org + '/' + answers.name\n            });\n            return _context.abrupt('return', view);\n\n          case 5:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, undefined);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5xdWlyaWVzL2luaXQuanM/NDY0MiJdLCJuYW1lcyI6WyJwYXRoIiwicHJvY2VzcyIsImN3ZCIsInNwbGl0IiwiZGVmYXVsdE5hbWUiLCJsZW5ndGgiLCJxIiwiZGltIiwidCIsInJlcXVpcmVkIiwidiIsInF1ZXN0aW9ucyIsInR5cGUiLCJuYW1lIiwibWVzc2FnZSIsImRlZmF1bHQiLCJ2YWxpZGF0ZSIsImNob2ljZXMiLCJmaWx0ZXIiLCJhcnIiLCJyZWR1Y2UiLCJoc2giLCJsIiwiZW52IiwiRFJPTkVfU0VSVkVSIiwiYW5zIiwib3JnIiwidG9Mb3dlckNhc2UiLCJyZXBvRW52VmFycyIsInJlcG9Vc2VyRW52IiwicmVwb1Bhc3NFbmYiLCJjbWQiLCJwcm9tcHQiLCJhbnN3ZXJzIiwidmlldyIsInJlcG9Ib3N0IiwicmVwbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQUNBLElBQU1BLE9BQU9DLFFBQVFDLEdBQVIsR0FBY0MsS0FBZCxDQUFvQixHQUFwQixDQUFiO0FBQ0EsSUFBTUMsY0FBY0osS0FBS0EsS0FBS0ssTUFBTCxHQUFjLENBQW5CLENBQXBCOztBQUVBLElBQU1DLElBQUksU0FBSkEsQ0FBSTtBQUFBLFNBQVEsZ0JBQUVDLEdBQUYsQ0FBTSxHQUFOLENBQVIsU0FBc0JDLENBQXRCO0FBQUEsQ0FBVjtBQUNBLElBQU1DLFdBQVcsU0FBWEEsUUFBVztBQUFBLFNBQUssQ0FBQyxDQUFDQyxFQUFFTCxNQUFUO0FBQUEsQ0FBakI7O0FBRUEsSUFBTU0sWUFBWSxDQUNoQjtBQUNFQyxRQUFNLE9BRFI7QUFFRUMsUUFBTSxNQUZSO0FBR0VDLFdBQVNSLEVBQUUsa0JBQUYsQ0FIWDtBQUlFUyxXQUFTWCxXQUpYO0FBS0VZLFlBQVVQO0FBTFosQ0FEZ0IsRUFRaEI7QUFDRUcsUUFBTSxPQURSO0FBRUVDLFFBQU0sS0FGUjtBQUdFQyxXQUFTUixFQUFFLGNBQUYsQ0FIWDtBQUlFVSxZQUFVUDtBQUpaLENBUmdCLEVBY2hCO0FBQ0VHLFFBQU0sVUFEUjtBQUVFQyxRQUFNLE1BRlI7QUFHRUMsV0FBU1IsRUFBRSw0Q0FBRixDQUhYO0FBSUVXLFdBQVMsQ0FBQyxNQUFELEVBQVMsWUFBVCxDQUpYO0FBS0VDLFVBQVE7QUFBQSxXQUFPQyxJQUFJQyxNQUFKLENBQVcsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOO0FBQUEsMEJBQWtCRCxHQUFsQixzQkFBd0JDLENBQXhCLEVBQTRCLElBQTVCO0FBQUEsS0FBWCxFQUFnRCxFQUFoRCxDQUFQO0FBQUE7QUFMVixDQWRnQixFQXFCaEI7QUFDRVYsUUFBTSxNQURSO0FBRUVDLFFBQU0sVUFGUjtBQUdFQyxXQUFTUixFQUFFLDBCQUFGLENBSFg7QUFJRVMsV0FBUyxTQUpYO0FBS0VFLFdBQVMsQ0FBQyxTQUFELEVBQVksZ0JBQVo7QUFMWCxDQXJCZ0IsRUE0QmhCO0FBQ0VMLFFBQU0sT0FEUjtBQUVFQyxRQUFNLGFBRlI7QUFHRUMsV0FBU1IsRUFBRSxrQkFBRixDQUhYO0FBSUVTLFdBQVNkLFFBQVFzQixHQUFSLENBQVlDO0FBSnZCLENBNUJnQixFQWtDaEI7QUFDRVosUUFBTSxPQURSO0FBRUVDLFFBQU0sUUFGUjtBQUdFQyxXQUFTUixFQUFFLHNCQUFGLENBSFg7QUFJRVMsV0FBUztBQUpYLENBbENnQixFQXdDaEI7QUFDRUgsUUFBTSxPQURSO0FBRUVDLFFBQU0scUJBRlI7QUFHRUMsV0FBU1IsRUFBRSxnQkFBRixDQUhYO0FBSUVTLFdBQVM7QUFBQSxXQUFVVSxJQUFJQyxHQUFKLENBQVFDLFdBQVIsRUFBVjtBQUFBO0FBSlgsQ0F4Q2dCLENBQWxCOztBQWdEQSxJQUFNQyxjQUFjO0FBQ2xCLGFBQVcsRUFBRUMsYUFBYSxlQUFmLEVBQWdDQyxhQUFhLGVBQTdDLEVBRE87QUFFbEIsb0JBQWtCLEVBQUVELGFBQWEsaUJBQWYsRUFBa0NDLGFBQWEsaUJBQS9DO0FBRkEsQ0FBcEI7Ozt1REFLZSxpQkFBTUMsR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNTQSxJQUFJQyxNQUFKLENBQVdyQixTQUFYLENBRFQ7O0FBQUE7QUFDUHNCLG1CQURPO0FBRVBDLGdCQUZPLGdCQUdSRCxPQUhRLEVBSVJMLFlBQVlLLFFBQVFFLFFBQXBCLENBSlE7QUFLWEMsb0JBQVNILFFBQVFFLFFBQWpCLFNBQTZCRixRQUFRUCxHQUFyQyxTQUE0Q08sUUFBUXBCO0FBTHpDO0FBQUEsNkNBT05xQixJQVBNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJmaWxlIjoiLi9zcmMvaW5xdWlyaWVzL2luaXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYyBmcm9tICdjaGFsaydcbmNvbnN0IHBhdGggPSBwcm9jZXNzLmN3ZCgpLnNwbGl0KCcvJylcbmNvbnN0IGRlZmF1bHROYW1lID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdXG5cbmNvbnN0IHEgPSB0ID0+IGAke2MuZGltKCc+Jyl9ICR7dH0gYFxuY29uc3QgcmVxdWlyZWQgPSB2ID0+ICEhdi5sZW5ndGhcblxuY29uc3QgcXVlc3Rpb25zID0gW1xuICB7XG4gICAgdHlwZTogJ2lucHV0JyxcbiAgICBuYW1lOiAnbmFtZScsXG4gICAgbWVzc2FnZTogcSgnQXBwbGljYXRpb24gbmFtZScpLFxuICAgIGRlZmF1bHQ6IGRlZmF1bHROYW1lLFxuICAgIHZhbGlkYXRlOiByZXF1aXJlZFxuICB9LFxuICB7XG4gICAgdHlwZTogJ2lucHV0JyxcbiAgICBuYW1lOiAnb3JnJyxcbiAgICBtZXNzYWdlOiBxKCdPcmdhbmlzYXRpb24nKSxcbiAgICB2YWxpZGF0ZTogcmVxdWlyZWRcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgbmFtZTogJ2xhbmcnLFxuICAgIG1lc3NhZ2U6IHEoJ0xhbmd1YWdlcyB0byBiZSB0ZXN0ZWQgb24gRHJvbmUgKG9wdGlvbmFsKScpLFxuICAgIGNob2ljZXM6IFsncnVieScsICdqYXZhc2NyaXB0J10sXG4gICAgZmlsdGVyOiBhcnIgPT4gYXJyLnJlZHVjZSgoaHNoLCBsKSA9PiAoeyAuLi5oc2gsIFtsXTogdHJ1ZSB9KSwge30pXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnbGlzdCcsXG4gICAgbmFtZTogJ3JlcG9Ib3N0JyxcbiAgICBtZXNzYWdlOiBxKCdDb250YWluZXIgaW1hZ2UgcmVnaXN0cnknKSxcbiAgICBkZWZhdWx0OiAncXVheS5pbycsXG4gICAgY2hvaWNlczogWydxdWF5LmlvJywgJ2h1Yi5kb2NrZXIuY29tJ11cbiAgfSxcbiAge1xuICAgIHR5cGU6ICdpbnB1dCcsXG4gICAgbmFtZTogJ2Ryb25lU2VydmVyJyxcbiAgICBtZXNzYWdlOiBxKCdEcm9uZSBTZXJ2ZXIgVVJJJyksXG4gICAgZGVmYXVsdDogcHJvY2Vzcy5lbnYuRFJPTkVfU0VSVkVSXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnaW5wdXQnLFxuICAgIG5hbWU6ICdkb21haW4nLFxuICAgIG1lc3NhZ2U6IHEoJ1RhcmdldCBkZXBsb3kgZG9tYWluJyksXG4gICAgZGVmYXVsdDogJ3N0YWdpbmcueW91cmRvbWFpbi5jb20nXG4gIH0sXG4gIHtcbiAgICB0eXBlOiAnaW5wdXQnLFxuICAgIG5hbWU6ICdpbWFnZVB1bGxTZWNyZXROYW1lJyxcbiAgICBtZXNzYWdlOiBxKCdLOFMgU2VjcmV0IEtleScpLFxuICAgIGRlZmF1bHQ6IGFucyA9PiBgJHthbnMub3JnLnRvTG93ZXJDYXNlKCl9LWs4cy1kZXBsb3ktcHVsbC1zZWNyZXRgXG4gIH0sXG5dXG5cbmNvbnN0IHJlcG9FbnZWYXJzID0ge1xuICAncXVheS5pbyc6IHsgcmVwb1VzZXJFbnY6ICdRVUFZX1VTRVJOQU1FJywgcmVwb1Bhc3NFbmY6ICdRVUFZX1BBU1NXT1JEJyB9LFxuICAnaHViLmRvY2tlci5jb20nOiB7IHJlcG9Vc2VyRW52OiAnRE9DS0VSX1VTRVJOQU1FJywgcmVwb1Bhc3NFbmY6ICdET0NLRVJfUEFTU1dPUkQnIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgY21kID0+IHtcbiAgY29uc3QgYW5zd2VycyA9IGF3YWl0IGNtZC5wcm9tcHQocXVlc3Rpb25zKVxuICBjb25zdCB2aWV3ID0ge1xuICAgIC4uLmFuc3dlcnMsXG4gICAgLi4ucmVwb0VudlZhcnNbYW5zd2Vycy5yZXBvSG9zdF0sXG4gICAgcmVwbzogYCR7YW5zd2Vycy5yZXBvSG9zdH0vJHthbnN3ZXJzLm9yZ30vJHthbnN3ZXJzLm5hbWV9YFxuICB9XG4gIHJldHVybiB2aWV3XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5xdWlyaWVzL2luaXQuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ "./src/main.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _vorpal = __webpack_require__(2);\n\nvar _vorpal2 = _interopRequireDefault(_vorpal);\n\nvar _chalk = __webpack_require__(3);\n\nvar _chalk2 = _interopRequireDefault(_chalk);\n\nvar _vorpalAsDefault = __webpack_require__(4);\n\nvar _vorpalAsDefault2 = _interopRequireDefault(_vorpalAsDefault);\n\nvar _init = __webpack_require__(\"./src/commands/init.js\");\n\nvar _init2 = _interopRequireDefault(_init);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar vorpal = (0, _vorpal2.default)();\nvorpal.find('exit').hidden();\n\nvorpal.command('init', 'Sets up your project to use Helm with Drone').action(function (args, callback) {\n  vorpal.ui.delimiter('> ');\n  (0, _init2.default)(vorpal.activeCommand);\n});\n\nvorpal.command('secret <name> <value>', 'Add a secret to your config').option('-i, --image <image>', 'Specify an image in which to inject this secret').action(function (args, callback) {\n  console.log('adding secret', args.name);\n});\n\nvorpal.delimiter(' ').parse(process.argv).use(_vorpalAsDefault2.default, 'help').exec('exit');\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz8zNDc5Il0sIm5hbWVzIjpbInZvcnBhbCIsImZpbmQiLCJoaWRkZW4iLCJjb21tYW5kIiwiYWN0aW9uIiwiYXJncyIsImNhbGxiYWNrIiwidWkiLCJkZWxpbWl0ZXIiLCJhY3RpdmVDb21tYW5kIiwib3B0aW9uIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJwYXJzZSIsInByb2Nlc3MiLCJhcmd2IiwidXNlIiwiZXhlYyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsU0FBUyx1QkFBZjtBQUNBQSxPQUFPQyxJQUFQLENBQVksTUFBWixFQUFvQkMsTUFBcEI7O0FBRUFGLE9BQ0dHLE9BREgsQ0FDVyxNQURYLEVBQ21CLDZDQURuQixFQUVHQyxNQUZILENBRVUsVUFBQ0MsSUFBRCxFQUFPQyxRQUFQLEVBQW9CO0FBQzFCTixTQUFPTyxFQUFQLENBQVVDLFNBQVYsQ0FBb0IsSUFBcEI7QUFDQSxzQkFBS1IsT0FBT1MsYUFBWjtBQUNELENBTEg7O0FBT0FULE9BQ0dHLE9BREgsQ0FDVyx1QkFEWCxFQUNvQyw2QkFEcEMsRUFFR08sTUFGSCxDQUVVLHFCQUZWLEVBRWlDLGlEQUZqQyxFQUdHTixNQUhILENBR1UsVUFBQ0MsSUFBRCxFQUFPQyxRQUFQLEVBQW9CO0FBQzFCSyxVQUFRQyxHQUFSLENBQVksZUFBWixFQUE2QlAsS0FBS1EsSUFBbEM7QUFDRCxDQUxIOztBQU9BYixPQUNHUSxTQURILENBQ2EsR0FEYixFQUVHTSxLQUZILENBRVNDLFFBQVFDLElBRmpCLEVBR0dDLEdBSEgsNEJBR2tCLE1BSGxCLEVBSUdDLElBSkgsQ0FJUSxNQUpSIiwiZmlsZSI6Ii4vc3JjL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVm9ycGFsIGZyb20gJ3ZvcnBhbCdcbmltcG9ydCBjIGZyb20gJ2NoYWxrJ1xuaW1wb3J0IGFzRGVmYXVsdCBmcm9tICd2b3JwYWwtYXMtZGVmYXVsdCdcbmltcG9ydCBpbml0IGZyb20gJy4vY29tbWFuZHMvaW5pdCdcblxuY29uc3Qgdm9ycGFsID0gVm9ycGFsKClcbnZvcnBhbC5maW5kKCdleGl0JykuaGlkZGVuKClcblxudm9ycGFsXG4gIC5jb21tYW5kKCdpbml0JywgJ1NldHMgdXAgeW91ciBwcm9qZWN0IHRvIHVzZSBIZWxtIHdpdGggRHJvbmUnKVxuICAuYWN0aW9uKChhcmdzLCBjYWxsYmFjaykgPT4ge1xuICAgIHZvcnBhbC51aS5kZWxpbWl0ZXIoJz4gJylcbiAgICBpbml0KHZvcnBhbC5hY3RpdmVDb21tYW5kKVxuICB9KVxuXG52b3JwYWxcbiAgLmNvbW1hbmQoJ3NlY3JldCA8bmFtZT4gPHZhbHVlPicsICdBZGQgYSBzZWNyZXQgdG8geW91ciBjb25maWcnKVxuICAub3B0aW9uKCctaSwgLS1pbWFnZSA8aW1hZ2U+JywgJ1NwZWNpZnkgYW4gaW1hZ2UgaW4gd2hpY2ggdG8gaW5qZWN0IHRoaXMgc2VjcmV0JylcbiAgLmFjdGlvbigoYXJncywgY2FsbGJhY2spID0+IHtcbiAgICBjb25zb2xlLmxvZygnYWRkaW5nIHNlY3JldCcsIGFyZ3MubmFtZSlcbiAgfSlcblxudm9ycGFsXG4gIC5kZWxpbWl0ZXIoJyAnKVxuICAucGFyc2UocHJvY2Vzcy5hcmd2KVxuICAudXNlKGFzRGVmYXVsdCwgJ2hlbHAnKVxuICAuZXhlYygnZXhpdCcpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ "./src/services/installer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _path = __webpack_require__(7);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _getInstalledPath = __webpack_require__(5);\n\nvar _getInstalledPath2 = _interopRequireDefault(_getInstalledPath);\n\nvar _directoryTree = __webpack_require__(6);\n\nvar _directoryTree2 = _interopRequireDefault(_directoryTree);\n\nvar _notifier = __webpack_require__(\"./src/services/notifier.js\");\n\nvar _notifier2 = _interopRequireDefault(_notifier);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Installer = function (_Notifier) {\n  _inherits(Installer, _Notifier);\n\n  function Installer(view) {\n    _classCallCheck(this, Installer);\n\n    var _this = _possibleConstructorReturn(this, (Installer.__proto__ || Object.getPrototypeOf(Installer)).call(this));\n\n    _this.view = view;\n    return _this;\n  }\n\n  _createClass(Installer, [{\n    key: 'run',\n    value: function () {\n      var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this.setup();\n\n              case 2:\n                this.copy(this.tree);\n\n              case 3:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function run() {\n        return _ref.apply(this, arguments);\n      }\n\n      return run;\n    }()\n  }, {\n    key: 'setup',\n    value: function () {\n      var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {\n        var source;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                this.target = process.cwd();\n                _context2.next = 3;\n                return (0, _getInstalledPath2.default)('dronify');\n\n              case 3:\n                source = _context2.sent;\n\n                this.source = _path2.default.resolve(source, 'templates');\n                this.tree = (0, _directoryTree2.default)(this.source);\n\n              case 6:\n              case 'end':\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function setup() {\n        return _ref2.apply(this, arguments);\n      }\n\n      return setup;\n    }()\n  }, {\n    key: 'copy',\n    value: function copy(node) {\n      if (node.children) return node.children.forEach(this.copy.bind(this));\n      this.notify('start', node.name);\n      // copy here\n      this.notify('finish', node.name);\n    }\n  }]);\n\n  return Installer;\n}(_notifier2.default);\n\nexports.default = Installer;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvaW5zdGFsbGVyLmpzPzhhODkiXSwibmFtZXMiOlsiSW5zdGFsbGVyIiwidmlldyIsInNldHVwIiwiY29weSIsInRyZWUiLCJ0YXJnZXQiLCJwcm9jZXNzIiwiY3dkIiwic291cmNlIiwicmVzb2x2ZSIsIm5vZGUiLCJjaGlsZHJlbiIsImZvckVhY2giLCJiaW5kIiwibm90aWZ5IiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFM7OztBQUNuQixxQkFBYUMsSUFBYixFQUFtQjtBQUFBOztBQUFBOztBQUVqQixVQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFGaUI7QUFHbEI7Ozs7Ozs7Ozs7O3VCQUVPLEtBQUtDLEtBQUwsRTs7O0FBQ04scUJBQUtDLElBQUwsQ0FBVSxLQUFLQyxJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EscUJBQUtDLE1BQUwsR0FBY0MsUUFBUUMsR0FBUixFQUFkOzt1QkFDcUIsZ0NBQWMsU0FBZCxDOzs7QUFBZkMsc0I7O0FBQ04scUJBQUtBLE1BQUwsR0FBYyxlQUFLQyxPQUFMLENBQWFELE1BQWIsRUFBcUIsV0FBckIsQ0FBZDtBQUNBLHFCQUFLSixJQUFMLEdBQVksNkJBQVEsS0FBS0ksTUFBYixDQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBRUlFLEksRUFBTTtBQUNWLFVBQUlBLEtBQUtDLFFBQVQsRUFBbUIsT0FBT0QsS0FBS0MsUUFBTCxDQUFjQyxPQUFkLENBQXNCLEtBQUtULElBQUwsQ0FBVVUsSUFBVixDQUFlLElBQWYsQ0FBdEIsQ0FBUDtBQUNuQixXQUFLQyxNQUFMLENBQVksT0FBWixFQUFxQkosS0FBS0ssSUFBMUI7QUFDQTtBQUNBLFdBQUtELE1BQUwsQ0FBWSxRQUFaLEVBQXNCSixLQUFLSyxJQUEzQjtBQUNEOzs7Ozs7a0JBcEJrQmYsUyIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9pbnN0YWxsZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGdldE1vZHVsZVBhdGggZnJvbSAnZ2V0LWluc3RhbGxlZC1wYXRoJ1xuaW1wb3J0IGRpclRyZWUgZnJvbSAnZGlyZWN0b3J5LXRyZWUnXG5pbXBvcnQgTm90aWZpZXIgZnJvbSAnLi4vc2VydmljZXMvbm90aWZpZXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluc3RhbGxlciBleHRlbmRzIE5vdGlmaWVyIHtcbiAgY29uc3RydWN0b3IgKHZpZXcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy52aWV3ID0gdmlld1xuICB9XG4gIGFzeW5jIHJ1biAoKSB7XG4gICAgYXdhaXQgdGhpcy5zZXR1cCgpXG4gICAgdGhpcy5jb3B5KHRoaXMudHJlZSlcbiAgfVxuICBhc3luYyBzZXR1cCAoKSB7XG4gICAgdGhpcy50YXJnZXQgPSBwcm9jZXNzLmN3ZCgpXG4gICAgY29uc3Qgc291cmNlID0gYXdhaXQgZ2V0TW9kdWxlUGF0aCgnZHJvbmlmeScpXG4gICAgdGhpcy5zb3VyY2UgPSBwYXRoLnJlc29sdmUoc291cmNlLCAndGVtcGxhdGVzJylcbiAgICB0aGlzLnRyZWUgPSBkaXJUcmVlKHRoaXMuc291cmNlKVxuICB9XG4gIGNvcHkgKG5vZGUpIHtcbiAgICBpZiAobm9kZS5jaGlsZHJlbikgcmV0dXJuIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCh0aGlzLmNvcHkuYmluZCh0aGlzKSlcbiAgICB0aGlzLm5vdGlmeSgnc3RhcnQnLCBub2RlLm5hbWUpXG4gICAgLy8gY29weSBoZXJlXG4gICAgdGhpcy5ub3RpZnkoJ2ZpbmlzaCcsIG5vZGUubmFtZSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZpY2VzL2luc3RhbGxlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ "./src/services/notifier.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Notifier = function () {\n  function Notifier() {\n    _classCallCheck(this, Notifier);\n\n    this.events = [];\n  }\n\n  _createClass(Notifier, [{\n    key: \"on\",\n    value: function on(event, fn) {\n      this.events[event] = fn;\n    }\n  }, {\n    key: \"notify\",\n    value: function notify(event) {\n      var _events;\n\n      for (var _len = arguments.length, payload = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n        payload[_key - 1] = arguments[_key];\n      }\n\n      (_events = this.events)[event].apply(_events, payload);\n    }\n  }]);\n\n  return Notifier;\n}();\n\nexports.default = Notifier;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbm90aWZpZXIuanM/NGVjMyJdLCJuYW1lcyI6WyJOb3RpZmllciIsImV2ZW50cyIsImV2ZW50IiwiZm4iLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCQSxROzs7O1NBQ25CQyxNLEdBQVMsRTs7Ozs7dUJBQ0xDLEssRUFBT0MsRSxFQUFJO0FBQ2IsV0FBS0YsTUFBTCxDQUFZQyxLQUFaLElBQXFCQyxFQUFyQjtBQUNEOzs7MkJBQ09ELEssRUFBbUI7QUFBQTs7QUFBQSx3Q0FBVEUsT0FBUztBQUFUQSxlQUFTO0FBQUE7O0FBQ3pCLHNCQUFLSCxNQUFMLEVBQVlDLEtBQVosaUJBQXNCRSxPQUF0QjtBQUNEOzs7Ozs7a0JBUGtCSixRIiwiZmlsZSI6Ii4vc3JjL3NlcnZpY2VzL25vdGlmaWVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90aWZpZXIge1xuICBldmVudHMgPSBbXVxuICBvbiAoZXZlbnQsIGZuKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnRdID0gZm5cbiAgfVxuICBub3RpZnkgKGV2ZW50LCAuLi5wYXlsb2FkKSB7XG4gICAgdGhpcy5ldmVudHNbZXZlbnRdKC4uLnBheWxvYWQpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2aWNlcy9ub3RpZmllci5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1wb2x5ZmlsbFwiP2QwZDYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXBvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__("./src/main.js");


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

eval("module.exports = require(\"vorpal\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2b3JwYWxcIj9mYmQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2b3JwYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2b3JwYWxcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

eval("module.exports = require(\"chalk\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGFsa1wiPzUzZjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYWxrXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hhbGtcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

eval("module.exports = require(\"vorpal-as-default\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2b3JwYWwtYXMtZGVmYXVsdFwiPzdjYzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZvcnBhbC1hcy1kZWZhdWx0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidm9ycGFsLWFzLWRlZmF1bHRcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

eval("module.exports = require(\"get-installed-path\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnZXQtaW5zdGFsbGVkLXBhdGhcIj82MDQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnZXQtaW5zdGFsbGVkLXBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJnZXQtaW5zdGFsbGVkLXBhdGhcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

eval("module.exports = require(\"directory-tree\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkaXJlY3RvcnktdHJlZVwiPzM4YmYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRpcmVjdG9yeS10cmVlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZGlyZWN0b3J5LXRyZWVcIlxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NWIyYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInBhdGhcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })

/******/ });