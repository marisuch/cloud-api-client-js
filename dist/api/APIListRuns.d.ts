import { APIList } from './APIList';
import { APIResource } from './APIResource';
import { APIResourceUser } from './APIResourceUser';
import { TestRun, TestRunConfig, TestRunsConfigData, TestRunsConfigParams, TestRunsData, TestRunsQueryParams } from './models/TestRun';
export declare class APIListRuns extends APIList<TestRun, TestRunsQueryParams, TestRunsData> {
    constructor(parent: APIResourceUser);
    config(): APIResource<TestRunConfig, TestRunsConfigParams, TestRunsConfigData>;
}
export default APIListRuns;
