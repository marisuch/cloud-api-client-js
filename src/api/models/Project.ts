import {TestRunQueryParams} from '../APIListRuns';
import {OsType} from './Enum';

export enum ArchivingStrategy {
  NEVER = 'NEVER',
  DAYS = 'DAYS',
  RUNS = 'RUNS'
}

export type Project = {
  archiveTime: number;
  archivingItemCount: number;
  archivingStrategy: ArchivingStrategy;
  common: boolean;
  createTime: number;
  description: string;
  id: number;
  name: string;
  osType: OsType;
  readOnly: boolean;
  rowIndex: number;
  shared: boolean;
  sharedByEmail: string;
  sharedById: number;
  sharedWithCaller: boolean;
  successRatio: number;
  userEmail: string;
  userId: number;
}

export type UserProjectData = Pick<Project, 'name'>;

export interface UserProjectQueryParams extends TestRunQueryParams {
  showStatistics: boolean;
}

