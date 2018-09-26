import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataStorageService} from '../../../shared/data-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contacts} from '../../../shared/contacts.model';
import {UserInfoService} from '../../../shared/userInfo.service';
import {User} from '../../../shared/user.model';
import {Address} from '../../../shared/address.model';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.css']
})
export class EditInfoComponent implements OnInit {

  private currentUser: User;
  public addressForm: FormGroup;
  public mode: string;
  private isDisabled: boolean;
  public arrayLength: number;

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
