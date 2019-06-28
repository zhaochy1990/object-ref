import { expect } from 'chai';
import { ObjectRef } from '../src';

describe('Test Parse', () => {
  it('should parse $ref in object', () => {
    const obj =  {
      orgs: [
        { name: '学校', users: ['$ref:users#1', '$ref:users#2'] },
        { name: '银行', users: ['$ref:users#3'] },
        { name: '保险公司', users: ['$ref:users#4'] }
      ],
      users: [
        { id: '1', name: '教务处老师', authorities: ['$ref:authorities#2', '$ref:authorities#3'] },
        { id: '2', name: '图书管理员', authorities: ['$ref:authorities#2'] },
        { id: '3', name: '金融分析师', authorities: ['$ref:authorities#0', '$ref:authorities#1'] },
        { id: '4', name: '理赔专员', authorities: ['$ref:authorities#4'] }
      ],
      authorities: [
        { id: '1', name: '票据拆分', resources: [1, 2, 3] },
        { id: '2', name: '票据背书', resources: ['e', 'f', 'g'] },
        { id: '3', name: '查看图书列表', resources: ['/aaa'] },
        { id: '4', name: '查看学生成绩', resources: ['/bbb'] },
        { id: '5', name: '开保单', resources: ['/ccc'] },
      ]
    };
    const res = ObjectRef.parse(obj);
  });
});

