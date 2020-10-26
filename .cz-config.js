'use strict';

module.exports = {
  types: [
    { value: 'feat', name: '✨ 功能: 添加新的功能' },
    { value: 'fix', name: '🐞 修复: 修复一个或多个Bug' },
    { value: 'docs', name: '📚 文档: 文档变更' },
    {
      value: 'style',
      name: '💅 代码格式: 代码风格更改(空格,分号等)',
    },
    {
      value: 'refactor',
      name: '🛠 重构: 重构一个功能,业务模块',
    },
    {
      value: 'perf',
      name: '性能:  提升代码运行效率以及性能',
    },
    { value: 'test', name: '🏁 测试: 新加测试用例,或更改已有测试' },
    { value: 'revert', name: '⏪ 回滚: 代码回滚到某个版本' },
  ],
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: '表示此次更改的范围(可选):',
    subject: '短说明(主体)(可选):\n',
    body: '长说明,使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue bug，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?',
  },
  scopes: [
    {
      name: '用户模块',
    },
    {
      name: '权限模块',
    },
    {
      name: '其它',
    },
  ],

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // limit subject length
  subjectLimit: 100,
};
