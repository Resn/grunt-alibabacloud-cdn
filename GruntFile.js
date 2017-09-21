/**
 * Created by Emlyn on 6/21/2017.
 */
module.exports = function( grunt ) {
	
	const config = require('./test/config.json');
	
	grunt.initConfig({
		"alibabacloud_cdn": {
			"default": {
				"options": Object.assign({
					"accessKeyId": '在阿里云OSS申请的 accessKeyId',
					"appSecret": '在阿里云OSS申请的 secretAccessKey',
				},config.auth),
				"refreshDirs": [],
				"refreshPaths": []
			}
		}
	});
	
	grunt.loadTasks('tasks');
	
	grunt.registerTask("default","alibabacloud_cdn");
	
};
