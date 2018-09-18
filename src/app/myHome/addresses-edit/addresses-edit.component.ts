import { Component, OnInit } from '@angular/core';
import {UserInfoService} from '../../shared/userInfo.service';
import {Contacts} from '../../shared/contacts.model';
import {Address} from '../../shared/address.model';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../../shared/user.model';
import {DataStorageService} from '../../shared/data-storage.service';
import {HttpEvent, HttpEventType} from '@angular/common/http';
@Component({
  selector: 'app-addresses-edit',
  templateUrl: './addresses-edit.component.html',
  styleUrls: ['./addresses-edit.component.css']
})
export class AddressesEditComponent implements OnInit {
  private currentUser: User;
  private addressForm: FormGroup;
  private mode: string;
  private isDisabled: boolean;
  private arrayLength: number;

  constructor(private userInfoService: UserInfoService,
              private route: ActivatedRoute,
              private router: Router,
              private dataStoreService: DataStorageService ) {
  }

  private newContact: Contacts;
  private newAddressList: Address[];

  ngOnInit() {
    this.currentUser = this.userInfoService.getUserInfo();
    this.mode = 'edit';
    this.initForm();
  }

  private initForm() {
    const telephone = this.currentUser.phone;
    const email = this.currentUser.mail;
    const addresses = new FormArray([]);
    this.arrayLength = this.userInfoService.getAddresses().length;
    for (const address of this.userInfoService.getAddresses()) {
      addresses.push(
        new FormGroup(
          {
            'city': new FormControl(address.city, Validators.required),
            'street': new FormControl(address.street, Validators.required),
            'building': new FormControl(address.building, [Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)]),
            /* 'city': new FormControl({value: address.city, disabled: this.isDisabled}, [
               Validators.required,
               Validators.minLength(3),
               Validators.maxLength(99)
             ])*/
          }
        )
      );
    }
    this.addressForm = new FormGroup({
      'phone': new FormControl({value: telephone, disabled: this.isDisabled}, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30),
      ]),
      'mail': new FormControl({value: email, disabled: this.isDisabled}, [
        Validators.required,
        Validators.maxLength(30),
        Validators.email
      ]),
      'addressList': addresses,
  })
    ;
  }


  onAddAddress() {
    (<FormArray> this.addressForm.get('addressList')).push(
      new FormGroup({
        'city': new FormControl(null, Validators.required),
        'street': new FormControl(null, Validators.required),
        'building': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)]),
      })
    );
    this.arrayLength++;
  }

  onCancelInfo() {
    this.router.navigate(['/header/home/address']);

  }

  onDeleteAddress(index: number) {
      (<FormArray> this.addressForm.get('addressList')).removeAt(index);
    this.arrayLength--;
  }

  onSubmit() {
    console.log('address edit form value');
    console.log(this.addressForm.value);
  this.userInfoService.updateUserInfo(this.addressForm.value);
    /* this.dataStoreService.storeUser(this.addressForm.value);
 this.router.navigate(['/header/home/address']);*/
  }

}
