import { exec } from 'child_process';
import { GUIDGeneratorResult } from '../interfaces/guid-genereator-result.interface';
import { MD5 } from 'crypto-js';

export const guidWin32Generator: () => Promise<GUIDGeneratorResult> = async () => {
  return new Promise((resolve, reject) =>
    exec('wmic diskdrive get serialnumber', function (error, stdout, stderr) {
      if (error) {
        reject(stderr);
      }
      const result: GUIDGeneratorResult = Object();

      result.platform = process.platform;
      result.method = 'wmic diskdrive get serialnumber';
      let sn = stdout.trim();
      result.method_result = sn;
      result.md5_param = sn.replace(/[^a-z0-9]/gi, '') + process.platform;
      result.md5_result = MD5(sn.replace(/[^a-z0-9]/gi, '') + process.platform)
        .toString()
        .toUpperCase();
      sn =
        'W' +
        MD5(sn.replace(/[^a-z0-9]/gi, '') + process.platform)
          .toString()
          .toUpperCase()
          .substring(0, 9);
      result.gatewayId = sn;
      resolve(result);
    })
  );
};
