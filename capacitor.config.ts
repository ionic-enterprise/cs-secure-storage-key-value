import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'star-wars',
  webDir: 'www',
  bundledWebRuntime: false,
  backgroundColor: '#000000',
  plugins: {
    SplashScreen: {
      androidScaleType: 'FIT_CENTER'
    }
  }
};

export default config;
