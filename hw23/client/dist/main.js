/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/style.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/style.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
}

.body {
  color: #000;
}

.wrapper {
  max-width: 1440px;
  min-width: 320px;
  margin: 0 auto;
  padding: 0 30px;
}

.add {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: "Times New Roman", Times, serif;
}
.add-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.add-container .name-container,
.add-container .priority-container,
.add-container .details-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.add-container .name-container label,
.add-container .priority-container label,
.add-container .details-container label {
  font-size: 1.2rem;
  color: #333;
  font-weight: 500;
}
.add-container .name-container input,
.add-container .name-container select,
.add-container .name-container textarea,
.add-container .priority-container input,
.add-container .priority-container select,
.add-container .priority-container textarea,
.add-container .details-container input,
.add-container .details-container select,
.add-container .details-container textarea {
  padding: 0.8rem;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  background-color: #f8f8f8;
  font-size: 1rem;
  transition: all 0.3s ease;
}
.add-container .name-container input:focus,
.add-container .name-container select:focus,
.add-container .name-container textarea:focus,
.add-container .priority-container input:focus,
.add-container .priority-container select:focus,
.add-container .priority-container textarea:focus,
.add-container .details-container input:focus,
.add-container .details-container select:focus,
.add-container .details-container textarea:focus {
  outline: none;
  border-color: #e27f4a;
  box-shadow: 0 0 0 3px rgba(226, 127, 74, 0.1);
}
.add-container .name-container input::placeholder,
.add-container .name-container select::placeholder,
.add-container .name-container textarea::placeholder,
.add-container .priority-container input::placeholder,
.add-container .priority-container select::placeholder,
.add-container .priority-container textarea::placeholder,
.add-container .details-container input::placeholder,
.add-container .details-container select::placeholder,
.add-container .details-container textarea::placeholder {
  color: #a0a0a0;
}
.add-container .name-container textarea,
.add-container .priority-container textarea,
.add-container .details-container textarea {
  font-family: "Times New Roman", Times, serif;
  min-height: 100px;
  resize: vertical;
}
.add-btn {
  margin-top: 1.5rem;
  padding: 0.8rem 2rem;
  background-color: #e27f4a;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}
.add-btn:hover {
  background-color: #fca06e;
  transform: translateY(-1px);
}
.add-btn:active {
  transform: translateY(0);
}

.title {
  font-family: "Times New Roman", Times, serif;
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 600;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #f8f8f8;
  border: 1px solid #e1e4e8;
  border-radius: 8px;
  font-family: "Times New Roman", Times, serif;
  transition: all 0.3s ease;
  gap: 0.75rem;
  position: relative;
}
.task-item:hover {
  background-color: #f1f1f1;
}
.task-item.completed {
  color: grey;
  text-decoration: line-through;
}
.task-item .task-name {
  font-size: 1.1rem;
  font-weight: 500;
  max-width: 50%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.task-item button {
  padding: 0.5rem 1rem;
  background-color: #e27f4a;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 0.5rem;
  white-space: nowrap;
}
.task-item button:hover {
  background-color: #fca06e;
  transform: translateY(-1px);
}
.task-item button:active {
  transform: translateY(0);
}
.task-item input[type=checkbox] {
  position: relative;
  z-index: 2;
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin-right: 1rem;
  flex-shrink: 0;
}

#task-list {
  margin-top: 2rem;
  padding: 0;
  list-style: none;
}`, "",{"version":3,"sources":["webpack://./sass/_start.scss","webpack://./sass/style.scss","webpack://./sass/_add.scss"],"names":[],"mappings":"AAAA;EACI,sBAAA;EACA,SAAA;ACCJ;;ADEA;EACI,WAAA;ACCJ;;ADEA;EACI,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;ACCJ;;ACdA;EACI,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,yCAAA;EACA,4CAAA;ADiBJ;ACfI;EACI,aAAA;EACA,sBAAA;EACA,WAAA;ADiBR;ACfQ;;;EAGI,aAAA;EACA,sBAAA;EACA,WAAA;ADiBZ;ACfY;;;EACI,iBAAA;EACA,WAAA;EACA,gBAAA;ADmBhB;AChBY;;;;;;;;;EAGI,eAAA;EACA,yBAAA;EACA,kBAAA;EACA,yBAAA;EACA,eAAA;EACA,yBAAA;ADwBhB;ACtBgB;;;;;;;;;EACI,aAAA;EACA,qBAAA;EACA,6CAAA;ADgCpB;AC7BgB;;;;;;;;;EACI,cAAA;ADuCpB;ACnCY;;;EACI,4CAAA;EACA,iBAAA;EACA,gBAAA;ADuChB;AClCI;EACI,kBAAA;EACA,oBAAA;EACA,yBAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,eAAA;EACA,yBAAA;EACA,WAAA;ADoCR;AClCQ;EACI,yBAAA;EACA,2BAAA;ADoCZ;ACjCQ;EACI,wBAAA;ADmCZ;;AC7BA;EACI,4CAAA;EACA,kBAAA;EACA,WAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;ADgCJ;;AC5BA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,yBAAA;EACA,kBAAA;EACA,4CAAA;EACA,yBAAA;EACA,YAAA;EACA,kBAAA;AD+BJ;AC7BI;EACI,yBAAA;AD+BR;AC5BI;EACI,WAAA;EACA,6BAAA;AD8BR;AC3BI;EACI,iBAAA;EACA,gBAAA;EACA,cAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;AD6BR;AC1BI;EACI,oBAAA;EACA,yBAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,eAAA;EACA,yBAAA;EACA,mBAAA;EACA,mBAAA;AD4BR;AC1BQ;EACI,yBAAA;EACA,2BAAA;AD4BZ;ACzBQ;EACI,wBAAA;AD2BZ;ACvBI;EACI,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,kBAAA;EACA,cAAA;ADyBR;;ACpBA;EACI,gBAAA;EACA,UAAA;EACA,gBAAA;ADuBJ","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n}\r\n\r\n.body {\r\n    color: #000;\r\n}\r\n\r\n.wrapper {\r\n    max-width: 1440px;\r\n    min-width: 320px;\r\n    margin: 0 auto;\r\n    padding: 0 30px;\r\n}","* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\n.body {\n  color: #000;\n}\n\n.wrapper {\n  max-width: 1440px;\n  min-width: 320px;\n  margin: 0 auto;\n  padding: 0 30px;\n}\n\n.add {\n  max-width: 600px;\n  margin: 2rem auto;\n  padding: 2rem;\n  background-color: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  font-family: \"Times New Roman\", Times, serif;\n}\n.add-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.add-container .name-container,\n.add-container .priority-container,\n.add-container .details-container {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.add-container .name-container label,\n.add-container .priority-container label,\n.add-container .details-container label {\n  font-size: 1.2rem;\n  color: #333;\n  font-weight: 500;\n}\n.add-container .name-container input,\n.add-container .name-container select,\n.add-container .name-container textarea,\n.add-container .priority-container input,\n.add-container .priority-container select,\n.add-container .priority-container textarea,\n.add-container .details-container input,\n.add-container .details-container select,\n.add-container .details-container textarea {\n  padding: 0.8rem;\n  border: 1px solid #e1e4e8;\n  border-radius: 8px;\n  background-color: #f8f8f8;\n  font-size: 1rem;\n  transition: all 0.3s ease;\n}\n.add-container .name-container input:focus,\n.add-container .name-container select:focus,\n.add-container .name-container textarea:focus,\n.add-container .priority-container input:focus,\n.add-container .priority-container select:focus,\n.add-container .priority-container textarea:focus,\n.add-container .details-container input:focus,\n.add-container .details-container select:focus,\n.add-container .details-container textarea:focus {\n  outline: none;\n  border-color: #e27f4a;\n  box-shadow: 0 0 0 3px rgba(226, 127, 74, 0.1);\n}\n.add-container .name-container input::placeholder,\n.add-container .name-container select::placeholder,\n.add-container .name-container textarea::placeholder,\n.add-container .priority-container input::placeholder,\n.add-container .priority-container select::placeholder,\n.add-container .priority-container textarea::placeholder,\n.add-container .details-container input::placeholder,\n.add-container .details-container select::placeholder,\n.add-container .details-container textarea::placeholder {\n  color: #a0a0a0;\n}\n.add-container .name-container textarea,\n.add-container .priority-container textarea,\n.add-container .details-container textarea {\n  font-family: \"Times New Roman\", Times, serif;\n  min-height: 100px;\n  resize: vertical;\n}\n.add-btn {\n  margin-top: 1.5rem;\n  padding: 0.8rem 2rem;\n  background-color: #e27f4a;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n.add-btn:hover {\n  background-color: #fca06e;\n  transform: translateY(-1px);\n}\n.add-btn:active {\n  transform: translateY(0);\n}\n\n.title {\n  font-family: \"Times New Roman\", Times, serif;\n  text-align: center;\n  color: #333;\n  margin-bottom: 2rem;\n  font-size: 2rem;\n  font-weight: 600;\n}\n\n.task-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  background-color: #f8f8f8;\n  border: 1px solid #e1e4e8;\n  border-radius: 8px;\n  font-family: \"Times New Roman\", Times, serif;\n  transition: all 0.3s ease;\n  gap: 0.75rem;\n  position: relative;\n}\n.task-item:hover {\n  background-color: #f1f1f1;\n}\n.task-item.completed {\n  color: grey;\n  text-decoration: line-through;\n}\n.task-item .task-name {\n  font-size: 1.1rem;\n  font-weight: 500;\n  max-width: 50%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.task-item button {\n  padding: 0.5rem 1rem;\n  background-color: #e27f4a;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  margin-left: 0.5rem;\n  white-space: nowrap;\n}\n.task-item button:hover {\n  background-color: #fca06e;\n  transform: translateY(-1px);\n}\n.task-item button:active {\n  transform: translateY(0);\n}\n.task-item input[type=checkbox] {\n  position: relative;\n  z-index: 2;\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n  margin-right: 1rem;\n  flex-shrink: 0;\n}\n\n#task-list {\n  margin-top: 2rem;\n  padding: 0;\n  list-style: none;\n}",".add {\r\n    max-width: 600px;\r\n    margin: 2rem auto;\r\n    padding: 2rem;\r\n    background-color: white;\r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    font-family: 'Times New Roman', Times, serif;\r\n\r\n    &-container {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 1.5rem;\r\n\r\n        .name-container,\r\n        .priority-container,\r\n        .details-container {\r\n            display: flex;\r\n            flex-direction: column;\r\n            gap: 0.5rem;\r\n\r\n            label {\r\n                font-size: 1.2rem;\r\n                color: #333;\r\n                font-weight: 500;\r\n            }\r\n\r\n            input,\r\n            select,\r\n            textarea {\r\n                padding: 0.8rem;\r\n                border: 1px solid #e1e4e8;\r\n                border-radius: 8px;\r\n                background-color: #f8f8f8;\r\n                font-size: 1rem;\r\n                transition: all 0.3s ease;\r\n\r\n                &:focus {\r\n                    outline: none;\r\n                    border-color: #e27f4a;\r\n                    box-shadow: 0 0 0 3px rgba(#e27f4a, 0.1);\r\n                }\r\n\r\n                &::placeholder {\r\n                    color: #a0a0a0;\r\n                }\r\n            }\r\n\r\n            textarea {\r\n                font-family: 'Times New Roman', Times, serif;\r\n                min-height: 100px;\r\n                resize: vertical;\r\n            }\r\n        }\r\n    }\r\n\r\n    &-btn {\r\n        margin-top: 1.5rem;\r\n        padding: 0.8rem 2rem;\r\n        background-color: #e27f4a;\r\n        color: white;\r\n        border: none;\r\n        border-radius: 8px;\r\n        font-size: 1rem;\r\n        font-weight: 500;\r\n        cursor: pointer;\r\n        transition: all 0.3s ease;\r\n        width: 100%;\r\n\r\n        &:hover {\r\n            background-color: #fca06e;\r\n            transform: translateY(-1px);\r\n        }\r\n\r\n        &:active {\r\n            transform: translateY(0);\r\n        }\r\n    }\r\n}\r\n\r\n\r\n.title {\r\n    font-family: 'Times New Roman', Times, serif;\r\n    text-align: center;\r\n    color: #333;\r\n    margin-bottom: 2rem;\r\n    font-size: 2rem;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.task-item {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 1rem;\r\n    margin-bottom: 1rem;\r\n    background-color: #f8f8f8;\r\n    border: 1px solid #e1e4e8;\r\n    border-radius: 8px;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    transition: all 0.3s ease;\r\n    gap: 0.75rem;\r\n    position: relative;\r\n\r\n    &:hover {\r\n        background-color: #f1f1f1;\r\n    }\r\n\r\n    &.completed {\r\n        color: grey;\r\n        text-decoration: line-through;\r\n    }\r\n\r\n    .task-name {\r\n        font-size: 1.1rem;\r\n        font-weight: 500;\r\n        max-width: 50%;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n        white-space: nowrap;\r\n    }\r\n\r\n    button {\r\n        padding: 0.5rem 1rem;\r\n        background-color: #e27f4a;\r\n        color: white;\r\n        border: none;\r\n        border-radius: 8px;\r\n        font-size: 1rem;\r\n        cursor: pointer;\r\n        transition: all 0.3s ease;\r\n        margin-left: 0.5rem;\r\n        white-space: nowrap;\r\n\r\n        &:hover {\r\n            background-color: #fca06e;\r\n            transform: translateY(-1px);\r\n        }\r\n\r\n        &:active {\r\n            transform: translateY(0);\r\n        }\r\n    }\r\n\r\n    input[type=\"checkbox\"] {\r\n        position: relative;\r\n        z-index: 2;\r\n        width: 18px;\r\n        height: 18px;\r\n        cursor: pointer;\r\n        margin-right: 1rem;\r\n        flex-shrink: 0;\r\n    }\r\n}\r\n\r\n\r\n#task-list {\r\n    margin-top: 2rem;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./sass/style.scss":
/*!*************************!*\
  !*** ./sass/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./sass/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ "./sass/style.scss");



const inputTaskName = document.getElementById('name');
const selectedPriority = document.getElementById('priority');
const textDetails = document.getElementById('details');
const addButton = document.querySelector('.add-btn');
const taskList = document.getElementById('task-list');


const serverURL = 'http://localhost:5500';


let tasksCache = [];


const loadTasks = async () => {
    const response = await fetch(`${serverURL}/tasks`);
    const tasks = await response.json();
    tasksCache = Array.isArray(tasks) ? tasks.slice() : [];
    updateList(tasks);
}


const updateList = (tasks) => {
    taskList.innerHTML = '';

    const priorities = { high: 1, medium: 2, low: 3 };

    tasks.sort((a, b) => {
        return priorities[a.priority] - priorities[b.priority]
    })

    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        if (task.completed) {
            taskItem.classList.add('completed');
        }

        taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTaskCompletion('${task.name}')">
            <span class="task-name">${task.name}</span> ${task.priority}
            <button onclick="editTask('${task.name}')">Edit</button>
            <button onclick="toggleDetails('${task.name}')">Details</button>
            <button onclick="deleteTask('${task.name}')">Delete</button>
        `;
        taskList.appendChild(taskItem);
    })
}


