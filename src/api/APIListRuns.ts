import {APIList} from './APIList';
import {APIResource} from './APIResource';
import {APIResourceUser} from './APIResourceUser';
import {
  TestRun,
  TestRunConfig,
  TestRunsConfigData,
  TestRunsConfigParams,
  TestRunsData,
  TestRunsQueryParams
} from './models/TestRun';


export class APIListRuns extends APIList<TestRun, TestRunsQueryParams, TestRunsData> {

  /**
   * /runs
   */
  constructor(parent: APIResourceUser) {
    super(parent);
    this.push('runs');
  }

  // /runs/config
  config() {
    return new APIResource<TestRunConfig, TestRunsConfigParams, TestRunsConfigData>(this).push('config');
  }

}

export default APIListRuns
