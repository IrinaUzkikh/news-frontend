module.exports = {
  extends: 'airbnb-base',
  rules: {
    'no-underscore-dangle': [
      'error', { allow: ['_id'] }],
    'global-require': 0,
    'no-console': 0,
    'no-undef': 0,
  },
};
