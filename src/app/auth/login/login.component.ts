import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServicesService } from 'src/app/service/auth-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(
    public authService: AuthServicesService,
    private formBuilder: FormBuilder
  ) { }

  firstFormGroup = new FormGroup({
    Login: new FormControl(),
    Password: new FormControl(),

  })

  
  ngOnInit() {

  }


  Submit() {
    
    if (this.firstFormGroup.valid) {
      console.log(this.firstFormGroup.value);
      var obj = {
        "AccountToLogin": {
          "uid": "12345",
          "pwd": this.firstFormGroup.value.Password,
          "name": this.firstFormGroup.value.Login,
          "Client_card_edit": true,
          "discount_edit": true,
          "price_edit": true,
          "receipt_edit": true,
          "inventory_edit": true,
          "expenses_add": true,
          "users_edit": true,
          "settings_edit": true,
          "personnel_edit": true,
          "openclose_edit": true,
          "sell_edit": true,
          "authority": 1
        }
      }

      console.log(obj);
      debugger
      // this.authService.Test1(obj).subscribe(res => { });

      this.authService.Test2().subscribe(res => { });

    } else {

    }
  }


}
