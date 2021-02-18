'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
//开发环境配置
module.exports = {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  HOST: '"http://localhost"',
  APIURL: '"http://10.101.113.13:9000/apigateway/hmcs"'
  // APIURL: '"http://129.204.32.6:9000/apigateway/hmcs"'
  // APIURL: '"http://10.101.113.54:8090/"'
}




