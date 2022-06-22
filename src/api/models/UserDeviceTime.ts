import {CollectionQueryParams} from "../APIList";
import {DeviceSessionType} from "./DeviceSession";

export type UserDeviceTime = BasicDeviceTime & {
  billableTime: number;
  createTime: number;
  endTime: number;
  freeTime: number;
  type: DeviceSessionType;
  userId: number;
  userName: string;
};

export type BasicDeviceTime = {
  deviceTime: number;
  id: number;
}

export interface DeviceTimeParams extends CollectionQueryParams {
  forWholeAccount: boolean;
}