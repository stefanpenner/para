import serializeWork from '../../lib/serialize-work';
import { expect } from 'chai';

describe('serializeWork', function() {
  it('can be eval\'d, and returns its own result', function() {
    let work = () => 1 + 1;
    let result = work();

    expect(result).to.eql(2);
    expect(eval(serializeWork(work))).to.eql(result);
  });

  it('can be eval\'d, with payload.arg', function() {
    let work = x => x + 1;
    /* eslint-disable */
    let payload = { arg: 3 };
    /* eslint-enable */
    expect(eval(serializeWork(work))).to.eql(4);
  });
});
