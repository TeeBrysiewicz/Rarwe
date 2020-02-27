import Route from '@ember/routing/route';
import wait from 'rarwe/utils/wait';

export default Route.extend({
  model() {
    return this.modelFor('bands.band');
  },

  // model() {
  //   return reject(this.modelFor('bands.band'));
  // },

  // async model() {
  //   await wait(3000);
  //   return this.modelFor('bands.band');
  // },

  resetController(controller) {
    controller.setProperties({
      isAddingSong: false,
      newSongTitle: ''
    });
  }
});