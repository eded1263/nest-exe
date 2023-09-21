import { Injectable } from '@nestjs/common';
import { guidMacOsGenerator } from './helpers/macos.helper';
import { guidLinuxGenerator } from './helpers/linux.helper';
import { guidWin32Generator } from './helpers/win32.helper';
@Injectable()
export class GuidGenerator {
  async generateGuid() {
    switch (process.platform) {
      //Mac OSx
      case 'darwin':
        return await guidMacOsGenerator();

      //Linux ARM
      case 'linux':
        return await guidLinuxGenerator();

      //Win 10 IoT Arm
      case 'win32':
        return await guidWin32Generator();

      default:
        throw new Error('Unknown Environment/OS!');
    }
  }
}
