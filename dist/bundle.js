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
    _templateObject25 = _taggedTemplateLiteral(['\n        <div class="collectionOfTypes">\n          <a class="title"><span class="toggle-handle"></span>', '</a>\n          <span class="type">', '</span>\n          <div class="inner">\n            ', '\n             <!-- children go here -->\n          </div>\n        </div>\n      '], ['\n        <div class="collectionOfTypes">\n          <a class="title"><span class="toggle-handle"></span>', '</a>\n          <span class="type">', '</span>\n          <div class="inner">\n            ', '\n             <!-- children go here -->\n          </div>\n        </div>\n      ']),
    _templateObject26 = _taggedTemplateLiteral(['\n        <div class="inner enums">\n          <b>Enum:</b>\n        </div>\n      '], ['\n        <div class="inner enums">\n          <b>Enum:</b>\n        </div>\n      ']);

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

    // Guard against empty schemas
    if (!this.schema) return '';

    // if schema is an empty object which means any JOSN
    this.isAny = typeof schema === 'object' && !Array.isArray(schema) && !Object.keys(schema).filter(function (k) {
      return ['title', 'description'].indexOf(k) === -1;
    }).length;

    // Determine if a schema is an array
    this.isArray = !this.isAny && this.schema && this.schema.type === 'array';

    // Determine if a schema is a collection of types (an Array with at least one object in it)
    this.isCollectionOfTypes = this.schema && Array.isArray(this.schema.type) && this.schema.type.reduce(function (item) {
      return typeof item === 'object';
    });

    this.isObject = this.schema && (this.schema.type === 'object' || this.schema.properties || this.schema.anyOf || this.schema.oneof || this.schema.allOf);

    // Determine if a schema is a primitive
    this.isPrimitive = !this.isAny && !this.isArray && !this.isObject && !this.isCollectionOfTypes;

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

    // Create a list of types as a string for Collections of types
    if (this.isCollectionOfTypes) {
      this.typeList = this.schema.type.reduce(function (prev, curr) {
        return prev.type + ', ' + curr.type;
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

      return ('\n      <!-- Any -->\n      ' + (0, _helpersJs._if)(this.isAny)(_templateObject, (0, _helpersJs._if)(this.showToggle)(_templateObject2, this.schema.title || ''), (0, _helpersJs._if)(this.schema.description && !this.isCollapsed)(_templateObject3, this.schema.description)) + '\n\n      <!-- Primitive -->\n      ' + (0, _helpersJs._if)(this.isPrimitive)(_templateObject4, (0, _helpersJs._if)(this.showToggle)(_templateObject2, this.schema.title || ''), this.schema.type, (0, _helpersJs._if)(this.schema.isRequired)(_templateObject5), (0, _helpersJs._if)(!this.isCollapsed && this.schema.format)(_templateObject6, this.schema.format), (0, _helpersJs._if)(!this.isCollapsed && this.schema['default'])(_templateObject7, this.schema['default']), (0, _helpersJs._if)(!this.isCollapsed && this.schema.minimum)(_templateObject8, this.schema.minimum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.exclusiveMinimum)(_templateObject9, this.schema.exclusiveMinimum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.maximum)(_templateObject10, this.schema.maximum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.exclusiveMaximum)(_templateObject11, this.schema.exclusiveMaximum), (0, _helpersJs._if)(!this.isCollapsed && this.schema.minLength)(_templateObject12, this.schema.minLength), (0, _helpersJs._if)(!this.isCollapsed && this.schema.maxLength)(_templateObject13, this.schema.maxLength), (0, _helpersJs._if)(this.schema.description && !this.isCollapsed)(_templateObject3, this.schema.description), (0, _helpersJs._if)(!this.isCollapsed && this.schema['enum'])(_templateObject14, this['enum'](this.schema, this.isCollapsed, this.open)), (0, _helpersJs._if)(this.schema.allOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'allOf')), (0, _helpersJs._if)(this.schema.oneOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'oneOf')), (0, _helpersJs._if)(this.schema.anyOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'anyOf'))) + '\n\n\n      <!-- Array -->\n      ' + (0, _helpersJs._if)(this.isArray)(_templateObject16, this.schema.title || '', (0, _helpersJs._if)(this.isCollapsed)(_templateObject17), (0, _helpersJs._if)(!this.isCollapsed && (this.schema.uniqueItems || this.schema.minItems || this.schema.maxItems))(_templateObject18, this.schema.minItems || 0, this.schema.maxItems || '∞', (0, _helpersJs._if)(!this.isCollapsed && this.schema.uniqueItems)(_templateObject19)), (0, _helpersJs._if)(!this.isCollapsed && this.schema.description)(_templateObject20, this.schema.description), (0, _helpersJs._if)(!this.isCollapsed && this.schema['enum'])(_templateObject14, this['enum'](this.schema, this.isCollapsed, this.open)), (0, _helpersJs._if)(this.schema.allOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'allOf')), (0, _helpersJs._if)(this.schema.oneOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'oneOf')), (0, _helpersJs._if)(this.schema.anyOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'anyOf')), (0, _helpersJs._if)(!this.isCollapsed)(_templateObject21)) + '\n\n      <!-- Object -->\n      ' + (0, _helpersJs._if)(!this.isPrimitive && !this.isArray && !this.isAny && !this.isCollectionOfTypes)(_templateObject22, this.schema.title || '', (0, _helpersJs._if)(this.isCollapsed)(_templateObject23), (0, _helpersJs._if)(!this.isCollapsed && this.schema.description)(_templateObject20, this.schema.description), (0, _helpersJs._if)(!this.isCollapsed && this.schema['enum'])(_templateObject14, this['enum'](this.schema, this.isCollapsed, this.open)), (0, _helpersJs._if)(this.schema.allOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'allOf')), (0, _helpersJs._if)(this.schema.oneOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'oneOf')), (0, _helpersJs._if)(this.schema.anyOf && !this.isCollapsed)(_templateObject15, this.xOf(this.schema, 'anyOf')), (0, _helpersJs._if)(!this.isCollapsed)(_templateObject24)) + '\n\n      <!-- Type Array -->\n      ' + (0, _helpersJs._if)(this.isCollectionOfTypes)(_templateObject25, this.schema.title || '', this.typeList, (0, _helpersJs._if)(this.schema.description && !this.isCollapsed)(_templateObject20, this.schema.description)) + '\n').replace(/\s*\n/g, '\n').replace(/(\<\!\-\-).+/g, '').trim();
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
        var formatter = new JSONFormatter(this.schema['enum'], this.open - 1);
        var formatterEl = formatter.render();
        formatterEl.classList.add('inner');
        element.querySelector('.enums.inner').appendChild(formatterEl);
      }

      if (this.isArray) {
        var view = new JSONSchemaView(this.schema.items, this.open - 1);
        inner.appendChild(view.render());
      }

      if (this.isCollectionOfTypes) {
        (function () {
          var openLevel = _this2.open - 1;
          _this2.schema.type.forEach(function (type) {
            var view = new JSONSchemaView(type, openLevel);
            inner.appendChild(view.render());
          });
        })();
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbnJvYmlzb25jb3gvY29kZS9qc29uLXNjaGVtYS12aWV3LWpzL3NyYy9oZWxwZXJzLmpzIiwiL1VzZXJzL25yb2Jpc29uY294L2NvZGUvanNvbi1zY2hlbWEtdmlldy1qcy9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7QUFJTixTQUFTLFVBQVUsQ0FBQyxJQUFJLEVBQUU7QUFDL0IsU0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7Q0FDckM7Ozs7Ozs7Ozs7Ozs7QUFZTSxTQUFTLEdBQUcsQ0FBQyxTQUFTLEVBQUU7QUFDN0IsU0FBTyxTQUFTLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQztDQUNuQzs7QUFDRCxTQUFTLEtBQUssR0FBRTtBQUNkLFNBQU8sRUFBRSxDQUFDO0NBQ1g7QUFDRCxTQUFTLE1BQU0sQ0FBRSxRQUFRLEVBQWtCO29DQUFiLFdBQVc7QUFBWCxlQUFXOzs7QUFDdkMsU0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFLO0FBQ3hELFdBQU8sV0FBVyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7R0FDNUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNqQjs7O0FDNUJELFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBT04sY0FBYzs7Ozs7Ozs7SUFRQSxjQUFjOzs7Ozs7Ozs7Ozs7QUFXdEIsV0FYUSxjQUFjLENBV3JCLE1BQU0sRUFBRSxJQUFJLEVBQTJCOzs7UUFBekIsT0FBTyx5REFBRyxFQUFDLEtBQUssRUFBRSxJQUFJ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QyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQzVFLG9CQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQzVFLG9CQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLDRDQU1oRixvQkFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUV1QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQXlDLG9CQUFJLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQ3pJLG9CQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQSxBQUFDLENBQUMsb0JBRXRFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBSyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxHQUFHLEVBQ3BGLG9CQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxzQkFJakQsb0JBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLG9CQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FJcEQsb0JBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLFFBQUss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QUFFO0FBQ3pELFVBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFBRSxpQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7T0FBRTs7QUFFekQsZUFBUyxTQUFTLENBQUMsSUFBSSxFQUFFOzs7QUFDdkIsWUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQWEsYUFBVyxJQUFJLENBQUcsQ0FBQzs7QUFFM0QsWUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDbEMsY0FBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1QyxlQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM3QixjQUFNLElBQUksR0FBRyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDdkQsZUFBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNqQyxvQkFBVSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQixDQUFDLENBQUM7T0FDSjtLQUNGOzs7U0E5V2tCLGNBQWM7OztxQkFBZCxjQUFjIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0Jztcbi8qXG4gKiBDb252ZXJ0cyBhbnlPZiwgYWxsT2YgYW5kIG9uZU9mIHRvIGh1bWFuIHJlYWRhYmxlIHN0cmluZ1xuKi9cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0WE9mKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuc3Vic3RyaW5nKDAsIDMpICsgJyBvZic7XG59XG5cbi8qXG4gKiBpZiBjb25kaXRpb24gZm9yIEVTNiB0ZW1wbGF0ZSBzdHJpbmdzXG4gKiB0byBiZSB1c2VkIG9ubHkgaW4gdGVtcGxhdGUgc3RyaW5nXG4gKlxuICogQGV4YW1wbGUgbXlzdHIgPSBgUmFuZG9tIGlzICR7X2lmKE1hdGgucmFuZG9tKCkgPiAwLjUpYGdyZWF0ZXIgdGhhbiAwLjVgYFxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gY29uZGl0aW9uXG4gKlxuICogQHJldHVybnMge2Z1bmN0aW9ufSB0aGUgdGVtcGxhdGUgZnVuY3Rpb25cbiovXG5leHBvcnQgZnVuY3Rpb24gX2lmKGNvbmRpdGlvbikge1xuICByZXR1cm4gY29uZGl0aW9uID8gbm9ybWFsIDogZW1wdHk7XG59XG5mdW5jdGlvbiBlbXB0eSgpe1xuICByZXR1cm4gJyc7XG59XG5mdW5jdGlvbiBub3JtYWwgKHRlbXBsYXRlLCAuLi5leHByZXNzaW9ucykge1xuICByZXR1cm4gdGVtcGxhdGUuc2xpY2UoMSkucmVkdWNlKChhY2N1bXVsYXRvciwgcGFydCwgaSkgPT4ge1xuICAgIHJldHVybiBhY2N1bXVsYXRvciArIGV4cHJlc3Npb25zW2ldICsgcGFydDtcbiAgfSwgdGVtcGxhdGVbMF0pO1xufSIsIid1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFscyBKU09OU2NoZW1hVmlldyAqL1xuXG5pbXBvcnQge1xuICBjb252ZXJ0WE9mLFxuICBfaWZcbn0gZnJvbSAnLi9oZWxwZXJzLmpzJztcblxuXG4vKipcbiAqIEBjbGFzcyBKU09OU2NoZW1hVmlld1xuICpcbiAqIEEgcHVyZSBKYXZhU2NyaXB0IGNvbXBvbmVudCBmb3IgcmVuZGVyaW5nIEpTT04gU2NoZW1hIGluIEhUTUwuXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSlNPTlNjaGVtYVZpZXcge1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge29iamVjdH0gc2NoZW1hIFRoZSBKU09OIFNjaGVtYSBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcGVuPTFdIGhpcyBudW1iZXIgaW5kaWNhdGVzIHVwIHRvIGhvdyBtYW55IGxldmVscyB0aGVcbiAgICogcmVuZGVyZWQgdHJlZSBzaG91bGQgZXhwYW5kLiBTZXQgaXQgdG8gYDBgIHRvIG1ha2UgdGhlIHdob2xlIHRyZWUgY29sbGFwc2VkXG4gICAqIG9yIHNldCBpdCB0byBgSW5maW5pdHlgIHRvIGV4cGFuZCB0aGUgdHJlZSBkZWVwbHlcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMuXG4gICAqICB0aGVtZSB7c3RyaW5nfTogb25lIG9mIHRoZSBmb2xsb3dpbmcgb3B0aW9uczogWydkYXJrJ11cbiAgKi9cbiAgY29uc3RydWN0b3Ioc2NoZW1hLCBvcGVuLCBvcHRpb25zID0ge3RoZW1lOiBudWxsfSkge1xuICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gb3BlbiA8PSAwO1xuXG4gICAgLy8gR3VhcmQgYWdhaW5zdCBlbXB0eSBzY2hlbWFzXG4gICAgaWYgKCF0aGlzLnNjaGVtYSkgcmV0dXJuICcnO1xuXG4gICAgLy8gaWYgc2NoZW1hIGlzIGFuIGVtcHR5IG9iamVjdCB3aGljaCBtZWFucyBhbnkgSk9TTlxuICAgIHRoaXMuaXNBbnkgPSB0eXBlb2Ygc2NoZW1hID09PSAnb2JqZWN0JyAmJlxuICAgICAgIUFycmF5LmlzQXJyYXkoc2NoZW1hKSAmJlxuICAgICAgIU9iamVjdC5rZXlzKHNjaGVtYSlcbiAgICAgIC5maWx0ZXIoaz0+IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nXS5pbmRleE9mKGspID09PSAtMSkubGVuZ3RoO1xuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIGEgc2NoZW1hIGlzIGFuIGFycmF5XG4gICAgdGhpcy5pc0FycmF5ID0gIXRoaXMuaXNBbnkgJiYgdGhpcy5zY2hlbWEgJiYgdGhpcy5zY2hlbWEudHlwZSA9PT0gJ2FycmF5JztcblxuICAgIC8vIERldGVybWluZSBpZiBhIHNjaGVtYSBpcyBhIGNvbGxlY3Rpb24gb2YgdHlwZXMgKGFuIEFycmF5IHdpdGggYXQgbGVhc3Qgb25lIG9iamVjdCBpbiBpdClcbiAgICB0aGlzLmlzQ29sbGVjdGlvbk9mVHlwZXMgPSB0aGlzLnNjaGVtYSAmJlxuICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLnNjaGVtYS50eXBlKSAmJlxuICAgICAgdGhpcy5zY2hlbWEudHlwZS5yZWR1Y2UoKGl0ZW0pID0+IHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jyk7XG5cbiAgICB0aGlzLmlzT2JqZWN0ID0gdGhpcy5zY2hlbWEgJiZcbiAgICAgICh0aGlzLnNjaGVtYS50eXBlID09PSAnb2JqZWN0JyB8fFxuICAgICAgIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMgfHxcbiAgICAgICB0aGlzLnNjaGVtYS5hbnlPZiB8fFxuICAgICAgIHRoaXMuc2NoZW1hLm9uZW9mIHx8XG4gICAgICAgdGhpcy5zY2hlbWEuYWxsT2YpO1xuXG4gICAgLy8gRGV0ZXJtaW5lIGlmIGEgc2NoZW1hIGlzIGEgcHJpbWl0aXZlXG4gICAgdGhpcy5pc1ByaW1pdGl2ZSA9ICF0aGlzLmlzQW55ICYmICF0aGlzLmlzQXJyYXkgJiYgIXRoaXMuaXNPYmplY3QgJiYgIXRoaXMuaXNDb2xsZWN0aW9uT2ZUeXBlcztcblxuICAgIC8vXG4gICAgdGhpcy5zaG93VG9nZ2xlID0gdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gfHxcbiAgICAgIHRoaXMuc2NoZW1hLnRpdGxlIHx8XG4gICAgICAodGhpcy5pc1ByaW1pdGl2ZSAmJiAoXG4gICAgICAgIHRoaXMuc2NoZW1hLm1pbmltdW0gfHxcbiAgICAgICAgdGhpcy5zY2hlbWEubWF4aW11bSB8fFxuICAgICAgICB0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtIHx8XG4gICAgICAgIHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gfHxcbiAgICAgICAgdGhpcy5zY2hlbWEuZm9ybWF0IHx8ICAgICAgICBcbiAgICAgICAgdGhpcy5zY2hlbWEuZGVmYXVsdCB8fFxuICAgICAgICB0aGlzLnNjaGVtYS5taW5MZW5ndGggfHxcbiAgICAgICAgdGhpcy5zY2hlbWEubWF4TGVuZ3RoIHx8XG4gICAgICAgIHRoaXMuc2NoZW1hLmVudW0pXG4gICAgICApO1xuXG4gICAgLy8gcG9wdWxhdGUgaXNSZXF1aXJlZCBwcm9wZXJ0eSBkb3duIHRvIHByb3BlcnRpZXNcbiAgICBpZiAodGhpcy5zY2hlbWEgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnNjaGVtYS5yZXF1aXJlZCkpIHtcbiAgICAgIHRoaXMuc2NoZW1hLnJlcXVpcmVkLmZvckVhY2gocmVxdWlyZWRQcm9wZXJ0eSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zY2hlbWEucHJvcGVydGllc1tyZXF1aXJlZFByb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3JlcXVpcmVkUHJvcGVydHldLmlzUmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYSBsaXN0IG9mIHR5cGVzIGFzIGEgc3RyaW5nIGZvciBDb2xsZWN0aW9ucyBvZiB0eXBlc1xuICAgIGlmKHRoaXMuaXNDb2xsZWN0aW9uT2ZUeXBlcykge1xuICAgICAgdGhpcy50eXBlTGlzdCA9IHRoaXMuc2NoZW1hLnR5cGUucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICAgIHJldHVybiBwcmV2LnR5cGUgKyAnLCAnICsgY3Vyci50eXBlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogUmV0dXJucyB0aGUgdGVtcGxhdGUgd2l0aCBwb3B1bGF0ZWQgcHJvcGVydGllcy5cbiAgICogVGhpcyB0ZW1wbGF0ZSBkb2VzIG5vdCBoYXZlIHRoZSBjaGlsZHJlblxuICAqL1xuICB0ZW1wbGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuc2NoZW1hKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGBcbiAgICAgIDwhLS0gQW55IC0tPlxuICAgICAgJHtfaWYodGhpcy5pc0FueSlgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnlcIj5cbiAgICAgICAgICAke19pZih0aGlzLnNob3dUb2dnbGUpYFxuICAgICAgICAgICAgPGEgY2xhc3M9XCJ0aXRsZVwiPjxzcGFuIGNsYXNzPVwidG9nZ2xlLWhhbmRsZVwiPjwvc3Bhbj4ke3RoaXMuc2NoZW1hLnRpdGxlIHx8ICcnfSA8L2E+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHlwZSB0eXBlLWFueVwiPiZsdDthbnkmZ3Q7PC9zcGFuPlxuXG4gICAgICAgICAgJHtfaWYodGhpcy5zY2hlbWEuZGVzY3JpcHRpb24gJiYgIXRoaXMuaXNDb2xsYXBzZWQpYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyIGRlc2NyaXB0aW9uXCI+JHt0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICBgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGB9XG5cbiAgICAgIDwhLS0gUHJpbWl0aXZlIC0tPlxuICAgICAgJHtfaWYodGhpcy5pc1ByaW1pdGl2ZSlgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmltaXRpdmVcIj5cbiAgICAgICAgICAke19pZih0aGlzLnNob3dUb2dnbGUpYFxuICAgICAgICAgICAgPGEgY2xhc3M9XCJ0aXRsZVwiPjxzcGFuIGNsYXNzPVwidG9nZ2xlLWhhbmRsZVwiPjwvc3Bhbj4ke3RoaXMuc2NoZW1hLnRpdGxlIHx8ICcnfSA8L2E+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0eXBlXCI+JHt0aGlzLnNjaGVtYS50eXBlfTwvc3Bhbj5cblxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmlzUmVxdWlyZWQpYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXF1aXJlZFwiPio8L3NwYW4+XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmZvcm1hdClgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvcm1hdFwiPigke3RoaXMuc2NoZW1hLmZvcm1hdH0pPC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5kZWZhdWx0KWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVmYXVsdFwiPmRlZmF1bHQ6ICR7dGhpcy5zY2hlbWEuZGVmYXVsdH08L3NwYW4+XG4gICAgICAgICAgYH0gXG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5taW5pbXVtKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UgbWluaW11bVwiPm1pbmltdW06JHt0aGlzLnNjaGVtYS5taW5pbXVtfTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSlgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIGV4Y2x1c2l2ZU1pbmltdW1cIj4oZXgpbWluaW11bToke3RoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW19PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5tYXhpbXVtKWBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFuZ2UgbWF4aW11bVwiPm1heGltdW06JHt0aGlzLnNjaGVtYS5tYXhpbXVtfTwvc3Bhbj5cbiAgICAgICAgICBgfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSlgXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhbmdlIGV4Y2x1c2l2ZU1heGltdW1cIj4oZXgpbWF4aW11bToke3RoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW19PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5taW5MZW5ndGgpYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBtaW5MZW5ndGhcIj5taW5MZW5ndGg6JHt0aGlzLnNjaGVtYS5taW5MZW5ndGh9PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5tYXhMZW5ndGgpYFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYW5nZSBtYXhMZW5ndGhcIj5tYXhMZW5ndGg6JHt0aGlzLnNjaGVtYS5tYXhMZW5ndGh9PC9zcGFuPlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXIgZGVzY3JpcHRpb25cIj4ke3RoaXMuc2NoZW1hLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLnNjaGVtYS5lbnVtKWBcbiAgICAgICAgICAgICR7dGhpcy5lbnVtKHRoaXMuc2NoZW1hLCB0aGlzLmlzQ29sbGFwc2VkLCB0aGlzLm9wZW4pfVxuICAgICAgICAgIGB9XG5cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbGxPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FsbE9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5vbmVPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ29uZU9mJyl9YH1cbiAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5hbnlPZiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgJHt0aGlzLnhPZih0aGlzLnNjaGVtYSwgJ2FueU9mJyl9YH1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgfVxuXG5cbiAgICAgIDwhLS0gQXJyYXkgLS0+XG4gICAgICAke19pZih0aGlzLmlzQXJyYXkpYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXJyYXlcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cInRpdGxlXCI+PHNwYW4gY2xhc3M9XCJ0b2dnbGUtaGFuZGxlXCI+PC9zcGFuPiR7dGhpcy5zY2hlbWEudGl0bGUgfHwgJyd9PHNwYW4gY2xhc3M9XCJvcGVuaW5nIGJyYWNrZXRcIj5bPC9zcGFuPiR7X2lmKHRoaXMuaXNDb2xsYXBzZWQpYDxzcGFuIGNsYXNzPVwiY2xvc2luZyBicmFja2V0XCI+XTwvc3Bhbj5gfTwvYT5cbiAgICAgICAgICAke19pZighdGhpcy5pc0NvbGxhcHNlZCAmJiAodGhpcy5zY2hlbWEudW5pcXVlSXRlbXMgfHwgdGhpcy5zY2hlbWEubWluSXRlbXMgfHwgdGhpcy5zY2hlbWEubWF4SXRlbXMpKWBcbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiaXRlbXMgcmFuZ2VcIj4oJHt0aGlzLnNjaGVtYS5taW5JdGVtcyB8fCAwfS4uJHt0aGlzLnNjaGVtYS5tYXhJdGVtcyB8fCAn4oieJ30pPC9zcGFuPlxuICAgICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpYDxzcGFuIHRpdGxlPVwidW5pcXVlXCIgY2xhc3M9XCJ1bmlxdWVJdGVtc1wiPuKZpjwvc3Bhbj5gfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICBgfVxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxuICAgICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke3RoaXMuc2NoZW1hLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgYH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmVudW0pYFxuICAgICAgICAgICAgJHt0aGlzLmVudW0odGhpcy5zY2hlbWEsIHRoaXMuaXNDb2xsYXBzZWQsIHRoaXMub3Blbil9XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmFsbE9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnYWxsT2YnKX1gfVxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLm9uZU9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnb25lT2YnKX1gfVxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmFueU9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnYW55T2YnKX1gfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQpYFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2luZyBicmFja2V0XCI+XTwvc3Bhbj5cbiAgICAgICAgICBgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIGB9XG5cbiAgICAgIDwhLS0gT2JqZWN0IC0tPlxuICAgICAgJHtfaWYoIXRoaXMuaXNQcmltaXRpdmUgJiYgIXRoaXMuaXNBcnJheSAmJiAhdGhpcy5pc0FueSAmJiAhdGhpcy5pc0NvbGxlY3Rpb25PZlR5cGVzKWBcbiAgICAgICAgPGRpdiBjbGFzcz1cIm9iamVjdFwiPlxuICAgICAgICAgIDxhIGNsYXNzPVwidGl0bGVcIj48c3BhblxuICAgICAgICAgICAgY2xhc3M9XCJ0b2dnbGUtaGFuZGxlXCI+PC9zcGFuPiR7dGhpcy5zY2hlbWEudGl0bGUgfHwgJyd9IDxzcGFuXG4gICAgICAgICAgICBjbGFzcz1cIm9wZW5pbmcgYnJhY2VcIj57PC9zcGFuPiR7X2lmKHRoaXMuaXNDb2xsYXBzZWQpYFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NpbmcgYnJhY2VcIiBuZy1pZj1cImlzQ29sbGFwc2VkXCI+fTwvc3Bhbj5cbiAgICAgICAgICBgfTwvYT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxuICAgICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQgJiYgdGhpcy5zY2hlbWEuZGVzY3JpcHRpb24pYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke3RoaXMuc2NoZW1hLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwhLS0gY2hpbGRyZW4gZ28gaGVyZSAtLT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICR7X2lmKCF0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuc2NoZW1hLmVudW0pYFxuICAgICAgICAgICAgJHt0aGlzLmVudW0odGhpcy5zY2hlbWEsIHRoaXMuaXNDb2xsYXBzZWQsIHRoaXMub3Blbil9XG4gICAgICAgICAgYH1cblxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmFsbE9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnYWxsT2YnKX1gfVxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLm9uZU9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnb25lT2YnKX1gfVxuICAgICAgICAgICR7X2lmKHRoaXMuc2NoZW1hLmFueU9mICYmICF0aGlzLmlzQ29sbGFwc2VkKWAke3RoaXMueE9mKHRoaXMuc2NoZW1hLCAnYW55T2YnKX1gfVxuXG4gICAgICAgICAgJHtfaWYoIXRoaXMuaXNDb2xsYXBzZWQpYFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2luZyBicmFjZVwiPn08L3NwYW4+XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9kaXY+XG4gICAgICBgfVxuXG4gICAgICA8IS0tIFR5cGUgQXJyYXkgLS0+XG4gICAgICAke19pZih0aGlzLmlzQ29sbGVjdGlvbk9mVHlwZXMpYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGVjdGlvbk9mVHlwZXNcIj5cbiAgICAgICAgICA8YSBjbGFzcz1cInRpdGxlXCI+PHNwYW4gY2xhc3M9XCJ0b2dnbGUtaGFuZGxlXCI+PC9zcGFuPiR7dGhpcy5zY2hlbWEudGl0bGUgfHwgJyd9PC9hPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHlwZVwiPiR7dGhpcy50eXBlTGlzdH08L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCI+XG4gICAgICAgICAgICAke19pZih0aGlzLnNjaGVtYS5kZXNjcmlwdGlvbiAmJiAhdGhpcy5pc0NvbGxhcHNlZClgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPiR7dGhpcy5zY2hlbWEuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICBgfVxuICAgICAgICAgICAgIDwhLS0gY2hpbGRyZW4gZ28gaGVyZSAtLT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICBgfVxuYC5yZXBsYWNlKC9cXHMqXFxuL2csICdcXG4nKS5yZXBsYWNlKC8oXFw8XFwhXFwtXFwtKS4rL2csICcnKS50cmltKCk7XG4gIH1cblxuICAvKlxuICAgKiBUZW1wbGF0ZSBmb3Igb25lT2YsIGFueU9mIGFuZCBhbGxPZlxuICAqL1xuICB4T2Yoc2NoZW1hLCB0eXBlKSB7XG4gICAgcmV0dXJuIGBcbiAgICAgIDxkaXYgY2xhc3M9XCJpbm5lciAke3R5cGV9XCI+XG4gICAgICAgIDxiPiR7Y29udmVydFhPZih0eXBlKX06PC9iPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIC8qXG4gICAqIFRlbXBsYXRlIGZvciBlbnVtc1xuICAqL1xuICBlbnVtKHNjaGVtYSwgaXNDb2xsYXBzZWQsIG9wZW4pIHtcbiAgICByZXR1cm4gYFxuICAgICAgJHtfaWYoIWlzQ29sbGFwc2VkICYmIHNjaGVtYS5lbnVtKWBcbiAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyIGVudW1zXCI+XG4gICAgICAgICAgPGI+RW51bTo8L2I+XG4gICAgICAgIDwvZGl2PlxuICAgICAgYH1cbiAgICBgO1xuICB9XG5cbiAgLypcbiAgICogVG9nZ2xlcyB0aGUgJ2NvbGxhcHNlZCcgc3RhdGVcbiAgKi9cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSAhdGhpcy5pc0NvbGxhcHNlZDtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLypcbiAgICogUmVuZGVycyB0aGUgZWxlbWVudCBhbmQgcmV0dXJucyBpdFxuICAqL1xuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2pzb24tc2NoZW1hLXZpZXcnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NvbGxhcHNlZCkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2VkJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy50aGVtZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoYGpzb24tc2NoZW1hLXZpZXctJHt0aGlzLm9wdGlvbnMudGhlbWV9YCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IHRoaXMudGVtcGxhdGUoKTtcblxuICAgIGlmICghdGhpcy5zY2hlbWEpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzQ29sbGFwc2VkKSB7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkcmVuKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIGZvciB0b2dnbGluZ1xuICAgIGlmICh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignYS50aXRsZScpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignYS50aXRsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gIH1cblxuICAvKlxuICAgKiBBcHBlbmRzIGNoaWxkcmVuIHRvIGdpdmVuIGVsZW1lbnQgYmFzZWQgb24gY3VycmVudCBzY2hlbWFcbiAgKi9cbiAgYXBwZW5kQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgIGNvbnN0IGlubmVyID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaW5uZXInKTtcblxuICAgIGlmICghaW5uZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY2hlbWEuZW51bSkge1xuICAgICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEpTT05Gb3JtYXR0ZXIodGhpcy5zY2hlbWEuZW51bSwgdGhpcy5vcGVuIC0gMSk7XG4gICAgICBjb25zdCBmb3JtYXR0ZXJFbCA9IGZvcm1hdHRlci5yZW5kZXIoKTtcbiAgICAgIGZvcm1hdHRlckVsLmNsYXNzTGlzdC5hZGQoJ2lubmVyJyk7XG4gICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnVtcy5pbm5lcicpLmFwcGVuZENoaWxkKGZvcm1hdHRlckVsKTtcblxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQXJyYXkpIHtcbiAgICAgIGNvbnN0IHZpZXcgPSBuZXcgSlNPTlNjaGVtYVZpZXcodGhpcy5zY2hlbWEuaXRlbXMsIHRoaXMub3BlbiAtIDEpXG4gICAgICBpbm5lci5hcHBlbmRDaGlsZCh2aWV3LnJlbmRlcigpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NvbGxlY3Rpb25PZlR5cGVzKSB7XG4gICAgICBjb25zdCBvcGVuTGV2ZWwgPSB0aGlzLm9wZW4gLSAxO1xuICAgICAgdGhpcy5zY2hlbWEudHlwZS5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgSlNPTlNjaGVtYVZpZXcodHlwZSwgb3BlbkxldmVsKTtcbiAgICAgICAgaW5uZXIuYXBwZW5kQ2hpbGQodmlldy5yZW5kZXIoKSk7XG4gICAgICB9KTtcblxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5zY2hlbWEucHJvcGVydGllcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLnByb3BlcnRpZXMpLmZvckVhY2gocHJvcGVydHlOYW1lID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV07XG4gICAgICAgIGNvbnN0IHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTs7XG4gICAgICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJwcm9wZXJ0eVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7cHJvcGVydHlOYW1lfTo8L3NwYW4+XG4gICAgICAgIDwvZGl2PmA7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgSlNPTlNjaGVtYVZpZXcocHJvcGVydHksIHRoaXMub3BlbiAtIDEpO1xuICAgICAgICB0ZW1wRGl2LnF1ZXJ5U2VsZWN0b3IoJy5wcm9wZXJ0eScpLmFwcGVuZENoaWxkKHZpZXcucmVuZGVyKCkpO1xuXG4gICAgICAgIGlubmVyLmFwcGVuZENoaWxkKHRlbXBEaXYucXVlcnlTZWxlY3RvcignLnByb3BlcnR5JykpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2NoZW1hLmFsbE9mKSB7IGFwcGVuZFhPZi5jYWxsKHRoaXMsICdhbGxPZicpOyB9XG4gICAgaWYgKHRoaXMuc2NoZW1hLm9uZU9mKSB7IGFwcGVuZFhPZi5jYWxsKHRoaXMsICdvbmVPZicpOyB9XG4gICAgaWYgKHRoaXMuc2NoZW1hLmFueU9mKSB7IGFwcGVuZFhPZi5jYWxsKHRoaXMsICdhbnlPZicpOyB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRYT2YodHlwZSkge1xuICAgICAgY29uc3QgaW5uZXJBbGxPZiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihgLmlubmVyLiR7dHlwZX1gKTtcblxuICAgICAgdGhpcy5zY2hlbWFbdHlwZV0uZm9yRWFjaChzY2hlbWEgPT4ge1xuICAgICAgICBjb25zdCBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbm5lci5jbGFzc0xpc3QuYWRkKCdpbm5lcicpO1xuICAgICAgICBjb25zdCB2aWV3ID0gbmV3IEpTT05TY2hlbWFWaWV3KHNjaGVtYSwgdGhpcy5vcGVuIC0gMSk7XG4gICAgICAgIGlubmVyLmFwcGVuZENoaWxkKHZpZXcucmVuZGVyKCkpO1xuICAgICAgICBpbm5lckFsbE9mLmFwcGVuZENoaWxkKGlubmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19
