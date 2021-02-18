/**
 * 导出API模块
 * 必须加上注释
 */

import * as VisitApiModules from './apiModules/VisitApi';// 医生端接口
import * as EducationPlanApiModules from './apiModules/EducationPlanApi';// 健康计划
import * as EducationActivityApiModules from './apiModules/EducationActivityApi';// 健康活动
import * as EducationMaterialsApiModules from './apiModules/EducationMaterialsApi';// 健康材料
import * as NursingApiModules from './apiModules/NursingApi';// 慢病管理
export {
    VisitApiModules,
    EducationPlanApiModules,
    EducationActivityApiModules,
    EducationMaterialsApiModules,
    NursingApiModules
}

