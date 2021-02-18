import { commonPromise } from '../../http'
import {
  EducationActivity_URL,
  EduActivityDetail_URL
} from '../global'


// 健康活动
export const getEduActivityList = (data) => commonPromise(data, EducationActivity_URL, 'get');
//健康活动详情
export const getEduActivityDetail = (data) => commonPromise(data, EduActivityDetail_URL, 'get');
