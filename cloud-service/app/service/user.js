'use strict';

const cloudbase = require('@cloudbase/node-sdk');
const Service = require('egg').Service;


const app = cloudbase.init({
  env: '你的环境id',
  secretId: '你的腾讯云账号secretId',
  secretKey: '你的腾讯云账号secretKey',
});

// // 1. 获取数据库引用
const db = app.database();

const main = async () => {
  // 2. 构造查询语句
  const res = await db
    // collection() 方法获取一个集合的引用
    .collection('你的云数据库集合名字')
    // where() 方法传入一个 query 对象，数据库返回集合中字段等于指定值的 JSON 文档。
    .where({})
    // get() 方法会触发网络请求，往数据库取数据
    .get();

  return {
    res,
  };
};


class UserService extends Service {
  async find() {
    const user = await main();
    return user;
  }
}

module.exports = UserService;