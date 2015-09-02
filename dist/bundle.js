(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

var _templateObject = _taggedTemplateLiteral(['\n        <div class="primitive">\n          ', '\n\n            <span class="type">', '</span>\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n        </div>\n      '], ['\n        <div class="primitive">\n          ', '\n\n            <span class="type">', '</span>\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n        </div>\n      ']),
    _templateObject2 = _taggedTemplateLiteral(['\n            <a class="title"><span class="toggle-handle"></span>', ' </a>\n          '], ['\n            <a class="title"><span class="toggle-handle"></span>', ' </a>\n          ']),
    _templateObject3 = _taggedTemplateLiteral(['\n            <span class="required">*</span>\n          '], ['\n            <span class="required">*</span>\n          ']),
    _templateObject4 = _taggedTemplateLiteral(['\n            <span class="format">(', ')</span>\n          '], ['\n            <span class="format">(', ')</span>\n          ']),
    _templateObject5 = _taggedTemplateLiteral(['\n            <span class="range minimum">minimum:', '</span>\n          '], ['\n            <span class="range minimum">minimum:', '</span>\n          ']),
    _templateObject6 = _taggedTemplateLiteral(['\n            <span class="range exclusiveMinimum">(ex)minimum:', '</span>\n          '], ['\n            <span class="range exclusiveMinimum">(ex)minimum:', '</span>\n          ']),
    _templateObject7 = _taggedTemplateLiteral(['\n            <span class="range maximum">maximum:', '</span>\n          '], ['\n            <span class="range maximum">maximum:', '</span>\n          ']),
    _templateObject8 = _taggedTemplateLiteral(['\n            <span class="range exclusiveMaximum">(ex)maximum:', '</span>\n          '], ['\n            <span class="range exclusiveMaximum">(ex)maximum:', '</span>\n          ']),
    _templateObject9 = _taggedTemplateLiteral(['\n            <span class="range minLength">minLength:', '</span>\n          '], ['\n            <span class="range minLength">minLength:', '</span>\n          ']),
    _templateObject10 = _taggedTemplateLiteral(['\n            <span class="range maxLength">maxLength:', '</span>\n          '], ['\n            <span class="range maxLength">maxLength:', '</span>\n          ']),
    _templateObject11 = _taggedTemplateLiteral(['\n            <div class="inner description">', '</div>\n          '], ['\n            <div class="inner description">', '</div>\n          ']),
    _templateObject12 = _taggedTemplateLiteral(['\n            ', '\n          '], ['\n            ', '\n          ']),
    _templateObject13 = _taggedTemplateLiteral(['', ''], ['', '']),
    _templateObject14 = _taggedTemplateLiteral(['\n        <div class="array">\n          <a class="title"><span class="toggle-handle"></span>', '<span class="opening bracket">[</span>', '</a>\n          ', '\n          <div class="inner">\n            ', '\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      '], ['\n        <div class="array">\n          <a class="title"><span class="toggle-handle"></span>', '<span class="opening bracket">[</span>', '</a>\n          ', '\n          <div class="inner">\n            ', '\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      ']),
    _templateObject15 = _taggedTemplateLiteral(['<span class="closing bracket">]</span>'], ['<span class="closing bracket">]</span>']),
    _templateObject16 = _taggedTemplateLiteral(['\n          <span>\n            <span title="items range">(', '..', ')</span>\n            ', '\n          </span>\n          '], ['\n          <span>\n            <span title="items range">(', '..', ')</span>\n            ', '\n          </span>\n          ']),
    _templateObject17 = _taggedTemplateLiteral(['<span title="unique" class="uniqueItems">♦</span>'], ['<span title="unique" class="uniqueItems">♦</span>']),
    _templateObject18 = _taggedTemplateLiteral(['\n              <div class="description">', '</div>\n            '], ['\n              <div class="description">', '</div>\n            ']),
    _templateObject19 = _taggedTemplateLiteral(['\n          <span class="closing bracket">]</span>\n          '], ['\n          <span class="closing bracket">]</span>\n          ']),
    _templateObject20 = _taggedTemplateLiteral(['\n        <div class="object">\n          <a class="title"><span\n            class="toggle-handle"></span>', ' <span\n            class="opening brace">{</span>', '</a>\n\n          <div class="inner">\n            ', '\n            <!-- children go here -->\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      '], ['\n        <div class="object">\n          <a class="title"><span\n            class="toggle-handle"></span>', ' <span\n            class="opening brace">{</span>', '</a>\n\n          <div class="inner">\n            ', '\n            <!-- children go here -->\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      ']),
    _templateObject21 = _taggedTemplateLiteral(['\n              <span class="closing brace" ng-if="isCollapsed">}</span>\n          '], ['\n              <span class="closing brace" ng-if="isCollapsed">}</span>\n          ']),
    _templateObject22 = _taggedTemplateLiteral(['\n          <span class="closing brace">}</span>\n          '], ['\n          <span class="closing brace">}</span>\n          ']),
    _templateObject23 = _taggedTemplateLiteral(['\n        <div class="inner enums">\n          <b>Enum:</b>\n        </div>\n      '], ['\n        <div class="inner enums">\n          <b>Enum:</b>\n        </div>\n      ']);

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
  */

  function JSONSchemaView(schema, open) {
    var _this = this;

    _classCallCheck(this, JSONSchemaView);

    this.schema = schema;
    this.open = open;
    this.isCollapsed = open <= 0;

    // Determine if a schema is an array
    this.isArray = this.schema && this.schema.type === 'array';

    // Determine if a schema is a primitive
    this.isPrimitive = this.schema && !this.schema.properties && !this.schema.items && this.schema.type !== 'array' && this.schema.type !== 'object';

    // populate isRequired property down to properties
    if (Array.isArray(this.schema.required)) {
      this.schema.required.forEach(function (requiredProperty) {
        if (typeof _this.schema.properties[requiredProperty] === 'object') {
          _this.schema.properties[requiredProperty].isRequired = true;
        }
      });
    }
  }

  // TODO: UMD

  /*
   * Returns the template with populated properties.
   * This template does not have the children
  */

  _createClass(JSONSchemaView, [{
    key: 'template',
    value: function template() {
      return ('\n      <!-- Primitive -->\n      ' + (0, _helpersJs._if)(this.isPrimitive)(_templateObject, (0, _helpersJs._if)(this.schema.description || this.schema.title)(_templateObject2, this.schema.title || ''), this.schema.type, (0, _helpersJs._if)(this.schema.isRequired)(_templateObject3), (0, _helpersJs._if)(!this.isCollapsed && this.schema.format)(_templateObject4, this.schema.format), (0, _helpersJs._if)(!this.isCollapsed && this.schema.minimum)(_templateObject5, this.schema.minimum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.exclusiveMinimum)(_templateObject6, this.schema.exclusiveMinimum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.maximum)(_templateObject7, this.schema.maximum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.exclusiveMaximum)(_templateObject8, this.schema.exclusiveMaximum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.minLength)(_templateObject9, this.schema.minLength), (0, _helpersJs._if)(!this.isCollapsed && this.schema.maxLength)(_templateObject10, this.schema.maxLength), (0, _helpersJs._if)(this.schema.description && !this.isCollapsed)(_templateObject11, this.schema.description), (0, _helpersJs._if)(!this.isCollapsed && this.schema['enum'])(_templateObject12, this['enum'](this.schema, this.isCollapsed, this.open)), (0, _helpersJs._if)(this.schema.allOf && !this.isCollapsed)(_templateObject13, this.xOf(this.schema, 'allOf')), (0, _helpersJs._if)(this.schema.oneOf && !this.isCollapsed)(_templateObject13, this.xOf(this.schema, 'oneOf')), (0, _helpersJs._if)(this.schema.anyOf && !this.isCollapsed)(_templateObject13, this.xOf(this.schema, 'anyOf'))) + '\n\n\n      <!-- Array -->\n      ' + (0, _helpersJs._if)(this.isArray)(_templateObject14, this.schema.title || '', (0, _helpersJs._if)(this.isCollapsed)(_templateObject15), (0, _helpersJs._if)(!this.isCollapsed && (this.schema.uniqueItems || this.schema.minItems || this.schema.maxItems))(_templateObject16, this.schema.minItems || 0, this.schema.maxItems || '∞', (0, _helpersJs._if)(!this.isCollapsed && this.schema.uniqueItems)(_templateObject17)), (0, _helpersJs._if)(!this.isCollapsed && this.schema.description)(_templateObject18, this.schema.description), (0, _helpersJs._if)(!this.isCollapsed && this.schema['enum'])(_templateObject12, this['enum'](this.schema, this.isCollapsed, this.open)), (0, _helpersJs._if)(this.schema.allOf && !this.isCollapsed)(_templateObject13, this.xOf(this.schema, 'allOf')), (0, _helpersJs._if)(this.schema.oneOf && !this.isCollapsed)(_templateObject13, this.xOf(this.schema, 'oneOf')), (0, _helpersJs._if)(this.schema.anyOf && !this.isCollapsed)(_templateObject13, this.xOf(this.schema, 'anyOf')), (0, _helpersJs._if)(!this.isCollapsed)(_templateObject19)) + '\n\n      <!-- Object -->\n      ' + (0, _helpersJs._if)(!this.isPrimitive && !this.isArray)(_templateObject20, this.schema.title || '', (0, _helpersJs._if)(this.isCollapsed)(_templateObject21), (0, _helpersJs._if)(!this.isCollapsed && this.schema.description)(_templateObject18, this.schema.description), (0, _helpersJs._if)(!this.isCollapsed && this.schema['enum'])(_templateObject12, this['enum'](this.schema, this.isCollapsed, this.open)), (0, _helpersJs._if)(this.schema.allOf && !this.isCollapsed)(_templateObject13, this.xOf(this.schema, 'allOf')), (0, _helpersJs._if)(this.schema.oneOf && !this.isCollapsed)(_templateObject13, this.xOf(this.schema, 'oneOf')), (0, _helpersJs._if)(this.schema.anyOf && !this.isCollapsed)(_templateObject13, this.xOf(this.schema, 'anyOf')), (0, _helpersJs._if)(!this.isCollapsed)(_templateObject22)) + '\n').replace(/\s*\n/g, '\n').replace(/(\<\!\-\-).+/g, '').trim();
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
      return '\n      ' + (0, _helpersJs._if)(!isCollapsed && schema['enum'])(_templateObject23) + '\n    ';
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

      this.element.innerHTML = this.template();

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
window.JSONSchemaView = JSONSchemaView;
module.exports = exports['default'];

},{"./helpers.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbW9oc2VuL1Byb2plY3RzL2pzb24tc2NoZW1hLXZpZXctanMvc3JjL2hlbHBlcnMuanMiLCIvVXNlcnMvbW9oc2VuL1Byb2plY3RzL2pzb24tc2NoZW1hLXZpZXctanMvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBSU4sU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQy9CLFNBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0NBQ3JDOzs7Ozs7Ozs7Ozs7O0FBWU0sU0FBUyxHQUFHLENBQUMsU0FBUyxFQUFFO0FBQzdCLFNBQU8sU0FBUyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUM7Q0FDbkM7O0FBQ0QsU0FBUyxLQUFLLEdBQUU7QUFDZCxTQUFPLEVBQUUsQ0FBQztDQUNYO0FBQ0QsU0FBUyxNQUFNLENBQUUsUUFBUSxFQUFrQjtvQ0FBYixXQUFXO0FBQVgsZUFBVzs7O0FBQ3ZDLFNBQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBSztBQUN4RCxXQUFPLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0dBQzVDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDakI7OztBQzVCRCxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQVdOLGNBQWM7Ozs7Ozs7O0lBUUEsY0FBYzs7Ozs7Ozs7OztBQVN0QixXQVRRLGNBQWMsQ0FTckIsTUFBTSxFQUFFLElBQUksRUFBRTs7OzBCQVRQLGNBQWM7O0FBVS9CLFFB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Iiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuLypcbiAqIENvbnZlcnRzIGFueU9mLCBhbGxPZiBhbmQgb25lT2YgdG8gaHVtYW4gcmVhZGFibGUgc3RyaW5nXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRYT2YodHlwZSkge1xuICByZXR1cm4gdHlwZS5zdWJzdHJpbmcoMCwgMykgKyAnIG9mJztcbn1cblxuLypcbiAqIGlmIGNvbmRpdGlvbiBmb3IgRVM2IHRlbXBsYXRlIHN0cmluZ3NcbiAqIHRvIGJlIHVzZWQgb25seSBpbiB0ZW1wbGF0ZSBzdHJpbmdcbiAqXG4gKiBAZXhhbXBsZSBteXN0ciA9IGBSYW5kb20gaXMgJHtfaWYoTWF0aC5yYW5kb20oKSA+IDAuNSlgZ3JlYXRlciB0aGFuIDAuNWBgXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBjb25kaXRpb25cbiAqXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IHRoZSB0ZW1wbGF0ZSBmdW5jdGlvblxuKi9cbmV4cG9ydCBmdW5jdGlvbiBfaWYoY29uZGl0aW9uKSB7XG4gIHJldHVybiBjb25kaXRpb24gPyBub3JtYWwgOiBlbXB0eTtcbn1cbmZ1bmN0aW9uIGVtcHR5KCl7XG4gIHJldHVybiAnJztcbn1cbmZ1bmN0aW9uIG5vcm1hbCAodGVtcGxhdGUsIC4uLmV4cHJlc3Npb25zKSB7XG4gIHJldHVybiB0ZW1wbGF0ZS5zbGljZSgxKS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBwYXJ0LCBpKSA9PiB7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgZXhwcmVzc2lvbnNbaV0gKyBwYXJ0O1xuICB9LCB0ZW1wbGF0ZVswXSk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWxzIEpTT05TY2hlbWFWaWV3ICovXG5cbmltcG9ydCB7XG4gIGdldFR5cGUsXG4gIGdldFZhbHVlUHJldmlldyxcbiAgZ2V0UHJldmlldyxcbiAgYWRkUHJvcGVydHlOYW1lLFxuICBjb252ZXJ0WE9mLFxuICBfaWZcbn0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuXG4vKipcbiAqIEBjbGFzcyBKU09OU2NoZW1hVmlld1xuICpcbiAqIEEgcHVyZSBKYXZhU2NyaXB0IGNvbXBvbmVudCBmb3IgcmVuZGVyaW5nIEpTT04gU2NoZW1hIGluIEhUTUwuXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNPTlNjaGVtYVZpZXcge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gc2NoZW1hIFRoZSBKU09OIFNjaGVtYSBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcGVuPTFdIGhpcyBudW1iZXIgaW5kaWNhdGVzIHVwIHRvIGhvdyBtYW55IGxldmVscyB0aGVcbiAgICogcmVuZGVyZWQgdHJlZSBzaG91bGQgZXhwYW5kLiBTZXQgaXQgdG8gYDBgIHRvIG1ha2UgdGhlIHdob2xlIHRyZWUgY29sbGFwc2VkXG4gICAqIG9yIHNldCBpdCB0byBgSW5maW5pdHlgIHRvIGV4cGFuZCB0aGUgdHJlZSBkZWVwbHlcbiAgKi9cbiAgY29uc3RydWN0b3Ioc2NoZW1hLCBvcGVuKSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdGhpcy5vcGVuID0gb3BlbjtcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gb3BlbiA8PSAwO1xuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIGEgc2NoZW1hIGlzIGFuIGFycmF5XG4gICAgdGhpcy5pc0FycmF5ID0gdGhpcy5zY2hlbWEgJiYgdGhpcy5zY2hlbWEudHlwZSA9PT0gJ2FycmF5JztcblxuICAgIC8vIERldGVybWluZSBpZiBhIHNjaGVtYSBpcyBhIHByaW1pdGl2ZVxuICAgIHRoaXMuaXNQcmltaXRpdmUgPSB0aGlzLnNjaGVtYSAmJlxuICAgICAgIXRoaXMuc2NoZW1hLnByb3BlcnRpZXMgJiZcbiAgICAgICF0aGlzLnNjaGVtYS5pdGVtcyAmJlxuICAgICAgdGhpcy5zY2hlbWEudHlwZSAhPT0gJ2FycmF5JyAmJlxuICAgICAgdGhpcy5zY2hlbWEudHlwZSAhPT0gJ29iamVjdCc7XG5cbiAgICAvLyBwb3B1bGF0ZSBpc1JlcXVpcmVkIHByb3BlcnR5IGRvd24gdG8gcHJvcGVydGllc1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSkge1xuICAgICAgdGhpcy5zY2hlbWEucmVxdWlyZWQuZm9yRWFjaChyZXF1aXJlZFByb3BlcnR5ID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3JlcXVpcmVkUHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcmVxdWlyZWRQcm9wZXJ0eV0uaXNSZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIHRlbXBsYXRlIHdpdGggcG9wdWxhdGVkIHByb3BlcnRpZXMuXG4gICAqIFRoaXMgdGVtcGxhdGUgZG9lcyBub3QgaGF2ZSB0aGUgY2hpbGRyZW5cbiAgKi9cbiAgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDwhLS0gUHJpbWl0aXZlIC0tPlxuICAgICAgJHtfaWYodGhpcy5pc1ByaW1pdGl2ZSlgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmltaXRpdmVcIj5cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiB8fCB0aGlzLnNjaGVtYS50aXRsZSlgXG4gICAgICAgICAgICA8YSBjbGFzcz1cInRpdGxlXCI+PHNwYW4gY2xhc3M9XCJ0b2dnbGUtaGFuZGxlXCI+PC9zcGFuPiR7dGhpcy5zY2hlbWEudGl0bGUgfHwgJyd9IDwvYT5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInR5cGVcIj4ke3RoaXMuc2NoZW1hLnR5cGV9PC9zcGFuPlxuXG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuaXNSZXF1aXJlZClgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlcXVpcmVkXCI+Kjwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZm9ybWF0KWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9ybWF0XCI+KCR7dGhpcy5zY2hlbWEuZm9ybWF0fSk8L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLm1pbmltdW0pYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBtaW5pbXVtXCI+bWluaW11bToke3RoaXMuc2NoZW1hLm1pbmltdW19PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UgZXhjbHVzaXZlTWluaW11bVwiPihleCltaW5pbXVtOiR7dGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bX08L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLm1heGltdW0pYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBtYXhpbXVtXCI+bWF4aW11bToke3RoaXMuc2NoZW1hLm1heGltdW19PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UgZXhjbHVzaXZlTWF4aW11bVwiPihleCltYXhpbXVtOiR7dGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bX08L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLm1pbkxlbmd0aClgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIG1pbkxlbmd0aFwiPm1pbkxlbmd0aDoke3RoaXMuc2NoZW1hLm1pbkxlbmd0aH08L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLm1heExlbmd0aClgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIG1heExlbmd0aFwiPm1heExlbmd0aDoke3RoaXMuc2NoZW1hLm1heExlbmd0aH08L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uICYmICF0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lciBkZXNjcmlwdGlvblwiPiR7dGhpcy5zY2hlbWEuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmVudW0pYFxuICAgICAgICAgICAgJHt0aGlzLmVudW0odGhpcy5zY2hlbWEsIHRoaXMuaXNDb2xsYXBzZWQsIHRoaXMub3Blbil9XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmFsbE9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnYWxsT2YnKX1gfVxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLm9uZU9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnb25lT2YnKX1gfVxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmFueU9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnYW55T2YnKX1gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGB9XG5cblxuICAgICAgPCEtLSBBcnJheSAtLT5cbiAgICAgICR7X2lmKHRoaXMuaXNBcnJheSlgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcnJheVwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGVcIj48c3BhbiBjbGFzcz1cInRvZ2dsZS1oYW5kbGVcIj48L3NwYW4+JHt0aGlzLnNjaGVtYS50aXRsZSB8fCAnJ308c3BhbiBjbGFzcz1cIm9wZW5pbmcgYnJhY2tldFwiPls8L3NwYW4+JHtfaWYodGhpcy5pc0NvbGxhcHNlZClgPHNwYW4gY2xhc3M9XCJjbG9zaW5nIGJyYWNrZXRcIj5dPC9zcGFuPmB9PC9hPlxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmICh0aGlzLnNjaGVtYS51bmlxdWVJdGVtcyB8fCB0aGlzLnNjaGVtYS5taW5JdGVtcyB8fCB0aGlzLnNjaGVtYS5tYXhJdGVtcykpYFxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJpdGVtcyByYW5nZVwiPigke3RoaXMuc2NoZW1hLm1pbkl0ZW1zIHx8IDB9Li4ke3RoaXMuc2NoZW1hLm1heEl0ZW1zIHx8ICfiiJ4nfSk8L3NwYW4+XG4gICAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS51bmlxdWVJdGVtcylgPHNwYW4gdGl0bGU9XCJ1bmlxdWVcIiBjbGFzcz1cInVuaXF1ZUl0ZW1zXCI+4pmmPC9zcGFuPmB9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIGB9XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCI+XG4gICAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbilgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7dGhpcy5zY2hlbWEuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICBgfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZW51bSlgXG4gICAgICAgICAgICAke3RoaXMuZW51bSh0aGlzLnNjaGVtYSwgdGhpcy5pc0NvbGxhcHNlZCwgdGhpcy5vcGVuKX1cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuYWxsT2YgJiYgIXRoaXMuaXNDb2xsYXBzZWQpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdhbGxPZicpfWB9XG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEub25lT2YgJiYgIXRoaXMuaXNDb2xsYXBzZWQpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdvbmVPZicpfWB9XG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuYW55T2YgJiYgIXRoaXMuaXNDb2xsYXBzZWQpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdhbnlPZicpfWB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZClgXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zaW5nIGJyYWNrZXRcIj5dPC9zcGFuPlxuICAgICAgICAgIGB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgYH1cblxuICAgICAgPCEtLSBPYmplY3QgLS0+XG4gICAgICAke19pZighdGhpcy5pc1ByaW1pdGl2ZSAmJiAhdGhpcy5pc0FycmF5KWBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm9iamVjdFwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGVcIj48c3BhblxuICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtaGFuZGxlXCI+PC9zcGFuPiR7dGhpcy5zY2hlbWEudGl0bGUgfHwgJyd9IDxzcGFuXG4gICAgICAgICAgICBjbGFzcz1cIm9wZW5pbmcgYnJhY2VcIj57PC9zcGFuPiR7X2lmKHRoaXMuaXNDb2xsYXBzZWQpYFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NpbmcgYnJhY2VcIiBuZy1pZj1cImlzQ29sbGFwc2VkXCI+fTwvc3Bhbj5cbiAgICAgICAgICBgfTwvYT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxuICAgICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke3RoaXMuc2NoZW1hLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwhLS0gY2hpbGRyZW4gZ28gaGVyZSAtLT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmVudW0pYFxuICAgICAgICAgICAgJHt0aGlzLmVudW0odGhpcy5zY2hlbWEsIHRoaXMuaXNDb2xsYXBzZWQsIHRoaXMub3Blbil9XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmFsbE9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnYWxsT2YnKX1gfVxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLm9uZU9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnb25lT2YnKX1gfVxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmFueU9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnYW55T2YnKX1gfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQpYFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2luZyBicmFjZVwiPn08L3NwYW4+XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgfVxuYC5yZXBsYWNlKC9cXHMqXFxuL2csICdcXG4nKS5yZXBsYWNlKC8oXFw8XFwhXFwtXFwtKS4rL2csICcnKS50cmltKCk7XG4gIH1cblxuICAvKlxuICAgKiBUZW1wbGF0ZSBmb3Igb25lT2YsIGFueU9mIGFuZCBhbGxPZlxuICAqL1xuICB4T2Yoc2NoZW1hLCB0eXBlKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJpbm5lciAke3R5cGV9XCI+XG4gICAgICAgIDxiPiR7Y29udmVydFhPZih0eXBlKX06PC9iPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIC8qXG4gICAqIFRlbXBsYXRlIGZvciBlbnVtc1xuICAqL1xuICBlbnVtKHNjaGVtYSwgaXNDb2xsYXBzZWQsIG9wZW4pIHtcbiAgICByZXR1cm4gYFxuICAgICAgJHtfaWYoIWlzQ29sbGFwc2VkICYmIHNjaGVtYS5lbnVtKWBcbiAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyIGVudW1zXCI+XG4gICAgICAgICAgPGI+RW51bTo8L2I+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYH1cbiAgICBgO1xuICB9XG5cbiAgLypcbiAgICogVG9nZ2xlcyB0aGUgJ2NvbGxhcHNlZCcgc3RhdGVcbiAgKi9cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSAhdGhpcy5pc0NvbGxhcHNlZDtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLypcbiAgICogUmVuZGVycyB0aGUgZWxlbWVudCBhbmQgcmV0dXJucyBpdFxuICAqL1xuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2pzb24tc2NoZW1hLXZpZXcnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NvbGxhcHNlZCkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2VkJyk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRoaXMudGVtcGxhdGUoKTtcblxuXG4gICAgaWYgKCF0aGlzLmlzQ29sbGFwc2VkKSB7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkcmVuKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIGZvciB0b2dnbGluZ1xuICAgIGlmICh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignYS50aXRsZScpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignYS50aXRsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cblxuICAvKlxuICAgKiBBcHBlbmRzIGNoaWxkcmVuIHRvIGdpdmVuIGVsZW1lbnQgYmFzZWQgb24gY3VycmVudCBzY2hlbWFcbiAgKi9cbiAgYXBwZW5kQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgIGNvbnN0IGlubmVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaW5uZXInKTtcblxuICAgIGlmICh0aGlzLnNjaGVtYS5lbnVtKSB7XG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSlNPTkZvcm1hdHRlcih0aGlzLnNjaGVtYS5lbnVtLCB0aGlzLm9wZW4gLSAxKTtcbiAgICAgIGNvbnN0IGZvcm1hdHRlckVsID0gZm9ybWF0dGVyLnJlbmRlcigpO1xuICAgICAgZm9ybWF0dGVyRWwuY2xhc3NMaXN0LmFkZCgnaW5uZXInKTtcbiAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVudW1zLmlubmVyJykuYXBwZW5kQ2hpbGQoZm9ybWF0dGVyRWwpO1xuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBcnJheSkge1xuICAgICAgY29uc3QgdmlldyA9IG5ldyBKU09OU2NoZW1hVmlldyh0aGlzLnNjaGVtYS5pdGVtcywgdGhpcy5vcGVuIC0gMSlcbiAgICAgIGlubmVyLmFwcGVuZENoaWxkKHZpZXcucmVuZGVyKCkpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5zY2hlbWEucHJvcGVydGllcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2gocHJvcGVydHlOYW1lID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTs7XG4gICAgICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJwcm9wZXJ0eVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7cHJvcGVydHlOYW1lfTo8L3NwYW4+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgSlNPTlNjaGVtYVZpZXcocHJvcGVydHksIHRoaXMub3BlbiAtIDEpO1xuICAgICAgICB0ZW1wRGl2LnF1ZXJ5U2VsZWN0b3IoJy5wcm9wZXJ0eScpLmFwcGVuZENoaWxkKHZpZXcucmVuZGVyKCkpO1xuXG4gICAgICAgIGlubmVyLmFwcGVuZENoaWxkKHRlbXBEaXYucXVlcnlTZWxlY3RvcignLnByb3BlcnR5JykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLmFsbE9mKSB7IGFwcGVuZFhPZi5jYWxsKHRoaXMsICdhbGxPZicpOyB9XG4gICAgaWYgKHRoaXMuc2NoZW1hLm9uZU9mKSB7IGFwcGVuZFhPZi5jYWxsKHRoaXMsICdvbmVPZicpOyB9XG4gICAgaWYgKHRoaXMuc2NoZW1hLmFueU9mKSB7IGFwcGVuZFhPZi5jYWxsKHRoaXMsICdhbnlPZicpOyB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRYT2YodHlwZSkge1xuICAgICAgY29uc3QgaW5uZXJBbGxPZiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmlubmVyLiR7dHlwZX1gKTtcblxuICAgICAgdGhpcy5zY2hlbWFbdHlwZV0uZm9yRWFjaChzY2hlbWEgPT4ge1xuICAgICAgICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbm5lci5jbGFzc0xpc3QuYWRkKCdpbm5lcicpO1xuICAgICAgICBjb25zdCB2aWV3ID0gbmV3IEpTT05TY2hlbWFWaWV3KHNjaGVtYSwgdGhpcy5vcGVuIC0gMSk7XG4gICAgICAgIGlubmVyLmFwcGVuZENoaWxkKHZpZXcucmVuZGVyKCkpO1xuICAgICAgICBpbm5lckFsbE9mLmFwcGVuZENoaWxkKGlubmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUT0RPOiBVTURcbndpbmRvdy5KU09OU2NoZW1hVmlldyA9IEpTT05TY2hlbWFWaWV3O1xuIl19
