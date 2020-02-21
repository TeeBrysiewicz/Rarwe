import Route from '@ember/routing/route';

export defualt Route.extend({
  model() {
    return this.modelFor('bands.band');
  }
});