import { module, test } from 'qunit';
import { visit, click, fillIn, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { loginAs } from 'rarwe/tests/helpers/custom-helpers';

module ('Acceptance | Songs', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('List Songs', async function(assert) {
    let band = this.server.create('band', { name: 'Tool' });
    this.server.create('song', { title: 'The Pot', rating: 5, band });
    this.server.create('song', { title: 'Sober', rating: 4, band });

    await loginAs('dave@tcv.com');
    await visit('/');

    assert.dom('[data-test-rr=band-list-item]').exists({ count: 1 }, 'All bands are rendred');

    await click('[data-test-rr=band-link]:first-child');

    assert.dom('[data-test-rr=song-list-item]').exists({ count: 2 }, 'All songs are rendered');
    assert.dom('[data-test-rr=song-list-item]:first-child').hasText('The Pot', 'The first song is correct.');
    assert.dom('[data-test-rr=song-list-item]:last-child').hasText('Sober', 'The last song is correct');
  });

  test('Create a band', async function(assert) {
    let band = this.server.create('band', { name: 'Tool' });

    await loginAs('dave@tcv.com');
    await visit('/');
    await click('[data-test-rr=band-link]:first-child');
    await click('[data-test-rr=new-song-label]');
    await fillIn('[data-test-rr=new-song-input]', 'Schism');
    await click('[data-test-rr=new-song-button]');

    assert.dom('[data-test-rr=song-list-item]:first-child').hasText('Schism', 'A new song is created');
  });
});