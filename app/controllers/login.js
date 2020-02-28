import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default Controller.extend({
  session: service(),
  router: service(),
  
  signIn: action(async function(event) {
    event.preventDefault();
    let { email, password } = this;
    await this.session.authenticate('authenticator:credentials', email, password);
    await this.router.transitionTo('bands');
  })
});