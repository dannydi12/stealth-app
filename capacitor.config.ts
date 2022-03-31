import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.crosswalkapp.app',
  appName: 'crosswalk',
  webDir: 'build',
  bundledWebRuntime: false /*,

  THIS IS FOR HOT-RELOADING ON IOS

  server: {
    url: 'http://{IP}:{PORT}',
    cleartext: true
  } */
};

export default config;
