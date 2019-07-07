import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './login-myrealtrip.html',
  styleUrls: ['login-myrealtrip.css'
  ]
})
export class AppComponent implements OnInit {
  title = 'jeasun';
  userForm:FormGroup;

  constructor(private fb: FormBuilder){}
  
  ngOnInit(){
    this.userForm = this.fb.group({
      userid: ['',[
        Validators.required
      ]],
      password:['', [
        Validators.required
      ]]
    })
  }

  get userid() {
    return this.userForm.get('userid');
  }

  get password() {
    return this.userForm.get('password');
  }
}
