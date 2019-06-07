import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../server';

chai.use(chaiHttp);

chai.use(chaiHttp);

const { expect } = chai;

describe('Handle incoming requests on routes', () => {
  it('should return 200 and success message for the / route', (done) => {
    chai
      .request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal('Welcome to AutoMart');
        done(err);
      });
  });

  it('should return a 404 for all invalid routes', (done) => {
    chai
      .request(server)
      .post('/api/v1')
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body.message).to.be.equal('Wrong endpoint. Such endpoint does not exist');
        done(err);
      });
  });
});
