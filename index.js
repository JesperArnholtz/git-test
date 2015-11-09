var app = module.exports = require("koa")();

app.use(function *(){
	this.body = "KOA says hi";
});

var port = process.env.PORT || (process.argv[2] || 3000)

app.listen(port);
console.log("Application has started git-test");