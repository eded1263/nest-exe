import { IConfig } from '../interfaces/config.interface';

const config: IConfig = {
  env: 'QA',
  version: '1.5.4',
  port: 80,
  webadmin: {
    username: 'admin',
    password: 'Netzsch@2050'
  },
  mqtt_server: {
    host: 'iot-staging.get-notify.com',
    port: 8893,
    username: 'edge',
    password: 'w[g~-`S}\\^%g4wkm',
    timeout: 10,
    keepalive: 60,
    reconnectPeriod: 1000,
    protocol: 'mqtts',
    protocolVersion: 5,
    rejectUnauthorized: false
  }
};

export default config;
