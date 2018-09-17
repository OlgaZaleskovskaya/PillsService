import {Address} from './address.model';
import {Subject} from 'rxjs';
import {Contacts} from './contacts.model';
import {User} from './user.model';
import {Child} from './child.model';
import {DataStorageService} from './data-storage.service';
import {Injectable} from '@angular/core';
import {HttpEvent} from '@angular/common/http';
import {Router} from '@angular/router';
import {getResponseURL} from '@angular/http/src/http_utils';
import { map } from 'rxjs/operators';

@Injectable()
export class UserInfoService {
  addressesChanged = new Subject<Address[]>();
  userInfoChanged = new Subject<User>();


  public userInfo: User;

  children: Child[] = [new Child('Nick', 'Aibolit'),
    new Child('Zina', 'Dc. Watson'),
    new Child('Peter', 'Dc. House'),
    new Child('Lizzy', 'Dc. Doc')];

  constructor(private dataStorage: DataStorageService, private router: Router) {
 //   this.userInfo = new User('2776829', '2@ff', [new Address('London', 'Trofimova', 12), new Address('Moscow', 'Parkovaya', 12)]);
  }


public loadUserFromServer() {
  return this.dataStorage.fetchUsers()
    .pipe(
      map((response) => {
          if (!response.body['addressList']) {
            response.body['addressList'] = [];
          }
          this.userInfo = <User>response.body;
          return response;
        }
      )
    );
}
  public getUserInfo() {
   return this.userInfo;
  }

  public getAddresses(): Address[] {
    return this.userInfo.addressList;
  }
 public getChildren(): Child[] {
    return this.children;
  }
  public getAddress(i: number): Address {
    return this.userInfo.addressList[i];
  }

  public addAddress(address: Address) {
    this.userInfo.addressList.push(address);
    this.addressesChanged.next( this.userInfo.addressList.slice());
  }

  public removeAddress(index: number) {
    this.userInfo.addressList.splice(index, 1);
    this.addressesChanged.next( this.userInfo.addressList.slice());
  }

  public updateUserInfo(user: User) {
   this.dataStorage.storeUser(user).subscribe((response) => {
     console.log(response);
     this.router.navigate(['/header/home/address']);
   }, error2 => {
     console.log(error2);
   });
  }
}
