module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        "md",
        "njk", // css is not yet a recognized template extension in Eleventy
        "jpg",
        "png",
        "css",
        "svg",
        "pdf",
        "ejs",
        "woff2",
        "html"
      ]);
    return {
        dir: { input: 'src', output: '_site', data: '_data' },
    };
};