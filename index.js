 var app = module.exports = require("koa")();

app.use(function *(){
	console.log("Got mail");
	this.body = "KOA says hi";
});

var port = process.env.PORT || (process.argv[2] || 3000)

if(!module.parent){ 
app.listen(port);

}
console.log("Application has started git-test");