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
    _templateObject2 = _taggedTemplateLiteral(['\n        <div class="primitive">\n          ', '\n\n          <span class="type">', '</span>\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          <div class="inner description">', '</div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n        </div>\n      '], ['\n        <div class="primitive">\n          ', '\n\n          <span class="type">', '</span>\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          <div class="inner description">', '</div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n        </div>\n      ']),
    _templateObject3 = _taggedTemplateLiteral(['\n            <a class="title"><span class="toggle-handle"></span>', ' </a>\n          '], ['\n            <a class="title"><span class="toggle-handle"></span>', ' </a>\n          ']),
    _templateObject4 = _taggedTemplateLiteral(['\n            <span class="required">*</span>\n          '], ['\n            <span class="required">*</span>\n          ']),
    _templateObject5 = _taggedTemplateLiteral(['\n            <span class="format">(', ')</span>\n          '], ['\n            <span class="format">(', ')</span>\n          ']),
    _templateObject6 = _taggedTemplateLiteral(['\n            <span class="range minimum">minimum:', '</span>\n          '], ['\n            <span class="range minimum">minimum:', '</span>\n          ']),
    _templateObject7 = _taggedTemplateLiteral(['\n            <span class="range exclusiveMinimum">(ex)minimum:', '</span>\n          '], ['\n            <span class="range exclusiveMinimum">(ex)minimum:', '</span>\n          ']),
    _templateObject8 = _taggedTemplateLiteral(['\n            <span class="range maximum">maximum:', '</span>\n          '], ['\n            <span class="range maximum">maximum:', '</span>\n          ']),
    _templateObject9 = _taggedTemplateLiteral(['\n            <span class="range exclusiveMaximum">(ex)maximum:', '</span>\n          '], ['\n            <span class="range exclusiveMaximum">(ex)maximum:', '</span>\n          ']),
    _templateObject10 = _taggedTemplateLiteral(['\n            <span class="range minLength">minLength:', '</span>\n          '], ['\n            <span class="range minLength">minLength:', '</span>\n          ']),
    _templateObject11 = _taggedTemplateLiteral(['\n            <span class="range maxLength">maxLength:', '</span>\n          '], ['\n            <span class="range maxLength">maxLength:', '</span>\n          ']),
    _templateObject12 = _taggedTemplateLiteral(['\n            ', '\n          '], ['\n            ', '\n          ']),
    _templateObject13 = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject14 = _taggedTemplateLiteral(['\n        <div class="array">\n          <a class="title"><span class="toggle-handle"></span>', '<span class="opening bracket">[</span>', '</a>\n          ', '\n          <div class="inner">\n            <div class="description">', '</div>\n            ', '\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      '], ['\n        <div class="array">\n          <a class="title"><span class="toggle-handle"></span>', '<span class="opening bracket">[</span>', '</a>\n          ', '\n          <div class="inner">\n            <div class="description">', '</div>\n            ', '\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      ']),
    _templateObject15 = _taggedTemplateLiteral(['\n            <span class="closing bracket">]</span>\n          '], ['\n            <span class="closing bracket">]</span>\n          ']),
    _templateObject16 = _taggedTemplateLiteral(['\n            <span>\n              <span title="items range">(', '..', ')</span>\n              ', '\n            </span>\n          '], ['\n            <span>\n              <span title="items range">(', '..', ')</span>\n              ', '\n            </span>\n          ']),
    _templateObject17 = _taggedTemplateLiteral(['\n                <span title="unique" class="uniqueItems">♦</span>\n              '], ['\n                <span title="unique" class="uniqueItems">♦</span>\n              ']),
    _templateObject18 = _taggedTemplateLiteral(['\n              <!-- TODO -->\n              <json-schema-view schema="schema.items" open="open - 1"></json-schema-view>\n            '], ['\n              <!-- TODO -->\n              <json-schema-view schema="schema.items" open="open - 1"></json-schema-view>\n            ']),
    _templateObject19 = _taggedTemplateLiteral(['\n        <div class="object">\n          <a class="title"><span\n            class="toggle-handle"></span>', ' <span\n            class="opening brace">{</span>', '</a>\n\n          <div class="inner">\n            <div class="description">', '</div>\n\n            ', '\n\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n        '], ['\n        <div class="object">\n          <a class="title"><span\n            class="toggle-handle"></span>', ' <span\n            class="opening brace">{</span>', '</a>\n\n          <div class="inner">\n            <div class="description">', '</div>\n\n            ', '\n\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n        ']),
    _templateObject20 = _taggedTemplateLiteral(['\n              <span class="closing brace" ng-if="isCollapsed">}</span>\n          '], ['\n              <span class="closing brace" ng-if="isCollapsed">}</span>\n          ']),
    _templateObject21 = _taggedTemplateLiteral(['\n            <span class="closing brace">}</span>\n          '], ['\n            <span class="closing brace">}</span>\n          ']),
    _templateObject22 = _taggedTemplateLiteral(['\n        <div class="inner enums">\n          <b>Enum:</b>\n\n          <!-- TODO -->\n          <json-formatter class="inner" json="schema.enum" open="open"></json-formatter>\n        </div>\n      '], ['\n        <div class="inner enums">\n          <b>Enum:</b>\n\n          <!-- TODO -->\n          <json-formatter class="inner" json="schema.enum" open="open"></json-formatter>\n        </div>\n      ']);

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
      var _this = this;

      return '<div class="json-schema-view ' + _if(this.collapsed)(_templateObject) + '">\n\n      <!-- Primitive -->\n      ' + _if(this.isPrimitive)(_templateObject2, _if(this.isPrimitiveCollapsible())(_templateObject3, this.schema.title), this.schema.type, _if(this.isRequired(this.schema))(_templateObject4), _if(!this.isCollapsed && this.schema.format)(_templateObject5, this.schema.format), _if(!this.isCollapsed && this.schema.minimum)(_templateObject6, this.schema.minimum), _if(!this.isCollapsed && this.schema.exclusiveMinimum)(_templateObject7, this.schema.exclusiveMinimum), _if(!this.isCollapsed && this.schema.maximum)(_templateObject8, this.schema.maximum), _if(!this.isCollapsed && this.schema.exclusiveMaximum)(_templateObject9, this.schema.exclusiveMaximum), _if(!this.isCollapsed && this.schema.minLength)(_templateObject10, this.schema.minLength), _if(!this.isCollapsed && this.schema.maxLength)(_templateObject11, this.schema.maxLength), this.schema.description, _if(!this.isCollapsed && this.schema['enum'])(_templateObject12, this['enum'](this.schema, this.isCollapsed, this.open)), _if(this.schema.allOf)(_templateObject13, this.xOf(this.schema, 'allOf')), _if(this.schema.oneOf)(_templateObject13, this.xOf(this.schema, 'oneOf')), _if(this.schema.anyOf)(_templateObject13, this.xOf(this.schema, 'anyOf'))) + '\n\n\n      <!-- Array -->\n      ' + _if(this.isArray)(_templateObject14, this.schema.title, _if(this.isCollapsed)(_templateObject15), _if(!this.isCollapsed && (this.schema.uniqueItems || this.schema.minItems || this.schema.maxItems))(_templateObject16, this.schema.minItems || 0, this.schema.maxItems || '∞', _if(!this.isCollapsed && this.schema.uniqueItems)(_templateObject17)), this.schema.description, _if(!this.isCollapsed)(_templateObject18), _if(!this.isCollapsed && this.schema['enum'])(_templateObject12, this['enum'](this.schema, this.isCollapsed, this.open)), _if(this.schema.allOf)(_templateObject13, this.xOf(this.schema, 'allOf')), _if(this.schema.oneOf)(_templateObject13, this.xOf(this.schema, 'oneOf')), _if(this.schema.anyOf)(_templateObject13, this.xOf(this.schema, 'anyOf')), _if(!this.isCollapsed)(_templateObject15)) + '\n\n      <!-- Object -->\n      ' + _if(!this.isPrimitive && !this.isArray)(_templateObject19, this.schema.title, _if(this.isCollapsed)(_templateObject20), this.schema.description, typeof this.properties === 'object' && Object.keys(this.properties).map(function (propertyName) {
        var property = _this.properties[propertyName];

        return ' <div class="property">\n                <span class="name">' + propertyName + ':</span>\n                // TODO\n                <json-schema-view schema="property" open="open - 1"></json-schema-view>\n              </div>';
      }), _if(!this.isCollapsed && this.schema['enum'])(_templateObject12, this['enum'](this.schema, this.isCollapsed, this.open)), _if(this.schema.allOf)(_templateObject13, this.xOf(this.schema, 'allOf')), _if(this.schema.oneOf)(_templateObject13, this.xOf(this.schema, 'oneOf')), _if(this.schema.anyOf)(_templateObject13, this.xOf(this.schema, 'anyOf')), _if(!this.isCollapsed)(_templateObject21)) + '\n      </div>\n    ';
    }
  }, {
    key: 'xOf',
    value: function xOf(schema, type) {
      return '\n      <div class="inner">\n        <b>' + (0, _helpersJs.convertXOf)(type) + ':</b>\n        ' + (this.schema && Array.isArray(this.schema[type]) && this.schema[type].map(function (sch) {
        return '\n            <div class="inner">\n              <!-- TODO -->\n              <json-schema-view schema="schema"></json-schema-view>\n            </div>\n          ';
      })) + '\n      </div>\n    ';
    }
  }, {
    key: 'enum',
    value: function _enum(schema, isCollapsed, open) {
      return '\n      ' + _if(!isCollapsed && schema['enum'])(_templateObject22) + '\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      var element = document.createElement('div');
      element.innerHTML = this.template();

      // add event listener for toggling
      // this.element.querySelector('a.toggler-link')
      //   .addEventListener('click', this.toggleOpen.bind(this));

      return element.querySelector('div.json-schema-view');
    }
  }]);

  return JSONSchemaView;
})();

