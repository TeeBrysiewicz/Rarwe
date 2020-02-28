import Route from '@ember/routing/route';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  init() {
    this._super(...arguments);
    this.set('showErrors', { email: false, password: false });
  },

  model() {
    return this.store.createRecord('user');
  },
});
