webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/home/sujeet/ticketting/client/components/header.js",
    _this = undefined;


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var currentUser = _ref.currentUser;
  var links = [!currentUser && {
    label: 'Sign Up',
    href: '/auth/signup'
  }, !currentUser && {
    label: 'Sign In',
    href: '/auth/signin'
  }, currentUser && {
    label: 'Sign Out',
    href: '/auth/signout'
  }].filter(Boolean).map(function (_ref2) {
    var lable = _ref2.lable,
        href = _ref2.href;
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      children: label
    }, href, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 14
    }, _this);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("name", {
    className: "navbar navbar-light bg-light",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: "navbar-brand",
        children: "GitTix"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "d-flex justify-content-end",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: "nav d-flex align-items-center",
        children: currentUser ? 'Sign Out' : 'Sign In'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 10
  }, _this);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOlsiY3VycmVudFVzZXIiLCJsaW5rcyIsImxhYmVsIiwiaHJlZiIsImZpbHRlciIsIkJvb2xlYW4iLCJtYXAiLCJsYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLCtFQUFxQjtBQUFBLE1BQWxCQSxXQUFrQixRQUFsQkEsV0FBa0I7QUFDbEMsTUFBTUMsS0FBSyxHQUFHLENBQ1osQ0FBQ0QsV0FBRCxJQUFnQjtBQUFFRSxTQUFLLEVBQUUsU0FBVDtBQUFvQkMsUUFBSSxFQUFFO0FBQTFCLEdBREosRUFFWixDQUFDSCxXQUFELElBQWdCO0FBQUVFLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxRQUFJLEVBQUU7QUFBMUIsR0FGSixFQUdaSCxXQUFXLElBQUk7QUFBRUUsU0FBSyxFQUFFLFVBQVQ7QUFBcUJDLFFBQUksRUFBRTtBQUEzQixHQUhILEVBS1hDLE1BTFcsQ0FLSkMsT0FMSSxFQU1YQyxHQU5XLENBTVAsaUJBQXFCO0FBQUEsUUFBbEJDLEtBQWtCLFNBQWxCQSxLQUFrQjtBQUFBLFFBQVhKLElBQVcsU0FBWEEsSUFBVztBQUN4Qix3QkFBTztBQUFBLGdCQUNKRDtBQURJLE9BQVNDLElBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFQO0FBR0QsR0FWVyxDQUFkO0FBV0Esc0JBQU87QUFBTSxhQUFTLEVBQUMsOEJBQWhCO0FBQUEsNEJBQ0wscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBLDZCQUNFO0FBQUcsaUJBQVMsRUFBQyxjQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURLLGVBSUw7QUFBSyxlQUFTLEVBQUMsNEJBQWY7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUMsK0JBQWQ7QUFBQSxrQkFDR0gsV0FBVyxHQUFHLFVBQUgsR0FBZ0I7QUFEOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQVVELENBdEJEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjkyN2FmMjFmZDlhNDA3NzQ0YmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGN1cnJlbnRVc2VyIH0pID0+IHtcbiAgY29uc3QgbGlua3MgPSBbXG4gICAgIWN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdTaWduIFVwJywgaHJlZjogJy9hdXRoL3NpZ251cCcgfSxcbiAgICAhY3VycmVudFVzZXIgJiYgeyBsYWJlbDogJ1NpZ24gSW4nLCBocmVmOiAnL2F1dGgvc2lnbmluJyB9LFxuICAgIGN1cnJlbnRVc2VyICYmIHsgbGFiZWw6ICdTaWduIE91dCcsIGhyZWY6ICcvYXV0aC9zaWdub3V0JyB9XG4gIF1cbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLm1hcCgoeyBsYWJsZSwgaHJlZiB9KSA9PiB7XG4gICAgICByZXR1cm4gPGxpIGtleT17aHJlZn0+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGk+XG4gICAgfSk7XG4gIHJldHVybiA8bmFtZSBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XG4gICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPkdpdFRpeDwvYT5cbiAgICA8L0xpbms+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIHtjdXJyZW50VXNlciA/ICdTaWduIE91dCcgOiAnU2lnbiBJbid9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICA8L25hbWU+XG59Il0sInNvdXJjZVJvb3QiOiIifQ==