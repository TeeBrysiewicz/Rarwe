import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { createBand, createSong } from 'rarwe/tests/helpers/custom-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';

module('Acceptance | Songs', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  // test('List Songs', async function(assert) {

  //   let newBand = this.server.create('band', { name: 'Martin Garrix' });

  //   // this.server.createList('song', 2, { band: newBand });

  //   this.server.create('song', { title: 'Animals' }, { band: newBand });
  //   this.server.create('song', { title: 'High On Life' }, { band: newBand });

  //   // await visit('/');
  //   await visit('/bands/1/songs');
  //   // await click('.rr-band-link');

  //   // await click('[data-test-rr=band-link]');

  //   assert.dom('[data-test-rr=song-list-item]').exists({ count: 2 }, 'All songs are rendered');
  //   assert.dom('[data-test-rr=song-list-item]:first-child').hasText("Animals", 'The first song contains the song name');
  //   assert.dom('[data-test-rr=song-list-item]:last-child').hasText("Secrets", 'The other contains the song name');
  // });

  test('Create Songs', async function(assert) {
    this.server.create('band', { name: 'Martin Garrix' });

    await visit('/');
    await createBand('Tiesto');
    // await visit('/bands/2/songs');
    await createSong('Secrets');
    await createSong('Money');

    assert.dom('[data-test-rr=song-list-item]').exists({ count: 2 }, 'All songs are rendered');
    assert.dom('[data-test-rr=song-list-item]:first-child').hasText("Animals", 'The first song contains the song name');
    assert.dom('[data-test-rr=song-list-item]:last-child').hasText("Secrets", 'The other contains the song name');
  });

});