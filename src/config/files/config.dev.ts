import { IConfig } from '../interfaces/config.interface';

const config: IConfig = {
  env: 'Development',
  version: '1.5.4',
  port: 8080,
  webadmin: {
    username: 'admin',
    password: 'Netzsch@2050'
  },
  mqtt_server: {
    username: null,
    password: null,
    host: 'localhost',
    port: 1883,
    timeout: 10,
    keepalive: 60,
    reconnectPeriod: 1000,
    protocol: 'mqtt',
    protocolVersion: 5,
    rejectUnauthorized: false
  }
};

export default config;
