var gulp = require("gulp"),
	webpack = require("gulp-webpack"),
	webpackConfig = require("./webpack.config"),
	livereload = require("gulp-livereload");

gulp.task("webpack", function() {
	gulp.src("./")
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest("./public/dist/"))
		.pipe(livereload());
});

gulp.task("webpack2", function() {
	gulp.src('./')
		.pipe(webpack({
			watch: true,
			entry: {
				"editor": __dirname + '/public/components/editor.js'
			},
			output: {
				path: __dirname + 'public/dist',
				filename: '[name].bundle.js',
			},
			module: {
				loaders: [
					{ test: /\.css$/, loader: 'style!css' },
					{ test: /\.js$/, loader: 'babel-loader!jsx-loader?harmony', exclude: /node_modules/ },
					{ test: /\.svg$/, loader: 'file-loader', exclude: /node_modules/ },
					{ test: /\.eot$/, loader: 'file-loader', exclude: /node_modules/ },
					{ test: /\.woff$/, loader: 'file-loader', exclude: /node_modules/ },
					{ test: /\.ttf$/, loader: 'file-loader', exclude: /node_modules/ }
				],
				postLoaders: [
					{ loader: 'transform?brfs' }
				]
			},
			resolve: {
				extensions: ['', '.js', '.jsx']
			}
		}))
		.pipe(gulp.dest('./public/dist'))
		.pipe(livereload());
});

gulp.task("watch", function() {
	livereload.listen();
});

gulp.task("default", function () {
	gulp.start("webpack", "webpack2", "watch");
});
