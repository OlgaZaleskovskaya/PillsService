import {Address} from './address.model';
import {Child} from './child.model';

export class User {
  public phone: string;
  public mail: string;
  public addressList: Address[];

  constructor( phone: string,  mail: string,  addressList: Address[]) {
    this.phone = phone;
    this.mail = mail;
    this.addressList = addressList;

  }

}
