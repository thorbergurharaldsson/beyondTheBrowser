# Javascript/React - Beyond the browser

## Exploration

I did a few little project to test the options out.

- [Electron with regular html/js](/htmljs-electron/)
- [React + Electron](/react-electron/)
- [React native](/reactnative/)

### Electron

I have done a project in React native / expo when we did the [Fræ app](https://github.com/thorbergurharaldsson/m4grp) for the group project in module 4, so I wanted to try Electron, I read up on Electron and apperently if used wrong it can be very bad perfomance-wise, Electron apps can also be really resource heavy, needing alot of ram, some examples of that are Microsoft Teams and VS Code when working on many projects at the same time.
Microsoft Teams can be really slow and according to my research it's because Teams is developed in a way that stalls the main script which is a bad practice when using Electron since the whole application is unusable while stalled.
Slack and Discord on the other hand are examples of really well executed Electron app that are not to resource demanding and are quite fast.

### React native

As metioned before I have used React native in the past but I have never used it to create a web application, I've only used it with Expo to create a mobile application.

## Crossplatform app

Since I have only created a mobile app with react native + expo I thought it would be fun to try to create a project that works as a web application, mobile app and desktop application. Since React native doesn't have a desktop application option I deployed the React native web application as a desktop app using Electron.
