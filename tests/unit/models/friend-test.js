import { moduleForModel, test } from 'ember-qunit';

moduleForModel('friend', 'Unit | Model | friend', {
  // Specify the other units that are required for this test.
  needs: []
});

test('has variables', function(assert) {
  var model = this.subject({ firstName: 'Bob', lastName: 'Smith', email: 'bob@bob.com', twitter: '@bob', totalArticles: '1' });
  // var store = this.store();
  assert.equal(model.get('firstName'), 'Bob', 'firstName');
  assert.equal(model.get('lastName'), 'Smith', 'lastName');
  assert.equal(model.get('email'), 'bob@bob.com', 'email');
  assert.equal(model.get('twitter'), '@bob', 'twitter');
  assert.equal(model.get('totalArticles'), '1', 'totalArticles');
});
