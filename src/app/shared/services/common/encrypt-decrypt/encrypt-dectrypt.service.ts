import { Injectable } from '@angular/core';
import { SimpleCrypto } from 'simple-crypto-js';
import Utils from '../utils';
@Injectable({
  providedIn: 'root'
})
export class EncryptDectryptService {
  private secretKey = 'd0aafd6c38a2d836310067e13462b113541acb0267d50c5657fceb1b2cac9e38wr1t89pDG/jKzKuZRI1UvQ==';
  // using encrypted key
  private simpleCrypto: SimpleCrypto;
  constructor() {
    this.simpleCrypto = new SimpleCrypto(this.secretKey);
  }

  getCipherText(input: any) {
    if (Utils.getIsObject(input)) {
      return this.simpleCrypto.encryptObject(input);
    }
    return this.simpleCrypto.encrypt(input);
  }

  getNormalText(input: any) {
    if (Utils.getIsObject(input)) {
      return this.simpleCrypto.decryptObject(input);
    }
    return this.simpleCrypto.decrypt(input);
  }
}
