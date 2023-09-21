/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-var */
import { exec } from 'child_process';
import { GUIDGeneratorResult } from '../interfaces/guid-genereator-result.interface';
import { MD5 } from 'crypto-js';

export const guidMacOsGenerator: () => Promise<GUIDGeneratorResult> = async () => {
  return new Promise((resolve, reject) =>
    exec(
      "/usr/sbin/diskutil info / | /usr/bin/awk '$0 ~ /UUID/ { print $3 }'",
      function (error, stdout, stderr) {
        if (error) {
          reject(stderr);
        }
        const result: GUIDGeneratorResult = Object();
        result.platform = process.platform;
        result.method = "/usr/sbin/diskutil info / | /usr/bin/awk '$0 ~ /UUID/ { print $3 }'";
        let sn = stdout.trim().replace('\nPartition', '');
        result.method_result = sn;
        result.md5_param = sn.replace(/[^a-z0-9]/gi, '') + process.platform;
        result.md5_result = MD5(sn.replace(/[^a-z0-9]/gi, '') + process.platform)
          .toString()
          .toUpperCase();
        sn =
          'M' +
          MD5(sn.replace(/[^a-z0-9]/gi, '') + process.platform)
            .toString()
            .toUpperCase()
            .substring(0, 9);
        result.gatewayId = sn;
        resolve(result);
      }
    )
  );
};
