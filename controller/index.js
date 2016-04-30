

// index page
exports.showIndex = function(req, res) {
	if (req.session.username) {
		//console.log(req.session);
		res.render("index", {username:req.session.username});
	} else {
		res.render("index");
	}
};