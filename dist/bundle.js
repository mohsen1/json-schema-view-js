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
      return '\n      <div class="inner">\n        <b>' + (0, _helpersJs.convertXOf)(type) + ':</b>\n        ' + (this.schema && Array.isArray(this.schema[type]) && this.schema[type].map(function (sch) {
        return '\n            <div class="inner">\n              <!-- TODO -->\n              <json-schema-view schema="schema"></json-schema-view>\n            </div>\n          ';
      })) + '\n      </div>\n    ';
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
        Object.keys(this.schema.properties).map(function (propertyName) {
          var property = _this.schema.properties[propertyName];
          var tempDiv = document.createElement('div');;
          tempDiv.innerHTML = '<div class="property">\n          <span class="name">' + propertyName + ':</span>\n        </div>';
          var view = new JSONSchemaView(property, _this.open - 1);
          tempDiv.querySelector('.property').appendChild(view.render());

          inner.appendChild(tempDiv.querySelector('.property'));
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbW9oc2VuL1Byb2plY3RzL2pzb24tc2NoZW1hLXZpZXctanMvc3JjL2hlbHBlcnMuanMiLCIvVXNlcnMvbW9oc2VuL1Byb2plY3RzL2pzb24tc2NoZW1hLXZpZXctanMvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYixTQUFTLFlBQVksQ0FBQyxHQUFHLEVBQUU7QUFDekIsU0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztDQUMvQjs7Ozs7Ozs7Ozs7QUFVTSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7QUFDOUIsTUFBSSxJQUFJLEdBQUcsT0FBTyxLQUFLLENBQUM7QUFDeEIsU0FBTyxDQUFDLENBQUMsS0FBSyxJQUFLLElBQUksSUFBSSxRQUFRLEFBQUMsQ0FBQztDQUN0Qzs7Ozs7Ozs7Ozs7O0FBV00sU0FBUyxhQUFhLENBQUMsTUFBTSxFQUFFO0FBQ3BDLE1BQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtBQUN4QixXQUFPLEVBQUUsQ0FBQztHQUNYO0FBQ0QsTUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO0FBQ25CLFdBQU8sUUFBUSxDQUFDO0dBQ2pCO0FBQ0QsTUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO0FBQ25ELFdBQU8sUUFBUSxDQUFDO0dBQ25COztBQUVELE1BQU0sYUFBYSxHQUFHLG9CQUFvQixDQUFDO0FBQzNDLE1BQU0sT0FBTyxHQUFHLEFBQUMsYUFBYSxDQUFFLElBQUksQ0FBQyxBQUFDLE1BQU0sQ0FBRSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUN0RSxNQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxH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QUFDLG1CQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUd6RCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsbUJBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FHL0UsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FHL0QsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FHL0QsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLG9CQUNLLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUd4RCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLFFBQUssQ0FBQyxvQkFDeEMsSUFBSSxRQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FHckQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FDdkQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FDdkQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLG9CQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsNENBTTNELEdBQUcsQ0FBQyxJQUFJLENB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b24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuLypcbiAqIEVzY2FwZXMgYFwiYCBjaGFyYWNodGVycyBmcm9tIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4qL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoJ1wiJywgJ1xcXCInKTtcbn1cblxuLypcbiAqIERldGVybWluZXMgaWYgYSB2YWx1ZSBpcyBhbiBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0Jyk7XG59XG5cbi8qXG4gKiBHZXRzIGNvbnN0cnVjdG9yIG5hbWUgb2YgYW4gb2JqZWN0LlxuICogRnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMzI0MjlcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9iamVjdE5hbWUob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBpZiAob2JqZWN0ID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiAhb2JqZWN0LmNvbnN0cnVjdG9yKSB7XG4gICAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cblxuICBjb25zdCBmdW5jTmFtZVJlZ2V4ID0gL2Z1bmN0aW9uICguezEsfSlcXCgvO1xuICBjb25zdCByZXN1bHRzID0gKGZ1bmNOYW1lUmVnZXgpLmV4ZWMoKG9iamVjdCkuY29uc3RydWN0b3IudG9TdHJpbmcoKSk7XG4gIGlmIChyZXN1bHRzICYmIHJlc3VsdHMubGVuZ3RoID4gMSkge1xuICAgIHJldHVybiByZXN1bHRzWzFdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG4vKlxuICogR2V0cyB0eXBlIG9mIGFuIG9iamVjdC4gUmV0dXJucyBcIm51bGxcIiBmb3IgbnVsbCBvYmplY3RzXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9iamVjdFxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGUob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIHsgcmV0dXJuICdudWxsJzsgfVxuICByZXR1cm4gdHlwZW9mIG9iamVjdDtcbn1cblxuLypcbiAqIEdlbmVyYXRlcyBpbmxpbmUgcHJldmlldyBmb3IgYSBKYXZhU2NyaXB0IG9iamVjdCBiYXNlZCBvbiBhIHZhbHVlXG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZVByZXZpZXcgKG9iamVjdCwgdmFsdWUpIHtcbiAgdmFyIHR5cGUgPSBnZXRUeXBlKG9iamVjdCk7XG5cbiAgaWYgKHR5cGUgPT09ICdudWxsJyB8fCB0eXBlID09PSAndW5kZWZpbmVkJykgeyByZXR1cm4gdHlwZTsgfVxuXG4gIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gJ1wiJyArIGVzY2FwZVN0cmluZyh2YWx1ZSkgKyAnXCInO1xuICB9XG4gIGlmICh0eXBlID09PSAnZnVuY3Rpb24nKXtcblxuICAgIC8vIFJlbW92ZSBjb250ZW50IG9mIHRoZSBmdW5jdGlvblxuICAgIHJldHVybiBvYmplY3QudG9TdHJpbmcoKVxuICAgICAgICAucmVwbGFjZSgvW1xcclxcbl0vZywgJycpXG4gICAgICAgIC5yZXBsYWNlKC9cXHsuKlxcfS8sICcnKSArICd74oCmfSc7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG4vKlxuICogR2VuZXJhdGVzIGlubGluZSBwcmV2aWV3IGZvciBhIEphdmFTY3JpcHQgb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gb2JqZWN0XG4gKlxuICogQHJldHVybnMge3N0cmluZ31cbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlldyhvYmplY3QpIHtcbiAgbGV0IHZhbHVlID0gJyc7XG4gIGlmIChpc09iamVjdChvYmplY3QpKSB7XG4gICAgdmFsdWUgPSBnZXRPYmplY3ROYW1lKG9iamVjdCk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSlcbiAgICAgIHZhbHVlICs9ICdbJyArIG9iamVjdC5sZW5ndGggKyAnXSc7XG4gIH0gZWxzZSB7XG4gICAgdmFsdWUgPSBnZXRWYWx1ZVByZXZpZXcob2JqZWN0LCBvYmplY3QpO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuIC8qXG4gKiBSZWN1cnNpdmVseSB3YWxrIHRoZSBzY2hlbWEgYW5kIGFkZCBwcm9wZXJ0eSAnbmFtZScgdG8gcHJvcGVydHkgb2JqZWN0c1xuKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9wZXJ0eU5hbWUoc2NoZW1hKSB7XG4gIGlmICghc2NoZW1hKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0eXBlb2Ygc2NoZW1hLml0ZW1zID09PSAnb2JqZWN0Jykge1xuICAgIGFkZFByb3BlcnR5TmFtZShzY2hlbWEuaXRlbXMpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBzY2hlbWEucHJvcGVydGllcyA9PT0gJ29iamVjdCcpIHtcbiAgICBPYmplY3Qua2V5cyhzY2hlbWEucHJvcGVydGllcykuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eU5hbWUpIHtcbiAgICAgIHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0ubmFtZSA9IHByb3BlcnR5TmFtZTtcbiAgICAgIGFkZFByb3BlcnR5TmFtZShzY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKlxuICogQ29udmVydHMgYW55T2YsIGFsbE9mIGFuZCBvbmVPZiB0byBodW1hbiByZWFkYWJsZSBzdHJpbmdcbiovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFhPZih0eXBlKSB7XG4gIHJldHVybiB0eXBlLnN1YnN0cmluZygwLCAzKSArICcgb2YnO1xufSIsIid1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFscyBKU09OU2NoZW1hVmlldyAqL1xuXG5pbXBvcnQge1xuICBpc09iamVjdCxcbiAgZ2V0T2JqZWN0TmFtZSxcbiAgZ2V0VHlwZSxcbiAgZ2V0VmFsdWVQcmV2aWV3LFxuICBnZXRQcmV2aWV3LFxuICBhZGRQcm9wZXJ0eU5hbWUsXG4gIGNvbnZlcnRYT2Zcbn0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuXG4vKlxuICogaWYgY29uZGl0aW9uIGZvciBFUzYgdGVtcGxhdGUgc3RyaW5nc1xuICogdG8gYmUgdXNlZCBvbmx5IGluIHRlbXBsYXRlIHN0cmluZ1xuICpcbiAqIEBleGFtcGxlIG15c3RyID0gYFJhbmRvbSBpcyAke19pZihNYXRoLnJhbmRvbSgpID4gMC41KWBncmVhdGVyIHRoYW4gMC41YGBcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNvbmRpdGlvblxuICpcbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gdGhlIHRlbXBsYXRlIGZ1bmN0aW9uXG4qL1xuZnVuY3Rpb24gX2lmKGNvbmRpdGlvbikge1xuICByZXR1cm4gY29uZGl0aW9uID8gbm9ybWFsIDogZW1wdHk7XG59XG5mdW5jdGlvbiBlbXB0eSgpe1xuICByZXR1cm4gJyc7XG59XG5mdW5jdGlvbiBub3JtYWwgKHRlbXBsYXRlLCAuLi5leHByZXNzaW9ucykge1xuICByZXR1cm4gdGVtcGxhdGUuc2xpY2UoMSkucmVkdWNlKChhY2N1bXVsYXRvciwgcGFydCwgaSkgPT4ge1xuICAgIHJldHVybiBhY2N1bXVsYXRvciArIGV4cHJlc3Npb25zW2ldICsgcGFydDtcbiAgfSwgdGVtcGxhdGVbMF0pO1xufVxuXG4vKipcbiAqIEBjbGFzcyBKU09OU2NoZW1hVmlld1xuICpcbiAqIEpTT05TY2hlbWFWaWV3IGFsbG93cyB5b3UgdG8gcmVuZGVyIEpTT04gb2JqZWN0cyBpbiBIVE1MIHdpdGggYVxuICogKipjb2xsYXBzaWJsZSoqIG5hdmlnYXRpb24uXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNPTlNjaGVtYVZpZXcge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0ganNvbiBUaGUgSlNPTiBvYmplY3QgeW91IHdhbnQgdG8gcmVuZGVyLiBJdCBoYXMgdG8gYmUgYW5cbiAgICogb2JqZWN0IG9yIGFycmF5LiBEbyBOT1QgcGFzcyByYXcgSlNPTiBzdHJpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbb3Blbj0xXSBoaXMgbnVtYmVyIGluZGljYXRlcyB1cCB0byBob3cgbWFueSBsZXZlbHMgdGhlXG4gICAqIHJlbmRlcmVkIHRyZWUgc2hvdWxkIGV4cGFuZC4gU2V0IGl0IHRvIGAwYCB0byBtYWtlIHRoZSB3aG9sZSB0cmVlIGNvbGxhcHNlZFxuICAgKiBvciBzZXQgaXQgdG8gYEluZmluaXR5YCB0byBleHBhbmQgdGhlIHRyZWUgZGVlcGx5XG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbY29uZmlnPWRlZmF1bHRDb25maWddIC1cbiAgICogIGRlZmF1bHRDb25maWcgPSB7XG4gICAqICAgaG92ZXJQcmV2aWV3RW5hYmxlZDogZmFsc2UsXG4gICAqICAgaG92ZXJQcmV2aWV3QXJyYXlDb3VudDogMTAwLFxuICAgKiAgIGhvdmVyUHJldmlld0ZpZWxkQ291bnQ6IDVcbiAgICogfVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2tleT11bmRlZmluZWRdIFRoZSBrZXkgdGhhdCB0aGlzIG9iamVjdCBpbiBpdCdzIHBhcmVudFxuICAgKiBjb250ZXh0XG4gICovXG4gIGNvbnN0cnVjdG9yKHNjaGVtYSwgb3BlbiwgY29uZmlnLCBrZXkpIHtcbiAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYTtcbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSBvcGVuIDw9IDA7XG5cbiAgICAvLyBEZXRlcm1pbmUgaWYgYSBzY2hlbWEgaXMgYW4gYXJyYXlcbiAgICB0aGlzLmlzQXJyYXkgPSB0aGlzLnNjaGVtYSAmJiB0aGlzLnNjaGVtYS50eXBlID09PSAnYXJyYXknO1xuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIGEgc2NoZW1hIGlzIGEgcHJpbWl0aXZlXG4gICAgdGhpcy5pc1ByaW1pdGl2ZSA9IHRoaXMuc2NoZW1hICYmXG4gICAgICAhdGhpcy5zY2hlbWEucHJvcGVydGllcyAmJlxuICAgICAgIXRoaXMuc2NoZW1hLml0ZW1zICYmXG4gICAgICB0aGlzLnNjaGVtYS50eXBlICE9PSAnYXJyYXknICYmXG4gICAgICB0aGlzLnNjaGVtYS50eXBlICE9PSAnb2JqZWN0JztcbiAgfVxuXG4gIC8qXG4gICAqIFRvZ2dsZXMgdGhlICdjb2xsYXBzZWQnIHN0YXRlXG4gICovXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gIXRoaXMuaXNDb2xsYXBzZWQ7XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgcHJvcGVydHkgaXMgcmVxdWlyZWQgaW4gZ2l2ZW4gc2NoZW1hXG4gICovXG4gIGlzUmVxdWlyZWQoc2NoZW1hLCBwYXJlbnQpIHtcbiAgICBpZiAocGFyZW50ICYmIEFycmF5LmlzQXJyYXkocGFyZW50LnJlcXVpcmVkKSAmJiBzY2hlbWEubmFtZSkge1xuICAgICAgcmV0dXJuIHBhcmVudC5yZXF1aXJlZC5pbmRleE9mKHNjaGVtYS5uYW1lKSA+IC0xO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc2NoZW1hIGlzIHRvbyBzaW1wbGUgdG8gYmUgY29sbGFwc2libGVcbiAgKi9cbiAgaXNQcmltaXRpdmVDb2xsYXBzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gfHwgdGhpcy5zY2hlbWEudGl0bGU7XG4gIH1cblxuICB0ZW1wbGF0ZSgpIHtcblxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImpzb24tc2NoZW1hLXZpZXcgJHtfaWYodGhpcy5jb2xsYXBzZWQpYGNvbGxhcHNlZGB9XCI+XG5cbiAgICAgIDwhLS0gUHJpbWl0aXZlIC0tPlxuICAgICAgJHtfaWYodGhpcy5pc1ByaW1pdGl2ZSlgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmltaXRpdmVcIj5cbiAgICAgICAgICAke19pZih0aGlzLmlzUHJpbWl0aXZlQ29sbGFwc2libGUoKSlgXG4gICAgICAgICAgICA8YSBjbGFzcz1cInRpdGxlXCI+PHNwYW4gY2xhc3M9XCJ0b2dnbGUtaGFuZGxlXCI+PC9zcGFuPiR7dGhpcy5zY2hlbWEudGl0bGUgfHwgJyd9IDwvYT5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0eXBlXCI+JHt0aGlzLnNjaGVtYS50eXBlfTwvc3Bhbj5cblxuICAgICAgICAgICR7X2lmKHRoaXMuaXNSZXF1aXJlZCh0aGlzLnNjaGVtYSkpYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmZvcm1hdClgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm1hdFwiPigke3RoaXMuc2NoZW1hLmZvcm1hdH0pPC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5taW5pbXVtKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UgbWluaW11bVwiPm1pbmltdW06JHt0aGlzLnNjaGVtYS5taW5pbXVtfTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSlgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIGV4Y2x1c2l2ZU1pbmltdW1cIj4oZXgpbWluaW11bToke3RoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW19PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5tYXhpbXVtKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UgbWF4aW11bVwiPm1heGltdW06JHt0aGlzLnNjaGVtYS5tYXhpbXVtfTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSlgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIGV4Y2x1c2l2ZU1heGltdW1cIj4oZXgpbWF4aW11bToke3RoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW19PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5taW5MZW5ndGgpYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBtaW5MZW5ndGhcIj5taW5MZW5ndGg6JHt0aGlzLnNjaGVtYS5taW5MZW5ndGh9PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5tYXhMZW5ndGgpYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBtYXhMZW5ndGhcIj5tYXhMZW5ndGg6JHt0aGlzLnNjaGVtYS5tYXhMZW5ndGh9PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbilgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXIgZGVzY3JpcHRpb25cIj4ke3RoaXMuc2NoZW1hLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5lbnVtKWBcbiAgICAgICAgICAgICR7dGhpcy5lbnVtKHRoaXMuc2NoZW1hLCB0aGlzLmlzQ29sbGFwc2VkLCB0aGlzLm9wZW4pfVxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbGxPZilgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FsbE9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5vbmVPZilgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ29uZU9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbnlPZilgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FueU9mJyl9YH1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgfVxuXG5cbiAgICAgIDwhLS0gQXJyYXkgLS0+XG4gICAgICAke19pZih0aGlzLmlzQXJyYXkpYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXJyYXlcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cInRpdGxlXCI+PHNwYW4gY2xhc3M9XCJ0b2dnbGUtaGFuZGxlXCI+PC9zcGFuPiR7XG4gICAgICAgICAgICB0aGlzLnNjaGVtYS50aXRsZSB8fCAnJ1xuICAgICAgICAgIH08c3BhbiBjbGFzcz1cIm9wZW5pbmcgYnJhY2tldFwiPls8L3NwYW4+JHtfaWYodGhpcy5pc0NvbGxhcHNlZClgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NpbmcgYnJhY2tldFwiPl08L3NwYW4+XG4gICAgICAgICAgYH08L2E+XG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgKHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zIHx8IHRoaXMuc2NoZW1hLm1pbkl0ZW1zIHx8IHRoaXMuc2NoZW1hLm1heEl0ZW1zKSlgXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJpdGVtcyByYW5nZVwiPigke3RoaXMuc2NoZW1hLm1pbkl0ZW1zIHx8IDB9Li4ke3RoaXMuc2NoZW1hLm1heEl0ZW1zIHx8ICfiiJ4nfSk8L3NwYW4+XG4gICAgICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zKWBcbiAgICAgICAgICAgICAgICA8c3BhbiB0aXRsZT1cInVuaXF1ZVwiIGNsYXNzPVwidW5pcXVlSXRlbXNcIj7imaY8L3NwYW4+XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgYH1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7dGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gfHwgJyd9PC9kaXY+XG4gICAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZClgXG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZW51bSlgXG4gICAgICAgICAgICAke3RoaXMuZW51bSh0aGlzLnNjaGVtYSwgdGhpcy5pc0NvbGxhcHNlZCwgdGhpcy5vcGVuKX1cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuYWxsT2YpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdhbGxPZicpfWB9XG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEub25lT2YpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdvbmVPZicpfWB9XG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuYW55T2YpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdhbnlPZicpfWB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZClgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NpbmcgYnJhY2tldFwiPl08L3NwYW4+XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgfVxuXG4gICAgICA8IS0tIE9iamVjdCAtLT5cbiAgICAgICR7X2lmKCF0aGlzLmlzUHJpbWl0aXZlICYmICF0aGlzLmlzQXJyYXkpYFxuICAgICAgICA8ZGl2IGNsYXNzPVwib2JqZWN0XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJ0aXRsZVwiPjxzcGFuXG4gICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1oYW5kbGVcIj48L3NwYW4+JHt0aGlzLnNjaGVtYS50aXRsZSB8fCAnJ30gPHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwib3BlbmluZyBicmFjZVwiPns8L3NwYW4+JHtfaWYodGhpcy5pc0NvbGxhcHNlZClgXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2luZyBicmFjZVwiIG5nLWlmPVwiaXNDb2xsYXBzZWRcIj59PC9zcGFuPlxuICAgICAgICAgIGB9PC9hPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke3RoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIHx8ICcnfTwvZGl2PlxuICAgICAgICAgICAgPCEtLSBjaGlsZHJlbiBnbyBoZXJlIC0tPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZW51bSlgXG4gICAgICAgICAgICAke3RoaXMuZW51bSh0aGlzLnNjaGVtYSwgdGhpcy5pc0NvbGxhcHNlZCwgdGhpcy5vcGVuKX1cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuYWxsT2YpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdhbGxPZicpfWB9XG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEub25lT2YpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdvbmVPZicpfWB9XG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuYW55T2YpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdhbnlPZicpfWB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZClgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NpbmcgYnJhY2VcIj59PC9zcGFuPlxuICAgICAgICAgIGB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgfVxuICAgICAgPC9kaXY+XG4gICAgYC5yZXBsYWNlKC9cXHMqXFxuL2csICdcXG4nKS5yZXBsYWNlKC8oXFw8XFwhXFwtXFwtKS4rL2csICcnKS50cmltKCk7XG4gIH1cblxuICB4T2Yoc2NoZW1hLCB0eXBlKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxuICAgICAgICA8Yj4ke2NvbnZlcnRYT2YodHlwZSl9OjwvYj5cbiAgICAgICAgJHtcbiAgICAgICAgICB0aGlzLnNjaGVtYSAmJiBBcnJheS5pc0FycmF5KHRoaXMuc2NoZW1hW3R5cGVdKSAmJiB0aGlzLnNjaGVtYVt0eXBlXS5tYXAoc2NoID0+IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxuICAgICAgICAgICAgICA8IS0tIFRPRE8gLS0+XG4gICAgICAgICAgICAgIDxqc29uLXNjaGVtYS12aWV3IHNjaGVtYT1cInNjaGVtYVwiPjwvanNvbi1zY2hlbWEtdmlldz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBlbnVtKHNjaGVtYSwgaXNDb2xsYXBzZWQsIG9wZW4pIHtcbiAgICByZXR1cm4gYFxuICAgICAgJHtfaWYoIWlzQ29sbGFwc2VkICYmIHNjaGVtYS5lbnVtKWBcbiAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyIGVudW1zXCI+XG4gICAgICAgICAgPGI+RW51bTo8L2I+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYH1cbiAgICBgO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IHRoaXMudGVtcGxhdGUoKTtcblxuICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGRyZW4oZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIGZvciB0b2dnbGluZ1xuICAgIC8vIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLnRvZ2dsZXItbGluaycpXG4gICAgLy8gICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZU9wZW4uYmluZCh0aGlzKSk7XG5cbiAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuanNvbi1zY2hlbWEtdmlldycpO1xuICB9XG5cbiAgYXBwZW5kQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgIGNvbnN0IGlubmVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaW5uZXInKTtcblxuICAgIGlmICh0aGlzLnNjaGVtYS5lbnVtKSB7XG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSlNPTkZvcm1hdHRlcih0aGlzLnNjaGVtYS5lbnVtLCB0aGlzLm9wZW4gLSAxKTtcbiAgICAgIGNvbnN0IGZvcm1hdHRlckVsID0gZm9ybWF0dGVyLnJlbmRlcigpO1xuICAgICAgZm9ybWF0dGVyRWwuY2xhc3NMaXN0LmFkZCgnaW5uZXInKTtcbiAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVudW1zLmlubmVyJykuYXBwZW5kQ2hpbGQoZm9ybWF0dGVyRWwpO1xuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBcnJheSkge1xuICAgICAgY29uc3QgdmlldyA9IG5ldyBKU09OU2NoZW1hVmlldyh0aGlzLnNjaGVtYS5pdGVtcywgdGhpcy5vcGVuIC0gMSlcbiAgICAgIGlubmVyLmFwcGVuZENoaWxkKHZpZXcucmVuZGVyKCkpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5zY2hlbWEucHJvcGVydGllcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpLm1hcChwcm9wZXJ0eU5hbWUgPT4ge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOztcbiAgICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInByb3BlcnR5XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+JHtwcm9wZXJ0eU5hbWV9Ojwvc3Bhbj5cbiAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgY29uc3QgdmlldyA9IG5ldyBKU09OU2NoZW1hVmlldyhwcm9wZXJ0eSwgdGhpcy5vcGVuIC0gMSk7XG4gICAgICAgIHRlbXBEaXYucXVlcnlTZWxlY3RvcignLnByb3BlcnR5JykuYXBwZW5kQ2hpbGQodmlldy5yZW5kZXIoKSk7XG5cbiAgICAgICAgaW5uZXIuYXBwZW5kQ2hpbGQodGVtcERpdi5xdWVyeVNlbGVjdG9yKCcucHJvcGVydHknKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVE9ETzogVU1EXG53aW5kb3cuSlNPTlNjaGVtYVZpZXcgPSBKU09OU2NoZW1hVmlldztcbiJdfQ==
