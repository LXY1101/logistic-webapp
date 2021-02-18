import { commonPromise } from '../../http'
import {
  hmcsBpRecord_URL
} from '../global'

// 血压血压列表
export const getBpRecord = (data) => commonPromise(data, hmcsBpRecord_URL, 'post');