const addTask = async (event) => {
    event.preventDefault();

    const name = inputTaskName.value.trim();
    const priority = selectedPriority.value;
    const details = textDetails.value.trim();

    if (name && priority && details) {
        const task = { name, priority, details, completed: false };
        await fetch(`${serverURL}/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        })

        inputTaskName.value = '';
        textDetails.value = '';
        loadTasks();
    } else {
        alert('Please fill in all fields');
    }
}


const deleteTask = async (taskName) => {
    await fetch(`${serverURL}/tasks/${taskName}`, { method: 'DELETE' });
    loadTasks();
}


const editTask = async (taskName) => {
    const newName = prompt('Enter new task name:', taskName);
    if (!newName) return;

    const newDetails = prompt('Enter new task details:');
    if (newDetails == null) return;

    await fetch(`${serverURL}/tasks/${taskName}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newName, details: newDetails })
    })
    loadTasks();
}


const showDetails = async (taskName) => {
    const task = tasksCache.find(t => t.name === taskName);
    if (task) {
        alert(`Details for "${task.name}":\n\n${task.details || '(no details)'}`);
    } else {
        const response = await fetch(`${serverURL}/tasks`);
        const tasks = await response.json();
        tasksCache = Array.isArray(tasks) ? tasks.slice() : [];
        const t = tasksCache.find(task => task.name === taskName);
        if (task) {
            alert(`Details for "${task.name}":\n\n${t.details || '(no details)'}`)
        }
    }
}


const toggleTaskCompletion = async (taskName) => {
    const index = tasksCache.findIndex(task => task.name === taskName);

    if (index !== -1) {
        const prev = tasksCache[index].completed;
        tasksCache[index].completed = !prev;
        updateList(tasksCache);

        await fetch(`${serverURL}/tasks/${taskName}/complete`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        })

        loadTasks();
    } else {
        await fetch(`${serverURL}/tasks/${taskName}/complete`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        })

        loadTasks();
    }
}


window.deleteTask = deleteTask;
window.editTask = editTask;
window.toggleTaskCompletion = toggleTaskCompletion;
window.toggleDetails = showDetails;

addButton.addEventListener('click', addTask);
window.addEventListener('load', loadTasks);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map