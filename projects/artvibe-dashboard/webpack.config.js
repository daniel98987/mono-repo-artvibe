const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'artvibe-dashboard',

  exposes: {
     // Preferred way: expose corse-grained routes
     "./routes": "./projects/artvibe-dashboard/src/app/app.routing.ts"
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto", eager:true}),
  }
});
