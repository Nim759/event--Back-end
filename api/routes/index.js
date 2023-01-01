var express = require('express');

var router = express.Router();

router.get('/',function(req,res){
    res.send('welcome to API');
});


require('./AuthRoutes')(router);
require('./EventRoutes')(router);
require('./CampsitesRoute')(router);




//require('./CustomerRoutes')(router);
//require('./CampsiteOwnerRoutes')(router);

module.exports.router = router;

