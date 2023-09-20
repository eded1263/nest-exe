import { IConfig } from '../interfaces/config.interface';

const config: IConfig = {
  env: 'Production',
  version: '1.5.4',
  port: 80,
  webadmin: {
    username: 'admin',
    password: 'Netzsch@2050'
  },
  mqtt_server: {
    host: 'iot.get-notify.com',
    port: 8883,
    username: 'edge',
    password: 'CQ-.e2jUY8bpjVdbR4X*7wyEhC',
    timeout: 10,
    keepalive: 60,
    reconnectPeriod: 1000,
    protocol: 'mqtts',
    protocolVersion: 5,
    rejectUnauthorized: false
  }
};

export default config;
