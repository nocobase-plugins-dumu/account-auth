import { extend } from '@nocobase/database';

export default extend({
  name: 'users',
  fields: [
    {
      interface: 'input',
      type: 'string',
      name: 'account',
      unique: true,
      uiSchema: {
        type: 'string',
        title: '{{t("Account",{ns:"account-auth"})}}',
        'x-component': 'Input',
      },
    },
  ],
});
