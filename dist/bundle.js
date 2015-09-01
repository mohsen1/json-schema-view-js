(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/*
 * Escapes `"` charachters from string
 *
 * @param {string} str
 * @returns {string}
*/
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.isObject = isObject;
exports.getObjectName = getObjectName;
exports.getType = getType;
exports.getValuePreview = getValuePreview;
exports.getPreview = getPreview;
exports.addPropertyName = addPropertyName;
exports.convertXOf = convertXOf;
function escapeString(str) {
  return str.replace('"', '\"');
}

/*
 * Determines if a value is an object
 *
 * @param {any} value
 *
 * @returns {boolean}
 *
*/

function isObject(value) {
  var type = typeof value;
  return !!value && type == 'object';
}

/*
 * Gets constructor name of an object.
 * From http://stackoverflow.com/a/332429
 *
 * @param {object} object
 *
 * @returns {string}
 *
*/

function getObjectName(object) {
  if (object === undefined) {
    return '';
  }
  if (object === null) {
    return 'Object';
  }
  if (typeof object === 'object' && !object.constructor) {
    return 'Object';
  }

  var funcNameRegex = /function (.{1,})\(/;
  var results = funcNameRegex.exec(object.constructor.toString());
  if (results && results.length > 1) {
    return results[1];
  } else {
    return '';
  }
}

/*
 * Gets type of an object. Returns "null" for null objects
 *
 * @param {object} object
 *
 * @returns {string}
*/

function getType(object) {
  if (object === null) {
    return 'null';
  }
  return typeof object;
}

/*
 * Generates inline preview for a JavaScript object based on a value
 * @param {object} object
 * @param {string} value
 *
 * @returns {string}
*/

function getValuePreview(object, value) {
  var type = getType(object);

  if (type === 'null' || type === 'undefined') {
    return type;
  }

  if (type === 'string') {
    value = '"' + escapeString(value) + '"';
  }
  if (type === 'function') {

    // Remove content of the function
    return object.toString().replace(/[\r\n]/g, '').replace(/\{.*\}/, '') + '{…}';
  }
  return value;
}

/*
 * Generates inline preview for a JavaScript object
 * @param {object} object
 *
 * @returns {string}
*/

function getPreview(object) {
  var value = '';
  if (isObject(object)) {
    value = getObjectName(object);
    if (Array.isArray(object)) value += '[' + object.length + ']';
  } else {
    value = getValuePreview(object, object);
  }
  return value;
}

/*
* Recursively walk the schema and add property 'name' to property objects
*/

function addPropertyName(schema) {
  if (!schema) {
    return;
  }
  if (typeof schema.items === 'object') {
    addPropertyName(schema.items);
  } else if (typeof schema.properties === 'object') {
    Object.keys(schema.properties).forEach(function (propertyName) {
      schema.properties[propertyName].name = propertyName;
      addPropertyName(schema.properties[propertyName]);
    });
  }
}

/*
 * Converts anyOf, allOf and oneOf to human readable string
*/

function convertXOf(type) {
  return type.substring(0, 3) + ' of';
}

},{}],2:[function(require,module,exports){
'use strict';

/* globals JSONSchemaView */

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _templateObject = _taggedTemplateLiteral(['collapsed'], ['collapsed']),
    _templateObject2 = _taggedTemplateLiteral(['\n        <div class="primitive">\n          ', '\n\n          <span class="type">', '</span>\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n        </div>\n      '], ['\n        <div class="primitive">\n          ', '\n\n          <span class="type">', '</span>\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n        </div>\n      ']),
    _templateObject3 = _taggedTemplateLiteral(['\n            <a class="title"><span class="toggle-handle"></span>', ' </a>\n          '], ['\n            <a class="title"><span class="toggle-handle"></span>', ' </a>\n          ']),
    _templateObject4 = _taggedTemplateLiteral(['\n            <span class="required">*</span>\n          '], ['\n            <span class="required">*</span>\n          ']),
    _templateObject5 = _taggedTemplateLiteral(['\n            <span class="format">(', ')</span>\n          '], ['\n            <span class="format">(', ')</span>\n          ']),
    _templateObject6 = _taggedTemplateLiteral(['\n            <span class="range minimum">minimum:', '</span>\n          '], ['\n            <span class="range minimum">minimum:', '</span>\n          ']),
    _templateObject7 = _taggedTemplateLiteral(['\n            <span class="range exclusiveMinimum">(ex)minimum:', '</span>\n          '], ['\n            <span class="range exclusiveMinimum">(ex)minimum:', '</span>\n          ']),
    _templateObject8 = _taggedTemplateLiteral(['\n            <span class="range maximum">maximum:', '</span>\n          '], ['\n            <span class="range maximum">maximum:', '</span>\n          ']),
    _templateObject9 = _taggedTemplateLiteral(['\n            <span class="range exclusiveMaximum">(ex)maximum:', '</span>\n          '], ['\n            <span class="range exclusiveMaximum">(ex)maximum:', '</span>\n          ']),
    _templateObject10 = _taggedTemplateLiteral(['\n            <span class="range minLength">minLength:', '</span>\n          '], ['\n            <span class="range minLength">minLength:', '</span>\n          ']),
    _templateObject11 = _taggedTemplateLiteral(['\n            <span class="range maxLength">maxLength:', '</span>\n          '], ['\n            <span class="range maxLength">maxLength:', '</span>\n          ']),
    _templateObject12 = _taggedTemplateLiteral(['\n            <div class="inner description">', '</div>\n          '], ['\n            <div class="inner description">', '</div>\n          ']),
    _templateObject13 = _taggedTemplateLiteral(['\n            ', '\n          '], ['\n            ', '\n          ']),
    _templateObject14 = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject15 = _taggedTemplateLiteral(['\n        <div class="array">\n          <a class="title"><span class="toggle-handle"></span>', '<span class="opening bracket">[</span>', '</a>\n          ', '\n          <div class="inner">\n            <div class="description">', '</div>\n            ', '\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      '], ['\n        <div class="array">\n          <a class="title"><span class="toggle-handle"></span>', '<span class="opening bracket">[</span>', '</a>\n          ', '\n          <div class="inner">\n            <div class="description">', '</div>\n            ', '\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      ']),
    _templateObject16 = _taggedTemplateLiteral(['\n            <span class="closing bracket">]</span>\n          '], ['\n            <span class="closing bracket">]</span>\n          ']),
    _templateObject17 = _taggedTemplateLiteral(['\n            <span>\n              <span title="items range">(', '..', ')</span>\n              ', '\n            </span>\n          '], ['\n            <span>\n              <span title="items range">(', '..', ')</span>\n              ', '\n            </span>\n          ']),
    _templateObject18 = _taggedTemplateLiteral(['\n                <span title="unique" class="uniqueItems">♦</span>\n              '], ['\n                <span title="unique" class="uniqueItems">♦</span>\n              ']),
    _templateObject19 = _taggedTemplateLiteral(['\n            '], ['\n            ']),
    _templateObject20 = _taggedTemplateLiteral(['\n        <div class="object">\n          <a class="title"><span\n            class="toggle-handle"></span>', ' <span\n            class="opening brace">{</span>', '</a>\n\n          <div class="inner">\n            <div class="description">', '</div>\n            <!-- children go here -->\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n        '], ['\n        <div class="object">\n          <a class="title"><span\n            class="toggle-handle"></span>', ' <span\n            class="opening brace">{</span>', '</a>\n\n          <div class="inner">\n            <div class="description">', '</div>\n            <!-- children go here -->\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n        ']),
    _templateObject21 = _taggedTemplateLiteral(['\n              <span class="closing brace" ng-if="isCollapsed">}</span>\n          '], ['\n              <span class="closing brace" ng-if="isCollapsed">}</span>\n          ']),
    _templateObject22 = _taggedTemplateLiteral(['\n            <span class="closing brace">}</span>\n          '], ['\n            <span class="closing brace">}</span>\n          ']),
    _templateObject23 = _taggedTemplateLiteral(['\n        <div class="inner enums">\n          <b>Enum:</b>\n        </div>\n      '], ['\n        <div class="inner enums">\n          <b>Enum:</b>\n        </div>\n      ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _helpersJs = require('./helpers.js');

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

/**
 * @class JSONSchemaView
 *
 * JSONSchemaView allows you to render JSON objects in HTML with a
 * **collapsible** navigation.
*/

var JSONSchemaView = (function () {

  /**
   * @param {object} json The JSON object you want to render. It has to be an
   * object or array. Do NOT pass raw JSON string.
   *
   * @param {number} [open=1] his number indicates up to how many levels the
   * rendered tree should expand. Set it to `0` to make the whole tree collapsed
   * or set it to `Infinity` to expand the tree deeply
   *
   * @param {object} [config=defaultConfig] -
   *  defaultConfig = {
   *   hoverPreviewEnabled: false,
   *   hoverPreviewArrayCount: 100,
   *   hoverPreviewFieldCount: 5
   * }
   * @param {string} [key=undefined] The key that this object in it's parent
   * context
  */

  function JSONSchemaView(schema, open, config, key) {
    _classCallCheck(this, JSONSchemaView);

    this.schema = schema;
    this.open = open;
    this.isCollapsed = open <= 0;

    // Determine if a schema is an array
    this.isArray = this.schema && this.schema.type === 'array';

    // Determine if a schema is a primitive
    this.isPrimitive = this.schema && !this.schema.properties && !this.schema.items && this.schema.type !== 'array' && this.schema.type !== 'object';
  }

  // TODO: UMD

  /*
   * Toggles the 'collapsed' state
  */

  _createClass(JSONSchemaView, [{
    key: 'toggle',
    value: function toggle() {
      this.isCollapsed = !this.isCollapsed;
    }

    /*
     * Returns true if property is required in given schema
    */
  }, {
    key: 'isRequired',
    value: function isRequired(schema, parent) {
      if (parent && Array.isArray(parent.required) && schema.name) {
        return parent.required.indexOf(schema.name) > -1;
      }

      return false;
    }

    /*
     * Returns true if the schema is too simple to be collapsible
    */
  }, {
    key: 'isPrimitiveCollapsible',
    value: function isPrimitiveCollapsible() {
      return this.schema.description || this.schema.title;
    }
  }, {
    key: 'template',
    value: function template() {

      return ('<div class="json-schema-view ' + _if(this.collapsed)(_templateObject) + '">\n\n      <!-- Primitive -->\n      ' + _if(this.isPrimitive)(_templateObject2, _if(this.isPrimitiveCollapsible())(_templateObject3, this.schema.title || ''), this.schema.type, _if(this.isRequired(this.schema))(_templateObject4), _if(!this.isCollapsed && this.schema.format)(_templateObject5, this.schema.format), _if(!this.isCollapsed && this.schema.minimum)(_templateObject6, this.schema.minimum), _if(!this.isCollapsed && this.schema.exclusiveMinimum)(_templateObject7, this.schema.exclusiveMinimum), _if(!this.isCollapsed && this.schema.maximum)(_templateObject8, this.schema.maximum), _if(!this.isCollapsed && this.schema.exclusiveMaximum)(_templateObject9, this.schema.exclusiveMaximum), _if(!this.isCollapsed && this.schema.minLength)(_templateObject10, this.schema.minLength), _if(!this.isCollapsed && this.schema.maxLength)(_templateObject11, this.schema.maxLength), _if(this.schema.description)(_templateObject12, this.schema.description), _if(!this.isCollapsed && this.schema['enum'])(_templateObject13, this['enum'](this.schema, this.isCollapsed, this.open)), _if(this.schema.allOf)(_templateObject14, this.xOf(this.schema, 'allOf')), _if(this.schema.oneOf)(_templateObject14, this.xOf(this.schema, 'oneOf')), _if(this.schema.anyOf)(_templateObject14, this.xOf(this.schema, 'anyOf'))) + '\n\n\n      <!-- Array -->\n      ' + _if(this.isArray)(_templateObject15, this.schema.title || '', _if(this.isCollapsed)(_templateObject16), _if(!this.isCollapsed && (this.schema.uniqueItems || this.schema.minItems || this.schema.maxItems))(_templateObject17, this.schema.minItems || 0, this.schema.maxItems || '∞', _if(!this.isCollapsed && this.schema.uniqueItems)(_templateObject18)), this.schema.description || '', _if(!this.isCollapsed)(_templateObject19), _if(!this.isCollapsed && this.schema['enum'])(_templateObject13, this['enum'](this.schema, this.isCollapsed, this.open)), _if(this.schema.allOf)(_templateObject14, this.xOf(this.schema, 'allOf')), _if(this.schema.oneOf)(_templateObject14, this.xOf(this.schema, 'oneOf')), _if(this.schema.anyOf)(_templateObject14, this.xOf(this.schema, 'anyOf')), _if(!this.isCollapsed)(_templateObject16)) + '\n\n      <!-- Object -->\n      ' + _if(!this.isPrimitive && !this.isArray)(_templateObject20, this.schema.title || '', _if(this.isCollapsed)(_templateObject21), this.schema.description || '', _if(!this.isCollapsed && this.schema['enum'])(_templateObject13, this['enum'](this.schema, this.isCollapsed, this.open)), _if(this.schema.allOf)(_templateObject14, this.xOf(this.schema, 'allOf')), _if(this.schema.oneOf)(_templateObject14, this.xOf(this.schema, 'oneOf')), _if(this.schema.anyOf)(_templateObject14, this.xOf(this.schema, 'anyOf')), _if(!this.isCollapsed)(_templateObject22)) + '\n      </div>\n    ').replace(/\s*\n/g, '\n').replace(/(\<\!\-\-).+/g, '').trim();
    }
  }, {
    key: 'xOf',
    value: function xOf(schema, type) {
      return '\n      <div class="inner ' + type + '">\n        <b>' + (0, _helpersJs.convertXOf)(type) + ':</b>\n      </div>\n    ';
    }
  }, {
    key: 'enum',
    value: function _enum(schema, isCollapsed, open) {
      return '\n      ' + _if(!isCollapsed && schema['enum'])(_templateObject23) + '\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      var element = document.createElement('div');
      element.innerHTML = this.template();

      if (this.open) {
        this.appendChildren(element);
      }

      // add event listener for toggling
      // this.element.querySelector('a.toggler-link')
      //   .addEventListener('click', this.toggleOpen.bind(this));

      return element.querySelector('div.json-schema-view');
    }
  }, {
    key: 'appendChildren',
    value: function appendChildren(element) {
      var _this = this;

      var inner = element.querySelector('.inner');

      if (this.schema['enum']) {
        var formatter = new JSONFormatter(this.schema['enum'], this.open - 1);
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
          var property = _this.schema.properties[propertyName];
          var tempDiv = document.createElement('div');;
          tempDiv.innerHTML = '<div class="property">\n          <span class="name">' + propertyName + ':</span>\n        </div>';
          var view = new JSONSchemaView(property, _this.open - 1);
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
        var _this2 = this;

        var innerAllOf = element.querySelector('.inner.' + type);

        this.schema[type].forEach(function (schema) {
          var inner = document.createElement('div');
          inner.classList.add('inner');
          var view = new JSONSchemaView(schema, _this2.open - 1);
          inner.appendChild(view.render());
          innerAllOf.appendChild(inner);
        });
      }
    }
  }]);

  return JSONSchemaView;
})();

exports['default'] = JSONSchemaView;
window.JSONSchemaView = JSONSchemaView;
module.exports = exports['default'];

},{"./helpers.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbW9oc2VuL1Byb2plY3RzL2pzb24tc2NoZW1hLXZpZXctanMvc3JjL2hlbHBlcnMuanMiLCIvVXNlcnMvbW9oc2VuL1Byb2plY3RzL2pzb24tc2NoZW1hLXZpZXctanMvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYixTQUFTLFlBQVksQ0FBQyxHQUFHLEVBQUU7QUFDekIsU0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztDQUMvQjs7Ozs7Ozs7Ozs7QUFVTSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7QUFDOUIsTUFBSSxJQUFJLEdBQUcsT0FBTyxLQUFLLENBQUM7QUFDeEIsU0FBTyxDQUFDLENBQUMsS0FBSyxJQUFLLElBQUksSUFBSSxRQUFRLEFBQUMsQ0FBQztDQUN0Qzs7Ozs7Ozs7Ozs7O0FBV00sU0FBUyxhQUFhLENBQUMsTUFBTSxFQUFFO0FBQ3BDLE1BQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtBQUN4QixXQUFPLEVBQUUsQ0FBQztHQUNYO0FBQ0QsTUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO0FBQ25CLFdBQU8sUUFBUSxDQUFDO0dBQ2pCO0FBQ0QsTUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO0FBQ25ELFdBQU8sUUFBUSxDQUFDO0dBQ25COztBQUVELE1BQU0sYUFBYSxHQUFHLG9CQUFvQixDQUFDO0FBQzNDLE1BQU0sT0FBTyxHQUFHLEFBQUMsYUFBYSxDQUFFLElBQUksQ0FBQyxBQUFDLE1BQU0sQ0FBRSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUN0RSxNQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxH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QUFDLG1CQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUd6RCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsbUJBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FHL0UsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FHL0QsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FHL0QsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLG9CQUNLLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUd4RCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLFFBQUssQ0FBQyxvQkFDeEMsSUFBSSxRQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FHckQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FDdkQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FDdkQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsNENBTTNELEdBQUcsQ0FBQyxJQUFJLENB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QyxDQUFDO09BQUU7O0FBRXpELGVBQVMsU0FBUyxDQUFDLElBQUksRUFBRTs7O0FBQ3ZCLFlBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhLGFBQVcsSUFBSSxDQUFHLENBQUM7O0FBRTNELFlBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQ2xDLGNBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUMsZUFBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsY0FBTSxJQUFJLEdBQUcsSUFBSSxjQUFjLENBQUMsTUFBTSxFQUFFLE9BQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZELGVBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDakMsb0JBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0IsQ0FBQyxDQUFDO09BQ0o7S0FDRjs7O1NBelFrQixjQUFjOzs7cUJBQWQsY0FBYztBQTZRbkMsTUFBTSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKlxuICogRXNjYXBlcyBgXCJgIGNoYXJhY2h0ZXJzIGZyb20gc3RyaW5nXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybnMge3N0cmluZ31cbiovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgnXCInLCAnXFxcIicpO1xufVxuXG4vKlxuICogRGV0ZXJtaW5lcyBpZiBhIHZhbHVlIGlzIGFuIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICpcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICpcbiovXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnKTtcbn1cblxuLypcbiAqIEdldHMgY29uc3RydWN0b3IgbmFtZSBvZiBhbiBvYmplY3QuXG4gKiBGcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMzMjQyOVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICpcbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2JqZWN0TmFtZShvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG4gIGlmIChvYmplY3QgPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmICFvYmplY3QuY29uc3RydWN0b3IpIHtcbiAgICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxuXG4gIGNvbnN0IGZ1bmNOYW1lUmVnZXggPSAvZnVuY3Rpb24gKC57MSx9KVxcKC87XG4gIGNvbnN0IHJlc3VsdHMgPSAoZnVuY05hbWVSZWdleCkuZXhlYygob2JqZWN0KS5jb25zdHJ1Y3Rvci50b1N0cmluZygpKTtcbiAgaWYgKHJlc3VsdHMgJiYgcmVzdWx0cy5sZW5ndGggPiAxKSB7XG4gICAgcmV0dXJuIHJlc3VsdHNbMV07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbi8qXG4gKiBHZXRzIHR5cGUgb2YgYW4gb2JqZWN0LiBSZXR1cm5zIFwibnVsbFwiIGZvciBudWxsIG9iamVjdHNcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHlwZShvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PT0gbnVsbCkgeyByZXR1cm4gJ251bGwnOyB9XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0O1xufVxuXG4vKlxuICogR2VuZXJhdGVzIGlubGluZSBwcmV2aWV3IGZvciBhIEphdmFTY3JpcHQgb2JqZWN0IGJhc2VkIG9uIGEgdmFsdWVcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlUHJldmlldyAob2JqZWN0LCB2YWx1ZSkge1xuICB2YXIgdHlwZSA9IGdldFR5cGUob2JqZWN0KTtcblxuICBpZiAodHlwZSA9PT0gJ251bGwnIHx8IHR5cGUgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybiB0eXBlOyB9XG5cbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsdWUgPSAnXCInICsgZXNjYXBlU3RyaW5nKHZhbHVlKSArICdcIic7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpe1xuXG4gICAgLy8gUmVtb3ZlIGNvbnRlbnQgb2YgdGhlIGZ1bmN0aW9uXG4gICAgcmV0dXJuIG9iamVjdC50b1N0cmluZygpXG4gICAgICAgIC5yZXBsYWNlKC9bXFxyXFxuXS9nLCAnJylcbiAgICAgICAgLnJlcGxhY2UoL1xcey4qXFx9LywgJycpICsgJ3vigKZ9JztcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbi8qXG4gKiBHZW5lcmF0ZXMgaW5saW5lIHByZXZpZXcgZm9yIGEgSmF2YVNjcmlwdCBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmV2aWV3KG9iamVjdCkge1xuICBsZXQgdmFsdWUgPSAnJztcbiAgaWYgKGlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICB2YWx1ZSA9IGdldE9iamVjdE5hbWUob2JqZWN0KTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmplY3QpKVxuICAgICAgdmFsdWUgKz0gJ1snICsgb2JqZWN0Lmxlbmd0aCArICddJztcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZSA9IGdldFZhbHVlUHJldmlldyhvYmplY3QsIG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4gLypcbiAqIFJlY3Vyc2l2ZWx5IHdhbGsgdGhlIHNjaGVtYSBhbmQgYWRkIHByb3BlcnR5ICduYW1lJyB0byBwcm9wZXJ0eSBvYmplY3RzXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb3BlcnR5TmFtZShzY2hlbWEpIHtcbiAgaWYgKCFzY2hlbWEpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHR5cGVvZiBzY2hlbWEuaXRlbXMgPT09ICdvYmplY3QnKSB7XG4gICAgYWRkUHJvcGVydHlOYW1lKHNjaGVtYS5pdGVtcyk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIHNjaGVtYS5wcm9wZXJ0aWVzID09PSAnb2JqZWN0Jykge1xuICAgIE9iamVjdC5rZXlzKHNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5TmFtZSkge1xuICAgICAgc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXS5uYW1lID0gcHJvcGVydHlOYW1lO1xuICAgICAgYWRkUHJvcGVydHlOYW1lKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0pO1xuICAgIH0pO1xuICB9XG59XG5cbi8qXG4gKiBDb252ZXJ0cyBhbnlPZiwgYWxsT2YgYW5kIG9uZU9mIHRvIGh1bWFuIHJlYWRhYmxlIHN0cmluZ1xuKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0WE9mKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuc3Vic3RyaW5nKDAsIDMpICsgJyBvZic7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWxzIEpTT05TY2hlbWFWaWV3ICovXG5cbmltcG9ydCB7XG4gIGlzT2JqZWN0LFxuICBnZXRPYmplY3ROYW1lLFxuICBnZXRUeXBlLFxuICBnZXRWYWx1ZVByZXZpZXcsXG4gIGdldFByZXZpZXcsXG4gIGFkZFByb3BlcnR5TmFtZSxcbiAgY29udmVydFhPZlxufSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5cbi8qXG4gKiBpZiBjb25kaXRpb24gZm9yIEVTNiB0ZW1wbGF0ZSBzdHJpbmdzXG4gKiB0byBiZSB1c2VkIG9ubHkgaW4gdGVtcGxhdGUgc3RyaW5nXG4gKlxuICogQGV4YW1wbGUgbXlzdHIgPSBgUmFuZG9tIGlzICR7X2lmKE1hdGgucmFuZG9tKCkgPiAwLjUpYGdyZWF0ZXIgdGhhbiAwLjVgYFxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY29uZGl0aW9uXG4gKlxuICogQHJldHVybnMge2Z1bmN0aW9ufSB0aGUgdGVtcGxhdGUgZnVuY3Rpb25cbiovXG5mdW5jdGlvbiBfaWYoY29uZGl0aW9uKSB7XG4gIHJldHVybiBjb25kaXRpb24gPyBub3JtYWwgOiBlbXB0eTtcbn1cbmZ1bmN0aW9uIGVtcHR5KCl7XG4gIHJldHVybiAnJztcbn1cbmZ1bmN0aW9uIG5vcm1hbCAodGVtcGxhdGUsIC4uLmV4cHJlc3Npb25zKSB7XG4gIHJldHVybiB0ZW1wbGF0ZS5zbGljZSgxKS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBwYXJ0LCBpKSA9PiB7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgZXhwcmVzc2lvbnNbaV0gKyBwYXJ0O1xuICB9LCB0ZW1wbGF0ZVswXSk7XG59XG5cbi8qKlxuICogQGNsYXNzIEpTT05TY2hlbWFWaWV3XG4gKlxuICogSlNPTlNjaGVtYVZpZXcgYWxsb3dzIHlvdSB0byByZW5kZXIgSlNPTiBvYmplY3RzIGluIEhUTUwgd2l0aCBhXG4gKiAqKmNvbGxhcHNpYmxlKiogbmF2aWdhdGlvbi5cbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKU09OU2NoZW1hVmlldyB7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBqc29uIFRoZSBKU09OIG9iamVjdCB5b3Ugd2FudCB0byByZW5kZXIuIEl0IGhhcyB0byBiZSBhblxuICAgKiBvYmplY3Qgb3IgYXJyYXkuIERvIE5PVCBwYXNzIHJhdyBKU09OIHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcGVuPTFdIGhpcyBudW1iZXIgaW5kaWNhdGVzIHVwIHRvIGhvdyBtYW55IGxldmVscyB0aGVcbiAgICogcmVuZGVyZWQgdHJlZSBzaG91bGQgZXhwYW5kLiBTZXQgaXQgdG8gYDBgIHRvIG1ha2UgdGhlIHdob2xlIHRyZWUgY29sbGFwc2VkXG4gICAqIG9yIHNldCBpdCB0byBgSW5maW5pdHlgIHRvIGV4cGFuZCB0aGUgdHJlZSBkZWVwbHlcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IFtjb25maWc9ZGVmYXVsdENvbmZpZ10gLVxuICAgKiAgZGVmYXVsdENvbmZpZyA9IHtcbiAgICogICBob3ZlclByZXZpZXdFbmFibGVkOiBmYWxzZSxcbiAgICogICBob3ZlclByZXZpZXdBcnJheUNvdW50OiAxMDAsXG4gICAqICAgaG92ZXJQcmV2aWV3RmllbGRDb3VudDogNVxuICAgKiB9XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBba2V5PXVuZGVmaW5lZF0gVGhlIGtleSB0aGF0IHRoaXMgb2JqZWN0IGluIGl0J3MgcGFyZW50XG4gICAqIGNvbnRleHRcbiAgKi9cbiAgY29uc3RydWN0b3Ioc2NoZW1hLCBvcGVuLCBjb25maWcsIGtleSkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IG9wZW4gPD0gMDtcblxuICAgIC8vIERldGVybWluZSBpZiBhIHNjaGVtYSBpcyBhbiBhcnJheVxuICAgIHRoaXMuaXNBcnJheSA9IHRoaXMuc2NoZW1hICYmIHRoaXMuc2NoZW1hLnR5cGUgPT09ICdhcnJheSc7XG5cbiAgICAvLyBEZXRlcm1pbmUgaWYgYSBzY2hlbWEgaXMgYSBwcmltaXRpdmVcbiAgICB0aGlzLmlzUHJpbWl0aXZlID0gdGhpcy5zY2hlbWEgJiZcbiAgICAgICF0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzICYmXG4gICAgICAhdGhpcy5zY2hlbWEuaXRlbXMgJiZcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUgIT09ICdhcnJheScgJiZcbiAgICAgIHRoaXMuc2NoZW1hLnR5cGUgIT09ICdvYmplY3QnO1xuICB9XG5cbiAgLypcbiAgICogVG9nZ2xlcyB0aGUgJ2NvbGxhcHNlZCcgc3RhdGVcbiAgKi9cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSAhdGhpcy5pc0NvbGxhcHNlZDtcbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBwcm9wZXJ0eSBpcyByZXF1aXJlZCBpbiBnaXZlbiBzY2hlbWFcbiAgKi9cbiAgaXNSZXF1aXJlZChzY2hlbWEsIHBhcmVudCkge1xuICAgIGlmIChwYXJlbnQgJiYgQXJyYXkuaXNBcnJheShwYXJlbnQucmVxdWlyZWQpICYmIHNjaGVtYS5uYW1lKSB7XG4gICAgICByZXR1cm4gcGFyZW50LnJlcXVpcmVkLmluZGV4T2Yoc2NoZW1hLm5hbWUpID4gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBzY2hlbWEgaXMgdG9vIHNpbXBsZSB0byBiZSBjb2xsYXBzaWJsZVxuICAqL1xuICBpc1ByaW1pdGl2ZUNvbGxhcHNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiB8fCB0aGlzLnNjaGVtYS50aXRsZTtcbiAgfVxuXG4gIHRlbXBsYXRlKCkge1xuXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwianNvbi1zY2hlbWEtdmlldyAke19pZih0aGlzLmNvbGxhcHNlZClgY29sbGFwc2VkYH1cIj5cblxuICAgICAgPCEtLSBQcmltaXRpdmUgLS0+XG4gICAgICAke19pZih0aGlzLmlzUHJpbWl0aXZlKWBcbiAgICAgICAgPGRpdiBjbGFzcz1cInByaW1pdGl2ZVwiPlxuICAgICAgICAgICR7X2lmKHRoaXMuaXNQcmltaXRpdmVDb2xsYXBzaWJsZSgpKWBcbiAgICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGVcIj48c3BhbiBjbGFzcz1cInRvZ2dsZS1oYW5kbGVcIj48L3NwYW4+JHt0aGlzLnNjaGVtYS50aXRsZSB8fCAnJ30gPC9hPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInR5cGVcIj4ke3RoaXMuc2NoZW1hLnR5cGV9PC9zcGFuPlxuXG4gICAgICAgICAgJHtfaWYodGhpcy5pc1JlcXVpcmVkKHRoaXMuc2NoZW1hKSlgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZm9ybWF0KWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9ybWF0XCI+KCR7dGhpcy5zY2hlbWEuZm9ybWF0fSk8L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLm1pbmltdW0pYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBtaW5pbXVtXCI+bWluaW11bToke3RoaXMuc2NoZW1hLm1pbmltdW19PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UgZXhjbHVzaXZlTWluaW11bVwiPihleCltaW5pbXVtOiR7dGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bX08L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLm1heGltdW0pYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBtYXhpbXVtXCI+bWF4aW11bToke3RoaXMuc2NoZW1hLm1heGltdW19PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UgZXhjbHVzaXZlTWF4aW11bVwiPihleCltYXhpbXVtOiR7dGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bX08L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aClgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIG1pbkxlbmd0aFwiPm1pbkxlbmd0aDoke3RoaXMuc2NoZW1hLm1pbkxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLm1heExlbmd0aClgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIG1heExlbmd0aFwiPm1heExlbmd0aDoke3RoaXMuc2NoZW1hLm1heExlbmd0aH08L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKWBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lciBkZXNjcmlwdGlvblwiPiR7dGhpcy5zY2hlbWEuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmVudW0pYFxuICAgICAgICAgICAgJHt0aGlzLmVudW0odGhpcy5zY2hlbWEsIHRoaXMuaXNDb2xsYXBzZWQsIHRoaXMub3Blbil9XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmFsbE9mKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnYWxsT2YnKX1gfVxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLm9uZU9mKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnb25lT2YnKX1gfVxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmFueU9mKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnYW55T2YnKX1gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGB9XG5cblxuICAgICAgPCEtLSBBcnJheSAtLT5cbiAgICAgICR7X2lmKHRoaXMuaXNBcnJheSlgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcnJheVwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGVcIj48c3BhbiBjbGFzcz1cInRvZ2dsZS1oYW5kbGVcIj48L3NwYW4+JHtcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hLnRpdGxlIHx8ICcnXG4gICAgICAgICAgfTxzcGFuIGNsYXNzPVwib3BlbmluZyBicmFja2V0XCI+Wzwvc3Bhbj4ke19pZih0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2luZyBicmFja2V0XCI+XTwvc3Bhbj5cbiAgICAgICAgICBgfTwvYT5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiAodGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgfHwgdGhpcy5zY2hlbWEubWluSXRlbXMgfHwgdGhpcy5zY2hlbWEubWF4SXRlbXMpKWBcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8c3BhbiB0aXRsZT1cIml0ZW1zIHJhbmdlXCI+KCR7dGhpcy5zY2hlbWEubWluSXRlbXMgfHwgMH0uLiR7dGhpcy5zY2hlbWEubWF4SXRlbXMgfHwgJ+KInid9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpYFxuICAgICAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwidW5pcXVlXCIgY2xhc3M9XCJ1bmlxdWVJdGVtc1wiPuKZpjwvc3Bhbj5cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICBgfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHt0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiB8fCAnJ308L2Rpdj5cbiAgICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5lbnVtKWBcbiAgICAgICAgICAgICR7dGhpcy5lbnVtKHRoaXMuc2NoZW1hLCB0aGlzLmlzQ29sbGFwc2VkLCB0aGlzLm9wZW4pfVxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbGxPZilgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FsbE9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5vbmVPZilgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ29uZU9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbnlPZilgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FueU9mJyl9YH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2luZyBicmFja2V0XCI+XTwvc3Bhbj5cbiAgICAgICAgICBgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGB9XG5cbiAgICAgIDwhLS0gT2JqZWN0IC0tPlxuICAgICAgJHtfaWYoIXRoaXMuaXNQcmltaXRpdmUgJiYgIXRoaXMuaXNBcnJheSlgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJvYmplY3RcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cInRpdGxlXCI+PHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWhhbmRsZVwiPjwvc3Bhbj4ke3RoaXMuc2NoZW1hLnRpdGxlIHx8ICcnfSA8c3BhblxuICAgICAgICAgICAgY2xhc3M9XCJvcGVuaW5nIGJyYWNlXCI+ezwvc3Bhbj4ke19pZih0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zaW5nIGJyYWNlXCIgbmctaWY9XCJpc0NvbGxhcHNlZFwiPn08L3NwYW4+XG4gICAgICAgICAgYH08L2E+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7dGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gfHwgJyd9PC9kaXY+XG4gICAgICAgICAgICA8IS0tIGNoaWxkcmVuIGdvIGhlcmUgLS0+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5lbnVtKWBcbiAgICAgICAgICAgICR7dGhpcy5lbnVtKHRoaXMuc2NoZW1hLCB0aGlzLmlzQ29sbGFwc2VkLCB0aGlzLm9wZW4pfVxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbGxPZilgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FsbE9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5vbmVPZilgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ29uZU9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbnlPZilgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FueU9mJyl9YH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2luZyBicmFjZVwiPn08L3NwYW4+XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGB9XG4gICAgICA8L2Rpdj5cbiAgICBgLnJlcGxhY2UoL1xccypcXG4vZywgJ1xcbicpLnJlcGxhY2UoLyhcXDxcXCFcXC1cXC0pLisvZywgJycpLnRyaW0oKTtcbiAgfVxuXG4gIHhPZihzY2hlbWEsIHR5cGUpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz1cImlubmVyICR7dHlwZX1cIj5cbiAgICAgICAgPGI+JHtjb252ZXJ0WE9mKHR5cGUpfTo8L2I+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgZW51bShzY2hlbWEsIGlzQ29sbGFwc2VkLCBvcGVuKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICR7X2lmKCFpc0NvbGxhcHNlZCAmJiBzY2hlbWEuZW51bSlgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lciBlbnVtc1wiPlxuICAgICAgICAgIDxiPkVudW06PC9iPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGB9XG4gICAgYDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlKCk7XG5cbiAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkcmVuKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciBmb3IgdG9nZ2xpbmdcbiAgICAvLyB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignYS50b2dnbGVyLWxpbmsnKVxuICAgIC8vICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVPcGVuLmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignZGl2Lmpzb24tc2NoZW1hLXZpZXcnKTtcbiAgfVxuXG4gIGFwcGVuZENoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICBjb25zdCBpbm5lciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmlubmVyJyk7XG5cbiAgICBpZiAodGhpcy5zY2hlbWEuZW51bSkge1xuICAgICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEpTT05Gb3JtYXR0ZXIodGhpcy5zY2hlbWEuZW51bSwgdGhpcy5vcGVuIC0gMSk7XG4gICAgICBjb25zdCBmb3JtYXR0ZXJFbCA9IGZvcm1hdHRlci5yZW5kZXIoKTtcbiAgICAgIGZvcm1hdHRlckVsLmNsYXNzTGlzdC5hZGQoJ2lubmVyJyk7XG4gICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnVtcy5pbm5lcicpLmFwcGVuZENoaWxkKGZvcm1hdHRlckVsKTtcblxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQXJyYXkpIHtcbiAgICAgIGNvbnN0IHZpZXcgPSBuZXcgSlNPTlNjaGVtYVZpZXcodGhpcy5zY2hlbWEuaXRlbXMsIHRoaXMub3BlbiAtIDEpXG4gICAgICBpbm5lci5hcHBlbmRDaGlsZCh2aWV3LnJlbmRlcigpKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKS5mb3JFYWNoKHByb3BlcnR5TmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0gdGhpcy5zY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7O1xuICAgICAgICB0ZW1wRGl2LmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicHJvcGVydHlcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj4ke3Byb3BlcnR5TmFtZX06PC9zcGFuPlxuICAgICAgICA8L2Rpdj5gO1xuICAgICAgICBjb25zdCB2aWV3ID0gbmV3IEpTT05TY2hlbWFWaWV3KHByb3BlcnR5LCB0aGlzLm9wZW4gLSAxKTtcbiAgICAgICAgdGVtcERpdi5xdWVyeVNlbGVjdG9yKCcucHJvcGVydHknKS5hcHBlbmRDaGlsZCh2aWV3LnJlbmRlcigpKTtcblxuICAgICAgICBpbm5lci5hcHBlbmRDaGlsZCh0ZW1wRGl2LnF1ZXJ5U2VsZWN0b3IoJy5wcm9wZXJ0eScpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNjaGVtYS5hbGxPZikgeyBhcHBlbmRYT2YuY2FsbCh0aGlzLCAnYWxsT2YnKTsgfVxuICAgIGlmICh0aGlzLnNjaGVtYS5vbmVPZikgeyBhcHBlbmRYT2YuY2FsbCh0aGlzLCAnb25lT2YnKTsgfVxuICAgIGlmICh0aGlzLnNjaGVtYS5hbnlPZikgeyBhcHBlbmRYT2YuY2FsbCh0aGlzLCAnYW55T2YnKTsgfVxuXG4gICAgZnVuY3Rpb24gYXBwZW5kWE9mKHR5cGUpIHtcbiAgICAgIGNvbnN0IGlubmVyQWxsT2YgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC5pbm5lci4ke3R5cGV9YCk7XG5cbiAgICAgIHRoaXMuc2NoZW1hW3R5cGVdLmZvckVhY2goc2NoZW1hID0+IHtcbiAgICAgICAgY29uc3QgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW5uZXIuY2xhc3NMaXN0LmFkZCgnaW5uZXInKTtcbiAgICAgICAgY29uc3QgdmlldyA9IG5ldyBKU09OU2NoZW1hVmlldyhzY2hlbWEsIHRoaXMub3BlbiAtIDEpO1xuICAgICAgICBpbm5lci5hcHBlbmRDaGlsZCh2aWV3LnJlbmRlcigpKTtcbiAgICAgICAgaW5uZXJBbGxPZi5hcHBlbmRDaGlsZChpbm5lcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVE9ETzogVU1EXG53aW5kb3cuSlNPTlNjaGVtYVZpZXcgPSBKU09OU2NoZW1hVmlldztcbiJdfQ==
