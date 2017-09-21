/**
 * Created by Emlyn on 6/21/2017.
 */
module.exports = function( grunt ) {
	
	const Kefir = require('kefir');
	const lib = require('../index');
	
	grunt.registerMultiTask("alibabacloud_cdn","Refresh CDN cache on Alibaba CDN",function() {
		
		const done = this.async();
		const options = this.options();
		
		const cdn = lib(options);
		
		const dirs = options.refreshDirs || [];
		const paths = options.refreshPaths || [];
		
		const refreshTasks$ = Kefir.merge([
			cdn.refresh.refreshDir( dirs ),
			cdn.refresh.refreshPath( paths )
		]);

		//# Refresh progress ouput
		refreshTasks$
			.observe({
				value( {path,result} ) {
					grunt.verbose.ok(`Refreshed: ${path}`);
				},
				error( err ) {
					grunt.fail.fatal(err.error);
				},
				end() {
					grunt.log.ok(`Finished`);
					done();
				}
			});

	});
	
};
