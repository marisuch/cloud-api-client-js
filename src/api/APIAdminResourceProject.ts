import {APIResource} from './APIResource'
import {APIResourceProject} from './APIResourceProject'


/**
 * APIAdminResourceProject
 *
 * @class
 * @extends APIResourceProject
 */
export class APIAdminResourceProject extends APIResourceProject {

  // /unarchive
  unarchive () {
    return new APIResource(this).push('unarchive');
  }

}

export default APIAdminResourceProject
