var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  console.log('启动成功');
	// gulp.src('client/js/**/*.js') // 匹配 'client/js/somedir/somefile.js' 并且将 `base` 解析为 `client/js/`
	// .pipe(minify())
	// .pipe(gulp.dest('build'));  // 写入 'build/somedir/somefile.js'

	gulp.src(['a/*.html'],['js/*.js'])//globas - 匹配文件路径
  	// .pipe(minify())
  	.pipe(gulp.dest('b'));  // 写入 'build/js/somedir/somefile.js'
});