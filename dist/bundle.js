(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.JSONSchemaView = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    var installedModules = {};
    return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
    __webpack_require__.i = function(value) {
        return value;
    }, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            configurable: !1,
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "dist", __webpack_require__(__webpack_require__.s = 6);
}([ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(5), __WEBPACK_IMPORTED_MODULE_1__style_less__ = __webpack_require__(4), DATE_STRING_REGEX = (__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_less__), 
    /(^\d{1,4}[\.|\\\/|-]\d{1,2}[\.|\\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/), PARTIAL_DATE_REGEX = /\d{2}:\d{2}:\d{2} GMT-\d{4}/, JSON_DATE_REGEX = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/, requestAnimationFrame = window.requestAnimationFrame || function(cb) {
        return cb(), 0;
    }, _defaultConfig = {
        hoverPreviewEnabled: !1,
        hoverPreviewArrayCount: 100,
        hoverPreviewFieldCount: 5,
        animateOpen: !0,
        animateClose: !0,
        theme: null
    }, JSONFormatter = function() {
        function JSONFormatter(json, open, config, key) {
            void 0 === open && (open = 1), void 0 === config && (config = _defaultConfig), this.json = json, 
            this.open = open, this.config = config, this.key = key, this._isOpen = null, void 0 === this.config.hoverPreviewEnabled && (this.config.hoverPreviewEnabled = _defaultConfig.hoverPreviewEnabled), 
            void 0 === this.config.hoverPreviewArrayCount && (this.config.hoverPreviewArrayCount = _defaultConfig.hoverPreviewArrayCount), 
            void 0 === this.config.hoverPreviewFieldCount && (this.config.hoverPreviewFieldCount = _defaultConfig.hoverPreviewFieldCount);
        }
        return Object.defineProperty(JSONFormatter.prototype, "isOpen", {
            get: function() {
                return null !== this._isOpen ? this._isOpen : this.open > 0;
            },
            set: function(value) {
                this._isOpen = value;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "isDate", {
            get: function() {
                return "string" === this.type && (DATE_STRING_REGEX.test(this.json) || JSON_DATE_REGEX.test(this.json) || PARTIAL_DATE_REGEX.test(this.json));
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "isUrl", {
            get: function() {
                return "string" === this.type && 0 === this.json.indexOf("http");
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "isArray", {
            get: function() {
                return Array.isArray(this.json);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "isObject", {
            get: function() {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.a)(this.json);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "isEmptyObject", {
            get: function() {
                return !this.keys.length && !this.isArray;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "isEmpty", {
            get: function() {
                return this.isEmptyObject || this.keys && !this.keys.length && this.isArray;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "hasKey", {
            get: function() {
                return void 0 !== this.key;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "constructorName", {
            get: function() {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.b)(this.json);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "type", {
            get: function() {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.c)(this.json);
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(JSONFormatter.prototype, "keys", {
            get: function() {
                return this.isObject ? Object.keys(this.json).map(function(key) {
                    return key || '""';
                }) : [];
            },
            enumerable: !0,
            configurable: !0
        }), JSONFormatter.prototype.toggleOpen = function() {
            this.isOpen = !this.isOpen, this.element && (this.isOpen ? this.appendChildren(this.config.animateOpen) : this.removeChildren(this.config.animateClose), 
            this.element.classList.toggle(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.d)("open")));
        }, JSONFormatter.prototype.openAtDepth = function(depth) {
            void 0 === depth && (depth = 1), depth < 0 || (this.open = depth, this.isOpen = 0 !== depth, 
            this.element && (this.removeChildren(!1), 0 === depth ? this.element.classList.remove(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.d)("open")) : (this.appendChildren(this.config.animateOpen), 
            this.element.classList.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.d)("open")))));
        }, JSONFormatter.prototype.getInlinepreview = function() {
            var _this = this;
            if (this.isArray) return this.json.length > this.config.hoverPreviewArrayCount ? "Array[" + this.json.length + "]" : "[" + this.json.map(__WEBPACK_IMPORTED_MODULE_0__helpers__.e).join(", ") + "]";
            var keys = this.keys, narrowKeys = keys.slice(0, this.config.hoverPreviewFieldCount), kvs = narrowKeys.map(function(key) {
                return key + ":" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.e)(_this.json[key]);
            }), ellipsis = keys.length >= this.config.hoverPreviewFieldCount ? "…" : "";
            return "{" + kvs.join(", ") + ellipsis + "}";
        }, JSONFormatter.prototype.render = function() {
            this.element = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.f)("div", "row");
            var togglerLink = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.f)("a", "toggler-link");
            if (this.isObject && togglerLink.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.f)("span", "toggler")), 
            this.hasKey && togglerLink.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.f)("span", "key", this.key + ":")), 
            this.isObject) {
                var value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.f)("span", "value"), objectWrapperSpan = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.f)("span"), constructorName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.f)("span", "constructor-name", this.constructorName);
                if (objectWrapperSpan.appendChild(constructorName), this.isArray) {
                    var arrayWrapperSpan = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.f)("span");
                    arrayWrapperSpan.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.f)("span", "bracket", "[")), 
                    arrayWrapperSpan.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.f)("span", "number", this.json.length)), 
                    arrayWrapperSpan.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.f)("span", "bracket", "]")), 
                    objectWrapperSpan.appendChild(arrayWrapperSpan);
                }
                value.appendChild(objectWrapperSpan), togglerLink.appendChild(value);
            } else {
                var value = this.isUrl ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.f)("a") : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.f)("span");
                value.classList.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.d)(this.type)), 
                this.isDate && value.classList.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.d)("date")), 
                this.isUrl && (value.classList.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.d)("url")), 
                value.setAttribute("href", this.json));
                var valuePreview = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.g)(this.json, this.json);
                value.appendChild(document.createTextNode(valuePreview)), togglerLink.appendChild(value);
            }
            if (this.isObject && this.config.hoverPreviewEnabled) {
                var preview = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.f)("span", "preview-text");
                preview.appendChild(document.createTextNode(this.getInlinepreview())), togglerLink.appendChild(preview);
            }
            var children = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.f)("div", "children");
            return this.isObject && children.classList.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.d)("object")), 
            this.isArray && children.classList.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.d)("array")), 
            this.isEmpty && children.classList.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.d)("empty")), 
            this.config && this.config.theme && this.element.classList.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.d)(this.config.theme)), 
            this.isOpen && this.element.classList.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.d)("open")), 
            this.element.appendChild(togglerLink), this.element.appendChild(children), this.isObject && this.isOpen && this.appendChildren(), 
            this.isObject && togglerLink.addEventListener("click", this.toggleOpen.bind(this)), 
            this.element;
        }, JSONFormatter.prototype.appendChildren = function(animated) {
            var _this = this;
            void 0 === animated && (animated = !1);
            var children = this.element.querySelector("div." + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.d)("children"));
            if (children && !this.isEmpty) if (animated) {
                var index_1 = 0, addAChild_1 = function() {
                    var key = _this.keys[index_1], formatter = new JSONFormatter(_this.json[key], _this.open - 1, _this.config, key);
                    children.appendChild(formatter.render()), (index_1 += 1) < _this.keys.length && (index_1 > 10 ? addAChild_1() : requestAnimationFrame(addAChild_1));
                };
                requestAnimationFrame(addAChild_1);
            } else this.keys.forEach(function(key) {
                var formatter = new JSONFormatter(_this.json[key], _this.open - 1, _this.config, key);
                children.appendChild(formatter.render());
            });
        }, JSONFormatter.prototype.removeChildren = function(animated) {
            void 0 === animated && (animated = !1);
            var childrenElement = this.element.querySelector("div." + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__.d)("children"));
            if (animated) {
                var childrenRemoved_1 = 0, removeAChild_1 = function() {
                    childrenElement && childrenElement.children.length && (childrenElement.removeChild(childrenElement.children[0]), 
                    childrenRemoved_1 += 1, childrenRemoved_1 > 10 ? removeAChild_1() : requestAnimationFrame(removeAChild_1));
                };
                requestAnimationFrame(removeAChild_1);
            } else childrenElement && (childrenElement.innerHTML = "");
        }, JSONFormatter;
    }();
    __webpack_exports__.default = JSONFormatter;
}, function(module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__(2)(), exports.push([ module.i, '.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-row,\n.json-formatter-row a,\n.json-formatter-row a:hover {\n  color: black;\n  text-decoration: none;\n}\n.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-row .json-formatter-string {\n  color: green;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-row .json-formatter-number {\n  color: blue;\n}\n.json-formatter-row .json-formatter-boolean {\n  color: red;\n}\n.json-formatter-row .json-formatter-null {\n  color: #855A00;\n}\n.json-formatter-row .json-formatter-undefined {\n  color: #ca0b69;\n}\n.json-formatter-row .json-formatter-function {\n  color: #FF20ED;\n}\n.json-formatter-row .json-formatter-date {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: blue;\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-bracket {\n  color: blue;\n}\n.json-formatter-row .json-formatter-key {\n  color: #00008B;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-constructor-name {\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: "\\25BA";\n}\n.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n.json-formatter-dark.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-dark.json-formatter-row,\n.json-formatter-dark.json-formatter-row a,\n.json-formatter-dark.json-formatter-row a:hover {\n  color: white;\n  text-decoration: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-string {\n  color: #31F031;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-number {\n  color: #66C2FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-boolean {\n  color: #EC4242;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-null {\n  color: #EEC97D;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-undefined {\n  color: #ef8fbe;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-function {\n  color: #FD48CB;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-date {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.json-formatter-dark.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: #027BFF;\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-bracket {\n  color: #9494FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-key {\n  color: #23A0DB;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-constructor-name {\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: "\\25BA";\n}\n.json-formatter-dark.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-dark.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n', "" ]);
}, function(module, exports) {
    module.exports = function() {
        var list = [];
        return list.toString = function() {
            for (var result = [], i = 0; i < this.length; i++) {
                var item = this[i];
                item[2] ? result.push("@media " + item[2] + "{" + item[1] + "}") : result.push(item[1]);
            }
            return result.join("");
        }, list.i = function(modules, mediaQuery) {
            "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
            for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                var id = this[i][0];
                "number" == typeof id && (alreadyImportedModules[id] = !0);
            }
            for (i = 0; i < modules.length; i++) {
                var item = modules[i];
                "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 
                list.push(item));
            }
        }, list;
    };
}, function(module, exports) {
    function addStylesToDom(styles, options) {
        for (var i = 0; i < styles.length; i++) {
            var item = styles[i], domStyle = stylesInDom[item.id];
            if (domStyle) {
                domStyle.refs++;
                for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);
                for (;j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j], options));
            } else {
                for (var parts = [], j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j], options));
                stylesInDom[item.id] = {
                    id: item.id,
                    refs: 1,
                    parts: parts
                };
            }
        }
    }
    function listToStyles(list) {
        for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {
            var item = list[i], id = item[0], css = item[1], media = item[2], sourceMap = item[3], part = {
                css: css,
                media: media,
                sourceMap: sourceMap
            };
            newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {
                id: id,
                parts: [ part ]
            });
        }
        return styles;
    }
    function insertStyleElement(options, styleElement) {
        var head = getHeadElement(), lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
        if ("top" === options.insertAt) lastStyleElementInsertedAtTop ? lastStyleElementInsertedAtTop.nextSibling ? head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling) : head.appendChild(styleElement) : head.insertBefore(styleElement, head.firstChild), 
        styleElementsInsertedAtTop.push(styleElement); else {
            if ("bottom" !== options.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            head.appendChild(styleElement);
        }
    }
    function removeStyleElement(styleElement) {
        styleElement.parentNode.removeChild(styleElement);
        var idx = styleElementsInsertedAtTop.indexOf(styleElement);
        idx >= 0 && styleElementsInsertedAtTop.splice(idx, 1);
    }
    function createStyleElement(options) {
        var styleElement = document.createElement("style");
        return styleElement.type = "text/css", insertStyleElement(options, styleElement), 
        styleElement;
    }
    function createLinkElement(options) {
        var linkElement = document.createElement("link");
        return linkElement.rel = "stylesheet", insertStyleElement(options, linkElement), 
        linkElement;
    }
    function addStyle(obj, options) {
        var styleElement, update, remove;
        if (options.singleton) {
            var styleIndex = singletonCounter++;
            styleElement = singletonElement || (singletonElement = createStyleElement(options)), 
            update = applyToSingletonTag.bind(null, styleElement, styleIndex, !1), remove = applyToSingletonTag.bind(null, styleElement, styleIndex, !0);
        } else obj.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (styleElement = createLinkElement(options), 
        update = updateLink.bind(null, styleElement), remove = function() {
            removeStyleElement(styleElement), styleElement.href && URL.revokeObjectURL(styleElement.href);
        }) : (styleElement = createStyleElement(options), update = applyToTag.bind(null, styleElement), 
        remove = function() {
            removeStyleElement(styleElement);
        });
        return update(obj), function(newObj) {
            if (newObj) {
                if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;
                update(obj = newObj);
            } else remove();
        };
    }
    function applyToSingletonTag(styleElement, index, remove, obj) {
        var css = remove ? "" : obj.css;
        if (styleElement.styleSheet) styleElement.styleSheet.cssText = replaceText(index, css); else {
            var cssNode = document.createTextNode(css), childNodes = styleElement.childNodes;
            childNodes[index] && styleElement.removeChild(childNodes[index]), childNodes.length ? styleElement.insertBefore(cssNode, childNodes[index]) : styleElement.appendChild(cssNode);
        }
    }
    function applyToTag(styleElement, obj) {
        var css = obj.css, media = obj.media;
        if (media && styleElement.setAttribute("media", media), styleElement.styleSheet) styleElement.styleSheet.cssText = css; else {
            for (;styleElement.firstChild; ) styleElement.removeChild(styleElement.firstChild);
            styleElement.appendChild(document.createTextNode(css));
        }
    }
    function updateLink(linkElement, obj) {
        var css = obj.css, sourceMap = obj.sourceMap;
        sourceMap && (css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */");
        var blob = new Blob([ css ], {
            type: "text/css"
        }), oldSrc = linkElement.href;
        linkElement.href = URL.createObjectURL(blob), oldSrc && URL.revokeObjectURL(oldSrc);
    }
    var stylesInDom = {}, memoize = function(fn) {
        var memo;
        return function() {
            return void 0 === memo && (memo = fn.apply(this, arguments)), memo;
        };
    }, isOldIE = memoize(function() {
        return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
    }), getHeadElement = memoize(function() {
        return document.head || document.getElementsByTagName("head")[0];
    }), singletonElement = null, singletonCounter = 0, styleElementsInsertedAtTop = [];
    module.exports = function(list, options) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        options = options || {}, void 0 === options.singleton && (options.singleton = isOldIE()), 
        void 0 === options.insertAt && (options.insertAt = "bottom");
        var styles = listToStyles(list);
        return addStylesToDom(styles, options), function(newList) {
            for (var mayRemove = [], i = 0; i < styles.length; i++) {
                var item = styles[i], domStyle = stylesInDom[item.id];
                domStyle.refs--, mayRemove.push(domStyle);
            }
            if (newList) {
                addStylesToDom(listToStyles(newList), options);
            }
            for (var i = 0; i < mayRemove.length; i++) {
                var domStyle = mayRemove[i];
                if (0 === domStyle.refs) {
                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();
                    delete stylesInDom[domStyle.id];
                }
            }
        };
    };
    var replaceText = function() {
        var textStore = [];
        return function(index, replacement) {
            return textStore[index] = replacement, textStore.filter(Boolean).join("\n");
        };
    }();
}, function(module, exports, __webpack_require__) {
    var content = __webpack_require__(1);
    "string" == typeof content && (content = [ [ module.i, content, "" ] ]);
    __webpack_require__(3)(content, {});
    content.locals && (module.exports = content.locals);
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function escapeString(str) {
        return str.replace('"', '"');
    }
    function isObject(value) {
        var type = typeof value;
        return !!value && "object" == type;
    }
    function getObjectName(object) {
        if (void 0 === object) return "";
        if (null === object) return "Object";
        if ("object" == typeof object && !object.constructor) return "Object";
        var funcNameRegex = /function ([^(]*)/, results = funcNameRegex.exec(object.constructor.toString());
        return results && results.length > 1 ? results[1] : "";
    }
    function getType(object) {
        return null === object ? "null" : typeof object;
    }
    function getValuePreview(object, value) {
        var type = getType(object);
        return "null" === type || "undefined" === type ? type : ("string" === type && (value = '"' + escapeString(value) + '"'), 
        "function" === type ? object.toString().replace(/[\r\n]/g, "").replace(/\{.*\}/, "") + "{…}" : value);
    }
    function getPreview(object) {
        var value = "";
        return isObject(object) ? (value = getObjectName(object), Array.isArray(object) && (value += "[" + object.length + "]")) : value = getValuePreview(object, object), 
        value;
    }
    function cssClass(className) {
        return "json-formatter-" + className;
    }
    function createElement(type, className, content) {
        var el = document.createElement(type);
        return className && el.classList.add(cssClass(className)), void 0 !== content && (content instanceof Node ? el.appendChild(content) : el.appendChild(document.createTextNode(String(content)))), 
        el;
    }
    __webpack_exports__.a = isObject, __webpack_exports__.b = getObjectName, __webpack_exports__.c = getType, 
    __webpack_exports__.g = getValuePreview, __webpack_exports__.e = getPreview, __webpack_exports__.d = cssClass, 
    __webpack_exports__.f = createElement;
}, function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(0);
} ]);

},{}],2:[function(require,module,exports){
'use strict';
/*
 * Converts anyOf, allOf and oneOf to human readable string
*/
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.convertXOf = convertXOf;
exports._if = _if;

function convertXOf(type) {
  return type.substring(0, 3) + ' of';
}

/*
 * if condition for ES6 template strings
 * to be used only in template string
 *
 * @example mystr = `Random is ${_if(Math.random() > 0.5)`greater than 0.5``
 *
 * @param {boolean} condition
 *
 * @returns {function} the template function
*/

function _if(condition) {
  return condition ? normal : empty;
}

function empty() {
  return '';
}
function normal(template) {
  for (var _len = arguments.length, expressions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    expressions[_key - 1] = arguments[_key];
  }

  return template.slice(1).reduce(function (accumulator, part, i) {
    return accumulator + expressions[i] + part;
  }, template[0]);
}

},{}],3:[function(require,module,exports){
'use strict';

/* globals JSONSchemaView */

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _templateObject = _taggedTemplateLiteral(['\n        <div class="any">\n          ', '\n\n          <span class="type type-any">&lt;any&gt;</span>\n\n          ', '\n        </div>\n      '], ['\n        <div class="any">\n          ', '\n\n          <span class="type type-any">&lt;any&gt;</span>\n\n          ', '\n        </div>\n      ']),
    _templateObject2 = _taggedTemplateLiteral(['\n            <a class="title"><span class="toggle-handle"></span>', ' </a>\n          '], ['\n            <a class="title"><span class="toggle-handle"></span>', ' </a>\n          ']),
    _templateObject3 = _taggedTemplateLiteral(['\n            <div class="inner description">', '</div>\n          '], ['\n            <div class="inner description">', '</div>\n          ']),
    _templateObject4 = _taggedTemplateLiteral(['\n        <div class="primitive">\n          ', '\n\n            <span class="type">', '</span>\n\n          ', '\n\n          ', '\n\n          ', ' \n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n        </div>\n      '], ['\n        <div class="primitive">\n          ', '\n\n            <span class="type">', '</span>\n\n          ', '\n\n          ', '\n\n          ', ' \n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n        </div>\n      ']),
    _templateObject5 = _taggedTemplateLiteral(['\n            <span class="required">*</span>\n          '], ['\n            <span class="required">*</span>\n          ']),
    _templateObject6 = _taggedTemplateLiteral(['\n            <span class="format">(', ')</span>\n          '], ['\n            <span class="format">(', ')</span>\n          ']),
    _templateObject7 = _taggedTemplateLiteral(['\n            <span class="default">default: ', '</span>\n          '], ['\n            <span class="default">default: ', '</span>\n          ']),
    _templateObject8 = _taggedTemplateLiteral(['\n            <span class="range minimum">minimum:', '</span>\n          '], ['\n            <span class="range minimum">minimum:', '</span>\n          ']),
    _templateObject9 = _taggedTemplateLiteral(['\n            <span class="range exclusiveMinimum">(ex)minimum:', '</span>\n          '], ['\n            <span class="range exclusiveMinimum">(ex)minimum:', '</span>\n          ']),
    _templateObject10 = _taggedTemplateLiteral(['\n            <span class="range maximum">maximum:', '</span>\n          '], ['\n            <span class="range maximum">maximum:', '</span>\n          ']),
    _templateObject11 = _taggedTemplateLiteral(['\n            <span class="range exclusiveMaximum">(ex)maximum:', '</span>\n          '], ['\n            <span class="range exclusiveMaximum">(ex)maximum:', '</span>\n          ']),
    _templateObject12 = _taggedTemplateLiteral(['\n            <span class="range minLength">minLength:', '</span>\n          '], ['\n            <span class="range minLength">minLength:', '</span>\n          ']),
    _templateObject13 = _taggedTemplateLiteral(['\n            <span class="range maxLength">maxLength:', '</span>\n          '], ['\n            <span class="range maxLength">maxLength:', '</span>\n          ']),
    _templateObject14 = _taggedTemplateLiteral(['\n            ', '\n          '], ['\n            ', '\n          ']),
    _templateObject15 = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject16 = _taggedTemplateLiteral(['\n        <div class="primitive">\n            <a class="title">', ' </a>\n            <a class="type" href="', '">', '</a>\n        </div>\n      '], ['\n        <div class="primitive">\n            <a class="title">', ' </a>\n            <a class="type" href="', '">', '</a>\n        </div>\n      ']),
    _templateObject17 = _taggedTemplateLiteral(['\n        <div class="array">\n          <a class="title"><span class="toggle-handle"></span>', '<span class="opening bracket">[</span>', '</a>\n          ', '\n          <div class="inner">\n            ', '\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      '], ['\n        <div class="array">\n          <a class="title"><span class="toggle-handle"></span>', '<span class="opening bracket">[</span>', '</a>\n          ', '\n          <div class="inner">\n            ', '\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      ']),
    _templateObject18 = _taggedTemplateLiteral(['<span class="closing bracket">]</span>'], ['<span class="closing bracket">]</span>']),
    _templateObject19 = _taggedTemplateLiteral(['\n          <span>\n            <span title="items range">(', '..', ')</span>\n            ', '\n          </span>\n          '], ['\n          <span>\n            <span title="items range">(', '..', ')</span>\n            ', '\n          </span>\n          ']),
    _templateObject20 = _taggedTemplateLiteral(['<span title="unique" class="uniqueItems">♦</span>'], ['<span title="unique" class="uniqueItems">♦</span>']),
    _templateObject21 = _taggedTemplateLiteral(['\n              <div class="description">', '</div>\n            '], ['\n              <div class="description">', '</div>\n            ']),
    _templateObject22 = _taggedTemplateLiteral(['\n          <span class="closing bracket">]</span>\n          '], ['\n          <span class="closing bracket">]</span>\n          ']),
    _templateObject23 = _taggedTemplateLiteral(['\n        <div class="object">\n          <a class="title"><span\n            class="toggle-handle"></span>', ' <span\n            class="opening brace">{</span>', '</a>\n\n          <div class="inner">\n            ', '\n            <!-- children go here -->\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      '], ['\n        <div class="object">\n          <a class="title"><span\n            class="toggle-handle"></span>', ' <span\n            class="opening brace">{</span>', '</a>\n\n          <div class="inner">\n            ', '\n            <!-- children go here -->\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      ']),
    _templateObject24 = _taggedTemplateLiteral(['\n              <span class="closing brace" ng-if="isCollapsed">}</span>\n          '], ['\n              <span class="closing brace" ng-if="isCollapsed">}</span>\n          ']),
    _templateObject25 = _taggedTemplateLiteral(['\n          <span class="closing brace">}</span>\n          '], ['\n          <span class="closing brace">}</span>\n          ']),
    _templateObject26 = _taggedTemplateLiteral(['\n        <div class="inner enums">\n          <b>Enum:</b>\n        </div>\n      '], ['\n        <div class="inner enums">\n          <b>Enum:</b>\n        </div>\n      ']);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _jsonFormatterJs = require('json-formatter-js');

var _jsonFormatterJs2 = _interopRequireDefault(_jsonFormatterJs);

var _helpersJs = require('./helpers.js');

/**
 * @class JSONSchemaView
 *
 * A pure JavaScript component for rendering JSON Schema in HTML.
*/

var JSONSchemaView = (function () {

  /**
   * @param {object} schema The JSON Schema object
   *
   * @param {number} [open=1] his number indicates up to how many levels the
   * rendered tree should expand. Set it to `0` to make the whole tree collapsed
   * or set it to `Infinity` to expand the tree deeply
   * @param {object} options.
   *  theme {string}: one of the following options: ['dark']
  *  showRefs {boolean}: to render refs as is. Default is false. 
  */

  function JSONSchemaView(schema, open) {
    var _this = this;

    var options = arguments.length <= 2 || arguments[2] === undefined ? { theme: null, showRefs: false } : arguments[2];

    _classCallCheck(this, JSONSchemaView);

    this.schema = schema;
    this.open = open;
    this.options = options;
    this.isCollapsed = open <= 0;

    // if schema is an empty object which means any JOSN
    this.isAny = typeof schema === 'object' && !Array.isArray(schema) && !Object.keys(schema).filter(function (k) {
      return ['title', 'description'].indexOf(k) === -1;
    }).length;

    // Determine if a schema is an array
    this.isArray = !this.isAny && this.schema && this.schema.type === 'array';

    this.isObject = this.schema && (this.schema.type === 'object' || this.schema.properties || this.schema.anyOf || this.schema.oneof || this.schema.allOf);

    // Determine if the schema is a ref
    this.isRef = this.options.showRefs && '$ref' in this.schema;

    // Determine if a schema is a primitive
    this.isPrimitive = !this.isAny && !this.isArray && !this.isObject && !this.isRef;

    //
    this.showToggle = this.schema.description || this.schema.title || this.isPrimitive && (this.schema.minimum || this.schema.maximum || this.schema.exclusiveMinimum || this.schema.exclusiveMaximum || this.schema.format || this.schema['default'] || this.schema.minLength || this.schema.maxLength || this.schema['enum']);

    // populate isRequired property down to properties
    if (this.schema && Array.isArray(this.schema.required)) {
      this.schema.required.forEach(function (requiredProperty) {
        if (typeof _this.schema.properties[requiredProperty] === 'object') {
          _this.schema.properties[requiredProperty].isRequired = true;
        }
      });
    }
  }

  /*
   * Returns the template with populated properties.
   * This template does not have the children
  */

  _createClass(JSONSchemaView, [{
    key: 'template',
    value: function template() {
      if (!this.schema) {
        return '';
      }

      return ('\n      <!-- Any -->\n      ' + (0, _helpersJs._if)(this.isAny)(_templateObject, (0, _helpersJs._if)(this.showToggle)(_templateObject2, this.schema.title || ''), (0, _helpersJs._if)(this.schema.description && !this.isCollapsed)(_templateObject3, this.schema.description)) + '\n\n      <!-- Primitive -->\n      ' + (0, _helpersJs._if)(this.isPrimitive)(_templateObject4, (0, _helpersJs._if)(this.showToggle)(_templateObject2, this.schema.title || ''), this.schema.type, (0, _helpersJs._if)(this.schema.isRequired)(_templateObject5), (0, _helpersJs._if)(!this.isCollapsed && this.schema.format)(_templateObject6, this.schema.format), (0, _helpersJs._if)(!this.isCollapsed && this.schema['default'])(_templateObject7, this.schema['default']), (0, _helpersJs._if)(!this.isCollapsed && this.schema.minimum)(_templateObject8, this.schema.minimum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.exclusiveMinimum)(_templateObject9, this.schema.exclusiveMinimum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.maximum)(_templateObject10, this.schema.maximum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.exclusiveMaximum)(_templateObject11, this.schema.exclusiveMaximum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.minLength)(_templateObject12, this.schema.minLength), (0, _helpersJs._if)(!this.isCollapsed && this.schema.maxLength)(_templateObject13, this.schema.maxLength), (0, _helpersJs._if)(this.schema.description && !this.isCollapsed)(_templateObject3, this.schema.description), (0, _helpersJs._if)(!this.isCollapsed && this.schema['enum'])(_templateObject14, this['enum'](this.schema, this.isCollapsed, this.open)), (0, _helpersJs._if)(this.schema.allOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'allOf')), (0, _helpersJs._if)(this.schema.oneOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'oneOf')), (0, _helpersJs._if)(this.schema.anyOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'anyOf'))) + '\n\n      <!-- Ref -->\n      ' + (0, _helpersJs._if)(this.isRef)(_templateObject16, 'Ref', this.schema.$ref, this.schema.$ref) + '\n\n      <!-- Array -->\n      ' + (0, _helpersJs._if)(this.isArray)(_templateObject17, this.schema.title || '', (0, _helpersJs._if)(this.isCollapsed)(_templateObject18), (0, _helpersJs._if)(!this.isCollapsed && (this.schema.uniqueItems || this.schema.minItems || this.schema.maxItems))(_templateObject19, this.schema.minItems || 0, this.schema.maxItems || '∞', (0, _helpersJs._if)(!this.isCollapsed && this.schema.uniqueItems)(_templateObject20)), (0, _helpersJs._if)(!this.isCollapsed && this.schema.description)(_templateObject21, this.schema.description), (0, _helpersJs._if)(!this.isCollapsed && this.schema['enum'])(_templateObject14, this['enum'](this.schema, this.isCollapsed, this.open)), (0, _helpersJs._if)(this.schema.allOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'allOf')), (0, _helpersJs._if)(this.schema.oneOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'oneOf')), (0, _helpersJs._if)(this.schema.anyOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'anyOf')), (0, _helpersJs._if)(!this.isCollapsed)(_templateObject22)) + '\n\n      <!-- Object -->\n      ' + (0, _helpersJs._if)(!this.isPrimitive && !this.isArray && !this.isAny && !this.isRef)(_templateObject23, this.schema.title || '', (0, _helpersJs._if)(this.isCollapsed)(_templateObject24), (0, _helpersJs._if)(!this.isCollapsed && this.schema.description)(_templateObject21, this.schema.description), (0, _helpersJs._if)(!this.isCollapsed && this.schema['enum'])(_templateObject14, this['enum'](this.schema, this.isCollapsed, this.open)), (0, _helpersJs._if)(this.schema.allOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'allOf')), (0, _helpersJs._if)(this.schema.oneOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'oneOf')), (0, _helpersJs._if)(this.schema.anyOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'anyOf')), (0, _helpersJs._if)(!this.isCollapsed)(_templateObject25)) + '\n').replace(/\s*\n/g, '\n').replace(/(\<\!\-\-).+/g, '').trim();
    }

    /*
     * Template for oneOf, anyOf and allOf
    */
  }, {
    key: 'xOf',
    value: function xOf(schema, type) {
      return '\n      <div class="inner ' + type + '">\n        <b>' + (0, _helpersJs.convertXOf)(type) + ':</b>\n      </div>\n    ';
    }

    /*
     * Template for enums
    */
  }, {
    key: 'enum',
    value: function _enum(schema, isCollapsed, open) {
      return '\n      ' + (0, _helpersJs._if)(!isCollapsed && schema['enum'])(_templateObject26) + '\n    ';
    }

    /*
     * Toggles the 'collapsed' state
    */
  }, {
    key: 'toggle',
    value: function toggle() {
      this.isCollapsed = !this.isCollapsed;
      this.render();
    }

    /*
     * Renders the element and returns it
    */
  }, {
    key: 'render',
    value: function render() {
      if (!this.element) {
        this.element = document.createElement('div');
        this.element.classList.add('json-schema-view');
      }

      if (this.isCollapsed) {
        this.element.classList.add('collapsed');
      } else {
        this.element.classList.remove('collapsed');
      }

      if (this.options.theme) {
        this.element.classList.add('json-schema-view-' + this.options.theme);
      }

      this.element.innerHTML = this.template();

      if (!this.schema) {
        return this.element;
      }

      if (!this.isCollapsed) {
        this.appendChildren(this.element);
      }

      // add event listener for toggling
      if (this.element.querySelector('a.title')) {
        this.element.querySelector('a.title').addEventListener('click', this.toggle.bind(this));
      }
      return this.element;
    }

    /*
     * Appends children to given element based on current schema
    */
  }, {
    key: 'appendChildren',
    value: function appendChildren(element) {
      var _this2 = this;

      var inner = element.querySelector('.inner');

      if (!inner) {
        return;
      }

      if (this.schema['enum']) {
        var formatter = new _jsonFormatterJs2['default'](this.schema['enum'], this.open - 1);
        var formatterEl = formatter.render();
        formatterEl.classList.add('inner');
        element.querySelector('.enums.inner').appendChild(formatterEl);
      }

      if (this.isArray) {
        var view = new JSONSchemaView(this.schema.items, this.open - 1);
        inner.appendChild(view.render());
      }

      if (typeof this.schema.properties === 'object') {
        Object.keys(this.schema.properties).forEach(function (propertyName) {
          var property = _this2.schema.properties[propertyName];
          var tempDiv = document.createElement('div');;
          tempDiv.innerHTML = '<div class="property">\n          <span class="name">' + propertyName + ':</span>\n        </div>';
          var view = new JSONSchemaView(property, _this2.open - 1);
          tempDiv.querySelector('.property').appendChild(view.render());

          inner.appendChild(tempDiv.querySelector('.property'));
        });
      }

      if (this.schema.allOf) {
        appendXOf.call(this, 'allOf');
      }
      if (this.schema.oneOf) {
        appendXOf.call(this, 'oneOf');
      }
      if (this.schema.anyOf) {
        appendXOf.call(this, 'anyOf');
      }

      function appendXOf(type) {
        var _this3 = this;

        var innerAllOf = element.querySelector('.inner.' + type);

        this.schema[type].forEach(function (schema) {
          var inner = document.createElement('div');
          inner.classList.add('inner');
          var view = new JSONSchemaView(schema, _this3.open - 1);
          inner.appendChild(view.render());
          innerAllOf.appendChild(inner);
        });
      }
    }
  }]);

  return JSONSchemaView;
})();

