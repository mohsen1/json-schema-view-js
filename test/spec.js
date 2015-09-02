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
  }
};

describe('rendering', ()=> {
  describe('blood type', ()=> {
    it('collapsed with 0 for open', function () {
      const view = new JSONSchemaView(schema, 0);
      const el = view.render();

      expect(el.classList.toString().indexOf('collapsed')).to.be.greaterThan(-1);
      expect(el.querySelector('.inner').innerText.trim()).to.equal('');
    });
  });
});