import { composePlugins, withNx } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/module-federation/webpack.js';

import baseConfig from './module-federation.config';

const config = {
  ...baseConfig,
  output: {
    publicPath: '/app1/',
  },
};

// Nx plugins for webpack to build config object from Nx options and context.
/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config, { dts: false }),
  (webpackConfig: any) => {
    webpackConfig.output = { 
      ...(webpackConfig.output ?? {}),     
      publicPath: '/app1/',   // <-- serve the remote under /app1/
      clean: true,
    };
    
    // Configure dev server to serve assets from /app1/ path
    webpackConfig.devServer = {
      ...(webpackConfig.devServer ?? {}),
      historyApiFallback: {
        rewrites: [
          {
            from: /^\/app1\//,
            to: function(context: any) {
              return context.parsedUrl.pathname.replace('/app1/', '/');
            },
          },
        ],
      },
    };
    
    return webpackConfig;
  }
);
