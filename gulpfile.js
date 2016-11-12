var elixir = require('laravel-elixir')
require('laravel-elixir-vue-2')

require('./elixir/svg')
require('./elixir/postcss')

elixir(function(mix) {
    mix.webpack('./src/main.js', './public/js/')
    mix.svg('./src/svg/*.svg', 'public/svg/main.svg')
    mix.postcss('./src/**/*.css', 'public/css/main.css')
})