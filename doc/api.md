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