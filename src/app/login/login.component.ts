import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../login/auth.service';
import { SignupService } from '../signup/signup.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submited : boolean=false;
  connexion : boolean=true;
  myForm: FormGroup = this.fb.group({
    username : ['', Validators.required],
    password : ['', Validators.required]
  })

  list:any;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private signupService: SignupService,
    private router: Router
    ) {
    }

    login() {
      this.submited = true;
      const val = this.myForm.value;
      if(val.username && val.password) {
        this.authService.login(val.username, val.password)
        .subscribe((response) => {
       localStorage.setItem("token", response.accessToken);
       localStorage.setItem("username", response.username);
        const roles = response.roles;
        console.log(response)
        console.log(this.router)
        for (const role of roles) {
          if(role === "ROLE_ADMIN"){this.router.navigate([`/admin`])}
          if(role === "ROLE_DIRECTEUR"){this.router.navigate([`/directeur`,{id:response.id}])}
          if(role === "ROLE_CONSEILLER"){this.router.navigate([`/conseiller`,{id:response.id}])}
        }
        this.connexion = true;
        }, error=>{
          if (error.status === 401 ) {
            this.authService.logOut();
            this.connexion = false;
          }})
      }
    }



  ngOnInit(): void {
  }

}
