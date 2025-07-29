const fp = require('fastify-plugin');

module.exports = fp(async (fastify, options) => {
  const { services } = fastify[options.name];
  fastify.post(
    `${options.prefix}/saveOrCreate`,
    {
      onRequest: options.getAuthenticate(),
      schema: {
        summary: '保存系统设置项',
        body: {
          type: 'object',
          properties: {
            settingKey: { type: 'string' },
            settingValue: { type: 'object' }
          },
          required: ['settingKey', 'settingValue']
        }
      }
    },
    async request => {
      return services.setting.saveOrCreate(request.body);
    }
  );

  fastify.get(
    `${options.prefix}/detail`,
    {
      schema: {
        summary: '获取系统设置项'
      }
    },
    async () => {
      return services.setting.detail();
    }
  );
});
