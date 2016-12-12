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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9NeVdvcmtzcGFjZS9naXRtczEyX19naXRodWIvanNvbi1zY2hlbWEtdmlldy1qcy9zcmMvaGVscGVycy5qcyIsIkM6L015V29ya3NwYWNlL2dpdG1zMTJfX2dpdGh1Yi9qc29uLXNjaGVtYS12aWV3LWpzL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLFlBQVksQ0FBQzs7Ozs7Ozs7OztBQUlOLFNBQVMsVUFBVSxDQUFDLElBQUksRUFBRTtBQUMvQixTQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztDQUNyQzs7Ozs7Ozs7Ozs7OztBQVlNLFNBQVMsR0FBRyxDQUFDLFNBQVMsRUFBRTtBQUM3QixTQUFPLFNBQVMsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDO0NBQ25DOztBQUNELFNBQVMsS0FBSyxHQUFFO0FBQ2QsU0FBTyxFQUFFLENBQUM7Q0FDWDtBQUNELFNBQVMsTUFBTSxDQUFFLFFBQVEsRUFBa0I7b0NBQWIsV0FBVztBQUFYLGVBQVc7OztBQUN2QyxTQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUs7QUFDeEQsV0FBTyxXQUFXLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztHQUM1QyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ2pCOzs7QUM1QkQsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQU9OLGNBQWM7Ozs7Ozs7O0lBUUEsY0FBYzs7Ozs7Ozs7Ozs7O0FBV3RCLFdBWFEsY0FBYyxDQVdyQixNQUFNLEVBQUUsSUFBSSxFQUEyQjs7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b0JBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLG9CQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUcvRCxvQkFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsb0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBRy9ELG9CQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBR3hELG9CQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxRQUFLLENBQUMsb0JBQ3hDLElBQUksUUFBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBR3JELG9CQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQzVFLG9CQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQzVFLG9CQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLDRDQU1oRixvQkFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUV1QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQXlDLG9CQUFJLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQ3pJLG9CQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQSxBQUFDLENBQUMsb0JBRXRFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxHQUFHLEVBQ3BGLG9CQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxzQkFJakQsb0JBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLG9CQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FJcEQsb0JBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLFFBQUssQ0FBQyxvQkFDeEMsSUFBSSxRQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FHckQsb0JBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FDNUUsb0JBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FDNUUsb0JBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FFNUUsb0JBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLDZEQU8xQixvQkFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFHbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxFQUN0QixvQkFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUtuRCxvQkFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsb0JBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUtwRCxvQkFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLE1BQU0sUUFBSyxDQUFDLG9CQUN4QyxJQUFJLFFBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUdyRCxvQkFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUM1RSxvQkFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUM1RSxvQkFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUU1RSxvQkFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsNkJBS2hDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUMzRDs7Ozs7OztXQUtFLGFBQUMsTUFBTSxFQUFFLElBQUksRUFBRTtBQUNoQiw0Q0FDc0IsSUFBSSx1QkFDakIsMkJBQVcsSUFBSSxDQUFDLCtCQUV2QjtLQUNIOzs7Ozs7O1dBS0csZUFBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtBQUM5QiwwQkFDSSxvQkFBSSxDQUFDLFdBQVcsSUFBSSxNQUFNLFFBQUssQ0FBQywrQkFLbEM7S0FDSDs7Ozs7OztXQUtLLGtCQUFHO0FBQ1AsVUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDckMsVUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2Y7Ozs7Ozs7V0FLSyxrQkFBRztBQUNQLFVBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2pCLFlBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM3QyxZQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztPQUNoRDs7QUFFRCxVQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDcEIsWUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO09BQ3pDLE1BQU07QUFDTCxZQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDNUM7O0FBRUQsVUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtBQUN0QixZQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLHVCQUFxQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBRyxDQUFDO09BQ3RFOztBQUVELFVBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7QUFFekMsVUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDaEIsZUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDO09BQ3JCOztBQUVELFVBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ3JCLFlBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO09BQ25DOzs7QUFHRCxVQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFO0FBQ3pDLFlBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO09BQ3pGO0FBQ0QsYUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0tBQ3JCOzs7Ozs7O1dBS2Esd0JBQUMsT0FBTyxFQUFFOzs7QUFDdEIsVUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFOUMsVUFBSSxDQUFDLEtBQUssRUFBRTtBQUNWLGVBQU87T0FDUjs7QUFFRCxVQUFJLElBQUksQ0FBQyxNQUFNLFFBQUssRUFBRTtBQUNwQixZQUFNLFNBQVMsR0FBRyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxRQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyRSxZQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDdkMsbUJBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25DLGVBQU8sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO09BRWhFOztBQUVELFVBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNoQixZQUFNLElBQUksR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ2pFLGFBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7T0FDbEM7O0FBRUQsVUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxLQUFLLFFBQVEsRUFBRTtBQUM5QyxjQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsWUFBWSxFQUFJO0FBQzFELGNBQU0sUUFBUSxHQUFHLE9BQUssTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0RCxjQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDL0MsaUJBQU8sQ0FBQyxTQUFTLDZEQUNNLFlBQVksNkJBQzVCLENBQUM7QUFDUixjQUFNLElBQUksR0FBRyxJQUFJLGNBQWMsQ0FBQyxRQUFRLEVBQUUsT0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDekQsaUJBQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDOztBQUU5RCxlQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUN2RCxDQUFDLENBQUM7T0FDSjs7QUFFRCxVQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO0FBQUUsaUJBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQUU7QUFDekQsVUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtBQUFFLGlCQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztPQUFFO0FBQ3pELFVBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7T0FBRTs7QUFFekQsZUFBUyxTQUFTLENBQUMsSUFBSSxFQUFFOzs7QUFDdkIsWUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQWEsYUFBVyxJQUFJLENBQUcsQ0FBQzs7QUFFM0QsWUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDbEMsY0FBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1QyxlQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixjQUFNLElBQUksR0FBRyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkQsZUFBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNqQyxvQkFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQixDQUFDLENBQUM7T0FDSjtLQUNGOzs7U0F4VWtCLGNBQWM7OztxQkFBZCxjQUFjIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcclxuLypcclxuICogQ29udmVydHMgYW55T2YsIGFsbE9mIGFuZCBvbmVPZiB0byBodW1hbiByZWFkYWJsZSBzdHJpbmdcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRYT2YodHlwZSkge1xyXG4gIHJldHVybiB0eXBlLnN1YnN0cmluZygwLCAzKSArICcgb2YnO1xyXG59XHJcblxyXG4vKlxyXG4gKiBpZiBjb25kaXRpb24gZm9yIEVTNiB0ZW1wbGF0ZSBzdHJpbmdzXHJcbiAqIHRvIGJlIHVzZWQgb25seSBpbiB0ZW1wbGF0ZSBzdHJpbmdcclxuICpcclxuICogQGV4YW1wbGUgbXlzdHIgPSBgUmFuZG9tIGlzICR7X2lmKE1hdGgucmFuZG9tKCkgPiAwLjUpYGdyZWF0ZXIgdGhhbiAwLjVgYFxyXG4gKlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNvbmRpdGlvblxyXG4gKlxyXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IHRoZSB0ZW1wbGF0ZSBmdW5jdGlvblxyXG4qL1xyXG5leHBvcnQgZnVuY3Rpb24gX2lmKGNvbmRpdGlvbikge1xyXG4gIHJldHVybiBjb25kaXRpb24gPyBub3JtYWwgOiBlbXB0eTtcclxufVxyXG5mdW5jdGlvbiBlbXB0eSgpe1xyXG4gIHJldHVybiAnJztcclxufVxyXG5mdW5jdGlvbiBub3JtYWwgKHRlbXBsYXRlLCAuLi5leHByZXNzaW9ucykge1xyXG4gIHJldHVybiB0ZW1wbGF0ZS5zbGljZSgxKS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBwYXJ0LCBpKSA9PiB7XHJcbiAgICByZXR1cm4gYWNjdW11bGF0b3IgKyBleHByZXNzaW9uc1tpXSArIHBhcnQ7XHJcbiAgfSwgdGVtcGxhdGVbMF0pO1xyXG59IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyogZ2xvYmFscyBKU09OU2NoZW1hVmlldyAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBjb252ZXJ0WE9mLFxyXG4gIF9pZlxyXG59IGZyb20gJy4vaGVscGVycy5qcyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEBjbGFzcyBKU09OU2NoZW1hVmlld1xyXG4gKlxyXG4gKiBBIHB1cmUgSmF2YVNjcmlwdCBjb21wb25lbnQgZm9yIHJlbmRlcmluZyBKU09OIFNjaGVtYSBpbiBIVE1MLlxyXG4qL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKU09OU2NoZW1hVmlldyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzY2hlbWEgVGhlIEpTT04gU2NoZW1hIG9iamVjdFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcGVuPTFdIGhpcyBudW1iZXIgaW5kaWNhdGVzIHVwIHRvIGhvdyBtYW55IGxldmVscyB0aGVcclxuICAgKiByZW5kZXJlZCB0cmVlIHNob3VsZCBleHBhbmQuIFNldCBpdCB0byBgMGAgdG8gbWFrZSB0aGUgd2hvbGUgdHJlZSBjb2xsYXBzZWRcclxuICAgKiBvciBzZXQgaXQgdG8gYEluZmluaXR5YCB0byBleHBhbmQgdGhlIHRyZWUgZGVlcGx5XHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuXHJcbiAgICogIHRoZW1lIHtzdHJpbmd9OiBvbmUgb2YgdGhlIGZvbGxvd2luZyBvcHRpb25zOiBbJ2RhcmsnXVxyXG4gICovXHJcbiAgY29uc3RydWN0b3Ioc2NoZW1hLCBvcGVuLCBvcHRpb25zID0ge3RoZW1lOiBudWxsfSkge1xyXG4gICAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XHJcbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSBvcGVuIDw9IDA7XHJcblxyXG4gICAgLy8gaWYgc2NoZW1hIGlzIGFuIGVtcHR5IG9iamVjdCB3aGljaCBtZWFucyBhbnkgSk9TTlxyXG4gICAgdGhpcy5pc0FueSA9IHR5cGVvZiBzY2hlbWEgPT09ICdvYmplY3QnICYmXHJcbiAgICAgICFBcnJheS5pc0FycmF5KHNjaGVtYSkgJiZcclxuICAgICAgIU9iamVjdC5rZXlzKHNjaGVtYSlcclxuICAgICAgLmZpbHRlcihrPT4gWyd0aXRsZScsICdkZXNjcmlwdGlvbiddLmluZGV4T2YoaykgPT09IC0xKS5sZW5ndGg7XHJcblxyXG4gICAgLy8gRGV0ZXJtaW5lIGlmIGEgc2NoZW1hIGlzIGFuIGFycmF5XHJcbiAgICB0aGlzLmlzQXJyYXkgPSAhdGhpcy5pc0FueSAmJiB0aGlzLnNjaGVtYSAmJiB0aGlzLnNjaGVtYS50eXBlID09PSAnYXJyYXknO1xyXG5cclxuICAgIHRoaXMuaXNPYmplY3QgPSB0aGlzLnNjaGVtYSAmJlxyXG4gICAgICAodGhpcy5zY2hlbWEudHlwZSA9PT0gJ29iamVjdCcgfHxcclxuICAgICAgIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgfHxcclxuICAgICAgIHRoaXMuc2NoZW1hLmFueU9mIHx8XHJcbiAgICAgICB0aGlzLnNjaGVtYS5vbmVvZiB8fFxyXG4gICAgICAgdGhpcy5zY2hlbWEuYWxsT2YpO1xyXG5cclxuICAgIC8vIERldGVybWluZSBpZiBhIHNjaGVtYSBpcyBhIHByaW1pdGl2ZVxyXG4gICAgdGhpcy5pc1ByaW1pdGl2ZSA9ICF0aGlzLmlzQW55ICYmICF0aGlzLmlzQXJyYXkgJiYgIXRoaXMuaXNPYmplY3Q7XHJcblxyXG4gICAgLy9cclxuICAgIHRoaXMuc2hvd1RvZ2dsZSA9IHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uIHx8XHJcbiAgICAgIHRoaXMuc2NoZW1hLnRpdGxlIHx8XHJcbiAgICAgICh0aGlzLmlzUHJpbWl0aXZlICYmIChcclxuICAgICAgICB0aGlzLnNjaGVtYS5taW5pbXVtIHx8XHJcbiAgICAgICAgdGhpcy5zY2hlbWEubWF4aW11bSB8fFxyXG4gICAgICAgIHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gfHxcclxuICAgICAgICB0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIHx8XHJcbiAgICAgICAgdGhpcy5zY2hlbWEuZm9ybWF0IHx8ICAgICAgICBcclxuICAgICAgICB0aGlzLnNjaGVtYS5kZWZhdWx0IHx8XHJcbiAgICAgICAgdGhpcy5zY2hlbWEubWluTGVuZ3RoIHx8XHJcbiAgICAgICAgdGhpcy5zY2hlbWEubWF4TGVuZ3RoIHx8XHJcbiAgICAgICAgdGhpcy5zY2hlbWEuZW51bSlcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBwb3B1bGF0ZSBpc1JlcXVpcmVkIHByb3BlcnR5IGRvd24gdG8gcHJvcGVydGllc1xyXG4gICAgaWYgKHRoaXMuc2NoZW1hICYmIEFycmF5LmlzQXJyYXkodGhpcy5zY2hlbWEucmVxdWlyZWQpKSB7XHJcbiAgICAgIHRoaXMuc2NoZW1hLnJlcXVpcmVkLmZvckVhY2gocmVxdWlyZWRQcm9wZXJ0eSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3JlcXVpcmVkUHJvcGVydHldID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgdGhpcy5zY2hlbWEucHJvcGVydGllc1tyZXF1aXJlZFByb3BlcnR5XS5pc1JlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBSZXR1cm5zIHRoZSB0ZW1wbGF0ZSB3aXRoIHBvcHVsYXRlZCBwcm9wZXJ0aWVzLlxyXG4gICAqIFRoaXMgdGVtcGxhdGUgZG9lcyBub3QgaGF2ZSB0aGUgY2hpbGRyZW5cclxuICAqL1xyXG4gIHRlbXBsYXRlKCkge1xyXG4gICAgaWYgKCF0aGlzLnNjaGVtYSkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGBcclxuICAgICAgPCEtLSBBbnkgLS0+XHJcbiAgICAgICR7X2lmKHRoaXMuaXNBbnkpYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnlcIj5cclxuICAgICAgICAgICR7X2lmKHRoaXMuc2hvd1RvZ2dsZSlgXHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGVcIj48c3BhbiBjbGFzcz1cInRvZ2dsZS1oYW5kbGVcIj48L3NwYW4+JHt0aGlzLnNjaGVtYS50aXRsZSB8fCAnJ30gPC9hPlxyXG4gICAgICAgICAgYH1cclxuXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInR5cGUgdHlwZS1hbnlcIj4mbHQ7YW55Jmd0Ozwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lciBkZXNjcmlwdGlvblwiPiR7dGhpcy5zY2hlbWEuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgfVxyXG5cclxuICAgICAgPCEtLSBQcmltaXRpdmUgLS0+XHJcbiAgICAgICR7X2lmKHRoaXMuaXNQcmltaXRpdmUpYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmltaXRpdmVcIj5cclxuICAgICAgICAgICR7X2lmKHRoaXMuc2hvd1RvZ2dsZSlgXHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGVcIj48c3BhbiBjbGFzcz1cInRvZ2dsZS1oYW5kbGVcIj48L3NwYW4+JHt0aGlzLnNjaGVtYS50aXRsZSB8fCAnJ30gPC9hPlxyXG4gICAgICAgICAgYH1cclxuXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHlwZVwiPiR7dGhpcy5zY2hlbWEudHlwZX08L3NwYW4+XHJcblxyXG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuaXNSZXF1aXJlZClgXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmVxdWlyZWRcIj4qPC9zcGFuPlxyXG4gICAgICAgICAgYH1cclxuXHJcbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5mb3JtYXQpYFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm1hdFwiPigke3RoaXMuc2NoZW1hLmZvcm1hdH0pPC9zcGFuPlxyXG4gICAgICAgICAgYH1cclxuXHJcbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5kZWZhdWx0KWBcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZWZhdWx0XCI+ZGVmYXVsdDogJHt0aGlzLnNjaGVtYS5kZWZhdWx0fTwvc3Bhbj5cclxuICAgICAgICAgIGB9IFxyXG5cclxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLm1pbmltdW0pYFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIG1pbmltdW1cIj5taW5pbXVtOiR7dGhpcy5zY2hlbWEubWluaW11bX08L3NwYW4+XHJcbiAgICAgICAgICBgfVxyXG5cclxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pYFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIGV4Y2x1c2l2ZU1pbmltdW1cIj4oZXgpbWluaW11bToke3RoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW19PC9zcGFuPlxyXG4gICAgICAgICAgYH1cclxuXHJcbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5tYXhpbXVtKWBcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBtYXhpbXVtXCI+bWF4aW11bToke3RoaXMuc2NoZW1hLm1heGltdW19PC9zcGFuPlxyXG4gICAgICAgICAgYH1cclxuXHJcbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKWBcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBleGNsdXNpdmVNYXhpbXVtXCI+KGV4KW1heGltdW06JHt0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtfTwvc3Bhbj5cclxuICAgICAgICAgIGB9XHJcblxyXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEubWluTGVuZ3RoKWBcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBtaW5MZW5ndGhcIj5taW5MZW5ndGg6JHt0aGlzLnNjaGVtYS5taW5MZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgYH1cclxuXHJcbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5tYXhMZW5ndGgpYFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIG1heExlbmd0aFwiPm1heExlbmd0aDoke3RoaXMuc2NoZW1hLm1heExlbmd0aH08L3NwYW4+XHJcbiAgICAgICAgICBgfVxyXG5cclxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmRlc2NyaXB0aW9uICYmICF0aGlzLmlzQ29sbGFwc2VkKWBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyIGRlc2NyaXB0aW9uXCI+JHt0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgIGB9XHJcblxyXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZW51bSlgXHJcbiAgICAgICAgICAgICR7dGhpcy5lbnVtKHRoaXMuc2NoZW1hLCB0aGlzLmlzQ29sbGFwc2VkLCB0aGlzLm9wZW4pfVxyXG4gICAgICAgICAgYH1cclxuXHJcbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbGxPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FsbE9mJyl9YH1cclxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLm9uZU9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnb25lT2YnKX1gfVxyXG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuYW55T2YgJiYgIXRoaXMuaXNDb2xsYXBzZWQpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdhbnlPZicpfWB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIGB9XHJcblxyXG5cclxuICAgICAgPCEtLSBBcnJheSAtLT5cclxuICAgICAgJHtfaWYodGhpcy5pc0FycmF5KWBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXJyYXlcIj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGVcIj48c3BhbiBjbGFzcz1cInRvZ2dsZS1oYW5kbGVcIj48L3NwYW4+JHt0aGlzLnNjaGVtYS50aXRsZSB8fCAnJ308c3BhbiBjbGFzcz1cIm9wZW5pbmcgYnJhY2tldFwiPls8L3NwYW4+JHtfaWYodGhpcy5pc0NvbGxhcHNlZClgPHNwYW4gY2xhc3M9XCJjbG9zaW5nIGJyYWNrZXRcIj5dPC9zcGFuPmB9PC9hPlxyXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgKHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zIHx8IHRoaXMuc2NoZW1hLm1pbkl0ZW1zIHx8IHRoaXMuc2NoZW1hLm1heEl0ZW1zKSlgXHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJpdGVtcyByYW5nZVwiPigke3RoaXMuc2NoZW1hLm1pbkl0ZW1zIHx8IDB9Li4ke3RoaXMuc2NoZW1hLm1heEl0ZW1zIHx8ICfiiJ4nfSk8L3NwYW4+XHJcbiAgICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLnVuaXF1ZUl0ZW1zKWA8c3BhbiB0aXRsZT1cInVuaXF1ZVwiIGNsYXNzPVwidW5pcXVlSXRlbXNcIj7imaY8L3NwYW4+YH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cclxuICAgICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pYFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7dGhpcy5zY2hlbWEuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5lbnVtKWBcclxuICAgICAgICAgICAgJHt0aGlzLmVudW0odGhpcy5zY2hlbWEsIHRoaXMuaXNDb2xsYXBzZWQsIHRoaXMub3Blbil9XHJcbiAgICAgICAgICBgfVxyXG5cclxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmFsbE9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnYWxsT2YnKX1gfVxyXG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEub25lT2YgJiYgIXRoaXMuaXNDb2xsYXBzZWQpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdvbmVPZicpfWB9XHJcbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbnlPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FueU9mJyl9YH1cclxuXHJcbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZClgXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NpbmcgYnJhY2tldFwiPl08L3NwYW4+XHJcbiAgICAgICAgICBgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgfVxyXG5cclxuICAgICAgPCEtLSBPYmplY3QgLS0+XHJcbiAgICAgICR7X2lmKCF0aGlzLmlzUHJpbWl0aXZlICYmICF0aGlzLmlzQXJyYXkgJiYgIXRoaXMuaXNBbnkpYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJvYmplY3RcIj5cclxuICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGVcIj48c3BhblxyXG4gICAgICAgICAgICBjbGFzcz1cInRvZ2dsZS1oYW5kbGVcIj48L3NwYW4+JHt0aGlzLnNjaGVtYS50aXRsZSB8fCAnJ30gPHNwYW5cclxuICAgICAgICAgICAgY2xhc3M9XCJvcGVuaW5nIGJyYWNlXCI+ezwvc3Bhbj4ke19pZih0aGlzLmlzQ29sbGFwc2VkKWBcclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NpbmcgYnJhY2VcIiBuZy1pZj1cImlzQ29sbGFwc2VkXCI+fTwvc3Bhbj5cclxuICAgICAgICAgIGB9PC9hPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbilgXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+JHt0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPCEtLSBjaGlsZHJlbiBnbyBoZXJlIC0tPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZW51bSlgXHJcbiAgICAgICAgICAgICR7dGhpcy5lbnVtKHRoaXMuc2NoZW1hLCB0aGlzLmlzQ29sbGFwc2VkLCB0aGlzLm9wZW4pfVxyXG4gICAgICAgICAgYH1cclxuXHJcbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbGxPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FsbE9mJyl9YH1cclxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLm9uZU9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnb25lT2YnKX1gfVxyXG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuYW55T2YgJiYgIXRoaXMuaXNDb2xsYXBzZWQpYCR7dGhpcy54T2YodGhpcy5zY2hlbWEsICdhbnlPZicpfWB9XHJcblxyXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQpYFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zaW5nIGJyYWNlXCI+fTwvc3Bhbj5cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIGB9XHJcbmAucmVwbGFjZSgvXFxzKlxcbi9nLCAnXFxuJykucmVwbGFjZSgvKFxcPFxcIVxcLVxcLSkuKy9nLCAnJykudHJpbSgpO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBUZW1wbGF0ZSBmb3Igb25lT2YsIGFueU9mIGFuZCBhbGxPZlxyXG4gICovXHJcbiAgeE9mKHNjaGVtYSwgdHlwZSkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgPGRpdiBjbGFzcz1cImlubmVyICR7dHlwZX1cIj5cclxuICAgICAgICA8Yj4ke2NvbnZlcnRYT2YodHlwZSl9OjwvYj5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gIH1cclxuXHJcbiAgLypcclxuICAgKiBUZW1wbGF0ZSBmb3IgZW51bXNcclxuICAqL1xyXG4gIGVudW0oc2NoZW1hLCBpc0NvbGxhcHNlZCwgb3Blbikge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgJHtfaWYoIWlzQ29sbGFwc2VkICYmIHNjaGVtYS5lbnVtKWBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXIgZW51bXNcIj5cclxuICAgICAgICAgIDxiPkVudW06PC9iPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgfVxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogVG9nZ2xlcyB0aGUgJ2NvbGxhcHNlZCcgc3RhdGVcclxuICAqL1xyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSAhdGhpcy5pc0NvbGxhcHNlZDtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICAvKlxyXG4gICAqIFJlbmRlcnMgdGhlIGVsZW1lbnQgYW5kIHJldHVybnMgaXRcclxuICAqL1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICghdGhpcy5lbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnanNvbi1zY2hlbWEtdmlldycpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5vcHRpb25zLnRoZW1lKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBqc29uLXNjaGVtYS12aWV3LSR7dGhpcy5vcHRpb25zLnRoZW1lfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlKCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLnNjaGVtYSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5pc0NvbGxhcHNlZCkge1xyXG4gICAgICB0aGlzLmFwcGVuZENoaWxkcmVuKHRoaXMuZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIGZvciB0b2dnbGluZ1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdhLnRpdGxlJykpIHtcclxuICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EudGl0bGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogQXBwZW5kcyBjaGlsZHJlbiB0byBnaXZlbiBlbGVtZW50IGJhc2VkIG9uIGN1cnJlbnQgc2NoZW1hXHJcbiAgKi9cclxuICBhcHBlbmRDaGlsZHJlbihlbGVtZW50KSB7XHJcbiAgICBjb25zdCBpbm5lciA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmlubmVyJyk7XHJcblxyXG4gICAgaWYgKCFpbm5lcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2NoZW1hLmVudW0pIHtcclxuICAgICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEpTT05Gb3JtYXR0ZXIodGhpcy5zY2hlbWEuZW51bSwgdGhpcy5vcGVuIC0gMSk7XHJcbiAgICAgIGNvbnN0IGZvcm1hdHRlckVsID0gZm9ybWF0dGVyLnJlbmRlcigpO1xyXG4gICAgICBmb3JtYXR0ZXJFbC5jbGFzc0xpc3QuYWRkKCdpbm5lcicpO1xyXG4gICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnVtcy5pbm5lcicpLmFwcGVuZENoaWxkKGZvcm1hdHRlckVsKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNBcnJheSkge1xyXG4gICAgICBjb25zdCB2aWV3ID0gbmV3IEpTT05TY2hlbWFWaWV3KHRoaXMuc2NoZW1hLml0ZW1zLCB0aGlzLm9wZW4gLSAxKVxyXG4gICAgICBpbm5lci5hcHBlbmRDaGlsZCh2aWV3LnJlbmRlcigpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2gocHJvcGVydHlOYW1lID0+IHtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcclxuICAgICAgICBjb25zdCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7O1xyXG4gICAgICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJwcm9wZXJ0eVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+JHtwcm9wZXJ0eU5hbWV9Ojwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgSlNPTlNjaGVtYVZpZXcocHJvcGVydHksIHRoaXMub3BlbiAtIDEpO1xyXG4gICAgICAgIHRlbXBEaXYucXVlcnlTZWxlY3RvcignLnByb3BlcnR5JykuYXBwZW5kQ2hpbGQodmlldy5yZW5kZXIoKSk7XHJcblxyXG4gICAgICAgIGlubmVyLmFwcGVuZENoaWxkKHRlbXBEaXYucXVlcnlTZWxlY3RvcignLnByb3BlcnR5JykpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zY2hlbWEuYWxsT2YpIHsgYXBwZW5kWE9mLmNhbGwodGhpcywgJ2FsbE9mJyk7IH1cclxuICAgIGlmICh0aGlzLnNjaGVtYS5vbmVPZikgeyBhcHBlbmRYT2YuY2FsbCh0aGlzLCAnb25lT2YnKTsgfVxyXG4gICAgaWYgKHRoaXMuc2NoZW1hLmFueU9mKSB7IGFwcGVuZFhPZi5jYWxsKHRoaXMsICdhbnlPZicpOyB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXBwZW5kWE9mKHR5cGUpIHtcclxuICAgICAgY29uc3QgaW5uZXJBbGxPZiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmlubmVyLiR7dHlwZX1gKTtcclxuXHJcbiAgICAgIHRoaXMuc2NoZW1hW3R5cGVdLmZvckVhY2goc2NoZW1hID0+IHtcclxuICAgICAgICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGlubmVyLmNsYXNzTGlzdC5hZGQoJ2lubmVyJyk7XHJcbiAgICAgICAgY29uc3QgdmlldyA9IG5ldyBKU09OU2NoZW1hVmlldyhzY2hlbWEsIHRoaXMub3BlbiAtIDEpO1xyXG4gICAgICAgIGlubmVyLmFwcGVuZENoaWxkKHZpZXcucmVuZGVyKCkpO1xyXG4gICAgICAgIGlubmVyQWxsT2YuYXBwZW5kQ2hpbGQoaW5uZXIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
