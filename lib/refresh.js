/**
 * Created by Emlyn on 6/6/2017.
 */
const Kefir = require('kefir');

module.exports = function ( cdn ) {
	
	return {
		
		/**
		 * Refresh an entire directory
		 * @param dirs Array of directories to refresh
		 */
		refreshDir( dirs ) {
			
			return Kefir.constant(dirs)
				.flatten()
				.map( dir => ({
					ObjectPath: dir,
					ObjectType: 'Directory'
				}) )
				.flatMap(
					obj => Kefir.fromPromise( cdn.RefreshObjectCaches( obj ) )
						.map( result => ({
							path: obj.ObjectPath,
							result
						}))
						.mapErrors( error => ({
							path: obj.ObjectPath,
							error
						}))
				);
			
		},
		
		/**
		 * Refresh a CDN path
		 * @param paths Array of paths to refresh
		 */
		refreshPath( paths ) {
			
			return Kefir.constant(paths)
				.flatten()
				.map( path => ({
					ObjectPath: path,
					ObjectType: 'File'
				}) )
				.flatMap(
					obj => Kefir.fromPromise( cdn.RefreshObjectCaches( obj ) )
						.map( result => ({
							path: obj.ObjectPath,
							result
						}))
						.mapErrors( error => ({
							path: obj.ObjectPath,
							error
						}))
				);
			
		}
		
	}
	
};