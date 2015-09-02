'use strict';

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

      expect(el.classList.toString()).to.contain('collapsed');
      expect(el.querySelector('.inner.oneOf')).to.be.null;
    });

    it('renders the children when open is not 0', ()=> {
      const view = new JSONSchemaView(schema, 2);
      const el = view.render();

      expect(el.classList.toString()).not.to.contain('collapsed');
      expect(el.querySelector('.inner.oneOf').innerHTML.trim()).not.to.equal('');
    });
  });
});