import {API} from "../API";
import {APIResourceDeviceGroup} from "./APIResourceDeviceGroup";
import {APIList} from "./APIList";
import APIResource from "./APIResource";


describe('APIResourceDeviceGroup', () => {
  const cloudUrl = 'https://cloud.bitbar.com';
  let service: APIResourceDeviceGroup;
  let api: API;

  beforeEach(() => {
    api = new API({
      baseURL: '',
      cloudUrl
    });
    service = new APIResourceDeviceGroup(api, 1);
  });

  it('should initialize proper endpoint path', () => {
    expect(service.toUrl()).toEqual('/device-groups/1');
  });

  it('should throw error if resource ID is missing', () => {
    expect(() => new APIResourceDeviceGroup(api, null as any)).toThrow(new Error('Resource ID cannot be null!'));
  });

  describe('@devices', () => {
    it('should initialize proper endpoint path', () => {
      const call = service.devices();
      expect(call).toBeInstanceOf(APIList);
      expect(call.toUrl()).toEqual('/device-groups/1/devices');
    });
  });

  describe('@device', () => {
    it('should initialize proper endpoint path', () => {
      const call = service.device(1);
      expect(call).toBeInstanceOf(APIResource);
      expect(call.toUrl()).toEqual('/device-groups/1/devices/1');
    });

    it('should throw error if resource ID is nulll', () => {
      expect(() => service.device(null as any)).toThrow(new Error('Resource ID cannot be null!'));
    });
  });

  describe('@selectors', () => {
    it('should initialize proper endpoint path', () => {
      const call = service.selectors();
      expect(call).toBeInstanceOf(APIList);
      expect(call.toUrl()).toEqual('/device-groups/1/selectors');
    });
  });

  describe('@selector', () => {
    it('should initialize proper endpoint path', () => {
      const call = service.selector(1);
      expect(call).toBeInstanceOf(APIResource);
      expect(call.toUrl()).toEqual('/device-groups/1/selectors/1');
    });

    it('should throw error if resource ID is nulll', () => {
      expect(() => service.selector(null as any)).toThrow(new Error('Resource ID cannot be null!'));
    });
  });

  describe('@share', () => {
    it('should initialize proper endpoint path', () => {
      const call = service.share();
      expect(call).toBeInstanceOf(APIResource);
      expect(call.toUrl()).toEqual('/device-groups/1/share');
    });
  });

});