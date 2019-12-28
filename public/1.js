(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/Register.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth_service */ "./resources/js/services/auth_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Register",
  created: function created() {
    document.querySelector('body').style.backgroundColor = '#343a40';
  },
  data: function data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      errors: {}
    };
  },
  methods: {
    register: function () {
      var _register = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["register"](this.user);

              case 3:
                this.flashMessage.success({
                  title: 'Success Registered',
                  message: 'Successfully registered!',
                  time: 5000
                });
                this.user = {
                  name: '',
                  email: '',
                  password: '',
                  password_confirmation: ''
                };
                this.errors = {};
                this.$router.push('/login');
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);

                if (_context.t0.response.status == 422) {
                  this.errors = _context.t0.response.data.errors;
                  this.flashMessage.error({
                    title: 'Error',
                    message: 'Some error occured, Please try again!',
                    time: 5000
                  });
                } else if (_context.t0.response.status == 500) {
                  this.flashMessage.error({
                    title: 'Error',
                    message: _context.t0.response.data.message,
                    time: 5000
                  });
                } else {
                  this.flashMessage.error({
                    title: 'Error',
                    message: 'Some error occured, Please try again!',
                    time: 5000
                  });
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function register() {
        return _register.apply(this, arguments);
      }

      return register;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "card card-register mx-auto mt-5" }, [
      _c("div", { staticClass: "card-header" }, [
        _vm._v("Register an Account")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.register($event)
              }
            }
          },
          [
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "form-label-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.name,
                      expression: "user.name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "name",
                    name: "name",
                    placeholder: "Enter Full Name",
                    autofocus: "autofocus"
                  },
                  domProps: { value: _vm.user.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "name" } }, [
                  _vm._v("Enter Full Name")
                ])
              ]),
              _vm._v(" "),
              _vm.errors.name
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.errors.name[0]) +
                        "\n                    "
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "form-label-group" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.email,
                      expression: "user.email"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "email",
                    id: "email",
                    name: "email",
                    placeholder: "Email address"
                  },
                  domProps: { value: _vm.user.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "email", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("label", { attrs: { for: "email" } }, [
                  _vm._v("Email address")
                ])
              ]),
              _vm._v(" "),
              _vm.errors.email
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.errors.email[0]) +
                        "\n                    "
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("div", { staticClass: "form-row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-label-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.user.password,
                          expression: "user.password"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        id: "password",
                        name: "password",
                        placeholder: "Password"
                      },
                      domProps: { value: _vm.user.password },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.user, "password", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "password" } }, [
                      _vm._v("Password")
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.errors.password
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                                " +
                            _vm._s(_vm.errors.password[0]) +
                            "\n                            "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("div", { staticClass: "form-label-group" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.user.password_confirmation,
                          expression: "user.password_confirmation"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        name: "password_confirmation",
                        id: "password_confirmation",
                        placeholder: "Confirm password"
                      },
                      domProps: { value: _vm.user.password_confirmation },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.user,
                            "password_confirmation",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("label", { attrs: { for: "password_confirmation" } }, [
                      _vm._v("Confirm password")
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.errors.password_confirmation
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                                " +
                            _vm._s(_vm.errors.password_confirmation[0]) +
                            "\n                            "
                        )
                      ])
                    : _vm._e()
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-primary btn-block",
                attrs: { type: "submit" }
              },
              [_vm._v("Register")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "text-center" },
          [
            _c(
              "router-link",
              { staticClass: "d-block small mt-3", attrs: { to: "/login" } },
              [_vm._v("\n                    Login Page\n                ")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              { staticClass: "d-block small", attrs: { to: "reset-password" } },
              [_vm._v("Forgot Password?")]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/auth_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/auth_service.js ***!
  \***********************************************/
/*! exports provided: register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function register(user) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/auth/register', user);
}

/***/ }),

/***/ "./resources/js/services/http_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/http_service.js ***!
  \***********************************************/
/*! exports provided: http, httpFile, httpFileAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "http", function() { return http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpFile", function() { return httpFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpFileAuth", function() { return httpFileAuth; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);

 //server path

function http() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiUrl
  });
} //api path

function httpFile() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiUrl,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
} //auth path

function httpFileAuth() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.authUrl,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

/***/ }),

/***/ "./resources/js/views/authentication/Register.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/authentication/Register.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_4aa4e5cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=4aa4e5cb&scoped=true& */ "./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&scoped=true&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/authentication/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_4aa4e5cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_4aa4e5cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4aa4e5cb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/authentication/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/authentication/Register.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/authentication/Register.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_4aa4e5cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=4aa4e5cb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/authentication/Register.vue?vue&type=template&id=4aa4e5cb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_4aa4e5cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_4aa4e5cb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);