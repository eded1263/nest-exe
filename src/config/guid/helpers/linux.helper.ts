import { exec } from 'child_process';
import { GUIDGeneratorResult } from '../interfaces/guid-genereator-result.interface';
import { MD5 } from 'crypto-js';

export const guidLinuxGenerator: () => Promise<GUIDGeneratorResult> = async () => {
  return new Promise((resolve, reject) =>
    exec('cat /sys/block/mmcblk0/device/cid', function (error, stdout, stderr) {
      if (error) {
        reject(stderr);
      }
      const result: GUIDGeneratorResult = Object();
      result.platform = process.platform;
      result.method = 'cat /sys/block/mmcblk0/device/cid';
      let sn = stdout.trim();
      result.method_result = sn;
      result.md5_param = sn.replace(/[^a-z0-9]/gi, '') + process.platform;
      result.md5_result = MD5(sn.replace(/[^a-z0-9]/gi, '') + process.platform)
        .toString()
        .toUpperCase();
      sn =
        'L' +
        MD5(sn.replace(/[^a-z0-9]/gi, '') + process.platform)
          .toString()
          .toUpperCase()
          .substring(0, 9);
      result.gatewayId = sn;
      resolve(result);
    })
  );
};
