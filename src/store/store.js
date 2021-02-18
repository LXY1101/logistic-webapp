import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        products:[
            {id:'1',No:'RDRYM20190720123428', doctorName: '刘振',result:'高血压',time:'2019-07-10 12：45',type:'first'},
            {id:'2',No:'RDRYM20190720123428', doctorName: '张三',result:'高血压',time:'2019-07-10 12：45',type:'first'},
            {id:'3',No:'RDRYM20190720123428', doctorName: '李四',result:'高血压',time:'2019-07-10 12：45',type:'first'},
            {id:'4',No:'RDRYM20190720123428', doctorName: '王五',result:'高血压',time:'2019-07-10 12：45',type:'second'},
            {id:'5',No:'RDRYM20190720123428', doctorName: '王五',result:'高血压',time:'2019-07-10 12：45',type:'second'},
            {id:'6',No:'RDRYM20190720123428', doctorName: '王五',result:'高血压',time:'2019-07-10 12：45',type:'second'},
            {id:'7',No:'RDRYM20190720123428', doctorName: '王五',result:'高血压',time:'2019-07-10 12：45',type:'second'},
            {id:'8',No:'RDRYM20190720123428', doctorName: '王五',result:'高血压',time:'2019-07-10 12：45',type:'third'},
        ]
    }
})