exports['default'] = JSONSchemaView;
module.exports = exports['default'];

},{"./helpers.js":2,"json-formatter-js":1}]},{},[3])(3)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvanNvbi1mb3JtYXR0ZXItanMvZGlzdC9qc29uLWZvcm1hdHRlci5qcyIsIi9ob21lL3Bhbmthai9hcHBjL2pzb24tc2NoZW1hLXZpZXctanMvc3JjL2hlbHBlcnMuanMiLCIvaG9tZS9wYW5rYWovYXBwYy9qc29uLXNjaGVtYS12aWV3LWpzL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QyxXQUFXLENBQUMsb0JBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUM1RSxvQkFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUM1RSxvQkFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyx3Q0FLaEYsb0JBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFFUSxLQUFLLEVBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHlDQUtqRSxvQkFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUV1QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQXlDLG9CQUFJLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQ3pJLG9CQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQSxBQUFDLENBQUMsb0JBRXRFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxHQUFHLEVBQ3BGLG9CQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxzQkFJakQsb0JBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLG9CQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FJcEQsb0JBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLFFBQUssQ0FBQyxvQkFDeEMsSUFBSSxRQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FHckQsb0JBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FDNUUsb0JBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FDNUUsb0JBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FFNUUsb0JBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLDZEQU8xQixvQkFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsb0JBR2xDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFDdEIsb0JBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFLbkQsb0JBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLG9CQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FLcEQsb0JBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFN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LElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2RCxlQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLG9CQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CLENBQUMsQ0FBQztPQUNKO0tBQ0Y7OztTQW5Wa0IsY0FBYzs7O3FCQUFkLGNBQWMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGVzKSB7XG4gICAgZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuICAgICAgICBpZiAoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuICAgICAgICB2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gICAgICAgICAgICBpOiBtb2R1bGVJZCxcbiAgICAgICAgICAgIGw6ICExLFxuICAgICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pLCBcbiAgICAgICAgbW9kdWxlLmwgPSAhMCwgbW9kdWxlLmV4cG9ydHM7XG4gICAgfVxuICAgIHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4gICAgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXMsIF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXMsIFxuICAgIF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6ICExLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgICAgICBnZXQ6IGdldHRlclxuICAgICAgICB9KTtcbiAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgICAgdmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG1vZHVsZS5kZWZhdWx0O1xuICAgICAgICB9IDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgXCJhXCIsIGdldHRlciksIGdldHRlcjtcbiAgICB9LCBfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7XG4gICAgfSwgX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJkaXN0XCIsIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG59KFsgZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fd2VicGFja19leHBvcnRzX18sIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiAhMFxuICAgIH0pO1xuICAgIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNSksIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fc3R5bGVfbGVzc19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KSwgREFURV9TVFJJTkdfUkVHRVggPSAoX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fc3R5bGVfbGVzc19fKSwgXG4gICAgLyheXFxkezEsNH1bXFwufFxcXFxcXC98LV1cXGR7MSwyfVtcXC58XFxcXFxcL3wtXVxcZHsxLDR9KShcXHMqKD86MD9bMS05XTpbMC01XXwxKD89WzAxMl0pXFxkOlswLTVdKVxcZFxccypbYXBdbSk/JC8pLCBQQVJUSUFMX0RBVEVfUkVHRVggPSAvXFxkezJ9OlxcZHsyfTpcXGR7Mn0gR01ULVxcZHs0fS8sIEpTT05fREFURV9SRUdFWCA9IC9cXGR7NH0tXFxkezJ9LVxcZHsyfVRcXGR7Mn06XFxkezJ9OlxcZHsyfS5cXGR7M31aLywgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbihjYikge1xuICAgICAgICByZXR1cm4gY2IoKSwgMDtcbiAgICB9LCBfZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgICAgaG92ZXJQcmV2aWV3RW5hYmxlZDogITEsXG4gICAgICAgIGhvdmVyUHJldmlld0FycmF5Q291bnQ6IDEwMCxcbiAgICAgICAgaG92ZXJQcmV2aWV3RmllbGRDb3VudDogNSxcbiAgICAgICAgYW5pbWF0ZU9wZW46ICEwLFxuICAgICAgICBhbmltYXRlQ2xvc2U6ICEwLFxuICAgICAgICB0aGVtZTogbnVsbFxuICAgIH0sIEpTT05Gb3JtYXR0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZnVuY3Rpb24gSlNPTkZvcm1hdHRlcihqc29uLCBvcGVuLCBjb25maWcsIGtleSkge1xuICAgICAgICAgICAgdm9pZCAwID09PSBvcGVuICYmIChvcGVuID0gMSksIHZvaWQgMCA9PT0gY29uZmlnICYmIChjb25maWcgPSBfZGVmYXVsdENvbmZpZyksIHRoaXMuanNvbiA9IGpzb24sIFxuICAgICAgICAgICAgdGhpcy5vcGVuID0gb3BlbiwgdGhpcy5jb25maWcgPSBjb25maWcsIHRoaXMua2V5ID0ga2V5LCB0aGlzLl9pc09wZW4gPSBudWxsLCB2b2lkIDAgPT09IHRoaXMuY29uZmlnLmhvdmVyUHJldmlld0VuYWJsZWQgJiYgKHRoaXMuY29uZmlnLmhvdmVyUHJldmlld0VuYWJsZWQgPSBfZGVmYXVsdENvbmZpZy5ob3ZlclByZXZpZXdFbmFibGVkKSwgXG4gICAgICAgICAgICB2b2lkIDAgPT09IHRoaXMuY29uZmlnLmhvdmVyUHJldmlld0FycmF5Q291bnQgJiYgKHRoaXMuY29uZmlnLmhvdmVyUHJldmlld0FycmF5Q291bnQgPSBfZGVmYXVsdENvbmZpZy5ob3ZlclByZXZpZXdBcnJheUNvdW50KSwgXG4gICAgICAgICAgICB2b2lkIDAgPT09IHRoaXMuY29uZmlnLmhvdmVyUHJldmlld0ZpZWxkQ291bnQgJiYgKHRoaXMuY29uZmlnLmhvdmVyUHJldmlld0ZpZWxkQ291bnQgPSBfZGVmYXVsdENvbmZpZy5ob3ZlclByZXZpZXdGaWVsZENvdW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLCBcImlzT3BlblwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsICE9PSB0aGlzLl9pc09wZW4gPyB0aGlzLl9pc09wZW4gOiB0aGlzLm9wZW4gPiAwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc09wZW4gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKU09ORm9ybWF0dGVyLnByb3RvdHlwZSwgXCJpc0RhdGVcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIiA9PT0gdGhpcy50eXBlICYmIChEQVRFX1NUUklOR19SRUdFWC50ZXN0KHRoaXMuanNvbikgfHwgSlNPTl9EQVRFX1JFR0VYLnRlc3QodGhpcy5qc29uKSB8fCBQQVJUSUFMX0RBVEVfUkVHRVgudGVzdCh0aGlzLmpzb24pKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKU09ORm9ybWF0dGVyLnByb3RvdHlwZSwgXCJpc1VybFwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiID09PSB0aGlzLnR5cGUgJiYgMCA9PT0gdGhpcy5qc29uLmluZGV4T2YoXCJodHRwXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLCBcImlzQXJyYXlcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLmpzb24pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLCBcImlzT2JqZWN0XCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5hKSh0aGlzLmpzb24pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLCBcImlzRW1wdHlPYmplY3RcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRoaXMua2V5cy5sZW5ndGggJiYgIXRoaXMuaXNBcnJheTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKU09ORm9ybWF0dGVyLnByb3RvdHlwZSwgXCJpc0VtcHR5XCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNFbXB0eU9iamVjdCB8fCB0aGlzLmtleXMgJiYgIXRoaXMua2V5cy5sZW5ndGggJiYgdGhpcy5pc0FycmF5O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLCBcImhhc0tleVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDAgIT09IHRoaXMua2V5O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLCBcImNvbnN0cnVjdG9yTmFtZVwiLCB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uYikodGhpcy5qc29uKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKU09ORm9ybWF0dGVyLnByb3RvdHlwZSwgXCJ0eXBlXCIsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5jKSh0aGlzLmpzb24pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLCBcImtleXNcIiwge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pc09iamVjdCA/IE9iamVjdC5rZXlzKHRoaXMuanNvbikubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5IHx8ICdcIlwiJztcbiAgICAgICAgICAgICAgICB9KSA6IFtdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiAhMFxuICAgICAgICB9KSwgSlNPTkZvcm1hdHRlci5wcm90b3R5cGUudG9nZ2xlT3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW4sIHRoaXMuZWxlbWVudCAmJiAodGhpcy5pc09wZW4gPyB0aGlzLmFwcGVuZENoaWxkcmVuKHRoaXMuY29uZmlnLmFuaW1hdGVPcGVuKSA6IHRoaXMucmVtb3ZlQ2hpbGRyZW4odGhpcy5jb25maWcuYW5pbWF0ZUNsb3NlKSwgXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZCkoXCJvcGVuXCIpKSk7XG4gICAgICAgIH0sIEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLm9wZW5BdERlcHRoID0gZnVuY3Rpb24oZGVwdGgpIHtcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gZGVwdGggJiYgKGRlcHRoID0gMSksIGRlcHRoIDwgMCB8fCAodGhpcy5vcGVuID0gZGVwdGgsIHRoaXMuaXNPcGVuID0gMCAhPT0gZGVwdGgsIFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ICYmICh0aGlzLnJlbW92ZUNoaWxkcmVuKCExKSwgMCA9PT0gZGVwdGggPyB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZCkoXCJvcGVuXCIpKSA6ICh0aGlzLmFwcGVuZENoaWxkcmVuKHRoaXMuY29uZmlnLmFuaW1hdGVPcGVuKSwgXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZCkoXCJvcGVuXCIpKSkpKTtcbiAgICAgICAgfSwgSlNPTkZvcm1hdHRlci5wcm90b3R5cGUuZ2V0SW5saW5lcHJldmlldyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQXJyYXkpIHJldHVybiB0aGlzLmpzb24ubGVuZ3RoID4gdGhpcy5jb25maWcuaG92ZXJQcmV2aWV3QXJyYXlDb3VudCA/IFwiQXJyYXlbXCIgKyB0aGlzLmpzb24ubGVuZ3RoICsgXCJdXCIgOiBcIltcIiArIHRoaXMuanNvbi5tYXAoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZSkuam9pbihcIiwgXCIpICsgXCJdXCI7XG4gICAgICAgICAgICB2YXIga2V5cyA9IHRoaXMua2V5cywgbmFycm93S2V5cyA9IGtleXMuc2xpY2UoMCwgdGhpcy5jb25maWcuaG92ZXJQcmV2aWV3RmllbGRDb3VudCksIGt2cyA9IG5hcnJvd0tleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXkgKyBcIjpcIiArIF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5lKShfdGhpcy5qc29uW2tleV0pO1xuICAgICAgICAgICAgfSksIGVsbGlwc2lzID0ga2V5cy5sZW5ndGggPj0gdGhpcy5jb25maWcuaG92ZXJQcmV2aWV3RmllbGRDb3VudCA/IFwi4oCmXCIgOiBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIFwie1wiICsga3ZzLmpvaW4oXCIsIFwiKSArIGVsbGlwc2lzICsgXCJ9XCI7XG4gICAgICAgIH0sIEpTT05Gb3JtYXR0ZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmYpKFwiZGl2XCIsIFwicm93XCIpO1xuICAgICAgICAgICAgdmFyIHRvZ2dsZXJMaW5rID0gX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmYpKFwiYVwiLCBcInRvZ2dsZXItbGlua1wiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2JqZWN0ICYmIHRvZ2dsZXJMaW5rLmFwcGVuZENoaWxkKF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5mKShcInNwYW5cIiwgXCJ0b2dnbGVyXCIpKSwgXG4gICAgICAgICAgICB0aGlzLmhhc0tleSAmJiB0b2dnbGVyTGluay5hcHBlbmRDaGlsZChfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZikoXCJzcGFuXCIsIFwia2V5XCIsIHRoaXMua2V5ICsgXCI6XCIpKSwgXG4gICAgICAgICAgICB0aGlzLmlzT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmYpKFwic3BhblwiLCBcInZhbHVlXCIpLCBvYmplY3RXcmFwcGVyU3BhbiA9IF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5mKShcInNwYW5cIiksIGNvbnN0cnVjdG9yTmFtZSA9IF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5mKShcInNwYW5cIiwgXCJjb25zdHJ1Y3Rvci1uYW1lXCIsIHRoaXMuY29uc3RydWN0b3JOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0V3JhcHBlclNwYW4uYXBwZW5kQ2hpbGQoY29uc3RydWN0b3JOYW1lKSwgdGhpcy5pc0FycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnJheVdyYXBwZXJTcGFuID0gX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmYpKFwic3BhblwiKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlXcmFwcGVyU3Bhbi5hcHBlbmRDaGlsZChfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZikoXCJzcGFuXCIsIFwiYnJhY2tldFwiLCBcIltcIikpLCBcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlXcmFwcGVyU3Bhbi5hcHBlbmRDaGlsZChfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZikoXCJzcGFuXCIsIFwibnVtYmVyXCIsIHRoaXMuanNvbi5sZW5ndGgpKSwgXG4gICAgICAgICAgICAgICAgICAgIGFycmF5V3JhcHBlclNwYW4uYXBwZW5kQ2hpbGQoX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmYpKFwic3BhblwiLCBcImJyYWNrZXRcIiwgXCJdXCIpKSwgXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFdyYXBwZXJTcGFuLmFwcGVuZENoaWxkKGFycmF5V3JhcHBlclNwYW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZS5hcHBlbmRDaGlsZChvYmplY3RXcmFwcGVyU3BhbiksIHRvZ2dsZXJMaW5rLmFwcGVuZENoaWxkKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5pc1VybCA/IF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5mKShcImFcIikgOiBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZikoXCJzcGFuXCIpO1xuICAgICAgICAgICAgICAgIHZhbHVlLmNsYXNzTGlzdC5hZGQoX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmQpKHRoaXMudHlwZSkpLCBcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGF0ZSAmJiB2YWx1ZS5jbGFzc0xpc3QuYWRkKF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5kKShcImRhdGVcIikpLCBcbiAgICAgICAgICAgICAgICB0aGlzLmlzVXJsICYmICh2YWx1ZS5jbGFzc0xpc3QuYWRkKF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5kKShcInVybFwiKSksIFxuICAgICAgICAgICAgICAgIHZhbHVlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdGhpcy5qc29uKSk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlUHJldmlldyA9IF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5nKSh0aGlzLmpzb24sIHRoaXMuanNvbik7XG4gICAgICAgICAgICAgICAgdmFsdWUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWVQcmV2aWV3KSksIHRvZ2dsZXJMaW5rLmFwcGVuZENoaWxkKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmlzT2JqZWN0ICYmIHRoaXMuY29uZmlnLmhvdmVyUHJldmlld0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJldmlldyA9IF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5mKShcInNwYW5cIiwgXCJwcmV2aWV3LXRleHRcIik7XG4gICAgICAgICAgICAgICAgcHJldmlldy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmdldElubGluZXByZXZpZXcoKSkpLCB0b2dnbGVyTGluay5hcHBlbmRDaGlsZChwcmV2aWV3KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5mKShcImRpdlwiLCBcImNoaWxkcmVuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNPYmplY3QgJiYgY2hpbGRyZW4uY2xhc3NMaXN0LmFkZChfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZCkoXCJvYmplY3RcIikpLCBcbiAgICAgICAgICAgIHRoaXMuaXNBcnJheSAmJiBjaGlsZHJlbi5jbGFzc0xpc3QuYWRkKF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5kKShcImFycmF5XCIpKSwgXG4gICAgICAgICAgICB0aGlzLmlzRW1wdHkgJiYgY2hpbGRyZW4uY2xhc3NMaXN0LmFkZChfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZCkoXCJlbXB0eVwiKSksIFxuICAgICAgICAgICAgdGhpcy5jb25maWcgJiYgdGhpcy5jb25maWcudGhlbWUgJiYgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmQpKHRoaXMuY29uZmlnLnRoZW1lKSksIFxuICAgICAgICAgICAgdGhpcy5pc09wZW4gJiYgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoX193ZWJwYWNrX3JlcXVpcmVfXy5pKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9faGVscGVyc19fLmQpKFwib3BlblwiKSksIFxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRvZ2dsZXJMaW5rKSwgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkcmVuKSwgdGhpcy5pc09iamVjdCAmJiB0aGlzLmlzT3BlbiAmJiB0aGlzLmFwcGVuZENoaWxkcmVuKCksIFxuICAgICAgICAgICAgdGhpcy5pc09iamVjdCAmJiB0b2dnbGVyTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy50b2dnbGVPcGVuLmJpbmQodGhpcykpLCBcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudDtcbiAgICAgICAgfSwgSlNPTkZvcm1hdHRlci5wcm90b3R5cGUuYXBwZW5kQ2hpbGRyZW4gPSBmdW5jdGlvbihhbmltYXRlZCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZvaWQgMCA9PT0gYW5pbWF0ZWQgJiYgKGFuaW1hdGVkID0gITEpO1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmkoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19oZWxwZXJzX18uZCkoXCJjaGlsZHJlblwiKSk7XG4gICAgICAgICAgICBpZiAoY2hpbGRyZW4gJiYgIXRoaXMuaXNFbXB0eSkgaWYgKGFuaW1hdGVkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4XzEgPSAwLCBhZGRBQ2hpbGRfMSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gX3RoaXMua2V5c1tpbmRleF8xXSwgZm9ybWF0dGVyID0gbmV3IEpTT05Gb3JtYXR0ZXIoX3RoaXMuanNvbltrZXldLCBfdGhpcy5vcGVuIC0gMSwgX3RoaXMuY29uZmlnLCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbi5hcHBlbmRDaGlsZChmb3JtYXR0ZXIucmVuZGVyKCkpLCAoaW5kZXhfMSArPSAxKSA8IF90aGlzLmtleXMubGVuZ3RoICYmIChpbmRleF8xID4gMTAgPyBhZGRBQ2hpbGRfMSgpIDogcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFkZEFDaGlsZF8xKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYWRkQUNoaWxkXzEpO1xuICAgICAgICAgICAgfSBlbHNlIHRoaXMua2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZXIgPSBuZXcgSlNPTkZvcm1hdHRlcihfdGhpcy5qc29uW2tleV0sIF90aGlzLm9wZW4gLSAxLCBfdGhpcy5jb25maWcsIGtleSk7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4uYXBwZW5kQ2hpbGQoZm9ybWF0dGVyLnJlbmRlcigpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBKU09ORm9ybWF0dGVyLnByb3RvdHlwZS5yZW1vdmVDaGlsZHJlbiA9IGZ1bmN0aW9uKGFuaW1hdGVkKSB7XG4gICAgICAgICAgICB2b2lkIDAgPT09IGFuaW1hdGVkICYmIChhbmltYXRlZCA9ICExKTtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbkVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2hlbHBlcnNfXy5kKShcImNoaWxkcmVuXCIpKTtcbiAgICAgICAgICAgIGlmIChhbmltYXRlZCkge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlblJlbW92ZWRfMSA9IDAsIHJlbW92ZUFDaGlsZF8xID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuRWxlbWVudCAmJiBjaGlsZHJlbkVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoICYmIChjaGlsZHJlbkVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGRyZW5FbGVtZW50LmNoaWxkcmVuWzBdKSwgXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuUmVtb3ZlZF8xICs9IDEsIGNoaWxkcmVuUmVtb3ZlZF8xID4gMTAgPyByZW1vdmVBQ2hpbGRfMSgpIDogcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbW92ZUFDaGlsZF8xKSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVtb3ZlQUNoaWxkXzEpO1xuICAgICAgICAgICAgfSBlbHNlIGNoaWxkcmVuRWxlbWVudCAmJiAoY2hpbGRyZW5FbGVtZW50LmlubmVySFRNTCA9IFwiXCIpO1xuICAgICAgICB9LCBKU09ORm9ybWF0dGVyO1xuICAgIH0oKTtcbiAgICBfX3dlYnBhY2tfZXhwb3J0c19fLmRlZmF1bHQgPSBKU09ORm9ybWF0dGVyO1xufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKSgpLCBleHBvcnRzLnB1c2goWyBtb2R1bGUuaSwgJy5qc29uLWZvcm1hdHRlci1yb3cge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyxcXG4uanNvbi1mb3JtYXR0ZXItcm93IGEsXFxuLmpzb24tZm9ybWF0dGVyLXJvdyBhOmhvdmVyIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItcm93IHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1jaGlsZHJlbi5qc29uLWZvcm1hdHRlci1lbXB0eSB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItY2hpbGRyZW4uanNvbi1mb3JtYXR0ZXItZW1wdHk6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItY2hpbGRyZW4uanNvbi1mb3JtYXR0ZXItZW1wdHkuanNvbi1mb3JtYXR0ZXItb2JqZWN0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFwiTm8gcHJvcGVydGllc1wiO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1jaGlsZHJlbi5qc29uLWZvcm1hdHRlci1lbXB0eS5qc29uLWZvcm1hdHRlci1hcnJheTphZnRlciB7XFxuICBjb250ZW50OiBcIltdXCI7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLXN0cmluZyB7XFxuICBjb2xvcjogZ3JlZW47XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1udW1iZXIge1xcbiAgY29sb3I6IGJsdWU7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWJvb2xlYW4ge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItbnVsbCB7XFxuICBjb2xvcjogIzg1NUEwMDtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItdW5kZWZpbmVkIHtcXG4gIGNvbG9yOiAjY2EwYjY5O1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1mdW5jdGlvbiB7XFxuICBjb2xvcjogI0ZGMjBFRDtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItZGF0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci11cmwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogYmx1ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItYnJhY2tldCB7XFxuICBjb2xvcjogYmx1ZTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXIta2V5IHtcXG4gIGNvbG9yOiAjMDAwMDhCO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZy1yaWdodDogMC4ycmVtO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1jb25zdHJ1Y3Rvci1uYW1lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItdG9nZ2xlciB7XFxuICBsaW5lLWhlaWdodDogMS4ycmVtO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZy1yaWdodDogMC4ycmVtO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci10b2dnbGVyOmFmdGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlLWluO1xcbiAgY29udGVudDogXCJcXFxcMjVCQVwiO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItcm93ID4gYSA+IC5qc29uLWZvcm1hdHRlci1wcmV2aWV3LXRleHQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZS1pbjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdzpob3ZlciA+IGEgPiAuanNvbi1mb3JtYXR0ZXItcHJldmlldy10ZXh0IHtcXG4gIG9wYWNpdHk6IDAuNjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLXJvdy5qc29uLWZvcm1hdHRlci1vcGVuID4gLmpzb24tZm9ybWF0dGVyLXRvZ2dsZXItbGluayAuanNvbi1mb3JtYXR0ZXItdG9nZ2xlcjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cuanNvbi1mb3JtYXR0ZXItb3BlbiA+IC5qc29uLWZvcm1hdHRlci1jaGlsZHJlbjphZnRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cuanNvbi1mb3JtYXR0ZXItb3BlbiA+IGEgPiAuanNvbi1mb3JtYXR0ZXItcHJldmlldy10ZXh0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5qc29uLWZvcm1hdHRlci1yb3cuanNvbi1mb3JtYXR0ZXItb3Blbi5qc29uLWZvcm1hdHRlci1lbXB0eTphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyxcXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgYSxcXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgYTpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItcm93IHtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWNoaWxkcmVuLmpzb24tZm9ybWF0dGVyLWVtcHR5IHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWNoaWxkcmVuLmpzb24tZm9ybWF0dGVyLWVtcHR5OmFmdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItY2hpbGRyZW4uanNvbi1mb3JtYXR0ZXItZW1wdHkuanNvbi1mb3JtYXR0ZXItb2JqZWN0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFwiTm8gcHJvcGVydGllc1wiO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWNoaWxkcmVuLmpzb24tZm9ybWF0dGVyLWVtcHR5Lmpzb24tZm9ybWF0dGVyLWFycmF5OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFwiW11cIjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1zdHJpbmcge1xcbiAgY29sb3I6ICMzMUYwMzE7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLW51bWJlciB7XFxuICBjb2xvcjogIzY2QzJGRjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1ib29sZWFuIHtcXG4gIGNvbG9yOiAjRUM0MjQyO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLW51bGwge1xcbiAgY29sb3I6ICNFRUM5N0Q7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItdW5kZWZpbmVkIHtcXG4gIGNvbG9yOiAjZWY4ZmJlO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWZ1bmN0aW9uIHtcXG4gIGNvbG9yOiAjRkQ0OENCO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWRhdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci11cmwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogIzAyN0JGRjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1icmFja2V0IHtcXG4gIGNvbG9yOiAjOTQ5NEZGO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cgLmpzb24tZm9ybWF0dGVyLWtleSB7XFxuICBjb2xvcjogIzIzQTBEQjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuMnJlbTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci1jb25zdHJ1Y3Rvci1uYW1lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93IC5qc29uLWZvcm1hdHRlci10b2dnbGVyIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdyAuanNvbi1mb3JtYXR0ZXItdG9nZ2xlcjphZnRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZS1pbjtcXG4gIGNvbnRlbnQ6IFwiXFxcXDI1QkFcIjtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93ID4gYSA+IC5qc29uLWZvcm1hdHRlci1wcmV2aWV3LXRleHQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZS1pbjtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93OmhvdmVyID4gYSA+IC5qc29uLWZvcm1hdHRlci1wcmV2aWV3LXRleHQge1xcbiAgb3BhY2l0eTogMC42O1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cuanNvbi1mb3JtYXR0ZXItb3BlbiA+IC5qc29uLWZvcm1hdHRlci10b2dnbGVyLWxpbmsgLmpzb24tZm9ybWF0dGVyLXRvZ2dsZXI6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG4uanNvbi1mb3JtYXR0ZXItZGFyay5qc29uLWZvcm1hdHRlci1yb3cuanNvbi1mb3JtYXR0ZXItb3BlbiA+IC5qc29uLWZvcm1hdHRlci1jaGlsZHJlbjphZnRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5qc29uLWZvcm1hdHRlci1kYXJrLmpzb24tZm9ybWF0dGVyLXJvdy5qc29uLWZvcm1hdHRlci1vcGVuID4gYSA+IC5qc29uLWZvcm1hdHRlci1wcmV2aWV3LXRleHQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmpzb24tZm9ybWF0dGVyLWRhcmsuanNvbi1mb3JtYXR0ZXItcm93Lmpzb24tZm9ybWF0dGVyLW9wZW4uanNvbi1mb3JtYXR0ZXItZW1wdHk6YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbicsIFwiXCIgXSk7XG59LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbGlzdCA9IFtdO1xuICAgICAgICByZXR1cm4gbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgcmVzdWx0ID0gW10sIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gdGhpc1tpXTtcbiAgICAgICAgICAgICAgICBpdGVtWzJdID8gcmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpIDogcmVzdWx0LnB1c2goaXRlbVsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XG4gICAgICAgIH0sIGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICAgIFwic3RyaW5nXCIgPT0gdHlwZW9mIG1vZHVsZXMgJiYgKG1vZHVsZXMgPSBbIFsgbnVsbCwgbW9kdWxlcywgXCJcIiBdIF0pO1xuICAgICAgICAgICAgZm9yICh2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9LCBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIgPT0gdHlwZW9mIGlkICYmIChhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9ICEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuICAgICAgICAgICAgICAgIFwibnVtYmVyXCIgPT0gdHlwZW9mIGl0ZW1bMF0gJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSB8fCAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSA/IGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5IDogbWVkaWFRdWVyeSAmJiAoaXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiKSwgXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKGl0ZW0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgbGlzdDtcbiAgICB9O1xufSwgZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG4gICAgZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXSwgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICAgICAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICAgICAgICAgIGRvbVN0eWxlLnJlZnMrKztcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgICAgICAgICAgICBmb3IgKDtqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHBhcnRzID0gW10sIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICAgICAgICAgICAgc3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICByZWZzOiAxLFxuICAgICAgICAgICAgICAgICAgICBwYXJ0czogcGFydHNcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG4gICAgICAgIGZvciAodmFyIHN0eWxlcyA9IFtdLCBuZXdTdHlsZXMgPSB7fSwgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGxpc3RbaV0sIGlkID0gaXRlbVswXSwgY3NzID0gaXRlbVsxXSwgbWVkaWEgPSBpdGVtWzJdLCBzb3VyY2VNYXAgPSBpdGVtWzNdLCBwYXJ0ID0ge1xuICAgICAgICAgICAgICAgIGNzczogY3NzLFxuICAgICAgICAgICAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgICAgICAgICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG5ld1N0eWxlc1tpZF0gPyBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCkgOiBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge1xuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICBwYXJ0czogWyBwYXJ0IF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoXCJ0b3BcIiA9PT0gb3B0aW9ucy5pbnNlcnRBdCkgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPyBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyA/IGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIDogaGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpIDogaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpLCBcbiAgICAgICAgc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpOyBlbHNlIHtcbiAgICAgICAgICAgIGlmIChcImJvdHRvbVwiICE9PSBvcHRpb25zLmluc2VydEF0KSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG4gICAgICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAgICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xuICAgICAgICB2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xuICAgICAgICBpZHggPj0gMCAmJiBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgcmV0dXJuIHN0eWxlRWxlbWVudC50eXBlID0gXCJ0ZXh0L2Nzc1wiLCBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSwgXG4gICAgICAgIHN0eWxlRWxlbWVudDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xuICAgICAgICB2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgICAgICAgcmV0dXJuIGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiLCBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpLCBcbiAgICAgICAgbGlua0VsZW1lbnQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICAgICAgICB2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICAgICAgICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpLCBcbiAgICAgICAgICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsICExKSwgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgITApO1xuICAgICAgICB9IGVsc2Ugb2JqLnNvdXJjZU1hcCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFVSTCAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgQmxvYiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGJ0b2EgPyAoc3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyksIFxuICAgICAgICB1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KSwgcmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSwgc3R5bGVFbGVtZW50LmhyZWYgJiYgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XG4gICAgICAgIH0pIDogKHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSwgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCksIFxuICAgICAgICByZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHVwZGF0ZShvYmopLCBmdW5jdGlvbihuZXdPYmopIHtcbiAgICAgICAgICAgIGlmIChuZXdPYmopIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgICAgICAgICB9IGVsc2UgcmVtb3ZlKCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgICAgICAgdmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuICAgICAgICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTsgZWxzZSB7XG4gICAgICAgICAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyksIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcbiAgICAgICAgICAgIGNoaWxkTm9kZXNbaW5kZXhdICYmIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSksIGNoaWxkTm9kZXMubGVuZ3RoID8gc3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSkgOiBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xuICAgICAgICB2YXIgY3NzID0gb2JqLmNzcywgbWVkaWEgPSBvYmoubWVkaWE7XG4gICAgICAgIGlmIChtZWRpYSAmJiBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpLCBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzczsgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKDtzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZDsgKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xuICAgICAgICB2YXIgY3NzID0gb2JqLmNzcywgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgICAgICAgc291cmNlTWFwICYmIChjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCIpO1xuICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFsgY3NzIF0sIHtcbiAgICAgICAgICAgIHR5cGU6IFwidGV4dC9jc3NcIlxuICAgICAgICB9KSwgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcbiAgICAgICAgbGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYiksIG9sZFNyYyAmJiBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG4gICAgfVxuICAgIHZhciBzdHlsZXNJbkRvbSA9IHt9LCBtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgdmFyIG1lbW87XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB2b2lkIDAgPT09IG1lbW8gJiYgKG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSwgbWVtbztcbiAgICAgICAgfTtcbiAgICB9LCBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpO1xuICAgIH0pLCBnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcbiAgICB9KSwgc2luZ2xldG9uRWxlbWVudCA9IG51bGwsIHNpbmdsZXRvbkNvdW50ZXIgPSAwLCBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuICAgIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuICAgICAgICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgREVCVUcgJiYgREVCVUcgJiYgXCJvYmplY3RcIiAhPSB0eXBlb2YgZG9jdW1lbnQpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge30sIHZvaWQgMCA9PT0gb3B0aW9ucy5zaW5nbGV0b24gJiYgKG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpKSwgXG4gICAgICAgIHZvaWQgMCA9PT0gb3B0aW9ucy5pbnNlcnRBdCAmJiAob3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCIpO1xuICAgICAgICB2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuICAgICAgICByZXR1cm4gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSwgZnVuY3Rpb24obmV3TGlzdCkge1xuICAgICAgICAgICAgZm9yICh2YXIgbWF5UmVtb3ZlID0gW10sIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV0sIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG4gICAgICAgICAgICAgICAgZG9tU3R5bGUucmVmcy0tLCBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3TGlzdCkge1xuICAgICAgICAgICAgICAgIGFkZFN0eWxlc1RvRG9tKGxpc3RUb1N0eWxlcyhuZXdMaXN0KSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gZG9tU3R5bGUucmVmcykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdGV4dFN0b3JlID0gW107XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQsIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbihcIlxcblwiKTtcbiAgICAgICAgfTtcbiAgICB9KCk7XG59LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICB2YXIgY29udGVudCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG4gICAgXCJzdHJpbmdcIiA9PSB0eXBlb2YgY29udGVudCAmJiAoY29udGVudCA9IFsgWyBtb2R1bGUuaSwgY29udGVudCwgXCJcIiBdIF0pO1xuICAgIF9fd2VicGFja19yZXF1aXJlX18oMykoY29udGVudCwge30pO1xuICAgIGNvbnRlbnQubG9jYWxzICYmIChtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzKTtcbn0sIGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIGZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKCdcIicsICdcIicpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICAgICAgcmV0dXJuICEhdmFsdWUgJiYgXCJvYmplY3RcIiA9PSB0eXBlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRPYmplY3ROYW1lKG9iamVjdCkge1xuICAgICAgICBpZiAodm9pZCAwID09PSBvYmplY3QpIHJldHVybiBcIlwiO1xuICAgICAgICBpZiAobnVsbCA9PT0gb2JqZWN0KSByZXR1cm4gXCJPYmplY3RcIjtcbiAgICAgICAgaWYgKFwib2JqZWN0XCIgPT0gdHlwZW9mIG9iamVjdCAmJiAhb2JqZWN0LmNvbnN0cnVjdG9yKSByZXR1cm4gXCJPYmplY3RcIjtcbiAgICAgICAgdmFyIGZ1bmNOYW1lUmVnZXggPSAvZnVuY3Rpb24gKFteKF0qKS8sIHJlc3VsdHMgPSBmdW5jTmFtZVJlZ2V4LmV4ZWMob2JqZWN0LmNvbnN0cnVjdG9yLnRvU3RyaW5nKCkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEgPyByZXN1bHRzWzFdIDogXCJcIjtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0VHlwZShvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIG51bGwgPT09IG9iamVjdCA/IFwibnVsbFwiIDogdHlwZW9mIG9iamVjdDtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0VmFsdWVQcmV2aWV3KG9iamVjdCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRUeXBlKG9iamVjdCk7XG4gICAgICAgIHJldHVybiBcIm51bGxcIiA9PT0gdHlwZSB8fCBcInVuZGVmaW5lZFwiID09PSB0eXBlID8gdHlwZSA6IChcInN0cmluZ1wiID09PSB0eXBlICYmICh2YWx1ZSA9ICdcIicgKyBlc2NhcGVTdHJpbmcodmFsdWUpICsgJ1wiJyksIFxuICAgICAgICBcImZ1bmN0aW9uXCIgPT09IHR5cGUgPyBvYmplY3QudG9TdHJpbmcoKS5yZXBsYWNlKC9bXFxyXFxuXS9nLCBcIlwiKS5yZXBsYWNlKC9cXHsuKlxcfS8sIFwiXCIpICsgXCJ74oCmfVwiIDogdmFsdWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRQcmV2aWV3KG9iamVjdCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBcIlwiO1xuICAgICAgICByZXR1cm4gaXNPYmplY3Qob2JqZWN0KSA/ICh2YWx1ZSA9IGdldE9iamVjdE5hbWUob2JqZWN0KSwgQXJyYXkuaXNBcnJheShvYmplY3QpICYmICh2YWx1ZSArPSBcIltcIiArIG9iamVjdC5sZW5ndGggKyBcIl1cIikpIDogdmFsdWUgPSBnZXRWYWx1ZVByZXZpZXcob2JqZWN0LCBvYmplY3QpLCBcbiAgICAgICAgdmFsdWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNzc0NsYXNzKGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gXCJqc29uLWZvcm1hdHRlci1cIiArIGNsYXNzTmFtZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjbGFzc05hbWUsIGNvbnRlbnQpIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICAgICAgcmV0dXJuIGNsYXNzTmFtZSAmJiBlbC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKGNsYXNzTmFtZSkpLCB2b2lkIDAgIT09IGNvbnRlbnQgJiYgKGNvbnRlbnQgaW5zdGFuY2VvZiBOb2RlID8gZWwuYXBwZW5kQ2hpbGQoY29udGVudCkgOiBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcoY29udGVudCkpKSksIFxuICAgICAgICBlbDtcbiAgICB9XG4gICAgX193ZWJwYWNrX2V4cG9ydHNfXy5hID0gaXNPYmplY3QsIF9fd2VicGFja19leHBvcnRzX18uYiA9IGdldE9iamVjdE5hbWUsIF9fd2VicGFja19leHBvcnRzX18uYyA9IGdldFR5cGUsIFxuICAgIF9fd2VicGFja19leHBvcnRzX18uZyA9IGdldFZhbHVlUHJldmlldywgX193ZWJwYWNrX2V4cG9ydHNfXy5lID0gZ2V0UHJldmlldywgX193ZWJwYWNrX2V4cG9ydHNfXy5kID0gY3NzQ2xhc3MsIFxuICAgIF9fd2VicGFja19leHBvcnRzX18uZiA9IGNyZWF0ZUVsZW1lbnQ7XG59LCBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG59IF0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anNvbi1mb3JtYXR0ZXIuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuLypcbiAqIENvbnZlcnRzIGFueU9mLCBhbGxPZiBhbmQgb25lT2YgdG8gaHVtYW4gcmVhZGFibGUgc3RyaW5nXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRYT2YodHlwZSkge1xuICByZXR1cm4gdHlwZS5zdWJzdHJpbmcoMCwgMykgKyAnIG9mJztcbn1cblxuLypcbiAqIGlmIGNvbmRpdGlvbiBmb3IgRVM2IHRlbXBsYXRlIHN0cmluZ3NcbiAqIHRvIGJlIHVzZWQgb25seSBpbiB0ZW1wbGF0ZSBzdHJpbmdcbiAqXG4gKiBAZXhhbXBsZSBteXN0ciA9IGBSYW5kb20gaXMgJHtfaWYoTWF0aC5yYW5kb20oKSA+IDAuNSlgZ3JlYXRlciB0aGFuIDAuNWBgXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBjb25kaXRpb25cbiAqXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IHRoZSB0ZW1wbGF0ZSBmdW5jdGlvblxuKi9cbmV4cG9ydCBmdW5jdGlvbiBfaWYoY29uZGl0aW9uKSB7XG4gIHJldHVybiBjb25kaXRpb24gPyBub3JtYWwgOiBlbXB0eTtcbn1cbmZ1bmN0aW9uIGVtcHR5KCl7XG4gIHJldHVybiAnJztcbn1cbmZ1bmN0aW9uIG5vcm1hbCAodGVtcGxhdGUsIC4uLmV4cHJlc3Npb25zKSB7XG4gIHJldHVybiB0ZW1wbGF0ZS5zbGljZSgxKS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBwYXJ0LCBpKSA9PiB7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgZXhwcmVzc2lvbnNbaV0gKyBwYXJ0O1xuICB9LCB0ZW1wbGF0ZVswXSk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWxzIEpTT05TY2hlbWFWaWV3ICovXG5cbmltcG9ydCBKU09ORm9ybWF0dGVyIGZyb20gJ2pzb24tZm9ybWF0dGVyLWpzJztcbmltcG9ydCB7XG4gIGNvbnZlcnRYT2YsXG4gIF9pZlxufSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5cbi8qKlxuICogQGNsYXNzIEpTT05TY2hlbWFWaWV3XG4gKlxuICogQSBwdXJlIEphdmFTY3JpcHQgY29tcG9uZW50IGZvciByZW5kZXJpbmcgSlNPTiBTY2hlbWEgaW4gSFRNTC5cbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKU09OU2NoZW1hVmlldyB7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzY2hlbWEgVGhlIEpTT04gU2NoZW1hIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW29wZW49MV0gaGlzIG51bWJlciBpbmRpY2F0ZXMgdXAgdG8gaG93IG1hbnkgbGV2ZWxzIHRoZVxuICAgKiByZW5kZXJlZCB0cmVlIHNob3VsZCBleHBhbmQuIFNldCBpdCB0byBgMGAgdG8gbWFrZSB0aGUgd2hvbGUgdHJlZSBjb2xsYXBzZWRcbiAgICogb3Igc2V0IGl0IHRvIGBJbmZpbml0eWAgdG8gZXhwYW5kIHRoZSB0cmVlIGRlZXBseVxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5cbiAgICogIHRoZW1lIHtzdHJpbmd9OiBvbmUgb2YgdGhlIGZvbGxvd2luZyBvcHRpb25zOiBbJ2RhcmsnXVxuXHQgKiAgc2hvd1JlZnMge2Jvb2xlYW59OiB0byByZW5kZXIgcmVmcyBhcyBpcy4gRGVmYXVsdCBpcyBmYWxzZS4gXG4gICovXG4gIGNvbnN0cnVjdG9yKHNjaGVtYSwgb3Blbiwgb3B0aW9ucyA9IHt0aGVtZTogbnVsbCwgc2hvd1JlZnM6IGZhbHNlfSkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gb3BlbiA8PSAwO1xuXG4gICAgLy8gaWYgc2NoZW1hIGlzIGFuIGVtcHR5IG9iamVjdCB3aGljaCBtZWFucyBhbnkgSk9TTlxuICAgIHRoaXMuaXNBbnkgPSB0eXBlb2Ygc2NoZW1hID09PSAnb2JqZWN0JyAmJlxuICAgICAgIUFycmF5LmlzQXJyYXkoc2NoZW1hKSAmJlxuICAgICAgIU9iamVjdC5rZXlzKHNjaGVtYSlcbiAgICAgIC5maWx0ZXIoaz0+IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nXS5pbmRleE9mKGspID09PSAtMSkubGVuZ3RoO1xuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIGEgc2NoZW1hIGlzIGFuIGFycmF5XG4gICAgdGhpcy5pc0FycmF5ID0gIXRoaXMuaXNBbnkgJiYgdGhpcy5zY2hlbWEgJiYgdGhpcy5zY2hlbWEudHlwZSA9PT0gJ2FycmF5JztcblxuICAgIHRoaXMuaXNPYmplY3QgPSB0aGlzLnNjaGVtYSAmJlxuICAgICAgKHRoaXMuc2NoZW1hLnR5cGUgPT09ICdvYmplY3QnIHx8XG4gICAgICAgdGhpcy5zY2hlbWEucHJvcGVydGllcyB8fFxuICAgICAgIHRoaXMuc2NoZW1hLmFueU9mIHx8XG4gICAgICAgdGhpcy5zY2hlbWEub25lb2YgfHxcbiAgICAgICB0aGlzLnNjaGVtYS5hbGxPZik7XG5cbiAgICAvLyBEZXRlcm1pbmUgaWYgdGhlIHNjaGVtYSBpcyBhIHJlZlxuICAgIHRoaXMuaXNSZWYgPSB0aGlzLm9wdGlvbnMuc2hvd1JlZnMgJiYgJyRyZWYnIGluIHRoaXMuc2NoZW1hO1xuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIGEgc2NoZW1hIGlzIGEgcHJpbWl0aXZlXG4gICAgdGhpcy5pc1ByaW1pdGl2ZSA9ICF0aGlzLmlzQW55ICYmICF0aGlzLmlzQXJyYXkgJiYgIXRoaXMuaXNPYmplY3QgJiYgIXRoaXMuaXNSZWY7XG4gXG4gICAgLy9cbiAgICB0aGlzLnNob3dUb2dnbGUgPSB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiB8fFxuICAgICAgdGhpcy5zY2hlbWEudGl0bGUgfHxcbiAgICAgICh0aGlzLmlzUHJpbWl0aXZlICYmIChcbiAgICAgICAgdGhpcy5zY2hlbWEubWluaW11bSB8fFxuICAgICAgICB0aGlzLnNjaGVtYS5tYXhpbXVtIHx8XG4gICAgICAgIHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gfHxcbiAgICAgICAgdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSB8fFxuICAgICAgICB0aGlzLnNjaGVtYS5mb3JtYXQgfHwgICAgICAgIFxuICAgICAgICB0aGlzLnNjaGVtYS5kZWZhdWx0IHx8XG4gICAgICAgIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCB8fFxuICAgICAgICB0aGlzLnNjaGVtYS5tYXhMZW5ndGggfHxcbiAgICAgICAgdGhpcy5zY2hlbWEuZW51bSlcbiAgICAgICk7XG5cbiAgICAvLyBwb3B1bGF0ZSBpc1JlcXVpcmVkIHByb3BlcnR5IGRvd24gdG8gcHJvcGVydGllc1xuICAgIGlmICh0aGlzLnNjaGVtYSAmJiBBcnJheS5pc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSkge1xuICAgICAgdGhpcy5zY2hlbWEucmVxdWlyZWQuZm9yRWFjaChyZXF1aXJlZFByb3BlcnR5ID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3JlcXVpcmVkUHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcmVxdWlyZWRQcm9wZXJ0eV0uaXNSZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIHRlbXBsYXRlIHdpdGggcG9wdWxhdGVkIHByb3BlcnRpZXMuXG4gICAqIFRoaXMgdGVtcGxhdGUgZG9lcyBub3QgaGF2ZSB0aGUgY2hpbGRyZW5cbiAgKi9cbiAgdGVtcGxhdGUoKSB7XG4gICAgaWYgKCF0aGlzLnNjaGVtYSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBgXG4gICAgICA8IS0tIEFueSAtLT5cbiAgICAgICR7X2lmKHRoaXMuaXNBbnkpYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW55XCI+XG4gICAgICAgICAgJHtfaWYodGhpcy5zaG93VG9nZ2xlKWBcbiAgICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGVcIj48c3BhbiBjbGFzcz1cInRvZ2dsZS1oYW5kbGVcIj48L3NwYW4+JHt0aGlzLnNjaGVtYS50aXRsZSB8fCAnJ30gPC9hPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInR5cGUgdHlwZS1hbnlcIj4mbHQ7YW55Jmd0Ozwvc3Bhbj5cblxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uICYmICF0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lciBkZXNjcmlwdGlvblwiPiR7dGhpcy5zY2hlbWEuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgfVxuXG4gICAgICA8IS0tIFByaW1pdGl2ZSAtLT5cbiAgICAgICR7X2lmKHRoaXMuaXNQcmltaXRpdmUpYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJpbWl0aXZlXCI+XG4gICAgICAgICAgJHtfaWYodGhpcy5zaG93VG9nZ2xlKWBcbiAgICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGVcIj48c3BhbiBjbGFzcz1cInRvZ2dsZS1oYW5kbGVcIj48L3NwYW4+JHt0aGlzLnNjaGVtYS50aXRsZSB8fCAnJ30gPC9hPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHlwZVwiPiR7dGhpcy5zY2hlbWEudHlwZX08L3NwYW4+XG5cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5pc1JlcXVpcmVkKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5mb3JtYXQpYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtYXRcIj4oJHt0aGlzLnNjaGVtYS5mb3JtYXR9KTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZGVmYXVsdClgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlZmF1bHRcIj5kZWZhdWx0OiAke3RoaXMuc2NoZW1hLmRlZmF1bHR9PC9zcGFuPlxuICAgICAgICAgIGB9IFxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEubWluaW11bSlgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIG1pbmltdW1cIj5taW5pbXVtOiR7dGhpcy5zY2hlbWEubWluaW11bX08L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBleGNsdXNpdmVNaW5pbXVtXCI+KGV4KW1pbmltdW06JHt0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtfTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEubWF4aW11bSlgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIG1heGltdW1cIj5tYXhpbXVtOiR7dGhpcy5zY2hlbWEubWF4aW11bX08L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBleGNsdXNpdmVNYXhpbXVtXCI+KGV4KW1heGltdW06JHt0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtfTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEubWluTGVuZ3RoKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UgbWluTGVuZ3RoXCI+bWluTGVuZ3RoOiR7dGhpcy5zY2hlbWEubWluTGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEubWF4TGVuZ3RoKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UgbWF4TGVuZ3RoXCI+bWF4TGVuZ3RoOiR7dGhpcy5zY2hlbWEubWF4TGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gJiYgIXRoaXMuaXNDb2xsYXBzZWQpYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyIGRlc2NyaXB0aW9uXCI+JHt0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZW51bSlgXG4gICAgICAgICAgICAke3RoaXMuZW51bSh0aGlzLnNjaGVtYSwgdGhpcy5pc0NvbGxhcHNlZCwgdGhpcy5vcGVuKX1cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuYWxsT2YgJiYgIXRoaXMuaXNDb2xsYXBzZWQpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdhbGxPZicpfWB9XG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEub25lT2YgJiYgIXRoaXMuaXNDb2xsYXBzZWQpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdvbmVPZicpfWB9XG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuYW55T2YgJiYgIXRoaXMuaXNDb2xsYXBzZWQpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdhbnlPZicpfWB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgYH1cblxuICAgICAgPCEtLSBSZWYgLS0+XG4gICAgICAke19pZih0aGlzLmlzUmVmKWBcbiAgICAgICAgPGRpdiBjbGFzcz1cInByaW1pdGl2ZVwiPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJ0aXRsZVwiPiR7J1JlZid9IDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwidHlwZVwiIGhyZWY9XCIke3RoaXMuc2NoZW1hLiRyZWZ9XCI+JHt0aGlzLnNjaGVtYS4kcmVmfTwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgfVxuXG4gICAgICA8IS0tIEFycmF5IC0tPlxuICAgICAgJHtfaWYodGhpcy5pc0FycmF5KWBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFycmF5XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJ0aXRsZVwiPjxzcGFuIGNsYXNzPVwidG9nZ2xlLWhhbmRsZVwiPjwvc3Bhbj4ke3RoaXMuc2NoZW1hLnRpdGxlIHx8ICcnfTxzcGFuIGNsYXNzPVwib3BlbmluZyBicmFja2V0XCI+Wzwvc3Bhbj4ke19pZih0aGlzLmlzQ29sbGFwc2VkKWA8c3BhbiBjbGFzcz1cImNsb3NpbmcgYnJhY2tldFwiPl08L3NwYW4+YH08L2E+XG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgKHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zIHx8IHRoaXMuc2NoZW1hLm1pbkl0ZW1zIHx8IHRoaXMuc2NoZW1hLm1heEl0ZW1zKSlgXG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8c3BhbiB0aXRsZT1cIml0ZW1zIHJhbmdlXCI+KCR7dGhpcy5zY2hlbWEubWluSXRlbXMgfHwgMH0uLiR7dGhpcy5zY2hlbWEubWF4SXRlbXMgfHwgJ+KInid9KTwvc3Bhbj5cbiAgICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zKWA8c3BhbiB0aXRsZT1cInVuaXF1ZVwiIGNsYXNzPVwidW5pcXVlSXRlbXNcIj7imaY8L3NwYW4+YH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgYH1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cbiAgICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKWBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHt0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5lbnVtKWBcbiAgICAgICAgICAgICR7dGhpcy5lbnVtKHRoaXMuc2NoZW1hLCB0aGlzLmlzQ29sbGFwc2VkLCB0aGlzLm9wZW4pfVxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbGxPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FsbE9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5vbmVPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ29uZU9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbnlPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FueU9mJyl9YH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NpbmcgYnJhY2tldFwiPl08L3NwYW4+XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgfVxuXG4gICAgICA8IS0tIE9iamVjdCAtLT5cbiAgICAgICR7X2lmKCF0aGlzLmlzUHJpbWl0aXZlICYmICF0aGlzLmlzQXJyYXkgJiYgIXRoaXMuaXNBbnkgJiYgIXRoaXMuaXNSZWYpYFxuICAgICAgICA8ZGl2IGNsYXNzPVwib2JqZWN0XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJ0aXRsZVwiPjxzcGFuXG4gICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1oYW5kbGVcIj48L3NwYW4+JHt0aGlzLnNjaGVtYS50aXRsZSB8fCAnJ30gPHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwib3BlbmluZyBicmFjZVwiPns8L3NwYW4+JHtfaWYodGhpcy5pc0NvbGxhcHNlZClgXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2luZyBicmFjZVwiIG5nLWlmPVwiaXNDb2xsYXBzZWRcIj59PC9zcGFuPlxuICAgICAgICAgIGB9PC9hPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCI+XG4gICAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbilgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7dGhpcy5zY2hlbWEuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPCEtLSBjaGlsZHJlbiBnbyBoZXJlIC0tPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZW51bSlgXG4gICAgICAgICAgICAke3RoaXMuZW51bSh0aGlzLnNjaGVtYSwgdGhpcy5pc0NvbGxhcHNlZCwgdGhpcy5vcGVuKX1cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuYWxsT2YgJiYgIXRoaXMuaXNDb2xsYXBzZWQpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdhbGxPZicpfWB9XG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEub25lT2YgJiYgIXRoaXMuaXNDb2xsYXBzZWQpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdvbmVPZicpfWB9XG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuYW55T2YgJiYgIXRoaXMuaXNDb2xsYXBzZWQpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdhbnlPZicpfWB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZClgXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zaW5nIGJyYWNlXCI+fTwvc3Bhbj5cbiAgICAgICAgICBgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGB9XG5gLnJlcGxhY2UoL1xccypcXG4vZywgJ1xcbicpLnJlcGxhY2UoLyhcXDxcXCFcXC1cXC0pLisvZywgJycpLnRyaW0oKTtcbiAgfVxuXG4gIC8qXG4gICAqIFRlbXBsYXRlIGZvciBvbmVPZiwgYW55T2YgYW5kIGFsbE9mXG4gICovXG4gIHhPZihzY2hlbWEsIHR5cGUpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz1cImlubmVyICR7dHlwZX1cIj5cbiAgICAgICAgPGI+JHtjb252ZXJ0WE9mKHR5cGUpfTo8L2I+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgLypcbiAgICogVGVtcGxhdGUgZm9yIGVudW1zXG4gICovXG4gIGVudW0oc2NoZW1hLCBpc0NvbGxhcHNlZCwgb3Blbikge1xuICAgIHJldHVybiBgXG4gICAgICAke19pZighaXNDb2xsYXBzZWQgJiYgc2NoZW1hLmVudW0pYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXIgZW51bXNcIj5cbiAgICAgICAgICA8Yj5FbnVtOjwvYj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgfVxuICAgIGA7XG4gIH1cblxuICAvKlxuICAgKiBUb2dnbGVzIHRoZSAnY29sbGFwc2VkJyBzdGF0ZVxuICAqL1xuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9ICF0aGlzLmlzQ29sbGFwc2VkO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKlxuICAgKiBSZW5kZXJzIHRoZSBlbGVtZW50IGFuZCByZXR1cm5zIGl0XG4gICovXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnanNvbi1zY2hlbWEtdmlldycpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnRoZW1lKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChganNvbi1zY2hlbWEtdmlldy0ke3RoaXMub3B0aW9ucy50aGVtZX1gKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZSgpO1xuXG4gICAgaWYgKCF0aGlzLnNjaGVtYSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNDb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGRyZW4odGhpcy5lbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgZm9yIHRvZ2dsaW5nXG4gICAgaWYgKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLnRpdGxlJykpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLnRpdGxlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuXG4gIC8qXG4gICAqIEFwcGVuZHMgY2hpbGRyZW4gdG8gZ2l2ZW4gZWxlbWVudCBiYXNlZCBvbiBjdXJyZW50IHNjaGVtYVxuICAqL1xuICBhcHBlbmRDaGlsZHJlbihlbGVtZW50KSB7XG4gICAgY29uc3QgaW5uZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbm5lcicpO1xuXG4gICAgaWYgKCFpbm5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNjaGVtYS5lbnVtKSB7XG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSlNPTkZvcm1hdHRlcih0aGlzLnNjaGVtYS5lbnVtLCB0aGlzLm9wZW4gLSAxKTtcbiAgICAgIGNvbnN0IGZvcm1hdHRlckVsID0gZm9ybWF0dGVyLnJlbmRlcigpO1xuICAgICAgZm9ybWF0dGVyRWwuY2xhc3NMaXN0LmFkZCgnaW5uZXInKTtcbiAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVudW1zLmlubmVyJykuYXBwZW5kQ2hpbGQoZm9ybWF0dGVyRWwpO1xuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBcnJheSkge1xuICAgICAgY29uc3QgdmlldyA9IG5ldyBKU09OU2NoZW1hVmlldyh0aGlzLnNjaGVtYS5pdGVtcywgdGhpcy5vcGVuIC0gMSlcbiAgICAgIGlubmVyLmFwcGVuZENoaWxkKHZpZXcucmVuZGVyKCkpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5zY2hlbWEucHJvcGVydGllcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2gocHJvcGVydHlOYW1lID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTs7XG4gICAgICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJwcm9wZXJ0eVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7cHJvcGVydHlOYW1lfTo8L3NwYW4+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgSlNPTlNjaGVtYVZpZXcocHJvcGVydHksIHRoaXMub3BlbiAtIDEpO1xuICAgICAgICB0ZW1wRGl2LnF1ZXJ5U2VsZWN0b3IoJy5wcm9wZXJ0eScpLmFwcGVuZENoaWxkKHZpZXcucmVuZGVyKCkpO1xuXG4gICAgICAgIGlubmVyLmFwcGVuZENoaWxkKHRlbXBEaXYucXVlcnlTZWxlY3RvcignLnByb3BlcnR5JykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLmFsbE9mKSB7IGFwcGVuZFhPZi5jYWxsKHRoaXMsICdhbGxPZicpOyB9XG4gICAgaWYgKHRoaXMuc2NoZW1hLm9uZU9mKSB7IGFwcGVuZFhPZi5jYWxsKHRoaXMsICdvbmVPZicpOyB9XG4gICAgaWYgKHRoaXMuc2NoZW1hLmFueU9mKSB7IGFwcGVuZFhPZi5jYWxsKHRoaXMsICdhbnlPZicpOyB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRYT2YodHlwZSkge1xuICAgICAgY29uc3QgaW5uZXJBbGxPZiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmlubmVyLiR7dHlwZX1gKTtcblxuICAgICAgdGhpcy5zY2hlbWFbdHlwZV0uZm9yRWFjaChzY2hlbWEgPT4ge1xuICAgICAgICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbm5lci5jbGFzc0xpc3QuYWRkKCdpbm5lcicpO1xuICAgICAgICBjb25zdCB2aWV3ID0gbmV3IEpTT05TY2hlbWFWaWV3KHNjaGVtYSwgdGhpcy5vcGVuIC0gMSk7XG4gICAgICAgIGlubmVyLmFwcGVuZENoaWxkKHZpZXcucmVuZGVyKCkpO1xuICAgICAgICBpbm5lckFsbE9mLmFwcGVuZENoaWxkKGlubmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19
