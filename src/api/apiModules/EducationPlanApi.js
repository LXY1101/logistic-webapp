import { commonPromise } from '../../http'
import {
  EducationPlan_URL,
  EducationPlanDetail_URL
} from '../global'


// 健康计划
export const getEduPlanList = (data) => commonPromise(data, EducationPlan_URL, 'get');
//健康计划详情
export const getEducationPlanDetail = (data) => commonPromise(data, EducationPlanDetail_URL, 'get');

