import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  messageError: string='';
  submited : boolean=false;
  isSaved : boolean=false;
  myForm: FormGroup = this.fb.group({
    username : ['', Validators.required],
    password : ['', Validators.required],
    passwordVerif : ['', Validators.required],
    email : ['', [Validators.required, Validators.email]],
    nom : ['', Validators.required],
    prenom : ['', Validators.required]
  })

  constructor(private fb: FormBuilder,
    private signupService : SignupService,
    private router: Router
    ) {
    }

    signup() {
      this.submited = true;
      const val = this.myForm.value;
      console.log("signal")
      if(val.username && val.password && val.nom && val.prenom && val.email && val.password == val.passwordVerif) {
        this.signupService.signup(val.username, val.password, val.email, val.nom, val.prenom)
        .subscribe(response => {
          this.isSaved=true;
          this.router.navigate(['/login']);
        }, error=>{
          this.isSaved=false;
          this.messageError=error.error.message})
      }
    }

  ngOnInit(): void {
  }

}
