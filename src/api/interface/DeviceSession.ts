import {APIResource} from '../APIResource';
import {DeviceSessionCommon} from './DeviceSessionCommon';

export interface DeviceSession extends DeviceSessionCommon {
  abort (): APIResource;
  retry (): APIResource;
}

export default DeviceSession;
