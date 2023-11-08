const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  //Que micros voy a integrar
  remotes: {
    "artvibe-dashboard": "http://localhost:4201/remoteEntry.js",
    "artvibeAdmin": "http://localhost:4202/remoteEntry.js",    
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
