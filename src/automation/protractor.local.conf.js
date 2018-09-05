const {common_config, chromeCapabilities} = require('./common_config');

exports.config = Object.assign({}, common_config, {
    capabilities: chromeCapabilities,
    //specs: ['features/ilead-features/func_test.feature']
    specs: ['features/ilead-features/reg_and_login.feature']
    //specs: ['features/ilead-features/*.feature']
});
