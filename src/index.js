'use strict';

/* globals JSONSchemaView */

import {
  isObject,
  getObjectName,
  getType,
  getValuePreview,
  getPreview,
  addPropertyName,
  convertXOf
} from './helpers.js';


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
function empty(){
  return '';
}
function normal (template, ...expressions) {
  return template.slice(1).reduce((accumulator, part, i) => {
    return accumulator + expressions[i] + part;
  }, template[0]);
}

/**
 * @class JSONSchemaView
 *
 * JSONSchemaView allows you to render JSON objects in HTML with a
 * **collapsible** navigation.
*/
export default class JSONSchemaView {

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
  constructor(schema, open, config, key) {
    this.schema = schema;
    this.open = open;
    this.isCollapsed = open <= 0;

    // Determine if a schema is an array
    this.isArray = this.schema && this.schema.type === 'array';

    // Determine if a schema is a primitive
    this.isPrimitive = this.schema &&
      !this.schema.properties &&
      !this.schema.items &&
      this.schema.type !== 'array' &&
      this.schema.type !== 'object';
  }

  /*
   * Toggles the 'collapsed' state
  */
  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }

  /*
   * Returns true if property is required in given schema
  */
  isRequired(schema, parent) {
    if (parent && Array.isArray(parent.required) && schema.name) {
      return parent.required.indexOf(schema.name) > -1;
    }

    return false;
  }

  /*
   * Returns true if the schema is too simple to be collapsible
  */
  isPrimitiveCollapsible() {
    return this.schema.description || this.schema.title;
  }

  template() {

    return `<div class="json-schema-view ${_if(this.collapsed)`collapsed`}">

      <!-- Primitive -->
      ${_if(this.isPrimitive)`
        <div class="primitive">
          ${_if(this.isPrimitiveCollapsible())`
            <a class="title"><span class="toggle-handle"></span>${this.schema.title} </a>
          `}

          <span class="type">${this.schema.type}</span>

          ${_if(this.isRequired(this.schema))`
            <span class="required">*</span>
          `}

          ${_if(!this.isCollapsed && this.schema.format)`
            <span class="format">(${this.schema.format})</span>
          `}

          ${_if(!this.isCollapsed && this.schema.minimum)`
            <span class="range minimum">minimum:${this.schema.minimum}</span>
          `}

          ${_if(!this.isCollapsed && this.schema.exclusiveMinimum)`
            <span class="range exclusiveMinimum">(ex)minimum:${this.schema.exclusiveMinimum}</span>
          `}

          ${_if(!this.isCollapsed && this.schema.maximum)`
            <span class="range maximum">maximum:${this.schema.maximum}</span>
          `}

          ${_if(!this.isCollapsed && this.schema.exclusiveMaximum)`
            <span class="range exclusiveMaximum">(ex)maximum:${this.schema.exclusiveMaximum}</span>
          `}

          ${_if(!this.isCollapsed && this.schema.minLength)`
            <span class="range minLength">minLength:${this.schema.minLength}</span>
          `}

          ${_if(!this.isCollapsed && this.schema.maxLength)`
            <span class="range maxLength">maxLength:${this.schema.maxLength}</span>
          `}

          <div class="inner description">${this.schema.description}</div>

          ${_if(!this.isCollapsed && this.schema.enum)`
            ${this.enum(this.schema, this.isCollapsed, this.open)}
          `}

          ${_if(this.schema.allOf)`${this.xOf(this.schema, 'allOf')}`}
          ${_if(this.schema.oneOf)`${this.xOf(this.schema, 'oneOf')}`}
          ${_if(this.schema.anyOf)`${this.xOf(this.schema, 'anyOf')}`}
        </div>
      `}


      <!-- Array -->
      ${_if(this.isArray)`
        <div class="array">
          <a class="title"><span class="toggle-handle"></span>${
            this.schema.title
          }<span class="opening bracket">[</span>${_if(this.isCollapsed)`
            <span class="closing bracket">]</span>
          `}</a>
          ${_if(!this.isCollapsed && (this.schema.uniqueItems || this.schema.minItems || this.schema.maxItems))`
            <span>
              <span title="items range">(${this.schema.minItems || 0}..${this.schema.maxItems || '∞'})</span>
              ${_if(!this.isCollapsed && this.schema.uniqueItems)`
                <span title="unique" class="uniqueItems">♦</span>
              `}
            </span>
          `}
          <div class="inner">
            <div class="description">${this.schema.description}</div>
            ${_if(!this.isCollapsed)`
              <!-- TODO -->
              <json-schema-view schema="schema.items" open="open - 1"></json-schema-view>
            `}
          </div>

          ${_if(!this.isCollapsed && this.schema.enum)`
            ${this.enum(this.schema, this.isCollapsed, this.open)}
          `}

          ${_if(this.schema.allOf)`${this.xOf(this.schema, 'allOf')}`}
          ${_if(this.schema.oneOf)`${this.xOf(this.schema, 'oneOf')}`}
          ${_if(this.schema.anyOf)`${this.xOf(this.schema, 'anyOf')}`}

          ${_if(!this.isCollapsed)`
            <span class="closing bracket">]</span>
          `}
        </div>
      `}

      <!-- Object -->
      ${_if(!this.isPrimitive && !this.isArray)`
        <div class="object">
          <a class="title"><span
            class="toggle-handle"></span>${this.schema.title} <span
            class="opening brace">{</span>${_if(this.isCollapsed)`
              <span class="closing brace" ng-if="isCollapsed">}</span>
          `}</a>

          <div class="inner">
            <div class="description">${this.schema.description}</div>

            ${(typeof this.properties === 'object') && Object.keys(this.properties).map(propertyName => {
              const property = this.properties[propertyName];

              return ` <div class="property">
                <span class="name">${propertyName}:</span>
                // TODO
                <json-schema-view schema="property" open="open - 1"></json-schema-view>
              </div>`;
            })}

          </div>

          ${_if(!this.isCollapsed && this.schema.enum)`
            ${this.enum(this.schema, this.isCollapsed, this.open)}
          `}

          ${_if(this.schema.allOf)`${this.xOf(this.schema, 'allOf')}`}
          ${_if(this.schema.oneOf)`${this.xOf(this.schema, 'oneOf')}`}
          ${_if(this.schema.anyOf)`${this.xOf(this.schema, 'anyOf')}`}

          ${_if(!this.isCollapsed)`
            <span class="closing brace">}</span>
          `}
        </div>
        `}
      </div>
    `;
  }

  xOf(schema, type) {
    return `
      <div class="inner">
        <b>${convertXOf(type)}:</b>
        ${
          this.schema && Array.isArray(this.schema[type]) && this.schema[type].map(sch => `
            <div class="inner">
              <!-- TODO -->
              <json-schema-view schema="schema"></json-schema-view>
            </div>
          `)
        }
      </div>
    `;
  }

  enum(schema, isCollapsed, open) {
    return `
      ${_if(!isCollapsed && schema.enum)`
        <div class="inner enums">
          <b>Enum:</b>

          <!-- TODO -->
          <json-formatter class="inner" json="schema.enum" open="open"></json-formatter>
        </div>
      `}
    `;
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = this.template();


    // add event listener for toggling
    // this.element.querySelector('a.toggler-link')
    //   .addEventListener('click', this.toggleOpen.bind(this));

    return element.querySelector('div.json-schema-view');
  }
}

// TODO: UMD
window.JSONSchemaView = JSONSchemaView;
