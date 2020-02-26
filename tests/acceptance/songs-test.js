// import { module, test } from 'qunit';
// import { visit, click, fillIn } from '@ember/test-helpers';
// import { createBand  }from 'rarwe/tests/helpers/custom-helpers';
// import { setupApplicationTest } from 'ember-qunit';
// import { setupMirage } from 'ember-cli-mirage/test-support';

// module('Acceptance | Songs', function(hooks) {
//   setupApplicationTest(hooks);
//   setupMirage(hooks);

//   // test('List Songs', async function(assert) {
//   //   let newBand = this.server.create('band', { name: 'Martin Garrix' });
//   //   this.server.create('song', { band: newBand });

//   //   // await visit('/');
//   //   await visit('/bands/1/songs');

//   //   await pauseTest();

//   //   assert.dom('[data-test-rr=song-list-item]').exists({ count: 2 }, 'All songs are rendered');
//   //   assert.dom('[data-test-rr=song-list-item]:first-child').hasText("Animals", 'The first song contains the song name');
//   //   assert.dom('[data-test-rr=song-list-item]:last-child').hasText("Secrets", 'The other contains the song name');
//   // });

// // THIS WAS WORKING BEFORE ADDING SORTING
//   // test('Create Songs', async function(assert) {
//   //   this.server.create('band', { name: 'Martin Garrix' });

//   //   await visit('/');
//   //   await createBand('Tiesto');

//   //   await click('[data-test-rr=new-song-label]');
//   //   await fillIn('[data-test-rr=new-song-input]', "Dance!");
//   //   await click('[data-test-rr=new-song-button]');
//   //   await click('[data-test-rr=new-song-input');
//   //   await fillIn('[data-test-rr=new-song-input', "Secrets");
//   //   await click('[data-test-rr=new-song-button]');

//   //   assert.dom('[data-test-rr=song-list-item]').exists({ count: 2 }, 'All songs are rendered');
//   //   assert.dom('[data-test-rr=song-list-item]:first-child').hasText("Dance!", 'The first song contains the song name');
//   //   assert.dom('[data-test-rr=song-list-item]:last-child').hasText("Secrets", 'The other contains the song name');

//   //   await click('[data-test-rr=sort-by-title-desc]');
//   //   assert.dom('[data-test-rr=song-list-item]:first-child').hasText('Spinning in Daffodils', 'The first song is the one that comes last in the alphabet');
//   //   assert.dom('[data-test-rr=song-list-item]:last-child').hasText('Elephants', 'The last song is the one that comes first in the alphabet');
//   // });

// });