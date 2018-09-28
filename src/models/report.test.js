import { expect } from 'chai';
import Report from './report';

describe('Report model', () => {
  let report, blankReport;

  beforeEach(() => {
    blankReport = new Report();
    report = new Report({
      title: 'Test',
      position: {
        type: 'Point',
        coordinates: [50.000000, 4.330000]
      },
    });
  });

  it('should be invalid if title is empty', (done) => {
    blankReport.validate((validation) => {
      expect(validation.errors.title).to.exist;
      done();
    });
  });

  it('should be invalid if position is empty', (done) => {
    blankReport.validate((validation) => {
      expect(validation.errors["position.type"]).to.exist;
      done();
    });
  });

  it('should generate a valid report', (done) => {
    report.validate((validation) => {
      expect(validation).to.be.null;
    })
    done();
  })
});
