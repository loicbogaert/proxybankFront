import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../login/auth.service';
import { SignupService } from '../signup/signup.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    username : ['', Validators.required],
    password : ['', Validators.required]
  })

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private signupService: SignupService
    ) { 
    }

    login() {
      const val = this.myForm.value;

      if(val.username && val.password) {
        this.authService.login(val.username, val.password)
        .subscribe((response) => {

       localStorage.setItem("token", response.accessToken);
          console.log("logged in");
        })
      }
    }

  ngOnInit(): void {
  }

}
