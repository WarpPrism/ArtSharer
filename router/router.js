var Index = require("../controller/index");
var User = require("../controller/user");
var ArtWork = require("../controller/artwork")
var bodyParser = require('body-parser');

module.exports = function(app) {

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	// Index
	app.get("/", Index.index);
	// User page render
	app.get("/sign_in", User.showSignIn);
	// User operation
	app.post("/handle_sign_in", User.handleSignIn);
	app.post("/handle_sign_up", User.handleSignUp);
	app.post("/handle_user_update", User.handleUpdate);
	app.post("/handle_user_delete", User.handleDelete);

	// ArtWork operation
	app.post("/handle_artwork_create", ArtWork.handleCreate);
	app.post("/handle_artwork_update", ArtWork.handleUpdate);
	app.post("/handle_artwork_delete", ArtWork.handleDelete);
	app.post("/handle_artwork_query", ArtWork.handleQuery);
}
