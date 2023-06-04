const StyleDictionary = require('style-dictionary');
StyleDictionary.registerTransform({
  name: 'my-typography',
  type: 'value',
  transitive: true,
  matcher: token => token.type === 'typography',
  transformer: (token) => {
    const { value } = token
    return `${value.fontWeight} ${value.fontSize}/${value.lineHeight} ${value.fontFamily}, sans-serif`
  }
});

StyleDictionary.registerTransform({
  name: 'my-borders',
  type: 'value',
  transitive: true,
  matcher: token => token.type === 'border',
  transformer: (token) => {
    const { value } = token
    return `${value.width} solid ${value.color}`
  }
});

StyleDictionary.registerTransform({
  name: 'my-shadows',
  type: 'value',
  transitive: true,
  matcher: token => token.type === 'boxShadow',
  transformer: (token) => {
    const { value } = token
    return `${value.x} ${value.y} ${value.blur} ${value.color}`
  }
});

module.exports = {
  source: ['tokens/transformedTokens.json'],
  platforms: {
    css: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hex', 'size/rem', 'my-typography', 'my-borders', 'my-shadows'],
      transformGroup: "css",
      buildPath: "src/styles/abstracts/",
      files: [
        {
          destination: "_figma_variables.css",
          format: "css/variables",
          options: {
            selector: 'body'
          }
        }
      ]
    }
  }
};
