import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { MqttClient, connect } from 'mqtt';

@Injectable()
export class MqttService implements OnModuleInit {
  private mqttClient: MqttClient;

  constructor(private readonly configService: ConfigService) {}

  private baseTopic: string;

  onModuleInit() {
    const config = this.configService.getConfig();
    const host = config.mqtt_server.host;
    const port = config.mqtt_server.port;
    const clientId = this.configService.getClientId();
    const connectUrl = `mqtt://${host}:${port}`;
    this.baseTopic = 'notify/' + config.mqtt_server.username + '/' + clientId + '/';

    this.mqttClient = connect(connectUrl, {
      clientId,
      keepalive: config.mqtt_server.keepalive,
      protocol: config.mqtt_server.protocol,
      connectTimeout: config.mqtt_server.timeout,
      protocolVersion: config.mqtt_server.protocolVersion,
      username: config.mqtt_server.username,
      password: config.mqtt_server.password,
      reconnectPeriod: config.mqtt_server.reconnectPeriod
    });

    this.mqttClient.on('connect', function () {
      console.log('Connected to MQTT');
    });

    this.mqttClient.on('error', function () {
      console.log('Error in connecting to MQTT');
    });
  }

  publish(topic: string, payload: string): string {
    console.log(`Publishing to ${topic}`);
    this.mqttClient.publish(topic, payload);
    return `Publishing to ${topic}`;
  }

  subscribe(topic: string, qos: 0 | 1 | 2) {
    this.mqttClient.subscribe(topic, { qos });
  }

  getBaseTopic() {
    return this.baseTopic;
  }
}
