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
    },
    {
      $ref: 'http://foo.bar/additionalBloodTypes'
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
    
    it('renderes references', ()=> {
      const view = new JSONSchemaView(schema, 2);
      const el = view.render();
      const code = el.querySelector('.inner.oneOf').innerHTML;
      expect(code.indexOf('<a class="title">Ref </a>')).not.to.equal(-1);
      expect(code.indexOf('<a class="type" href="http://foo.bar/additionalBloodTypes">http://foo.bar/additionalBloodTypes</a>')).not.to.equal(-1);
    });
  });
});
