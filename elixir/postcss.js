var gulp = require('gulp')
var postcss = require('gulp-postcss')

Elixir.extend('postcss', function(src, output) {
    var paths = new Elixir.GulpPaths().src(src).output(output)
    new Elixir.Task('postcss', function($) {
        return (
            gulp
                .src(this.src.path)
                .pipe(this.initSourceMaps())
                .pipe(postcss([
                    require('postcss-simple-vars')({
                        variables: require('../src/styles/variables')
                    }),
                    require('postcss-font-magician')(),
                    require('postcss-if-media')(),
                    /*
                    require('postcss-autoreset')({
                        reset: require('../src/styles/reset'),
                        rulesMatcher: 'bem'
                    }),
                    require('postcss-safe-important')()
                    */
                ])) 
                .on('error', this.onError())
                .pipe(this.concat(paths.output.name))
                .pipe(this.minify())
                .on('error', this.onError())
                .pipe(this.writeSourceMaps())
                .pipe(this.saveAs(gulp))
                .pipe(this.onSuccess())
        )
    }, paths).watch(paths.src.path)
})