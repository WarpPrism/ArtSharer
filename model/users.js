var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
	'username' : String,
	'password' : String,
	'descript' : String,
	'email' : String,
	'artworks' : Array,
	'followers' : Array,
	'starArtists' : Array,
	'starWorks' : Array,
	'lastActiveTime' : Date
});
mongoose.model('User', userSchema);