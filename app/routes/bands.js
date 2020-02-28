import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
// import wait from 'rarwe/utils/wait';

export default Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.findAll('band');
  }

  // async model() {
  //   await wait(3000);
  //   return this.store.findAll('band');
  // },
});
  