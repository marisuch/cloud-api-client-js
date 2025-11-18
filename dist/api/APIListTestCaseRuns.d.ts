import { NoData } from './models/HTTP';
import APIEntity from './APIEntity';
import { TestCaseRun } from './models/TestCaseRun';
import APIList, { APIListQuery } from './APIList';
import { SessionQueryParams } from './models/DeviceSession';
export declare class APIListTestCaseRuns<Q extends APIListQuery = SessionQueryParams> extends APIList<TestCaseRun, Q, NoData> {
    constructor(parent: APIEntity);
}
export default APIListTestCaseRuns;
