import JSONSchemaView from '../src';

const schema = {
  title: 'BloodType',
  type: 'object',
  oneOf: [
    {
      type: 'object',
      title: 'BloodType',
      description: 'Blood type with structured group and RhD',
      properties: {
        group: {
          type: 'string',
          enum: ['A', 'B', 'AB', 'O']
        },
        'RhD': {
          type: 'string',
          enum: ['+', '-', 'Null']
        }
      }
    },
    {
      type: 'string',
      description: 'Blood type in a string',
      enum: ['A+', 'A-', 'O+', 'O-', 'AB+', 'AB-', 'A', 'B', 'AB', 'O']
    }
  ]
};

describe('rendering', ()=> {
  describe('blood type', ()=> {
    it('renders collapsed with 0 for open', ()=> {
      const view = new JSONSchemaView(schema, 0);
      const el = view.render();

      expect(el.classList.toString()).toContain('collapsed');
      expect(el.querySelector('.inner.oneOf')).toBeNull();
    });

    it('renders the children when open is not 0', ()=> {
      const view = new JSONSchemaView(schema, 2);
      const el = view.render();

      expect(el.classList.toString()).not.toContain('collapsed');
      expect(el.querySelector('.inner.oneOf').innerHTML.trim()).not.toEqual('');
    });
  });

  describe('additionalProperties', () => {
    it('renders additionalProperties with a schema', () => {
      const schema = {
        type: 'object',
        properties: { name: { type: 'string' } },
        additionalProperties: { type: 'number' }
      };
      const view = new JSONSchemaView(schema, 2);
      const el = view.render();

      expect(el.querySelector('.additional-properties')).not.toBeNull();
      expect(el.querySelector('.additional-properties-name').textContent).toContain('[additional properties]');
    });

    it('renders additionalProperties: true as any type', () => {
      const schema = {
        type: 'object',
        additionalProperties: true
      };
      const view = new JSONSchemaView(schema, 2);
      const el = view.render();

      expect(el.querySelector('.additional-properties')).not.toBeNull();
    });

    it('does not render additionalProperties: false', () => {
      const schema = {
        type: 'object',
        properties: { name: { type: 'string' } },
        additionalProperties: false
      };
      const view = new JSONSchemaView(schema, 2);
      const el = view.render();

      expect(el.querySelector('.additional-properties')).toBeNull();
    });
  });
});