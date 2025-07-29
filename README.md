
# fastify-setting


### 描述

用于管理系统设置


### 安装

```shell
npm i --save @kne/fastify-setting
```


### 概述

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

### 示例

#### 示例代码



### API

#### 设置管理接口

| 接口名称 | 请求方法 | 请求路径 | 权限要求 | 描述 |
|---------|---------|---------|---------|------|
| 保存设置 | POST | `/api/setting/saveOrCreate` | 需要认证 | 创建或更新系统设置项 |
| 获取设置 | GET | `/api/setting/detail` | 公开访问 | 获取所有系统设置项 |

#### 保存设置接口

**请求参数**

| 参数名 | 类型 | 是否必填 | 描述 |
|-------|------|---------|------|
| settingKey | string | 是 | 设置项键名 |
| settingValue | object | 是 | 设置项值 |

**请求示例**
```json
{
  "settingKey": "siteTitle",
  "settingValue": "我的系统"
}