exports['default'] = JSONSchemaView;
window.JSONSchemaView = JSONSchemaView;
module.exports = exports['default'];

},{"./helpers.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbW9oc2VuL1Byb2plY3RzL2pzb24tc2NoZW1hLXZpZXctanMvc3JjL2hlbHBlcnMuanMiLCIvVXNlcnMvbW9oc2VuL1Byb2plY3RzL2pzb24tc2NoZW1hLXZpZXctanMvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYixTQUFTLFlBQVksQ0FBQyxHQUFHLEVBQUU7QUFDekIsU0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztDQUMvQjs7Ozs7Ozs7Ozs7QUFVTSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7QUFDOUIsTUFBSSxJQUFJLEdBQUcsT0FBTyxLQUFLLENBQUM7QUFDeEIsU0FBTyxDQUFDLENBQUMsS0FBSyxJQUFLLElBQUksSUFBSSxRQUFRLEFBQUMsQ0FBQztDQUN0Qzs7Ozs7Ozs7Ozs7O0FBV00sU0FBUyxhQUFhLENBQUMsTUFBTSxFQUFFO0FBQ3BDLE1BQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtBQUN4QixXQUFPLEVBQUUsQ0FBQztHQUNYO0FBQ0QsTUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO0FBQ25CLFdBQU8sUUFBUSxDQUFDO0dBQ2pCO0FBQ0QsTUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO0FBQ25ELFdBQU8sUUFBUSxDQUFDO0dBQ25COztBQUVELE1BQU0sYUFBYSxHQUFHLG9CQUFvQixDQUFDO0FBQzNDLE1BQU0sT0FBTyxHQUFHLEFBQUMsYUFBYSxDQUFFLElBQUksQ0FBQyxBQUFDLE1BQU0sQ0FBRSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUN0RSxNQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxH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QUFJLENBQUMsV0FBVyxDQUFDLHFCQUc1RCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBLEFBQUMsQ0FBQyxvQkFFcEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEdBQUcsRUFDcEYsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxzQkFNMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQ2hELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMscUJBTXhCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sUUFBSyxDQUFDLG9CQUN4QyxJQUFJLFFBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUdyRCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsb0JBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUN2RCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsb0JBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUN2RCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsb0JBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUV2RCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLDZEQU8xQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFHSixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFDaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMscUJBSzFCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUVoRCxBQUFDLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLElBQUssTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsWUFBWSxFQUFJO0FBQzFGLFlBQU0sUUFBUSxHQUFHLE1BQUssVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDOztBQUUvQyxnRkFDdUIsWUFBWSxzSkFHM0I7T0FDVCxDQUFDLEVBSUYsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxRQUFLLENBQUMsb0JBQ3hDLElBQUksUUFBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBR3JELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQ3ZELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQ3ZELEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBRXZELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsOENBTTVCO0tBQ0g7OztXQUVFLGFBQUMsTUFBTSxFQUFFLElBQUksRUFBRTtBQUNoQiwwREFFUywyQkFBVyxJQUFJLENBQUMsd0JBRW5CLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHOztPQUszRSxDQUFDLENBQUEsMEJBR047S0FDSDs7O1dBRUcsZUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtBQUM5QiwwQkFDSSxHQUFHLENBQUMsQ0FBQyxXQUFXLElBQUksTUFBTSxRQUFLLENBQUMsK0JBUWxDO0tBQ0g7OztXQUVLLGtCQUFHO0FBQ1AsVUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QyxhQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7Ozs7O0FBT3BDLGFBQU8sT0FBTyxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0tBQ3REOzs7U0E1T2tCLGNBQWM7OztxQkFBZCxjQUFjO0FBZ1BuQyxNQUFNLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbi8qXG4gKiBFc2NhcGVzIGBcImAgY2hhcmFjaHRlcnMgZnJvbSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKCdcIicsICdcXFwiJyk7XG59XG5cbi8qXG4gKiBEZXRlcm1pbmVzIGlmIGEgdmFsdWUgaXMgYW4gb2JqZWN0XG4gKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcpO1xufVxuXG4vKlxuICogR2V0cyBjb25zdHJ1Y3RvciBuYW1lIG9mIGFuIG9iamVjdC5cbiAqIEZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzMyNDI5XG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPYmplY3ROYW1lKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKG9iamVjdCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgIW9iamVjdC5jb25zdHJ1Y3Rvcikge1xuICAgICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG5cbiAgY29uc3QgZnVuY05hbWVSZWdleCA9IC9mdW5jdGlvbiAoLnsxLH0pXFwoLztcbiAgY29uc3QgcmVzdWx0cyA9IChmdW5jTmFtZVJlZ2V4KS5leGVjKChvYmplY3QpLmNvbnN0cnVjdG9yLnRvU3RyaW5nKCkpO1xuICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IDEpIHtcbiAgICByZXR1cm4gcmVzdWx0c1sxXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuLypcbiAqIEdldHMgdHlwZSBvZiBhbiBvYmplY3QuIFJldHVybnMgXCJudWxsXCIgZm9yIG51bGwgb2JqZWN0c1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSB7IHJldHVybiAnbnVsbCc7IH1cbiAgcmV0dXJuIHR5cGVvZiBvYmplY3Q7XG59XG5cbi8qXG4gKiBHZW5lcmF0ZXMgaW5saW5lIHByZXZpZXcgZm9yIGEgSmF2YVNjcmlwdCBvYmplY3QgYmFzZWQgb24gYSB2YWx1ZVxuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVQcmV2aWV3IChvYmplY3QsIHZhbHVlKSB7XG4gIHZhciB0eXBlID0gZ2V0VHlwZShvYmplY3QpO1xuXG4gIGlmICh0eXBlID09PSAnbnVsbCcgfHwgdHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHR5cGU7IH1cblxuICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWx1ZSA9ICdcIicgKyBlc2NhcGVTdHJpbmcodmFsdWUpICsgJ1wiJztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJyl7XG5cbiAgICAvLyBSZW1vdmUgY29udGVudCBvZiB0aGUgZnVuY3Rpb25cbiAgICByZXR1cm4gb2JqZWN0LnRvU3RyaW5nKClcbiAgICAgICAgLnJlcGxhY2UoL1tcXHJcXG5dL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvXFx7LipcXH0vLCAnJykgKyAne+KApn0nO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuLypcbiAqIEdlbmVyYXRlcyBpbmxpbmUgcHJldmlldyBmb3IgYSBKYXZhU2NyaXB0IG9iamVjdFxuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpZXcob2JqZWN0KSB7XG4gIGxldCB2YWx1ZSA9ICcnO1xuICBpZiAoaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHZhbHVlID0gZ2V0T2JqZWN0TmFtZShvYmplY3QpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iamVjdCkpXG4gICAgICB2YWx1ZSArPSAnWycgKyBvYmplY3QubGVuZ3RoICsgJ10nO1xuICB9IGVsc2Uge1xuICAgIHZhbHVlID0gZ2V0VmFsdWVQcmV2aWV3KG9iamVjdCwgb2JqZWN0KTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbiAvKlxuICogUmVjdXJzaXZlbHkgd2FsayB0aGUgc2NoZW1hIGFuZCBhZGQgcHJvcGVydHkgJ25hbWUnIHRvIHByb3BlcnR5IG9iamVjdHNcbiovXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvcGVydHlOYW1lKHNjaGVtYSkge1xuICBpZiAoIXNjaGVtYSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodHlwZW9mIHNjaGVtYS5pdGVtcyA9PT0gJ29iamVjdCcpIHtcbiAgICBhZGRQcm9wZXJ0eU5hbWUoc2NoZW1hLml0ZW1zKTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2Ygc2NoZW1hLnByb3BlcnRpZXMgPT09ICdvYmplY3QnKSB7XG4gICAgT2JqZWN0LmtleXMoc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2goZnVuY3Rpb24ocHJvcGVydHlOYW1lKSB7XG4gICAgICBzY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdLm5hbWUgPSBwcm9wZXJ0eU5hbWU7XG4gICAgICBhZGRQcm9wZXJ0eU5hbWUoc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXSk7XG4gICAgfSk7XG4gIH1cbn1cblxuLypcbiAqIENvbnZlcnRzIGFueU9mLCBhbGxPZiBhbmQgb25lT2YgdG8gaHVtYW4gcmVhZGFibGUgc3RyaW5nXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRYT2YodHlwZSkge1xuICByZXR1cm4gdHlwZS5zdWJzdHJpbmcoMCwgMykgKyAnIG9mJztcbn0iLCIndXNlIHN0cmljdCc7XG5cbi8qIGdsb2JhbHMgSlNPTlNjaGVtYVZpZXcgKi9cblxuaW1wb3J0IHtcbiAgaXNPYmplY3QsXG4gIGdldE9iamVjdE5hbWUsXG4gIGdldFR5cGUsXG4gIGdldFZhbHVlUHJldmlldyxcbiAgZ2V0UHJldmlldyxcbiAgYWRkUHJvcGVydHlOYW1lLFxuICBjb252ZXJ0WE9mXG59IGZyb20gJy4vaGVscGVycy5qcyc7XG5cblxuLypcbiAqIGlmIGNvbmRpdGlvbiBmb3IgRVM2IHRlbXBsYXRlIHN0cmluZ3NcbiAqIHRvIGJlIHVzZWQgb25seSBpbiB0ZW1wbGF0ZSBzdHJpbmdcbiAqXG4gKiBAZXhhbXBsZSBteXN0ciA9IGBSYW5kb20gaXMgJHtfaWYoTWF0aC5yYW5kb20oKSA+IDAuNSlgZ3JlYXRlciB0aGFuIDAuNWBgXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBjb25kaXRpb25cbiAqXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IHRoZSB0ZW1wbGF0ZSBmdW5jdGlvblxuKi9cbmZ1bmN0aW9uIF9pZihjb25kaXRpb24pIHtcbiAgcmV0dXJuIGNvbmRpdGlvbiA/IG5vcm1hbCA6IGVtcHR5O1xufVxuZnVuY3Rpb24gZW1wdHkoKXtcbiAgcmV0dXJuICcnO1xufVxuZnVuY3Rpb24gbm9ybWFsICh0ZW1wbGF0ZSwgLi4uZXhwcmVzc2lvbnMpIHtcbiAgcmV0dXJuIHRlbXBsYXRlLnNsaWNlKDEpLnJlZHVjZSgoYWNjdW11bGF0b3IsIHBhcnQsIGkpID0+IHtcbiAgICByZXR1cm4gYWNjdW11bGF0b3IgKyBleHByZXNzaW9uc1tpXSArIHBhcnQ7XG4gIH0sIHRlbXBsYXRlWzBdKTtcbn1cblxuLyoqXG4gKiBAY2xhc3MgSlNPTlNjaGVtYVZpZXdcbiAqXG4gKiBKU09OU2NoZW1hVmlldyBhbGxvd3MgeW91IHRvIHJlbmRlciBKU09OIG9iamVjdHMgaW4gSFRNTCB3aXRoIGFcbiAqICoqY29sbGFwc2libGUqKiBuYXZpZ2F0aW9uLlxuKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpTT05TY2hlbWFWaWV3IHtcblxuICAvKipcbiAgICogQHBhcmFtIHtvYmplY3R9IGpzb24gVGhlIEpTT04gb2JqZWN0IHlvdSB3YW50IHRvIHJlbmRlci4gSXQgaGFzIHRvIGJlIGFuXG4gICAqIG9iamVjdCBvciBhcnJheS4gRG8gTk9UIHBhc3MgcmF3IEpTT04gc3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW29wZW49MV0gaGlzIG51bWJlciBpbmRpY2F0ZXMgdXAgdG8gaG93IG1hbnkgbGV2ZWxzIHRoZVxuICAgKiByZW5kZXJlZCB0cmVlIHNob3VsZCBleHBhbmQuIFNldCBpdCB0byBgMGAgdG8gbWFrZSB0aGUgd2hvbGUgdHJlZSBjb2xsYXBzZWRcbiAgICogb3Igc2V0IGl0IHRvIGBJbmZpbml0eWAgdG8gZXhwYW5kIHRoZSB0cmVlIGRlZXBseVxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gW2NvbmZpZz1kZWZhdWx0Q29uZmlnXSAtXG4gICAqICBkZWZhdWx0Q29uZmlnID0ge1xuICAgKiAgIGhvdmVyUHJldmlld0VuYWJsZWQ6IGZhbHNlLFxuICAgKiAgIGhvdmVyUHJldmlld0FycmF5Q291bnQ6IDEwMCxcbiAgICogICBob3ZlclByZXZpZXdGaWVsZENvdW50OiA1XG4gICAqIH1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFtrZXk9dW5kZWZpbmVkXSBUaGUga2V5IHRoYXQgdGhpcyBvYmplY3QgaW4gaXQncyBwYXJlbnRcbiAgICogY29udGV4dFxuICAqL1xuICBjb25zdHJ1Y3RvcihzY2hlbWEsIG9wZW4sIGNvbmZpZywga2V5KSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdGhpcy5vcGVuID0gb3BlbjtcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gb3BlbiA8PSAwO1xuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIGEgc2NoZW1hIGlzIGFuIGFycmF5XG4gICAgdGhpcy5pc0FycmF5ID0gdGhpcy5zY2hlbWEgJiYgdGhpcy5zY2hlbWEudHlwZSA9PT0gJ2FycmF5JztcblxuICAgIC8vIERldGVybWluZSBpZiBhIHNjaGVtYSBpcyBhIHByaW1pdGl2ZVxuICAgIHRoaXMuaXNQcmltaXRpdmUgPSB0aGlzLnNjaGVtYSAmJlxuICAgICAgIXRoaXMuc2NoZW1hLnByb3BlcnRpZXMgJiZcbiAgICAgICF0aGlzLnNjaGVtYS5pdGVtcyAmJlxuICAgICAgdGhpcy5zY2hlbWEudHlwZSAhPT0gJ2FycmF5JyAmJlxuICAgICAgdGhpcy5zY2hlbWEudHlwZSAhPT0gJ29iamVjdCc7XG4gIH1cblxuICAvKlxuICAgKiBUb2dnbGVzIHRoZSAnY29sbGFwc2VkJyBzdGF0ZVxuICAqL1xuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9ICF0aGlzLmlzQ29sbGFwc2VkO1xuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0cnVlIGlmIHByb3BlcnR5IGlzIHJlcXVpcmVkIGluIGdpdmVuIHNjaGVtYVxuICAqL1xuICBpc1JlcXVpcmVkKHNjaGVtYSwgcGFyZW50KSB7XG4gICAgaWYgKHBhcmVudCAmJiBBcnJheS5pc0FycmF5KHBhcmVudC5yZXF1aXJlZCkgJiYgc2NoZW1hLm5hbWUpIHtcbiAgICAgIHJldHVybiBwYXJlbnQucmVxdWlyZWQuaW5kZXhPZihzY2hlbWEubmFtZSkgPiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHNjaGVtYSBpcyB0b28gc2ltcGxlIHRvIGJlIGNvbGxhcHNpYmxlXG4gICovXG4gIGlzUHJpbWl0aXZlQ29sbGFwc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIHx8IHRoaXMuc2NoZW1hLnRpdGxlO1xuICB9XG5cbiAgdGVtcGxhdGUoKSB7XG5cbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJqc29uLXNjaGVtYS12aWV3ICR7X2lmKHRoaXMuY29sbGFwc2VkKWBjb2xsYXBzZWRgfVwiPlxuXG4gICAgICA8IS0tIFByaW1pdGl2ZSAtLT5cbiAgICAgICR7X2lmKHRoaXMuaXNQcmltaXRpdmUpYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJpbWl0aXZlXCI+XG4gICAgICAgICAgJHtfaWYodGhpcy5pc1ByaW1pdGl2ZUNvbGxhcHNpYmxlKCkpYFxuICAgICAgICAgICAgPGEgY2xhc3M9XCJ0aXRsZVwiPjxzcGFuIGNsYXNzPVwidG9nZ2xlLWhhbmRsZVwiPjwvc3Bhbj4ke3RoaXMuc2NoZW1hLnRpdGxlfSA8L2E+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHlwZVwiPiR7dGhpcy5zY2hlbWEudHlwZX08L3NwYW4+XG5cbiAgICAgICAgICAke19pZih0aGlzLmlzUmVxdWlyZWQodGhpcy5zY2hlbWEpKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5mb3JtYXQpYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtYXRcIj4oJHt0aGlzLnNjaGVtYS5mb3JtYXR9KTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEubWluaW11bSlgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIG1pbmltdW1cIj5taW5pbXVtOiR7dGhpcy5zY2hlbWEubWluaW11bX08L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBleGNsdXNpdmVNaW5pbXVtXCI+KGV4KW1pbmltdW06JHt0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtfTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEubWF4aW11bSlgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIG1heGltdW1cIj5tYXhpbXVtOiR7dGhpcy5zY2hlbWEubWF4aW11bX08L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBleGNsdXNpdmVNYXhpbXVtXCI+KGV4KW1heGltdW06JHt0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtfTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEubWluTGVuZ3RoKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UgbWluTGVuZ3RoXCI+bWluTGVuZ3RoOiR7dGhpcy5zY2hlbWEubWluTGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEubWF4TGVuZ3RoKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UgbWF4TGVuZ3RoXCI+bWF4TGVuZ3RoOiR7dGhpcy5zY2hlbWEubWF4TGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyIGRlc2NyaXB0aW9uXCI+JHt0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbn08L2Rpdj5cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmVudW0pYFxuICAgICAgICAgICAgJHt0aGlzLmVudW0odGhpcy5zY2hlbWEsIHRoaXMuaXNDb2xsYXBzZWQsIHRoaXMub3Blbil9XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmFsbE9mKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnYWxsT2YnKX1gfVxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLm9uZU9mKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnb25lT2YnKX1gfVxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmFueU9mKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnYW55T2YnKX1gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGB9XG5cblxuICAgICAgPCEtLSBBcnJheSAtLT5cbiAgICAgICR7X2lmKHRoaXMuaXNBcnJheSlgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcnJheVwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGVcIj48c3BhbiBjbGFzcz1cInRvZ2dsZS1oYW5kbGVcIj48L3NwYW4+JHtcbiAgICAgICAgICAgIHRoaXMuc2NoZW1hLnRpdGxlXG4gICAgICAgICAgfTxzcGFuIGNsYXNzPVwib3BlbmluZyBicmFja2V0XCI+Wzwvc3Bhbj4ke19pZih0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2luZyBicmFja2V0XCI+XTwvc3Bhbj5cbiAgICAgICAgICBgfTwvYT5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiAodGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgfHwgdGhpcy5zY2hlbWEubWluSXRlbXMgfHwgdGhpcy5zY2hlbWEubWF4SXRlbXMpKWBcbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8c3BhbiB0aXRsZT1cIml0ZW1zIHJhbmdlXCI+KCR7dGhpcy5zY2hlbWEubWluSXRlbXMgfHwgMH0uLiR7dGhpcy5zY2hlbWEubWF4SXRlbXMgfHwgJ+KInid9KTwvc3Bhbj5cbiAgICAgICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpYFxuICAgICAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwidW5pcXVlXCIgY2xhc3M9XCJ1bmlxdWVJdGVtc1wiPuKZpjwvc3Bhbj5cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICBgfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHt0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICAgICAgPCEtLSBUT0RPIC0tPlxuICAgICAgICAgICAgICA8anNvbi1zY2hlbWEtdmlldyBzY2hlbWE9XCJzY2hlbWEuaXRlbXNcIiBvcGVuPVwib3BlbiAtIDFcIj48L2pzb24tc2NoZW1hLXZpZXc+XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZW51bSlgXG4gICAgICAgICAgICAke3RoaXMuZW51bSh0aGlzLnNjaGVtYSwgdGhpcy5pc0NvbGxhcHNlZCwgdGhpcy5vcGVuKX1cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuYWxsT2YpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdhbGxPZicpfWB9XG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEub25lT2YpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdvbmVPZicpfWB9XG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuYW55T2YpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdhbnlPZicpfWB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZClgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NpbmcgYnJhY2tldFwiPl08L3NwYW4+XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgfVxuXG4gICAgICA8IS0tIE9iamVjdCAtLT5cbiAgICAgICR7X2lmKCF0aGlzLmlzUHJpbWl0aXZlICYmICF0aGlzLmlzQXJyYXkpYFxuICAgICAgICA8ZGl2IGNsYXNzPVwib2JqZWN0XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJ0aXRsZVwiPjxzcGFuXG4gICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1oYW5kbGVcIj48L3NwYW4+JHt0aGlzLnNjaGVtYS50aXRsZX0gPHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwib3BlbmluZyBicmFjZVwiPns8L3NwYW4+JHtfaWYodGhpcy5pc0NvbGxhcHNlZClgXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2luZyBicmFjZVwiIG5nLWlmPVwiaXNDb2xsYXBzZWRcIj59PC9zcGFuPlxuICAgICAgICAgIGB9PC9hPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke3RoaXMuc2NoZW1hLmRlc2NyaXB0aW9ufTwvZGl2PlxuXG4gICAgICAgICAgICAkeyh0eXBlb2YgdGhpcy5wcm9wZXJ0aWVzID09PSAnb2JqZWN0JykgJiYgT2JqZWN0LmtleXModGhpcy5wcm9wZXJ0aWVzKS5tYXAocHJvcGVydHlOYW1lID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcblxuICAgICAgICAgICAgICByZXR1cm4gYCA8ZGl2IGNsYXNzPVwicHJvcGVydHlcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj4ke3Byb3BlcnR5TmFtZX06PC9zcGFuPlxuICAgICAgICAgICAgICAgIC8vIFRPRE9cbiAgICAgICAgICAgICAgICA8anNvbi1zY2hlbWEtdmlldyBzY2hlbWE9XCJwcm9wZXJ0eVwiIG9wZW49XCJvcGVuIC0gMVwiPjwvanNvbi1zY2hlbWEtdmlldz5cbiAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5lbnVtKWBcbiAgICAgICAgICAgICR7dGhpcy5lbnVtKHRoaXMuc2NoZW1hLCB0aGlzLmlzQ29sbGFwc2VkLCB0aGlzLm9wZW4pfVxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbGxPZilgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FsbE9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5vbmVPZilgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ29uZU9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbnlPZilgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FueU9mJyl9YH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2luZyBicmFjZVwiPn08L3NwYW4+XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGB9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgeE9mKHNjaGVtYSwgdHlwZSkge1xuICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cbiAgICAgICAgPGI+JHtjb252ZXJ0WE9mKHR5cGUpfTo8L2I+XG4gICAgICAgICR7XG4gICAgICAgICAgdGhpcy5zY2hlbWEgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnNjaGVtYVt0eXBlXSkgJiYgdGhpcy5zY2hlbWFbdHlwZV0ubWFwKHNjaCA9PiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cbiAgICAgICAgICAgICAgPCEtLSBUT0RPIC0tPlxuICAgICAgICAgICAgICA8anNvbi1zY2hlbWEtdmlldyBzY2hlbWE9XCJzY2hlbWFcIj48L2pzb24tc2NoZW1hLXZpZXc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBgKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgZW51bShzY2hlbWEsIGlzQ29sbGFwc2VkLCBvcGVuKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICR7X2lmKCFpc0NvbGxhcHNlZCAmJiBzY2hlbWEuZW51bSlgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lciBlbnVtc1wiPlxuICAgICAgICAgIDxiPkVudW06PC9iPlxuXG4gICAgICAgICAgPCEtLSBUT0RPIC0tPlxuICAgICAgICAgIDxqc29uLWZvcm1hdHRlciBjbGFzcz1cImlubmVyXCIganNvbj1cInNjaGVtYS5lbnVtXCIgb3Blbj1cIm9wZW5cIj48L2pzb24tZm9ybWF0dGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGB9XG4gICAgYDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlKCk7XG5cblxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciBmb3IgdG9nZ2xpbmdcbiAgICAvLyB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignYS50b2dnbGVyLWxpbmsnKVxuICAgIC8vICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVPcGVuLmJpbmQodGhpcykpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignZGl2Lmpzb24tc2NoZW1hLXZpZXcnKTtcbiAgfVxufVxuXG4vLyBUT0RPOiBVTURcbndpbmRvdy5KU09OU2NoZW1hVmlldyA9IEpTT05TY2hlbWFWaWV3O1xuIl19
