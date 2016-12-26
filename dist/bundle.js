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
    _templateObject16 = _taggedTemplateLiteral(['\n        <div class="array">\n          <a class="title"><span class="toggle-handle"></span>', '<span class="opening bracket">[</span>', '</a>\n          ', '\n          <div class="inner">\n            ', '\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      '], ['\n        <div class="array">\n          <a class="title"><span class="toggle-handle"></span>', '<span class="opening bracket">[</span>', '</a>\n          ', '\n          <div class="inner">\n            ', '\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      ']),
    _templateObject17 = _taggedTemplateLiteral(['<span class="closing bracket">]</span>'], ['<span class="closing bracket">]</span>']),
    _templateObject18 = _taggedTemplateLiteral(['\n          <span>\n            <span title="items range">(', '..', ')</span>\n            ', '\n          </span>\n          '], ['\n          <span>\n            <span title="items range">(', '..', ')</span>\n            ', '\n          </span>\n          ']),
    _templateObject19 = _taggedTemplateLiteral(['<span title="unique" class="uniqueItems">♦</span>'], ['<span title="unique" class="uniqueItems">♦</span>']),
    _templateObject20 = _taggedTemplateLiteral(['\n              <div class="description">', '</div>\n            '], ['\n              <div class="description">', '</div>\n            ']),
    _templateObject21 = _taggedTemplateLiteral(['\n          <span class="closing bracket">]</span>\n          '], ['\n          <span class="closing bracket">]</span>\n          ']),
    _templateObject22 = _taggedTemplateLiteral(['\n        <div class="object">\n          <a class="title"><span\n            class="toggle-handle"></span>', ' <span\n            class="opening brace">{</span>', '</a>\n\n          <div class="inner">\n            ', '\n            <!-- children go here -->\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      '], ['\n        <div class="object">\n          <a class="title"><span\n            class="toggle-handle"></span>', ' <span\n            class="opening brace">{</span>', '</a>\n\n          <div class="inner">\n            ', '\n            <!-- children go here -->\n          </div>\n\n          ', '\n\n          ', '\n          ', '\n          ', '\n\n          ', '\n        </div>\n      ']),
    _templateObject23 = _taggedTemplateLiteral(['\n              <span class="closing brace" ng-if="isCollapsed">}</span>\n          '], ['\n              <span class="closing brace" ng-if="isCollapsed">}</span>\n          ']),
    _templateObject24 = _taggedTemplateLiteral(['\n          <span class="closing brace">}</span>\n          '], ['\n          <span class="closing brace">}</span>\n          ']),
    _templateObject25 = _taggedTemplateLiteral(['\n        <div class="inner enums">\n          <b>Enum:</b>\n        </div>\n      '], ['\n        <div class="inner enums">\n          <b>Enum:</b>\n        </div>\n      ']);

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

      return ('\n      <!-- Any -->\n      ' + (0, _helpersJs._if)(this.isAny)(_templateObject, (0, _helpersJs._if)(this.showToggle)(_templateObject2, this.schema.title || ''), (0, _helpersJs._if)(this.schema.description && !this.isCollapsed)(_templateObject3, this.schema.description)) + '\n\n      <!-- Primitive -->\n      ' + (0, _helpersJs._if)(this.isPrimitive)(_templateObject4, (0, _helpersJs._if)(this.showToggle)(_templateObject2, this.schema.title || ''), this.schema.type, (0, _helpersJs._if)(this.schema.isRequired)(_templateObject5), (0, _helpersJs._if)(!this.isCollapsed && this.schema.format)(_templateObject6, this.schema.format), (0, _helpersJs._if)(!this.isCollapsed && this.schema['default'])(_templateObject7, this.schema['default']), (0, _helpersJs._if)(!this.isCollapsed && this.schema.minimum)(_templateObject8, this.schema.minimum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.exclusiveMinimum)(_templateObject9, this.schema.exclusiveMinimum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.maximum)(_templateObject10, this.schema.maximum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.exclusiveMaximum)(_templateObject11, this.schema.exclusiveMaximum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.minLength)(_templateObject12, this.schema.minLength), (0, _helpersJs._if)(!this.isCollapsed && this.schema.maxLength)(_templateObject13, this.schema.maxLength), (0, _helpersJs._if)(this.schema.description && !this.isCollapsed)(_templateObject3, this.schema.description), (0, _helpersJs._if)(!this.isCollapsed && this.schema['enum'])(_templateObject14, this['enum'](this.schema, this.isCollapsed, this.open)), (0, _helpersJs._if)(this.schema.allOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'allOf')), (0, _helpersJs._if)(this.schema.oneOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'oneOf')), (0, _helpersJs._if)(this.schema.anyOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'anyOf'))) + '\n\n\n      <!-- Array -->\n      ' + (0, _helpersJs._if)(this.isArray)(_templateObject16, this.schema.title || '', (0, _helpersJs._if)(this.isCollapsed)(_templateObject17), (0, _helpersJs._if)(!this.isCollapsed && (this.schema.uniqueItems || this.schema.minItems || this.schema.maxItems))(_templateObject18, this.schema.minItems || 0, this.schema.maxItems || '∞', (0, _helpersJs._if)(!this.isCollapsed && this.schema.uniqueItems)(_templateObject19)), (0, _helpersJs._if)(!this.isCollapsed && this.schema.description)(_templateObject20, this.schema.description), (0, _helpersJs._if)(!this.isCollapsed && this.schema['enum'])(_templateObject14, this['enum'](this.schema, this.isCollapsed, this.open)), (0, _helpersJs._if)(this.schema.allOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'allOf')), (0, _helpersJs._if)(this.schema.oneOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'oneOf')), (0, _helpersJs._if)(this.schema.anyOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'anyOf')), (0, _helpersJs._if)(!this.isCollapsed)(_templateObject21)) + '\n\n      <!-- Object -->\n      ' + (0, _helpersJs._if)(!this.isPrimitive && !this.isArray && !this.isAny)(_templateObject22, this.schema.title || '', (0, _helpersJs._if)(this.isCollapsed)(_templateObject23), (0, _helpersJs._if)(!this.isCollapsed && this.schema.description)(_templateObject20, this.schema.description), (0, _helpersJs._if)(!this.isCollapsed && this.schema['enum'])(_templateObject14, this['enum'](this.schema, this.isCollapsed, this.open)), (0, _helpersJs._if)(this.schema.allOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'allOf')), (0, _helpersJs._if)(this.schema.oneOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'oneOf')), (0, _helpersJs._if)(this.schema.anyOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'anyOf')), (0, _helpersJs._if)(!this.isCollapsed)(_templateObject24)) + '\n').replace(/\s*\n/g, '\n').replace(/(\<\!\-\-).+/g, '').trim();
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
      return '\n      ' + (0, _helpersJs._if)(!isCollapsed && schema['enum'])(_templateObject25) + '\n    ';
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF6aW1pL1Byb2plY3RzL2pzb24tc2NoZW1hLXZpZXctanMvc3JjL2hlbHBlcnMuanMiLCIvVXNlcnMvbWF6aW1pL1Byb2plY3RzL2pzb24tc2NoZW1hLXZpZXctanMvc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7O0FBSU4sU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQy9CLFNBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0NBQ3JDOzs7Ozs7Ozs7Ozs7O0FBWU0sU0FBUyxHQUFHLENBQUMsU0FBUyxFQUFFO0FBQzdCLFNBQU8sU0FBUyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUM7Q0FDbkM7O0FBQ0QsU0FBUyxLQUFLLEdBQUU7QUFDZCxTQUFPLEVBQUUsQ0FBQztDQUNYO0FBQ0QsU0FBUyxNQUFNLENBQUUsUUFBUSxFQUFrQjtvQ0FBYixXQUFXO0FBQVgsZUFBVzs7O0FBQ3ZDLFNBQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBSztBQUN4RCxXQUFPLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0dBQzVDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDakI7OztBQzVCRCxZQUFZLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBT04sY0FBYzs7Ozs7Ozs7SUFRQSxjQUFjOzs7Ozs7Ozs7Ozs7QUFXdEIsV0FYUSxjQUFjLENBV3JCLE1BQU0sRUFBRSxJQUFJLEVBQTJCOzs7UUFBekIsT0FBTyx5REFBRyxFQUFDLEtBQUssRUFBRSxJQUFJLEVB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LE1BQU0sQ0FBQyxTQUFTLENBQUMsb0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBRy9ELG9CQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FHL0Qsb0JBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FHeEQsb0JBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLFFBQUssQ0FBQyxvQkFDeEMsSUFBSSxRQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FHckQsb0JBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FDNUUsb0JBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FDNUUsb0JBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsNENBTWhGLG9CQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBRXVDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBeUMsb0JBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFDekksb0JBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFBLEFBQUMsQ0FBQyxvQkFFdEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLEdBQUcsRUFDcEYsb0JBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLHNCQUlqRCxvQkFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsb0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUlwRCxvQkFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sUUFBSyxDQUFDLG9CQUN4QyxJQUFJLFFBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUdyRCxvQkFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUM1RSxvQkFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUM1RSxvQkFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUU1RSxvQkFBSSxDQUFDLElBQUksQ0FBQyxXQUFX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QUMsQ0FBQztPQUFFOztBQUV6RCxlQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUU7OztBQUN2QixZQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYSxhQUFXLElBQUksQ0FBRyxDQUFDOztBQUUzRCxZQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE1BQU0sRUFBSTtBQUNsQyxjQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVDLGVBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdCLGNBQU0sSUFBSSxHQUFHLElBQUksY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFLLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN2RCxlQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLG9CQUFVLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CLENBQUMsQ0FBQztPQUNKO0tBQ0Y7OztTQXhVa0IsY0FBYzs7O3FCQUFkLGNBQWMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuLypcbiAqIENvbnZlcnRzIGFueU9mLCBhbGxPZiBhbmQgb25lT2YgdG8gaHVtYW4gcmVhZGFibGUgc3RyaW5nXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRYT2YodHlwZSkge1xuICByZXR1cm4gdHlwZS5zdWJzdHJpbmcoMCwgMykgKyAnIG9mJztcbn1cblxuLypcbiAqIGlmIGNvbmRpdGlvbiBmb3IgRVM2IHRlbXBsYXRlIHN0cmluZ3NcbiAqIHRvIGJlIHVzZWQgb25seSBpbiB0ZW1wbGF0ZSBzdHJpbmdcbiAqXG4gKiBAZXhhbXBsZSBteXN0ciA9IGBSYW5kb20gaXMgJHtfaWYoTWF0aC5yYW5kb20oKSA+IDAuNSlgZ3JlYXRlciB0aGFuIDAuNWBgXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBjb25kaXRpb25cbiAqXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IHRoZSB0ZW1wbGF0ZSBmdW5jdGlvblxuKi9cbmV4cG9ydCBmdW5jdGlvbiBfaWYoY29uZGl0aW9uKSB7XG4gIHJldHVybiBjb25kaXRpb24gPyBub3JtYWwgOiBlbXB0eTtcbn1cbmZ1bmN0aW9uIGVtcHR5KCl7XG4gIHJldHVybiAnJztcbn1cbmZ1bmN0aW9uIG5vcm1hbCAodGVtcGxhdGUsIC4uLmV4cHJlc3Npb25zKSB7XG4gIHJldHVybiB0ZW1wbGF0ZS5zbGljZSgxKS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBwYXJ0LCBpKSA9PiB7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgZXhwcmVzc2lvbnNbaV0gKyBwYXJ0O1xuICB9LCB0ZW1wbGF0ZVswXSk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWxzIEpTT05TY2hlbWFWaWV3ICovXG5cbmltcG9ydCB7XG4gIGNvbnZlcnRYT2YsXG4gIF9pZlxufSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5cbi8qKlxuICogQGNsYXNzIEpTT05TY2hlbWFWaWV3XG4gKlxuICogQSBwdXJlIEphdmFTY3JpcHQgY29tcG9uZW50IGZvciByZW5kZXJpbmcgSlNPTiBTY2hlbWEgaW4gSFRNTC5cbiovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKU09OU2NoZW1hVmlldyB7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzY2hlbWEgVGhlIEpTT04gU2NoZW1hIG9iamVjdFxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gW29wZW49MV0gaGlzIG51bWJlciBpbmRpY2F0ZXMgdXAgdG8gaG93IG1hbnkgbGV2ZWxzIHRoZVxuICAgKiByZW5kZXJlZCB0cmVlIHNob3VsZCBleHBhbmQuIFNldCBpdCB0byBgMGAgdG8gbWFrZSB0aGUgd2hvbGUgdHJlZSBjb2xsYXBzZWRcbiAgICogb3Igc2V0IGl0IHRvIGBJbmZpbml0eWAgdG8gZXhwYW5kIHRoZSB0cmVlIGRlZXBseVxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucy5cbiAgICogIHRoZW1lIHtzdHJpbmd9OiBvbmUgb2YgdGhlIGZvbGxvd2luZyBvcHRpb25zOiBbJ2RhcmsnXVxuICAqL1xuICBjb25zdHJ1Y3RvcihzY2hlbWEsIG9wZW4sIG9wdGlvbnMgPSB7dGhlbWU6IG51bGx9KSB7XG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gICAgdGhpcy5vcGVuID0gb3BlbjtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSBvcGVuIDw9IDA7XG5cbiAgICAvLyBpZiBzY2hlbWEgaXMgYW4gZW1wdHkgb2JqZWN0IHdoaWNoIG1lYW5zIGFueSBKT1NOXG4gICAgdGhpcy5pc0FueSA9IHR5cGVvZiBzY2hlbWEgPT09ICdvYmplY3QnICYmXG4gICAgICAhQXJyYXkuaXNBcnJheShzY2hlbWEpICYmXG4gICAgICAhT2JqZWN0LmtleXMoc2NoZW1hKVxuICAgICAgLmZpbHRlcihrPT4gWyd0aXRsZScsICdkZXNjcmlwdGlvbiddLmluZGV4T2YoaykgPT09IC0xKS5sZW5ndGg7XG5cbiAgICAvLyBEZXRlcm1pbmUgaWYgYSBzY2hlbWEgaXMgYW4gYXJyYXlcbiAgICB0aGlzLmlzQXJyYXkgPSAhdGhpcy5pc0FueSAmJiB0aGlzLnNjaGVtYSAmJiB0aGlzLnNjaGVtYS50eXBlID09PSAnYXJyYXknO1xuXG4gICAgdGhpcy5pc09iamVjdCA9IHRoaXMuc2NoZW1hICYmXG4gICAgICAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ29iamVjdCcgfHxcbiAgICAgICB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzIHx8XG4gICAgICAgdGhpcy5zY2hlbWEuYW55T2YgfHxcbiAgICAgICB0aGlzLnNjaGVtYS5vbmVvZiB8fFxuICAgICAgIHRoaXMuc2NoZW1hLmFsbE9mKTtcblxuICAgIC8vIERldGVybWluZSBpZiBhIHNjaGVtYSBpcyBhIHByaW1pdGl2ZVxuICAgIHRoaXMuaXNQcmltaXRpdmUgPSAhdGhpcy5pc0FueSAmJiAhdGhpcy5pc0FycmF5ICYmICF0aGlzLmlzT2JqZWN0O1xuXG4gICAgLy9cbiAgICB0aGlzLnNob3dUb2dnbGUgPSB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiB8fFxuICAgICAgdGhpcy5zY2hlbWEudGl0bGUgfHxcbiAgICAgICh0aGlzLmlzUHJpbWl0aXZlICYmIChcbiAgICAgICAgdGhpcy5zY2hlbWEubWluaW11bSB8fFxuICAgICAgICB0aGlzLnNjaGVtYS5tYXhpbXVtIHx8XG4gICAgICAgIHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gfHxcbiAgICAgICAgdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSB8fFxuICAgICAgICB0aGlzLnNjaGVtYS5mb3JtYXQgfHwgICAgICAgIFxuICAgICAgICB0aGlzLnNjaGVtYS5kZWZhdWx0IHx8XG4gICAgICAgIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCB8fFxuICAgICAgICB0aGlzLnNjaGVtYS5tYXhMZW5ndGggfHxcbiAgICAgICAgdGhpcy5zY2hlbWEuZW51bSlcbiAgICAgICk7XG5cbiAgICAvLyBwb3B1bGF0ZSBpc1JlcXVpcmVkIHByb3BlcnR5IGRvd24gdG8gcHJvcGVydGllc1xuICAgIGlmICh0aGlzLnNjaGVtYSAmJiBBcnJheS5pc0FycmF5KHRoaXMuc2NoZW1hLnJlcXVpcmVkKSkge1xuICAgICAgdGhpcy5zY2hlbWEucmVxdWlyZWQuZm9yRWFjaChyZXF1aXJlZFByb3BlcnR5ID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3JlcXVpcmVkUHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcmVxdWlyZWRQcm9wZXJ0eV0uaXNSZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAqIFJldHVybnMgdGhlIHRlbXBsYXRlIHdpdGggcG9wdWxhdGVkIHByb3BlcnRpZXMuXG4gICAqIFRoaXMgdGVtcGxhdGUgZG9lcyBub3QgaGF2ZSB0aGUgY2hpbGRyZW5cbiAgKi9cbiAgdGVtcGxhdGUoKSB7XG4gICAgaWYgKCF0aGlzLnNjaGVtYSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHJldHVybiBgXG4gICAgICA8IS0tIEFueSAtLT5cbiAgICAgICR7X2lmKHRoaXMuaXNBbnkpYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW55XCI+XG4gICAgICAgICAgJHtfaWYodGhpcy5zaG93VG9nZ2xlKWBcbiAgICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGVcIj48c3BhbiBjbGFzcz1cInRvZ2dsZS1oYW5kbGVcIj48L3NwYW4+JHt0aGlzLnNjaGVtYS50aXRsZSB8fCAnJ30gPC9hPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInR5cGUgdHlwZS1hbnlcIj4mbHQ7YW55Jmd0Ozwvc3Bhbj5cblxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uICYmICF0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lciBkZXNjcmlwdGlvblwiPiR7dGhpcy5zY2hlbWEuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgfVxuXG4gICAgICA8IS0tIFByaW1pdGl2ZSAtLT5cbiAgICAgICR7X2lmKHRoaXMuaXNQcmltaXRpdmUpYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJpbWl0aXZlXCI+XG4gICAgICAgICAgJHtfaWYodGhpcy5zaG93VG9nZ2xlKWBcbiAgICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGVcIj48c3BhbiBjbGFzcz1cInRvZ2dsZS1oYW5kbGVcIj48L3NwYW4+JHt0aGlzLnNjaGVtYS50aXRsZSB8fCAnJ30gPC9hPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHlwZVwiPiR7dGhpcy5zY2hlbWEudHlwZX08L3NwYW4+XG5cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5pc1JlcXVpcmVkKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5mb3JtYXQpYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtYXRcIj4oJHt0aGlzLnNjaGVtYS5mb3JtYXR9KTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZGVmYXVsdClgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlZmF1bHRcIj5kZWZhdWx0OiAke3RoaXMuc2NoZW1hLmRlZmF1bHR9PC9zcGFuPlxuICAgICAgICAgIGB9IFxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEubWluaW11bSlgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIG1pbmltdW1cIj5taW5pbXVtOiR7dGhpcy5zY2hlbWEubWluaW11bX08L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBleGNsdXNpdmVNaW5pbXVtXCI+KGV4KW1pbmltdW06JHt0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtfTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEubWF4aW11bSlgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIG1heGltdW1cIj5tYXhpbXVtOiR7dGhpcy5zY2hlbWEubWF4aW11bX08L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBleGNsdXNpdmVNYXhpbXVtXCI+KGV4KW1heGltdW06JHt0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtfTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEubWluTGVuZ3RoKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UgbWluTGVuZ3RoXCI+bWluTGVuZ3RoOiR7dGhpcy5zY2hlbWEubWluTGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEubWF4TGVuZ3RoKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UgbWF4TGVuZ3RoXCI+bWF4TGVuZ3RoOiR7dGhpcy5zY2hlbWEubWF4TGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gJiYgIXRoaXMuaXNDb2xsYXBzZWQpYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyIGRlc2NyaXB0aW9uXCI+JHt0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZW51bSlgXG4gICAgICAgICAgICAke3RoaXMuZW51bSh0aGlzLnNjaGVtYSwgdGhpcy5pc0NvbGxhcHNlZCwgdGhpcy5vcGVuKX1cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuYWxsT2YgJiYgIXRoaXMuaXNDb2xsYXBzZWQpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdhbGxPZicpfWB9XG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEub25lT2YgJiYgIXRoaXMuaXNDb2xsYXBzZWQpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdvbmVPZicpfWB9XG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuYW55T2YgJiYgIXRoaXMuaXNDb2xsYXBzZWQpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdhbnlPZicpfWB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgYH1cblxuXG4gICAgICA8IS0tIEFycmF5IC0tPlxuICAgICAgJHtfaWYodGhpcy5pc0FycmF5KWBcbiAgICAgICAgPGRpdiBjbGFzcz1cImFycmF5XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJ0aXRsZVwiPjxzcGFuIGNsYXNzPVwidG9nZ2xlLWhhbmRsZVwiPjwvc3Bhbj4ke3RoaXMuc2NoZW1hLnRpdGxlIHx8ICcnfTxzcGFuIGNsYXNzPVwib3BlbmluZyBicmFja2V0XCI+Wzwvc3Bhbj4ke19pZih0aGlzLmlzQ29sbGFwc2VkKWA8c3BhbiBjbGFzcz1cImNsb3NpbmcgYnJhY2tldFwiPl08L3NwYW4+YH08L2E+XG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgKHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zIHx8IHRoaXMuc2NoZW1hLm1pbkl0ZW1zIHx8IHRoaXMuc2NoZW1hLm1heEl0ZW1zKSlgXG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8c3BhbiB0aXRsZT1cIml0ZW1zIHJhbmdlXCI+KCR7dGhpcy5zY2hlbWEubWluSXRlbXMgfHwgMH0uLiR7dGhpcy5zY2hlbWEubWF4SXRlbXMgfHwgJ+KInid9KTwvc3Bhbj5cbiAgICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zKWA8c3BhbiB0aXRsZT1cInVuaXF1ZVwiIGNsYXNzPVwidW5pcXVlSXRlbXNcIj7imaY8L3NwYW4+YH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgYH1cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cbiAgICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uKWBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHt0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5lbnVtKWBcbiAgICAgICAgICAgICR7dGhpcy5lbnVtKHRoaXMuc2NoZW1hLCB0aGlzLmlzQ29sbGFwc2VkLCB0aGlzLm9wZW4pfVxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbGxPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FsbE9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5vbmVPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ29uZU9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbnlPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FueU9mJyl9YH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkKWBcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NpbmcgYnJhY2tldFwiPl08L3NwYW4+XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgfVxuXG4gICAgICA8IS0tIE9iamVjdCAtLT5cbiAgICAgICR7X2lmKCF0aGlzLmlzUHJpbWl0aXZlICYmICF0aGlzLmlzQXJyYXkgJiYgIXRoaXMuaXNBbnkpYFxuICAgICAgICA8ZGl2IGNsYXNzPVwib2JqZWN0XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJ0aXRsZVwiPjxzcGFuXG4gICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1oYW5kbGVcIj48L3NwYW4+JHt0aGlzLnNjaGVtYS50aXRsZSB8fCAnJ30gPHNwYW5cbiAgICAgICAgICAgIGNsYXNzPVwib3BlbmluZyBicmFjZVwiPns8L3NwYW4+JHtfaWYodGhpcy5pc0NvbGxhcHNlZClgXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2luZyBicmFjZVwiIG5nLWlmPVwiaXNDb2xsYXBzZWRcIj59PC9zcGFuPlxuICAgICAgICAgIGB9PC9hPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCI+XG4gICAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbilgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7dGhpcy5zY2hlbWEuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgPCEtLSBjaGlsZHJlbiBnbyBoZXJlIC0tPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZW51bSlgXG4gICAgICAgICAgICAke3RoaXMuZW51bSh0aGlzLnNjaGVtYSwgdGhpcy5pc0NvbGxhcHNlZCwgdGhpcy5vcGVuKX1cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuYWxsT2YgJiYgIXRoaXMuaXNDb2xsYXBzZWQpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdhbGxPZicpfWB9XG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEub25lT2YgJiYgIXRoaXMuaXNDb2xsYXBzZWQpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdvbmVPZicpfWB9XG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuYW55T2YgJiYgIXRoaXMuaXNDb2xsYXBzZWQpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdhbnlPZicpfWB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZClgXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zaW5nIGJyYWNlXCI+fTwvc3Bhbj5cbiAgICAgICAgICBgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGB9XG5gLnJlcGxhY2UoL1xccypcXG4vZywgJ1xcbicpLnJlcGxhY2UoLyhcXDxcXCFcXC1cXC0pLisvZywgJycpLnRyaW0oKTtcbiAgfVxuXG4gIC8qXG4gICAqIFRlbXBsYXRlIGZvciBvbmVPZiwgYW55T2YgYW5kIGFsbE9mXG4gICovXG4gIHhPZihzY2hlbWEsIHR5cGUpIHtcbiAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz1cImlubmVyICR7dHlwZX1cIj5cbiAgICAgICAgPGI+JHtjb252ZXJ0WE9mKHR5cGUpfTo8L2I+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgLypcbiAgICogVGVtcGxhdGUgZm9yIGVudW1zXG4gICovXG4gIGVudW0oc2NoZW1hLCBpc0NvbGxhcHNlZCwgb3Blbikge1xuICAgIHJldHVybiBgXG4gICAgICAke19pZighaXNDb2xsYXBzZWQgJiYgc2NoZW1hLmVudW0pYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXIgZW51bXNcIj5cbiAgICAgICAgICA8Yj5FbnVtOjwvYj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgfVxuICAgIGA7XG4gIH1cblxuICAvKlxuICAgKiBUb2dnbGVzIHRoZSAnY29sbGFwc2VkJyBzdGF0ZVxuICAqL1xuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9ICF0aGlzLmlzQ29sbGFwc2VkO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvKlxuICAgKiBSZW5kZXJzIHRoZSBlbGVtZW50IGFuZCByZXR1cm5zIGl0XG4gICovXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnanNvbi1zY2hlbWEtdmlldycpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnRoZW1lKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChganNvbi1zY2hlbWEtdmlldy0ke3RoaXMub3B0aW9ucy50aGVtZX1gKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy50ZW1wbGF0ZSgpO1xuXG4gICAgaWYgKCF0aGlzLnNjaGVtYSkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaXNDb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGRyZW4odGhpcy5lbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBhZGQgZXZlbnQgbGlzdGVuZXIgZm9yIHRvZ2dsaW5nXG4gICAgaWYgKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLnRpdGxlJykpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLnRpdGxlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgfVxuXG4gIC8qXG4gICAqIEFwcGVuZHMgY2hpbGRyZW4gdG8gZ2l2ZW4gZWxlbWVudCBiYXNlZCBvbiBjdXJyZW50IHNjaGVtYVxuICAqL1xuICBhcHBlbmRDaGlsZHJlbihlbGVtZW50KSB7XG4gICAgY29uc3QgaW5uZXIgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbm5lcicpO1xuXG4gICAgaWYgKCFpbm5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNjaGVtYS5lbnVtKSB7XG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBuZXcgSlNPTkZvcm1hdHRlcih0aGlzLnNjaGVtYS5lbnVtLCB0aGlzLm9wZW4gLSAxKTtcbiAgICAgIGNvbnN0IGZvcm1hdHRlckVsID0gZm9ybWF0dGVyLnJlbmRlcigpO1xuICAgICAgZm9ybWF0dGVyRWwuY2xhc3NMaXN0LmFkZCgnaW5uZXInKTtcbiAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVudW1zLmlubmVyJykuYXBwZW5kQ2hpbGQoZm9ybWF0dGVyRWwpO1xuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNBcnJheSkge1xuICAgICAgY29uc3QgdmlldyA9IG5ldyBKU09OU2NoZW1hVmlldyh0aGlzLnNjaGVtYS5pdGVtcywgdGhpcy5vcGVuIC0gMSlcbiAgICAgIGlubmVyLmFwcGVuZENoaWxkKHZpZXcucmVuZGVyKCkpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5zY2hlbWEucHJvcGVydGllcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2gocHJvcGVydHlOYW1lID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTs7XG4gICAgICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJwcm9wZXJ0eVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7cHJvcGVydHlOYW1lfTo8L3NwYW4+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgSlNPTlNjaGVtYVZpZXcocHJvcGVydHksIHRoaXMub3BlbiAtIDEpO1xuICAgICAgICB0ZW1wRGl2LnF1ZXJ5U2VsZWN0b3IoJy5wcm9wZXJ0eScpLmFwcGVuZENoaWxkKHZpZXcucmVuZGVyKCkpO1xuXG4gICAgICAgIGlubmVyLmFwcGVuZENoaWxkKHRlbXBEaXYucXVlcnlTZWxlY3RvcignLnByb3BlcnR5JykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLmFsbE9mKSB7IGFwcGVuZFhPZi5jYWxsKHRoaXMsICdhbGxPZicpOyB9XG4gICAgaWYgKHRoaXMuc2NoZW1hLm9uZU9mKSB7IGFwcGVuZFhPZi5jYWxsKHRoaXMsICdvbmVPZicpOyB9XG4gICAgaWYgKHRoaXMuc2NoZW1hLmFueU9mKSB7IGFwcGVuZFhPZi5jYWxsKHRoaXMsICdhbnlPZicpOyB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRYT2YodHlwZSkge1xuICAgICAgY29uc3QgaW5uZXJBbGxPZiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmlubmVyLiR7dHlwZX1gKTtcblxuICAgICAgdGhpcy5zY2hlbWFbdHlwZV0uZm9yRWFjaChzY2hlbWEgPT4ge1xuICAgICAgICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbm5lci5jbGFzc0xpc3QuYWRkKCdpbm5lcicpO1xuICAgICAgICBjb25zdCB2aWV3ID0gbmV3IEpTT05TY2hlbWFWaWV3KHNjaGVtYSwgdGhpcy5vcGVuIC0gMSk7XG4gICAgICAgIGlubmVyLmFwcGVuZENoaWxkKHZpZXcucmVuZGVyKCkpO1xuICAgICAgICBpbm5lckFsbE9mLmFwcGVuZENoaWxkKGlubmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19
