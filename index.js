/**
 * Created by Emlyn on 6/6/2017.
 */
const cdnSDK = require('ali-cdn-sdk');
const refresh = require('./lib/refresh');

module.exports = function( config ) {
	
	const cdnConfig = Object.assign({
		endpoint: 'https://cdn.aliyuncs.com',
		apiVersion: '2014-11-11',
	},config);
	
	const cdn = new cdnSDK(cdnConfig);
	
	return {
		refresh: refresh(cdn)
	};
};