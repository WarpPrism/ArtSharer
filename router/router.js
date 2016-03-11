var Index = require("../controller/index");
var User = require("../controller/user");
var bodyParser = require('body-parser');

module.exports = function(app) {

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	// Index
	app.get("/", Index.index);

	// User
	app.get("/sign_in", User.showSignIn);
	/*app.get("/signup", User.showSignUp);*/
	app.post("/handle_sign_in", User.handleSignIn);
}
