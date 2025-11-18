import {NoData} from './models/HTTP';
import APIEntity from './APIEntity';
import {TestCaseRun} from './models/TestCaseRun';
import APIList, {APIListQuery} from './APIList';
import {SessionQueryParams} from './models/DeviceSession';


export class APIListTestCaseRuns<Q extends APIListQuery = SessionQueryParams> extends APIList<TestCaseRun, Q, NoData> {

  /**
   * /test-case-runs
   */
  constructor(parent: APIEntity) {
    super(parent);
    this.push('test-case-runs');
  }
}

export default APIListTestCaseRuns
