import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.crosswalkapp.app',
  appName: 'crosswalk',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: `http://${process.env.IP_ADDR}:3000`,
    cleartext: true
  }
}

export default config
