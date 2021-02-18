import { commonPromise } from '../../http'
import {
  visitList_URL
} from '../global'

// 随访
export const getVisitList = (data) => commonPromise(data, visitList_URL, 'get');
