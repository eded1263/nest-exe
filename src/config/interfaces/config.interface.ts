export interface IConfig {
  env: 'Production' | 'Development' | 'QA';
  version: string;
  port: number;

  webadmin: {
    username: string;
    password: string;
  };

  mqtt_server: {
    host: string;
    port: number;
    username: string;
    password: string;
    timeout: number;
    keepalive: number;
    reconnectPeriod: number;
    protocol: 'mqtts' | 'mqtt';
    protocolVersion: number;
    rejectUnauthorized: boolean;
  };
}
