import { commonPromise } from '../../http'
import {
  EducationMaterials_URL,
  EducationMaterialsDetail_URL
} from '../global'


// 健康材料
export const getEduMaterialsList = (data) => commonPromise(data, EducationMaterials_URL, 'get');
//健康材料详情
export const getEduMaterialsDetail = (data) => commonPromise(data, EducationMaterialsDetail_URL, 'get');



