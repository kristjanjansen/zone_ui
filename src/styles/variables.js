_ = require('lodash')

// General

var unit = 'rem'

// Colors

var colors = {
    green: 'hsl(129, 52%, 44%)',
    blue: 'hsl(217, 93%, 63%)',
    white: 'hsl(0, 100%, 100%)',
    grayLighter: 'hsl(0, 0%, 90%)',
    grayLight: 'hsl(0, 0%, 60%)',
    gray: 'hsl(0, 0%, 50%)',
    grayDark: 'hsl(0, 0%, 40%)',
    red: 'hls(0, 100%, 50%)',
    orange: 'hls(45, 100%, 50%)'
}

// Fonts

var textFontFamily = 'Rubik, "Open Sans", sans-serif'

var textFontSizes = {
    Sm: 0.9, Md: 1, Lg: 1.4, Xl: 2
}

var textFonts =  _.chain(textFontSizes)
    .mapKeys((value, key) => 'fontText'  + key)
    .mapValues((value, key) =>`normal ${value}${unit} / 100% ${textFontFamily}`)
    .value()

var lineHeights = {
    lineHeightSm: '100%',
    lineHeightMd: '140%',
}

var codeFonts = {
    fontCodeMd: `normal ${textFontSizes.Md}${unit} / ${lineHeights.lineHeightMd} monospace`
}

// Spacing

var spacingSizes = {
    Xs: 0.5, Sm: 0.7, Md: 0.8, Lg: 0.9
}

var paddings = _.chain(spacingSizes)
    .mapKeys((value, key) => 'padding' + key)
    .mapValues(value => value + unit)
    .value()

var margins = _.chain(spacingSizes)
    .mapKeys((value, key) => 'margin' + key)
    .mapValues(value => value + unit)
    .value()

// Sizes

var iconSizes = _.chain({ sm: 1, md: 2, lg: 3 })
    .mapValues(value => value + unit)
    .value()

// Borders

var borders = {
    borderSm: `1px solid ${colors.grayLighter}`,
    borderMd: `1px solid ${colors.grayLight}`
}

var borderRadiuses = {
    borderRadiusMd: '5px' 
}

module.exports = _.assign(
    { colors }, _.mapKeys(colors, (value, key) => _.kebabCase(key)),
    { textFonts }, _.mapKeys(textFonts, (value, key) => _.kebabCase(key)),
    { codeFonts }, _.mapKeys(codeFonts, (value, key) => _.kebabCase(key)),
    { lineHeights }, _.mapKeys(lineHeights, (value, key) => _.kebabCase(key)),
    { paddings }, _.mapKeys(paddings, (value, key) => _.kebabCase(key)),
    { margins }, _.mapKeys(margins, (value, key) => _.kebabCase(key)),
    { iconSizes },
    { borders }, _.mapKeys(borders, (value, key) => _.kebabCase(key)),
    { borderRadiuses }, _.mapKeys(borderRadiuses, (value, key) => _.kebabCase(key))
)