`@kne/fastify-setting` 是一个基于 Fastify 的系统设置管理插件，提供设置项的存储、查询和管理功能，支持通过 API 接口进行系统配置的维护。

### 核心功能
- 提供设置项的创建、更新和查询功能
- 支持从 JSON 文件导入初始设置数据
- 基于命名空间隔离的模块化设计
- 与 Sequelize ORM 集成，支持数据库持久化
- 内置权限验证机制

### 使用方法
```javascript
const fastify = require('fastify')();

// 注册插件
fastify.register(require('@kne/fastify-setting'), {
  // 可选配置项
  prefix: '/api/setting',
  dbTableNamePrefix: 't_',
  name: 'setting',
  setting: {}
});

// 启动服务
fastify.listen({ port: 3000 }, (err) => {
  if (err) throw err;
  console.log('Server running on port 3000');
});
```