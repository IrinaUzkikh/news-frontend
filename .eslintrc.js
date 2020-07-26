module.exports = {
  extends: 'airbnb-base',
  rules: {
    'no-underscore-dangle': [
      'error', { allow: ['_id'] }],
    'global-require': 0,
    'no-console': 0,
    'no-alert': 0,
    'no-undef': 0,
    'no-param-reassign': 0,
    'no-else-return': 0,
    'class-methods-use-this': 0,
  },
};
