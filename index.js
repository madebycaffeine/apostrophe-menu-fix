var _ = require('underscore');
var async = require('async');

module.exports = factory;

function factory(options, callback) {
  return new Construct(options, callback);
}

function Construct(options, callback) {
  var apos = options.apos;
  var app = options.app;
  var pages = options.pages;
  var self = this;

  self.loader = function(req, callback){
  	// we want to fetch the menus since apostrophe won't do 
	// this for us by default.
  	
		req.extras.menu = {};		
		
		async.waterfall([
			function(next){
				apos.getPage(req, '/', {}, function(err, page){
					console.log('home page', page);
					next(err, page);
				});	
			},
			function(home, next){
				pages.getDescendants(req, home, {orphan: false}, { depth: 2 }, function (err, pages) {
					req.extras.menu = pages;
					return next(err);
				});
			}
		], function(err){
			return callback(null);
		});

  };

  // Invoke the callback. This must happen on next tick or later!
  return process.nextTick(function() {
    return callback(null);
  });
}

// Export the constructor so others can subclass
factory.Construct = Construct;