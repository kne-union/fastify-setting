const fp = require('fastify-plugin');
const path = require('node:path');

module.exports = fp(async (fastify, options) => {
  options = Object.assign(
    {},
    {
      prefix: '/api/setting',
      dbTableNamePrefix: 't_',
      name: 'setting',
      setting: {},
      getAuthenticate: () => {
        if (!fastify.account) {
          console.warn('fastify-account plugin not found.please set the getAuthenticate method');
          return [];
        }
        const { user, admin } = fastify.account.authenticate;
        return [user, admin];
      }
    },
    options
  );

  fastify.register(require('@kne/fastify-namespace'), {
    options,
    name: options.name,
    modules: [
      ['controllers', path.resolve(__dirname, './libs/controllers')],
      [
        'models',
        await fastify.sequelize.addModels(path.resolve(__dirname, './libs/models'), {
          prefix: options.dbTableNamePrefix,
          modelPrefix: options.name
        })
      ],
      ['services', path.resolve(__dirname, './libs/services')]
    ]
  });
});
