(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Categories.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/category_service */ "./resources/js/services/category_service.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "category",
  data: function data() {
    return {
      categoryData: {
        name: '',
        image: ''
      },
      errors: {},
      categories: [],
      editCategoryData: {},
      moreExists: false,
      nextPage: 0
    };
  },
  mounted: function mounted() {
    this.loadCategories();
  },
  methods: {
    deleteCategory: function () {
      var _deleteCategory = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(category) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (window.confirm("Are you sure want to delete ".concat(category.name))) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return _services_category_service__WEBPACK_IMPORTED_MODULE_1__["deleteCategory"](category.id);

              case 5:
                response = _context.sent;
                this.categories = this.categories.filter(function (obj) {
                  return obj.id !== category.id;
                });
                this.flashMessage.success({
                  title: 'Success Delete',
                  message: response.data.message,
                  time: 5000
                });
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                this.flashMessage.error({
                  title: 'Error',
                  message: _context.t0.response.data.message,
                  time: 5000
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 10]]);
      }));

      function deleteCategory(_x) {
        return _deleteCategory.apply(this, arguments);
      }

      return deleteCategory;
    }(),
    loadCategories: function () {
      var _loadCategories = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_category_service__WEBPACK_IMPORTED_MODULE_1__["loadCategories"]();

              case 3:
                response = _context2.sent;
                this.categories = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  title: 'Error',
                  message: 'Some error occured, Please refresh!',
                  time: 5000
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function loadCategories() {
        return _loadCategories.apply(this, arguments);
      }

      return loadCategories;
    }(),
    attachImage: function attachImage() {
      this.categoryData.image = this.$refs.newCategoryImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.newCategoryImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.categoryData.image);
    },
    editAttachImage: function editAttachImage() {
      this.editCategoryData.image = this.$refs.editCategoryImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.editCategoryImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.editCategoryData.image);
    },
    updateCategory: function () {
      var _updateCategory = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                formData = new FormData();
                formData.append('name', this.editCategoryData.name);
                formData.append('image', this.editCategoryData.image);
                formData.append('_method', 'put');
                _context3.prev = 4;
                _context3.next = 7;
                return _services_category_service__WEBPACK_IMPORTED_MODULE_1__["updateCategory"](formData, this.editCategoryData.id);

              case 7:
                response = _context3.sent;
                //done update and then map
                this.categories.map(function (category) {
                  if (category.id == response.data.id) {
                    for (var key in response.data) {
                      category[key] = response.data[key];
                    }
                  }
                });
                this.hideEditCategoryModal();
                this.flashMessage.success({
                  message: 'Update Success',
                  time: 5000
                }); //
                // this.editCategoryData = {
                //     name: '',
                //     image: '',
                // };

                _context3.next = 16;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](4);
                this.flashMessage.error({
                  message: _context3.t0.response.data.message,
                  time: 5000
                });

              case 16:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[4, 13]]);
      }));

      function updateCategory() {
        return _updateCategory.apply(this, arguments);
      }

      return updateCategory;
    }(),
    createCategory: function () {
      var _createCategory = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                formData = new FormData();
                formData.append('name', this.categoryData.name);
                formData.append('image', this.categoryData.image);
                _context4.prev = 3;
                _context4.next = 6;
                return _services_category_service__WEBPACK_IMPORTED_MODULE_1__["createCategory"](formData);

              case 6:
                response = _context4.sent;
                //para nig human og create mo add pud cya sa table
                this.categories.unshift(response.data);
                this.hideNewCategoryModal(); // this.flashMessage.error({
                //     title: 'Error Message Title',
                //     message: 'Oh, you broke my heart! Shame on you!'
                // });
                // this.flashMessage.warning({
                //     title: 'Warning Message Title',
                //     message: "Don't stop me nooooow....!"
                // });
                // this.flashMessage.info({
                //     title: 'Info Message Title',
                //     message: 'Just want you to know, that Vue is so cool'
                // });

                this.flashMessage.success({
                  title: 'Success Category Added!',
                  message: 'Category stored successfully!',
                  time: 5000
                });
                this.categoryData = {
                  name: '',
                  image: ''
                }; // this.loadCategories();

                _context4.next = 16;
                break;

              case 13:
                _context4.prev = 13;
                _context4.t0 = _context4["catch"](3);

                if (_context4.t0.response.status === 422 && _context4.t0.response) {
                  // this.errors.nameErrors = e.response.data.errors.name;
                  // this.errors.imageErrors = e.response.data.errors.image;
                  this.errors = _context4.t0.response.data.errors; // console.log(this.errors.name[0]);

                  this.flashMessage.error({
                    title: 'Error',
                    message: 'Some error occured, Please try again!',
                    time: 5000
                  });
                } else {
                  this.flashMessage.error({
                    title: 'Error',
                    message: 'Some error occured, Please try again!',
                    time: 5000
                  });
                }

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[3, 13]]);
      }));

      function createCategory() {
        return _createCategory.apply(this, arguments);
      }

      return createCategory;
    }(),
    hideNewCategoryModal: function hideNewCategoryModal() {
      this.$refs['newCategoryModal'].hide();
    },
    hideEditCategoryModal: function hideEditCategoryModal() {
      this.$refs['editCategoryModal'].hide();
    },
    showNewCategoryModal: function showNewCategoryModal() {
      this.$refs['newCategoryModal'].show();
    },
    editCategoryModal: function editCategoryModal(category) {
      this.editCategoryData = _objectSpread({}, category);
      this.showEditCategoryModal();
    },
    showEditCategoryModal: function showEditCategoryModal() {
      this.$refs['editCategoryModal'].show();
    },
    loadMore: function () {
      var _loadMore = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _this = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _services_category_service__WEBPACK_IMPORTED_MODULE_1__["loadMore"](this.nextPage);

              case 3:
                response = _context5.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExists = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExists = false;
                }

                response.data.data.forEach(function (data) {
                  _this.categories.push(data);
                });
                _context5.next = 11;
                break;

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](0);
                this.flashMessage.error({
                  title: 'Error',
                  message: 'Some error occurred during loading more category!',
                  time: 5000
                });

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 8]]);
      }));

      function loadMore() {
        return _loadMore.apply(this, arguments);
      }

      return loadMore;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c("ol", { staticClass: "breadcrumb" }, [
        _c(
          "li",
          { staticClass: "breadcrumb-item active" },
          [
            _c("router-link", { attrs: { to: "/categories" } }, [
              _vm._v("Categories")
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c("li", { staticClass: "breadcrumb-item" }, [_vm._v("Overview")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card mb-3" }, [
        _c("div", { staticClass: "card-header d-flex" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary btn-sm ml-auto",
              on: { click: _vm.showNewCategoryModal }
            },
            [
              _c("span", { staticClass: "fa fa-plus" }),
              _vm._v("Create\n                Category\n            ")
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("table", { staticClass: "table" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.categories, function(category, index) {
                return _c("tr", { key: index }, [
                  _c("td", [_vm._v(_vm._s(index + 1))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(category.name))]),
                  _vm._v(" "),
                  _c("td", [
                    _c("img", {
                      staticClass: "table-image",
                      attrs: {
                        src:
                          _vm.$store.state.serverPath +
                          "/storage/" +
                          category.image,
                        alt: category.name
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-sm",
                        on: {
                          click: function($event) {
                            return _vm.editCategoryModal(category)
                          }
                        }
                      },
                      [_c("span", { staticClass: "fa fa-edit" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-danger btn-sm",
                        on: {
                          click: function($event) {
                            return _vm.deleteCategory(category)
                          }
                        }
                      },
                      [_c("span", { staticClass: "fa fa-trash" })]
                    )
                  ])
                ])
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.moreExists,
                  expression: "moreExists"
                }
              ],
              staticClass: "text-center"
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-sm",
                  on: { click: _vm.loadMore }
                },
                [
                  _c("span", { staticClass: "fa fa-arrow-down" }),
                  _vm._v("Load More\n                ")
                ]
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "newCategoryModal",
          attrs: { "hide-footer": "", title: "Add New Category" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                attrs: { action: "" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createCategory($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [
                    _vm._v("Enter Name")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.categoryData.name,
                        expression: "categoryData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "name",
                      placeholder: "Enter Category Name..."
                    },
                    domProps: { value: _vm.categoryData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.categoryData, "name", $event.target.value)
                      }
                    }
                  }),
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
                  _c("label", { attrs: { for: "image" } }, [
                    _vm._v("Choose an image")
                  ]),
                  _vm._v(" "),
                  _vm.categoryData.image
                    ? _c("div", [
                        _c("img", {
                          ref: "newCategoryImageDisplay",
                          staticClass: "w-150px",
                          attrs: { src: "" }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("input", {
                    ref: "newCategoryImage",
                    staticClass: "form-control",
                    attrs: { type: "file", id: "image" },
                    on: { change: _vm.attachImage }
                  }),
                  _vm._v(" "),
                  _vm.errors.image
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.errors.image[0]) +
                            "\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button" },
                      on: { click: _vm.hideNewCategoryModal }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [_c("span", { staticClass: "fa fa-check" }), _vm._v("Save")]
                  )
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editCategoryModal",
          attrs: { "hide-footer": "", title: "Update Category" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                attrs: { action: "" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateCategory($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "edit_name" } }, [
                    _vm._v("Enter Name")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editCategoryData.name,
                        expression: "editCategoryData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "edit_name",
                      placeholder: "Enter Category Name..."
                    },
                    domProps: { value: _vm.editCategoryData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editCategoryData,
                          "name",
                          $event.target.value
                        )
                      }
                    }
                  }),
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
                  _c("label", { attrs: { for: "edit_image" } }, [
                    _vm._v("Choose an image")
                  ]),
                  _vm._v(" "),
                  _c("div", [
                    _c("img", {
                      ref: "editCategoryImageDisplay",
                      staticClass: "w-150px",
                      attrs: {
                        src:
                          _vm.$store.state.serverPath +
                          "/storage/" +
                          _vm.editCategoryData.image,
                        alt: ""
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    ref: "editCategoryImage",
                    staticClass: "form-control",
                    attrs: { type: "file", id: "edit_image" },
                    on: { change: _vm.editAttachImage }
                  }),
                  _vm._v(" "),
                  _vm.errors.image
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.image[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button" },
                      on: { click: _vm.hideEditCategoryModal }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-check" }),
                      _vm._v("Update")
                    ]
                  )
                ])
              ]
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "fas fa-chart-area" }),
      _vm._v(" Categories Management\n            ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("td", [_vm._v("#")]),
        _vm._v(" "),
        _c("td", [_vm._v("Name")]),
        _vm._v(" "),
        _c("td", [_vm._v("Image")]),
        _vm._v(" "),
        _c("td", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/category_service.js":
/*!***************************************************!*\
  !*** ./resources/js/services/category_service.js ***!
  \***************************************************/
/*! exports provided: loadMore, createCategory, loadCategories, deleteCategory, updateCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategory", function() { return createCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return loadCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCategory", function() { return deleteCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCategory", function() { return updateCategory; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function loadMore(_x) {
  return _loadMore.apply(this, arguments);
}

function _loadMore() {
  _loadMore = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(nextPage) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", Object(_http_service__WEBPACK_IMPORTED_MODULE_1__["http"])().get("/categories?page=".concat(nextPage)));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadMore.apply(this, arguments);
}

function createCategory(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_1__["httpFile"])().post('/categories', data);
}
function loadCategories() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_1__["http"])().get('/categories');
}
function deleteCategory(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_1__["http"])()["delete"]("/categories/".concat(id));
}
function updateCategory(data, id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_1__["httpFile"])().post("/categories/".concat(id), data);
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

/***/ "./resources/js/views/Categories.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Categories.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories_vue_vue_type_template_id_53f0967b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=53f0967b&scoped=true& */ "./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&scoped=true&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/views/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_53f0967b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Categories_vue_vue_type_template_id_53f0967b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "53f0967b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Categories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Categories.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Categories.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=template&id=53f0967b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);