/* eslint-disable camelcase */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
export default new Router({
  routes: [
    { path: '/', component: resolve => require(['@/pages/campus/index'], resolve) },//首页
    { path: '/my', component: resolve => require(['@/pages/my/my'], resolve) },//我的
    { path: '/set', component: resolve => require(['@/pages/my/set'], resolve) },//设置与帮助
    { path: '/my_doctor', component: resolve => require(['@/pages/my/my_doctor'], resolve) },//我的家庭医生
    { path: '/patient', component: resolve => require(['@/pages/patient/patient'], resolve) },//患者
    { path: '/patient_detail', component: resolve => require(['@/pages/patient/patient_detail'], resolve) },//患者详情
    { path: '/server', component: resolve => require(['@/pages/server/server'], resolve) },//服务
    { path: '/appointment_management', component: resolve => require(['@/pages/server/appointment_management/appointment_management'], resolve) },//预约管理
    { path: '/prescription', component: resolve => require(['@/pages/server/prescription/prescription'], resolve) },//处方
    { path: '/follow_up_visit', component: resolve => require(['@/pages/server/follow_up_visit/follow_up_visit'], resolve) },//随访
    { path: '/chronic_disease_surveillance', component: resolve => require(['@/pages/server/chronic_disease_surveillance/chronic_disease_surveillance'], resolve) },//慢病监护
    { path: '/intelligent', component: resolve => require(['@/pages/server/intelligent_diagnosis/intelligent'], resolve) },//智能诊断列表页
    { path: '/intelligent_diagnosis', component: resolve => require(['@/pages/server/intelligent_diagnosis/intelligent_diagnosis'], resolve) },//智能诊断
    { path: '/health_education', component: resolve => require(['@/pages/server/health_education/health_education'], resolve) },//健康教育
    { path: '/health_education', component: resolve => require(['@/pages/server/health_education/health_education_materials'], resolve) },//健康教育材料
    { path: '/health_education', component: resolve => require(['@/pages/server/health_education/health_education_plan'], resolve) },//健康教育计划
    { path: '/health_education', component: resolve => require(['@/pages/server/health_education/health_education_activities'], resolve) },//健康教育活动
    { path: '/video_interrogation', component: resolve => require(['@/pages/server/video_interrogation/video_interrogation'], resolve) },//视频问诊
    { path: '/equipment', component: resolve => require(['@/pages/server/equipment/equipment'], resolve) },//设备连接
    { path: '/mdt', component: resolve => require(['@/pages/server/mdt/mdt'], resolve) }, //MTD会诊
    { path: '/patient_rollOut', component: resolve => require(['@/pages/patient/patient_rollOut'], resolve) }, //转档
    { path: '/patient_sign', component: resolve => require(['@/pages/patient/patient_sign'], resolve) }, //签约申请
    { path: '/patient_send', component: resolve => require(['@/pages/patient/patient_send'], resolve) }, //签约推送
    { path: '/patient_assistSign', component: resolve => require(['@/pages/patient/patient_assistSign'], resolve) },//协助签约
    { path: '/message_warn', component: resolve => require(['@/pages/my/message_warn'], resolve) },//消息与提醒
    { path: '/account_management', component: resolve => require(['@/pages/my/account_management'], resolve) },//医生顾问
    { path: '/send_record', component: resolve => require(['@/pages/my/send_record'], resolve) },//推送记录
    { path: '/login', component: resolve => require(['@/pages/login'], resolve) },//登录页
    { path: '/organization_detail', component: resolve => require(['@/pages/campus/component/organization_detail'], resolve) },//组织详情页
    { path: '/activity_detail', component: resolve => require(['@/pages/campus/component/activity_detail'], resolve) },//活动详情页
    { path: '/repair_record', component: resolve => require(['@/pages/my/repair_record'], resolve) },
    { path: '/repair_detail', component: resolve => require(['@/pages/my/repair_detail'], resolve) },
    { path: '/repair_lists', component: resolve => require(['@/pages/my/repair_lists'], resolve) },
    { path: '/lost', component: resolve => require(['@/pages/my/lost'], resolve) },
  ]
})
