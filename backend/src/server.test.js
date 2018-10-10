/* eslint-env mocha */
import request from 'supertest';
import app from './server';

// process.on('unhandledRejection', error => {});

describe('Server', () => {
  let server;
  before(() => {
    // Start server before test cases
    server = request.agent(app.listen());
  });

  describe('list endpoint', () => {
    let response;
    before(() => {
      // Call the 'list' endpoint
      response = server.get('/v1/report/50.826735/4.371092');
    });

    it('should return json content', (done) => {
      response.expect('Content-Type', /json/).expect(200);
      done();
    });

    it('should contain reports');
  });

  describe('create endpoint', () => {
    let response;
    before(() => {
      // Call the 'create' endpoint
      const coordinates = [50.000000, 4.330000];
      const report = { title: 'Test', position: { type: 'Point', coordinates } };
      response = server.post('/v1/report').send(report);
    });

    after(() => response);

    it('should create a valid report');

    it('should fail if title is not defined');

    it('should fail if position is not defined');
  });
});
