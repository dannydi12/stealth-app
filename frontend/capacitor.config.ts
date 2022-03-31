import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
   appId: 'com.crosswalkapp.app',
   appName: 'crosswalk',
   webDir: 'build',
   bundledWebRuntime: false,
   server: {
      url: 'http://192.168.3.134:3000',
      cleartext: true,
   },
}

export default config
