module.exports = {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    }
  };

  module.exports = {
    includeDoctype: true,
}
module.exports = {
  i18n: {
    localeDetection: false,
  },
}

  module.exports = {
    future: {
      webpack5: true

    
    }
    }
  





  

