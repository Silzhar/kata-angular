import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User,KataService } from '../kata.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // @Output() createRegister: EventEmitter<User> = new EventEmitter<User>();

  public createUser: FormGroup = null;
  public submitted: boolean = false;


  constructor(public formBuilder: FormBuilder, public userInForm: KataService) {
    this.createUser = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.maxLength(20)]],
      phone: ['', [Validators.required, Validators.maxLength(14)]],
      location: ['', [Validators.required, Validators.maxLength(30)]],
    })
   }

  ngOnInit(): void {
  }

  public onUserTryToSubmit() {
    this.submitted = true;

    if (this.createUser.valid) {
      const user: User = {
        id: null,
        name: this.createUser.get('name').value,
        email: this.createUser.get('email').value,
        phone: this.createUser.get('phone').value,
        location: this.createUser.get('location').value,
      };
      this.userInForm.register(user);

      this.createUser.reset();
      this.submitted = false;
    } else {
      console.log('no data');
      
    }
  }
}
