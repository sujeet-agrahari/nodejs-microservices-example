webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_sujeet_ticketting_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_sujeet_ticketting_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_sujeet_ticketting_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_sujeet_ticketting_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "/home/sujeet/ticketting/client/pages/index.js",
    _this = undefined;



var LandingPage = function LandingPage(_ref) {
  var currentUser = _ref.currentUser;
  console.log('I am in the component', color);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
    children: "Landing Page..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, _this);
};

_c = LandingPage;
LandingPage.getInitialProps = /*#__PURE__*/Object(_home_sujeet_ticketting_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_sujeet_ticketting_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var _yield$axios$get, data, _yield$axios$get2, _data;

  return _home_sujeet_ticketting_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (true) {
            _context.next = 8;
            break;
          }

          _context.next = 3;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://ingress-nginx.ingress-nginx.svc.cluter.local/api/users/currentuser', {
            headers: {
              Host: 'ticketing.dev'
            }
          });

        case 3:
          _yield$axios$get = _context.sent;
          data = _yield$axios$get.data;
          return _context.abrupt("return", data);

        case 8:
          _context.next = 10;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/users/currentuser');

        case 10:
          _yield$axios$get2 = _context.sent;
          _data = _yield$axios$get2.data;
          return _context.abrupt("return", _data);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

var _c;

$RefreshReg$(_c, "LandingPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTGFuZGluZ1BhZ2UiLCJjdXJyZW50VXNlciIsImNvbnNvbGUiLCJsb2ciLCJjb2xvciIsImdldEluaXRpYWxQcm9wcyIsImF4aW9zIiwiZ2V0IiwiaGVhZGVycyIsIkhvc3QiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBR0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBcUI7QUFBQSxNQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQ3ZDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ0MsS0FBckM7QUFFQSxzQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FKRDs7S0FBTUosVztBQU1OQSxXQUFXLENBQUNLLGVBQVosdVJBQThCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLGlCQUdIQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsMkVBQVYsRUFBdUY7QUFDNUdDLG1CQUFPLEVBQUU7QUFDUEMsa0JBQUksRUFBRTtBQURDO0FBRG1HLFdBQXZGLENBSEc7O0FBQUE7QUFBQTtBQUdsQkMsY0FIa0Isb0JBR2xCQSxJQUhrQjtBQUFBLDJDQVFuQkEsSUFSbUI7O0FBQUE7QUFBQTtBQUFBLGlCQVdISiw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsd0JBQVYsQ0FYRzs7QUFBQTtBQUFBO0FBV2xCRyxlQVhrQixxQkFXbEJBLElBWGtCO0FBQUEsMkNBWW5CQSxLQVptQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUE5QjtBQWdCZVYsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDhiYjM0YTRhMmJlZWRkNDFkM2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cblxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoeyBjdXJyZW50VXNlciB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdJIGFtIGluIHRoZSBjb21wb25lbnQnLCBjb2xvcik7XG5cbiAgcmV0dXJuIDxoMT5MYW5kaW5nIFBhZ2UuLi48L2gxPjtcbn07XG5cbkxhbmRpbmdQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gb24gdGhlIHNlcnZlclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vaW5ncmVzcy1uZ2lueC5pbmdyZXNzLW5naW54LnN2Yy5jbHV0ZXIubG9jYWwvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJywge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBIb3N0OiAndGlja2V0aW5nLmRldidcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBlbHNlIHtcbiAgICAvLyBvbiB0aGUgYnJvd3NlclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJyk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7Il0sInNvdXJjZVJvb3QiOiIifQ==