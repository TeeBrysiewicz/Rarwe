import Controller from '@ember/controller';
import { action } from '@ember/object';
import { computed } from '@ember/object';

export default Controller.extend({
  isEditing: false,

  init() {
    this._super(...arguments);
    this.set('showErrors', { description: false });
  },

  edit: action(function () {
    this.set('isEditing', true);
  }),

  // async save() {
  //   let band = this.model;
  //   this.set('showErrors.description', true);
  //   if (band.validations.isValid) {
  //     await band.save();
  //     this.set('isEditing', false);
  //   }
  // },

  stopEditing: action(async function() {
    this.set('isEditing', false);
  }),

  save: action(async function() {
    let band = this.model;
    this.set('showErrors.description', true);
    if (band.validations.isValid) {
      await band.save();
      this.set('isEditing', false);
    }
  }),
});
