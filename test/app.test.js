

const assert = require('assert');
const request = require('supertest');
const app = require('../app'); // Assuming 'app.js' exports your Express app

describe('Parking Management System', function() {
  // Example unit test: Checking if the app is running
  it('should return status 200 on the home page', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });

  // Example integration test: Adding a new parking entry
  it('should add a new parking entry', function(done) {
    request(app)
      .post('/api/parking')
      .send({ vehicle: 'ABC123', slot: 'B2', duration: 2 })
      .expect(201) // Expecting HTTP status 201 (Created)
      .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.body.message, 'Parking entry created');
        done();
      });
  });
});

