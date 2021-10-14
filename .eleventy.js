module.exports = function(eleventyConfig) {

    eleventyConfig.addShortcode("discount", function(originalPrice, discount) {

        var discountedPrice =  originalPrice - (originalPrice * discount) / 100;
        return discountedPrice.toFixed(2);
    });

    eleventyConfig.addShortcode("twoDecimalPoints", function(price) {
        return price.toFixed(2);
    });
  };