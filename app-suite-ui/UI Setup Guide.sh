## Create workspace
npx create-nx-workspace@latest app-suite-ui --preset=apps
cd app-suite-ui

## Install Nx Plugins
npm i -g nx	## Install Nx globally
nx add @nx/react
nx add @nx/expo
nx add @nx/js
nx add @nx/module-federation

## Create Shell Web-App and remote app in single command
npx nx g @nx/react:host apps/web_shell_app --remotes=web_app_1 --bundler=webpack

## Run web shell app 
npx nx serve web_shell_app --verbose
## Run web app individually for remote lazy loading
npx nx serve web_app_1 --verbose

## In future create new remote app, but need to add details manually into shell web-app
npx nx g @nx/react:remote apps/web_app_2 --bundler=webpack

## Creating react web library which can contain UI elements (Here we are not using any bundler, as we don't want to create publishable library package, instead this library will be only used in current monorepo only. If there is any library which need to published then "vite" or "rollup" bundler can be used.
npx nx g @nx/react:library packages/web_common --bundler=none --importPath=@app_suite/web_common

## Create js library for having common library ts or js code, which can be used anywhere
npx nx g @nx/js:library modules/app1_module --bundler=none --importPath=@app_suite/app1_module
npx nx g @nx/js:library packages/common --bundler=none --importPath=@app_suite/common

### Adding tailwind setup to all web projects
npx nx g @nx/react:setup-tailwind web_shell_app
npx nx g @nx/react:setup-tailwind web_app_1
npx nx g @nx/react:setup-tailwind web_common


### Mobile Application setup
## Create React Native mobile app using Expo for faster development
npx nx g @nx/expo:app apps/mobile_app_1

## Run mobile Application
cd apps/mobile_app_1
npx expo start --clear # Scan QR code in Expo Go mobile application

## Creating react native mobile common library which can contain UI elements 
npx nx g @nx/expo:lib packages/mobile_common --importPath=@app_suite/mobile_common






