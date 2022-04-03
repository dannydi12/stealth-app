import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
   appId: 'com.crosswalkapp.app',
   appName: 'crosswalk',
   webDir: 'build',
   bundledWebRuntime: false,
   /*
   server: {
      url: 'http://192.168.2.18:3000',
      cleartext: true,
   },
   */
   /*
   server: {
    hostname: 'localhost',
    iosScheme: 'https',
    androidScheme: 'https',
  },
  */
   plugins: {
      Keyboard: {
        resize: 'body',
        style: 'dark',
      },
   },
}

export default config
