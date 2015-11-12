(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.JSONSchemaView = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
'use strict';

/* globals JSONSchemaView */

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _templateObject = _taggedTemplateLiteral(['\n        <div class="any">\n          ', '\n\n          <span class="type type-any">&lt;any&gt;</span>\n\n          ', '\n        </div>\n      '], ['\n        <div class="any">\n          ', '\n\n          <span class="type type-any">&lt;any&gt;</span>\n\n          ', '\n        </div>\n      ']),
    _templateObject2 = _taggedTemplateLiteral(['\n            <a class="title"><span class="toggle-handle"></span>', ' </a>\n          '], ['\n            <a class="title"><span class="toggle-handle"></span>', ' </a>\n          ']),
    _templateObject3 = _taggedTemplateLiteral(['\n            <div class="inner description">', '</div>\n          '], ['\n            <div class="inner description">', '</div>\n          ']),
    _templateObject4 = _taggedTemplateLiteral(['\n        <div class="primitive">\n          ', '\n\n            <span class="type">', '</span>\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n        </div>\n      '], ['\n        <div class="primitive">\n          ', '\n\n            <span class="type">', '</span>\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n        </div>\n      ']),
    _templateObject5 = _taggedTemplateLiteral(['\n            <span class="required">*</span>\n          '], ['\n            <span class="required">*</span>\n          ']),
    _templateObject6 = _taggedTemplateLiteral(['\n            <span class="format">(', ')</span>\n          '], ['\n            <span class="format">(', ')</span>\n          ']),
    _templateObject7 = _taggedTemplateLiteral(['\n            <span class="range minimum">minimum:', '</span>\n          '], ['\n            <span class="range minimum">minimum:', '</span>\n          ']),
    _templateObject8 = _taggedTemplateLiteral(['\n            <span class="range exclusiveMinimum">(ex)minimum:', '</span>\n          '], ['\n            <span class="range exclusiveMinimum">(ex)minimum:', '</span>\n          ']),
    _templateObject9 = _taggedTemplateLiteral(['\n            <span class="range maximum">maximum:', '</span>\n          '], ['\n            <span class="range maximum">maximum:', '</span>\n          ']),
    _templateObject10 = _taggedTemplateLiteral(['\n            <span class="range exclusiveMaximum">(ex)maximum:', '</span>\n          '], ['\n            <span class="range exclusiveMaximum">(ex)maximum:', '</span>\n          ']),
    _templateObject11 = _taggedTemplateLiteral(['\n            <span class="range minLength">minLength:', '</span>\n          '], ['\n            <span class="range minLength">minLength:', '</span>\n          ']),
    _templateObject12 = _taggedTemplateLiteral(['\n            <span class="range maxLength">maxLength:', '</span>\n          '], ['\n            <span class="range maxLength">maxLength:', '</span>\n          ']),
    _templateObject13 = _taggedTemplateLiteral(['\n            ', '\n          '], ['\n            ', '\n          ']),
    _templateObject14 = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject15 = _taggedTemplateLiteral(['\n        <div class="array">\n          <a class="title"><span class="toggle-handle"></span>', '<span class="opening bracket">[</span>', '</a>\n          ', '\n          <div class="inner">\n            ', '\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      '], ['\n        <div class="array">\n          <a class="title"><span class="toggle-handle"></span>', '<span class="opening bracket">[</span>', '</a>\n          ', '\n          <div class="inner">\n            ', '\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      ']),
    _templateObject16 = _taggedTemplateLiteral(['<span class="closing bracket">]</span>'], ['<span class="closing bracket">]</span>']),
    _templateObject17 = _taggedTemplateLiteral(['\n          <span>\n            <span title="items range">(', '..', ')</span>\n            ', '\n          </span>\n          '], ['\n          <span>\n            <span title="items range">(', '..', ')</span>\n            ', '\n          </span>\n          ']),
    _templateObject18 = _taggedTemplateLiteral(['<span title="unique" class="uniqueItems">♦</span>'], ['<span title="unique" class="uniqueItems">♦</span>']),
    _templateObject19 = _taggedTemplateLiteral(['\n              <div class="description">', '</div>\n            '], ['\n              <div class="description">', '</div>\n            ']),
    _templateObject20 = _taggedTemplateLiteral(['\n          <span class="closing bracket">]</span>\n          '], ['\n          <span class="closing bracket">]</span>\n          ']),
    _templateObject21 = _taggedTemplateLiteral(['\n        <div class="object">\n          <a class="title"><span\n            class="toggle-handle"></span>', ' <span\n            class="opening brace">{</span>', '</a>\n\n          <div class="inner">\n            ', '\n            <!-- children go here -->\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      '], ['\n        <div class="object">\n          <a class="title"><span\n            class="toggle-handle"></span>', ' <span\n            class="opening brace">{</span>', '</a>\n\n          <div class="inner">\n            ', '\n            <!-- children go here -->\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      ']),
    _templateObject22 = _taggedTemplateLiteral(['\n              <span class="closing brace" ng-if="isCollapsed">}</span>\n          '], ['\n              <span class="closing brace" ng-if="isCollapsed">}</span>\n          ']),
    _templateObject23 = _taggedTemplateLiteral(['\n          <span class="closing brace">}</span>\n          '], ['\n          <span class="closing brace">}</span>\n          ']),
    _templateObject24 = _taggedTemplateLiteral(['\n        <div class="inner enums">\n          <b>Enum:</b>\n        </div>\n      '], ['\n        <div class="inner enums">\n          <b>Enum:</b>\n        </div>\n      ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
  */

  function JSONSchemaView(schema, open) {
    var _this = this;

    var options = arguments.length <= 2 || arguments[2] === undefined ? { theme: null } : arguments[2];

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

    // Determine if a schema is a primitive
    this.isPrimitive = !this.isAny && !this.isArray && !this.isObject;

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

      return ('\n      <!-- Any -->\n      ' + (0, _helpersJs._if)(this.isAny)(_templateObject, (0, _helpersJs._if)(this.schema.description || this.schema.title)(_templateObject2, this.schema.title || ''), (0, _helpersJs._if)(this.schema.description && !this.isCollapsed)(_templateObject3, this.schema.description)) + '\n\n      <!-- Primitive -->\n      ' + (0, _helpersJs._if)(this.isPrimitive)(_templateObject4, (0, _helpersJs._if)(this.schema.description || this.schema.title)(_templateObject2, this.schema.title || ''), this.schema.type, (0, _helpersJs._if)(this.schema.isRequired)(_templateObject5), (0, _helpersJs._if)(!this.isCollapsed && this.schema.format)(_templateObject6, this.schema.format), (0, _helpersJs._if)(!this.isCollapsed && this.schema.minimum)(_templateObject7, this.schema.minimum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.exclusiveMinimum)(_templateObject8, this.schema.exclusiveMinimum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.maximum)(_templateObject9, this.schema.maximum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.exclusiveMaximum)(_templateObject10, this.schema.exclusiveMaximum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.minLength)(_templateObject11, this.schema.minLength), (0, _helpersJs._if)(!this.isCollapsed && this.schema.maxLength)(_templateObject12, this.schema.maxLength), (0, _helpersJs._if)(this.schema.description && !this.isCollapsed)(_templateObject3, this.schema.description), (0, _helpersJs._if)(!this.isCollapsed && this.schema['enum'])(_templateObject13, this['enum'](this.schema, this.isCollapsed, this.open)), (0, _helpersJs._if)(this.schema.allOf && !this.isCollapsed)(_templateObject14, this.xOf(this.schema, 'allOf')), (0, _helpersJs._if)(this.schema.oneOf && !this.isCollapsed)(_templateObject14, this.xOf(this.schema, 'oneOf')), (0, _helpersJs._if)(this.schema.anyOf && !this.isCollapsed)(_templateObject14, this.xOf(this.schema, 'anyOf'))) + '\n\n\n      <!-- Array -->\n      ' + (0, _helpersJs._if)(this.isArray)(_templateObject15, this.schema.title || '', (0, _helpersJs._if)(this.isCollapsed)(_templateObject16), (0, _helpersJs._if)(!this.isCollapsed && (this.schema.uniqueItems || this.schema.minItems || this.schema.maxItems))(_templateObject17, this.schema.minItems || 0, this.schema.maxItems || '∞', (0, _helpersJs._if)(!this.isCollapsed && this.schema.uniqueItems)(_templateObject18)), (0, _helpersJs._if)(!this.isCollapsed && this.schema.description)(_templateObject19, this.schema.description), (0, _helpersJs._if)(!this.isCollapsed && this.schema['enum'])(_templateObject13, this['enum'](this.schema, this.isCollapsed, this.open)), (0, _helpersJs._if)(this.schema.allOf && !this.isCollapsed)(_templateObject14, this.xOf(this.schema, 'allOf')), (0, _helpersJs._if)(this.schema.oneOf && !this.isCollapsed)(_templateObject14, this.xOf(this.schema, 'oneOf')), (0, _helpersJs._if)(this.schema.anyOf && !this.isCollapsed)(_templateObject14, this.xOf(this.schema, 'anyOf')), (0, _helpersJs._if)(!this.isCollapsed)(_templateObject20)) + '\n\n      <!-- Object -->\n      ' + (0, _helpersJs._if)(!this.isPrimitive && !this.isArray && !this.isAny)(_templateObject21, this.schema.title || '', (0, _helpersJs._if)(this.isCollapsed)(_templateObject22), (0, _helpersJs._if)(!this.isCollapsed && this.schema.description)(_templateObject19, this.schema.description), (0, _helpersJs._if)(!this.isCollapsed && this.schema['enum'])(_templateObject13, this['enum'](this.schema, this.isCollapsed, this.open)), (0, _helpersJs._if)(this.schema.allOf && !this.isCollapsed)(_templateObject14, this.xOf(this.schema, 'allOf')), (0, _helpersJs._if)(this.schema.oneOf && !this.isCollapsed)(_templateObject14, this.xOf(this.schema, 'oneOf')), (0, _helpersJs._if)(this.schema.anyOf && !this.isCollapsed)(_templateObject14, this.xOf(this.schema, 'anyOf')), (0, _helpersJs._if)(!this.isCollapsed)(_templateObject23)) + '\n').replace(/\s*\n/g, '\n').replace(/(\<\!\-\-).+/g, '').trim();
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
      return '\n      ' + (0, _helpersJs._if)(!isCollapsed && schema['enum'])(_templateObject24) + '\n    ';
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

},{"./helpers.js":1}]},{},[2])(2)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbW9oc2VuL1Byb2plY3RzL2pzb24tc2NoZW1hLXZpZXctanMvc3JjL2hlbHBlcnMuanMiLCIvVXNlcnMvbW9oc2VuL1Byb2plY3RzL2pzb24tc2NoZW1hLXZpZXctanMvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBSU4sU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQy9CLFNBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0NBQ3JDOzs7Ozs7Ozs7Ozs7O0FBWU0sU0FBUyxHQUFHLENBQUMsU0FBUyxFQUFFO0FBQzdCLFNBQU8sU0FBUyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUM7Q0FDbkM7O0FBQ0QsU0FBUyxLQUFLLEdBQUU7QUFDZCxTQUFPLEVBQUUsQ0FBQztDQUNYO0FBQ0QsU0FBUyxNQUFNLENBQUUsUUFBUSxFQUFrQjtvQ0FBYixXQUFXO0FBQVgsZUFBVzs7O0FBQ3ZDLFNBQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBSztBQUN4RCxXQUFPLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0dBQzVDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDakI7OztBQzVCRCxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFPTixjQUFjOzs7Ozs7OztJQVFBLGNBQWM7Ozs7Ozs7Ozs7OztBQVd0QixXQVhRLGNBQWMsQ0FXckIsTUFBTSxFQUFFLElBQUksRUFBMkI7OztRQUF6QixPQUFPLHlEQUFH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QUFJLENBQUMsR0FHckQsb0JBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FDNUUsb0JBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FDNUUsb0JBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsNENBTWhGLG9CQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBRXVDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBeUMsb0JBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFDekksb0JBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBLEFBQUMsQ0FBQyxvQkFFdEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEdBQUcsRUFDcEYsb0JBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLHNCQUlqRCxvQkFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsb0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUlwRCxvQkFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sUUFBSyxDQUFDLG9CQUN4QyxJQUFJLFFBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUdyRCxvQkFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUM1RSxvQkFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUM1RSxvQkFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUU1RSxvQkFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsNkRBTzFCLG9CQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUduQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQ3RCLG9CQUFJLElBQUksQ0FBQyxXQUFXLENBQUMscUJBS25ELG9CQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxvQkFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBS3BELG9CQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxRQUFLLENBQUMsb0JBQ3hDLElBQUksUUFBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBR3JELG9CQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQzVFLG9CQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQzVFLG9CQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBRTVFLG9CQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyw2QkFLaEMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQzNEOzs7Ozs7O1dBS0UsYUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFO0FBQ2hCLDRDQUNzQixJQUFJLHVCQUNqQiwyQkFBVyxJQUFJLENBQUMsK0JBRXZCO0tBQ0g7Ozs7Ozs7V0FLRyxlQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO0FBQzlCLDBCQUNJLG9CQUFJLENBQUMsV0FBVyxJQUFJLE1BQU0sUUFBSyxDQUFDLCtCQUtsQztLQUNIOzs7Ozs7O1dBS0ssa0JBQUc7QUFDUCxVQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUNyQyxVQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDZjs7Ozs7OztXQUtLLGtCQUFHO0FBQ1AsVUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDakIsWUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzdDLFlBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO09BQ2hEOztBQUVELFVBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNwQixZQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDekMsTUFBTTtBQUNMLFlBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztPQUM1Qzs7QUFFRCxVQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO0FBQ3RCLFlBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsdUJBQXFCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFHLENBQUM7T0FDdEU7O0FBRUQsVUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDOztBQUV6QyxVQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNoQixlQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7T0FDckI7O0FBRUQsVUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDckIsWUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7T0FDbkM7OztBQUdELFVBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDekMsWUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7T0FDekY7QUFDRCxhQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDckI7Ozs7Ozs7V0FLYSx3QkFBQyxPQUFPLEVBQUU7OztBQUN0QixVQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUU5QyxVQUFJLENBQUMsS0FBSyxFQUFFO0FBQ1YsZUFBTztPQUNSOztBQUVELFVBQUksSUFBSSxDQUFDLE1BQU0sUUFBSyxFQUFFO0FBQ3BCLFlBQU0sU0FBUyxHQUFHLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLFFBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3JFLFlBQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN2QyxtQkFBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbkMsZUFBTyxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7T0FFaEU7O0FBRUQsVUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2hCLFlBQU0sSUFBSSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDakUsYUFBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztPQUNsQzs7QUFFRCxVQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO0FBQzlDLGNBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxZQUFZLEVBQUk7QUFDMUQsY0FBTSxRQUFRLEdBQUcsT0FBSyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3RELGNBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMvQyxpQkFBTyxDQUFDLFNBQVMsNkRBQ00sWUFBWSw2QkFDNUIsQ0FBQztBQUNSLGNBQU0sSUFBSSxHQUFHLElBQUksY0FBYyxDQUFDLFFBQVEsRUFBRSxPQUFLLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN6RCxpQkFBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7O0FBRTlELGVBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ3ZELENBQUMsQ0FBQztPQUNKOztBQUVELFVBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7T0FBRTtBQUN6RCxVQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO0FBQUUsaUJBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQUU7QUFDekQsVUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtBQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztPQUFFOztBQUV6RCxlQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUU7OztBQUN2QixZQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxhQUFXLElBQUksQ0FBRyxDQUFDOztBQUUzRCxZQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUNsQyxjQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVDLGVBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLGNBQU0sSUFBSSxHQUFHLElBQUksY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFLLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2RCxlQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLG9CQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CLENBQUMsQ0FBQztPQUNKO0tBQ0Y7OztTQXJUa0IsY0FBYzs7O3FCQUFkLGNBQWMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuLypcbiAqIENvbnZlcnRzIGFueU9mLCBhbGxPZiBhbmQgb25lT2YgdG8gaHVtYW4gcmVhZGFibGUgc3RyaW5nXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRYT2YodHlwZSkge1xuICByZXR1cm4gdHlwZS5zdWJzdHJpbmcoMCwgMykgKyAnIG9mJztcbn1cblxuLypcbiAqIGlmIGNvbmRpdGlvbiBmb3IgRVM2IHRlbXBsYXRlIHN0cmluZ3NcbiAqIHRvIGJlIHVzZWQgb25seSBpbiB0ZW1wbGF0ZSBzdHJpbmdcbiAqXG4gKiBAZXhhbXBsZSBteXN0ciA9IGBSYW5kb20gaXMgJHtfaWYoTWF0aC5yYW5kb20oKSA+IDAuNSlgZ3JlYXRlciB0aGFuIDAuNWBgXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBjb25kaXRpb25cbiAqXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IHRoZSB0ZW1wbGF0ZSBmdW5jdGlvblxuKi9cbmV4cG9ydCBmdW5jdGlvbiBfaWYoY29uZGl0aW9uKSB7XG4gIHJldHVybiBjb25kaXRpb24gPyBub3JtYWwgOiBlbXB0eTtcbn1cbmZ1bmN0aW9uIGVtcHR5KCl7XG4gIHJldHVybiAnJztcbn1cbmZ1bmN0aW9uIG5vcm1hbCAodGVtcGxhdGUsIC4uLmV4cHJlc3Npb25zKSB7XG4gIHJldHVybiB0ZW1wbGF0ZS5zbGljZSgxKS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBwYXJ0LCBpKSA9PiB7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgZXhwcmVzc2lvbnNbaV0gKyBwYXJ0O1xuICB9LCB0ZW1wbGF0ZVswXSk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWxzIEpTT05TY2hlbWFWaWV3ICovXG5cbmltcG9ydCB7XG4gIGNvbnZlcnRYT2YsXG4gIF9pZlxufSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5cbi8qKlxuICogQGNsYXNzIEpTT05TY2hlbWFWaWV3XG4gKlxuICogQSBwdXJlIEphdmFTY3JpcHQgY29tcG9uZW50IGZvciByZW5kZXJpbmcgSlNPTiBTY2hlbWEgaW4gSFRNTC5cbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKU09OU2NoZW1hVmlldyB7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzY2hlbWEgVGhlIEpTT04gU2NoZW1hIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW29wZW49MV0gaGlzIG51bWJlciBpbmRpY2F0ZXMgdXAgdG8gaG93IG1hbnkgbGV2ZWxzIHRoZVxuICAgKiByZW5kZXJlZCB0cmVlIHNob3VsZCBleHBhbmQuIFNldCBpdCB0byBgMGAgdG8gbWFrZSB0aGUgd2hvbGUgdHJlZSBjb2xsYXBzZWRcbiAgICogb3Igc2V0IGl0IHRvIGBJbmZpbml0eWAgdG8gZXhwYW5kIHRoZSB0cmVlIGRlZXBseVxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5cbiAgICogIHRoZW1lIHtzdHJpbmd9OiBvbmUgb2YgdGhlIGZvbGxvd2luZyBvcHRpb25zOiBbJ2RhcmsnXVxuICAqL1xuICBjb25zdHJ1Y3RvcihzY2hlbWEsIG9wZW4sIG9wdGlvbnMgPSB7dGhlbWU6IG51bGx9KSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdGhpcy5vcGVuID0gb3BlbjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSBvcGVuIDw9IDA7XG5cbiAgICAvLyBpZiBzY2hlbWEgaXMgYW4gZW1wdHkgb2JqZWN0IHdoaWNoIG1lYW5zIGFueSBKT1NOXG4gICAgdGhpcy5pc0FueSA9IHR5cGVvZiBzY2hlbWEgPT09ICdvYmplY3QnICYmXG4gICAgICAhQXJyYXkuaXNBcnJheShzY2hlbWEpICYmXG4gICAgICAhT2JqZWN0LmtleXMoc2NoZW1hKVxuICAgICAgLmZpbHRlcihrPT4gWyd0aXRsZScsICdkZXNjcmlwdGlvbiddLmluZGV4T2YoaykgPT09IC0xKS5sZW5ndGg7XG5cbiAgICAvLyBEZXRlcm1pbmUgaWYgYSBzY2hlbWEgaXMgYW4gYXJyYXlcbiAgICB0aGlzLmlzQXJyYXkgPSAhdGhpcy5pc0FueSAmJiB0aGlzLnNjaGVtYSAmJiB0aGlzLnNjaGVtYS50eXBlID09PSAnYXJyYXknO1xuXG4gICAgdGhpcy5pc09iamVjdCA9IHRoaXMuc2NoZW1hICYmXG4gICAgICAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ29iamVjdCcgfHxcbiAgICAgICB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIHx8XG4gICAgICAgdGhpcy5zY2hlbWEuYW55T2YgfHxcbiAgICAgICB0aGlzLnNjaGVtYS5vbmVvZiB8fFxuICAgICAgIHRoaXMuc2NoZW1hLmFsbE9mKTtcblxuICAgIC8vIERldGVybWluZSBpZiBhIHNjaGVtYSBpcyBhIHByaW1pdGl2ZVxuICAgIHRoaXMuaXNQcmltaXRpdmUgPSAhdGhpcy5pc0FueSAmJiAhdGhpcy5pc0FycmF5ICYmICF0aGlzLmlzT2JqZWN0O1xuXG4gICAgLy8gcG9wdWxhdGUgaXNSZXF1aXJlZCBwcm9wZXJ0eSBkb3duIHRvIHByb3BlcnRpZXNcbiAgICBpZiAodGhpcy5zY2hlbWEgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnJlcXVpcmVkLmZvckVhY2gocmVxdWlyZWRQcm9wZXJ0eSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zY2hlbWEucHJvcGVydGllc1tyZXF1aXJlZFByb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3JlcXVpcmVkUHJvcGVydHldLmlzUmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgKiBSZXR1cm5zIHRoZSB0ZW1wbGF0ZSB3aXRoIHBvcHVsYXRlZCBwcm9wZXJ0aWVzLlxuICAgKiBUaGlzIHRlbXBsYXRlIGRvZXMgbm90IGhhdmUgdGhlIGNoaWxkcmVuXG4gICovXG4gIHRlbXBsYXRlKCkge1xuICAgIGlmICghdGhpcy5zY2hlbWEpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gYFxuICAgICAgPCEtLSBBbnkgLS0+XG4gICAgICAke19pZih0aGlzLmlzQW55KWBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFueVwiPlxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIHx8IHRoaXMuc2NoZW1hLnRpdGxlKWBcbiAgICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGVcIj48c3BhbiBjbGFzcz1cInRvZ2dsZS1oYW5kbGVcIj48L3NwYW4+JHt0aGlzLnNjaGVtYS50aXRsZSB8fCAnJ30gPC9hPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInR5cGUgdHlwZS1hbnlcIj4mbHQ7YW55Jmd0Ozwvc3Bhbj5cblxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uICYmICF0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lciBkZXNjcmlwdGlvblwiPiR7dGhpcy5zY2hlbWEuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgfVxuXG4gICAgICA8IS0tIFByaW1pdGl2ZSAtLT5cbiAgICAgICR7X2lmKHRoaXMuaXNQcmltaXRpdmUpYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJpbWl0aXZlXCI+XG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gfHwgdGhpcy5zY2hlbWEudGl0bGUpYFxuICAgICAgICAgICAgPGEgY2xhc3M9XCJ0aXRsZVwiPjxzcGFuIGNsYXNzPVwidG9nZ2xlLWhhbmRsZVwiPjwvc3Bhbj4ke3RoaXMuc2NoZW1hLnRpdGxlIHx8ICcnfSA8L2E+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0eXBlXCI+JHt0aGlzLnNjaGVtYS50eXBlfTwvc3Bhbj5cblxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmlzUmVxdWlyZWQpYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmZvcm1hdClgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm1hdFwiPigke3RoaXMuc2NoZW1hLmZvcm1hdH0pPC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5taW5pbXVtKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UgbWluaW11bVwiPm1pbmltdW06JHt0aGlzLnNjaGVtYS5taW5pbXVtfTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSlgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIGV4Y2x1c2l2ZU1pbmltdW1cIj4oZXgpbWluaW11bToke3RoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW19PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5tYXhpbXVtKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UgbWF4aW11bVwiPm1heGltdW06JHt0aGlzLnNjaGVtYS5tYXhpbXVtfTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSlgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIGV4Y2x1c2l2ZU1heGltdW1cIj4oZXgpbWF4aW11bToke3RoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW19PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5taW5MZW5ndGgpYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBtaW5MZW5ndGhcIj5taW5MZW5ndGg6JHt0aGlzLnNjaGVtYS5taW5MZW5ndGh9PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5tYXhMZW5ndGgpYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBtYXhMZW5ndGhcIj5tYXhMZW5ndGg6JHt0aGlzLnNjaGVtYS5tYXhMZW5ndGh9PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXIgZGVzY3JpcHRpb25cIj4ke3RoaXMuc2NoZW1hLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5lbnVtKWBcbiAgICAgICAgICAgICR7dGhpcy5lbnVtKHRoaXMuc2NoZW1hLCB0aGlzLmlzQ29sbGFwc2VkLCB0aGlzLm9wZW4pfVxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbGxPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FsbE9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5vbmVPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ29uZU9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbnlPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FueU9mJyl9YH1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgfVxuXG5cbiAgICAgIDwhLS0gQXJyYXkgLS0+XG4gICAgICAke19pZih0aGlzLmlzQXJyYXkpYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXJyYXlcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cInRpdGxlXCI+PHNwYW4gY2xhc3M9XCJ0b2dnbGUtaGFuZGxlXCI+PC9zcGFuPiR7dGhpcy5zY2hlbWEudGl0bGUgfHwgJyd9PHNwYW4gY2xhc3M9XCJvcGVuaW5nIGJyYWNrZXRcIj5bPC9zcGFuPiR7X2lmKHRoaXMuaXNDb2xsYXBzZWQpYDxzcGFuIGNsYXNzPVwiY2xvc2luZyBicmFja2V0XCI+XTwvc3Bhbj5gfTwvYT5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiAodGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgfHwgdGhpcy5zY2hlbWEubWluSXRlbXMgfHwgdGhpcy5zY2hlbWEubWF4SXRlbXMpKWBcbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiaXRlbXMgcmFuZ2VcIj4oJHt0aGlzLnNjaGVtYS5taW5JdGVtcyB8fCAwfS4uJHt0aGlzLnNjaGVtYS5tYXhJdGVtcyB8fCAn4oieJ30pPC9zcGFuPlxuICAgICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpYDxzcGFuIHRpdGxlPVwidW5pcXVlXCIgY2xhc3M9XCJ1bmlxdWVJdGVtc1wiPuKZpjwvc3Bhbj5gfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICBgfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxuICAgICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke3RoaXMuc2NoZW1hLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmVudW0pYFxuICAgICAgICAgICAgJHt0aGlzLmVudW0odGhpcy5zY2hlbWEsIHRoaXMuaXNDb2xsYXBzZWQsIHRoaXMub3Blbil9XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmFsbE9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnYWxsT2YnKX1gfVxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLm9uZU9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnb25lT2YnKX1gfVxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmFueU9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnYW55T2YnKX1gfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQpYFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2luZyBicmFja2V0XCI+XTwvc3Bhbj5cbiAgICAgICAgICBgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGB9XG5cbiAgICAgIDwhLS0gT2JqZWN0IC0tPlxuICAgICAgJHtfaWYoIXRoaXMuaXNQcmltaXRpdmUgJiYgIXRoaXMuaXNBcnJheSAmJiAhdGhpcy5pc0FueSlgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJvYmplY3RcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cInRpdGxlXCI+PHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwidG9nZ2xlLWhhbmRsZVwiPjwvc3Bhbj4ke3RoaXMuc2NoZW1hLnRpdGxlIHx8ICcnfSA8c3BhblxuICAgICAgICAgICAgY2xhc3M9XCJvcGVuaW5nIGJyYWNlXCI+ezwvc3Bhbj4ke19pZih0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zaW5nIGJyYWNlXCIgbmctaWY9XCJpc0NvbGxhcHNlZFwiPn08L3NwYW4+XG4gICAgICAgICAgYH08L2E+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cbiAgICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKWBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHt0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8IS0tIGNoaWxkcmVuIGdvIGhlcmUgLS0+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5lbnVtKWBcbiAgICAgICAgICAgICR7dGhpcy5lbnVtKHRoaXMuc2NoZW1hLCB0aGlzLmlzQ29sbGFwc2VkLCB0aGlzLm9wZW4pfVxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbGxPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FsbE9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5vbmVPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ29uZU9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbnlPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FueU9mJyl9YH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NpbmcgYnJhY2VcIj59PC9zcGFuPlxuICAgICAgICAgIGB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgYH1cbmAucmVwbGFjZSgvXFxzKlxcbi9nLCAnXFxuJykucmVwbGFjZSgvKFxcPFxcIVxcLVxcLSkuKy9nLCAnJykudHJpbSgpO1xuICB9XG5cbiAgLypcbiAgICogVGVtcGxhdGUgZm9yIG9uZU9mLCBhbnlPZiBhbmQgYWxsT2ZcbiAgKi9cbiAgeE9mKHNjaGVtYSwgdHlwZSkge1xuICAgIHJldHVybiBgXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5uZXIgJHt0eXBlfVwiPlxuICAgICAgICA8Yj4ke2NvbnZlcnRYT2YodHlwZSl9OjwvYj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICAvKlxuICAgKiBUZW1wbGF0ZSBmb3IgZW51bXNcbiAgKi9cbiAgZW51bShzY2hlbWEsIGlzQ29sbGFwc2VkLCBvcGVuKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgICR7X2lmKCFpc0NvbGxhcHNlZCAmJiBzY2hlbWEuZW51bSlgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lciBlbnVtc1wiPlxuICAgICAgICAgIDxiPkVudW06PC9iPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIGB9XG4gICAgYDtcbiAgfVxuXG4gIC8qXG4gICAqIFRvZ2dsZXMgdGhlICdjb2xsYXBzZWQnIHN0YXRlXG4gICovXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gIXRoaXMuaXNDb2xsYXBzZWQ7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8qXG4gICAqIFJlbmRlcnMgdGhlIGVsZW1lbnQgYW5kIHJldHVybnMgaXRcbiAgKi9cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdqc29uLXNjaGVtYS12aWV3Jyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnMudGhlbWUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBqc29uLXNjaGVtYS12aWV3LSR7dGhpcy5vcHRpb25zLnRoZW1lfWApO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlKCk7XG5cbiAgICBpZiAoIXRoaXMuc2NoZW1hKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc0NvbGxhcHNlZCkge1xuICAgICAgdGhpcy5hcHBlbmRDaGlsZHJlbih0aGlzLmVsZW1lbnQpO1xuICAgIH1cblxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW5lciBmb3IgdG9nZ2xpbmdcbiAgICBpZiAodGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EudGl0bGUnKSkge1xuICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EudGl0bGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICB9XG5cbiAgLypcbiAgICogQXBwZW5kcyBjaGlsZHJlbiB0byBnaXZlbiBlbGVtZW50IGJhc2VkIG9uIGN1cnJlbnQgc2NoZW1hXG4gICovXG4gIGFwcGVuZENoaWxkcmVuKGVsZW1lbnQpIHtcbiAgICBjb25zdCBpbm5lciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmlubmVyJyk7XG5cbiAgICBpZiAoIWlubmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLmVudW0pIHtcbiAgICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBKU09ORm9ybWF0dGVyKHRoaXMuc2NoZW1hLmVudW0sIHRoaXMub3BlbiAtIDEpO1xuICAgICAgY29uc3QgZm9ybWF0dGVyRWwgPSBmb3JtYXR0ZXIucmVuZGVyKCk7XG4gICAgICBmb3JtYXR0ZXJFbC5jbGFzc0xpc3QuYWRkKCdpbm5lcicpO1xuICAgICAgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZW51bXMuaW5uZXInKS5hcHBlbmRDaGlsZChmb3JtYXR0ZXJFbCk7XG5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0FycmF5KSB7XG4gICAgICBjb25zdCB2aWV3ID0gbmV3IEpTT05TY2hlbWFWaWV3KHRoaXMuc2NoZW1hLml0ZW1zLCB0aGlzLm9wZW4gLSAxKVxuICAgICAgaW5uZXIuYXBwZW5kQ2hpbGQodmlldy5yZW5kZXIoKSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcykuZm9yRWFjaChwcm9wZXJ0eU5hbWUgPT4ge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgICAgICAgY29uc3QgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOztcbiAgICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInByb3BlcnR5XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+JHtwcm9wZXJ0eU5hbWV9Ojwvc3Bhbj5cbiAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgY29uc3QgdmlldyA9IG5ldyBKU09OU2NoZW1hVmlldyhwcm9wZXJ0eSwgdGhpcy5vcGVuIC0gMSk7XG4gICAgICAgIHRlbXBEaXYucXVlcnlTZWxlY3RvcignLnByb3BlcnR5JykuYXBwZW5kQ2hpbGQodmlldy5yZW5kZXIoKSk7XG5cbiAgICAgICAgaW5uZXIuYXBwZW5kQ2hpbGQodGVtcERpdi5xdWVyeVNlbGVjdG9yKCcucHJvcGVydHknKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY2hlbWEuYWxsT2YpIHsgYXBwZW5kWE9mLmNhbGwodGhpcywgJ2FsbE9mJyk7IH1cbiAgICBpZiAodGhpcy5zY2hlbWEub25lT2YpIHsgYXBwZW5kWE9mLmNhbGwodGhpcywgJ29uZU9mJyk7IH1cbiAgICBpZiAodGhpcy5zY2hlbWEuYW55T2YpIHsgYXBwZW5kWE9mLmNhbGwodGhpcywgJ2FueU9mJyk7IH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFhPZih0eXBlKSB7XG4gICAgICBjb25zdCBpbm5lckFsbE9mID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuaW5uZXIuJHt0eXBlfWApO1xuXG4gICAgICB0aGlzLnNjaGVtYVt0eXBlXS5mb3JFYWNoKHNjaGVtYSA9PiB7XG4gICAgICAgIGNvbnN0IGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlubmVyLmNsYXNzTGlzdC5hZGQoJ2lubmVyJyk7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgSlNPTlNjaGVtYVZpZXcoc2NoZW1hLCB0aGlzLm9wZW4gLSAxKTtcbiAgICAgICAgaW5uZXIuYXBwZW5kQ2hpbGQodmlldy5yZW5kZXIoKSk7XG4gICAgICAgIGlubmVyQWxsT2YuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=
