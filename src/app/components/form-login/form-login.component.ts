import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {
  forms!: FormGroup;
  error: boolean=false;
  errorMessage: string[] = [];
  constructor(private formBuilder:FormBuilder, private authSevices:ApiServicesService,private router:Router){}
  ngOnInit():void{
    this.createForm();
  }
  createForm()
  {
    this.forms= this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.min(6),Validators.max(15),Validators.required]]
    })

  };
  async onSubmit()
  {
    if(this.forms.invalid)return;
    try{
      const response =await this.authSevices.login(this.forms);
      if(response) console.log("usuario logeado", response);
      this.error = false;
      this.errorMessage= [];
      console.log("Incio finalizado");
      this.router.navigateByUrl("auth/home");
    }catch(error:any)
    {
      if(error.status == 0)
        {
          this.error = true;
          this.errorMessage.push("error en la coneción con el servidor.");
          return;
        }
      console.log("error en el login", error);
      this.error=true;
      this.errorMessage.push(error.error);
    }finally
    {
      console.log('petición finalizada');
      this.forms.reset();
    }
  }
  get emailInvalid()
  {
    return this.forms.get('Email')?.invalid && this.forms.get('Email')?.touched;
  }
  get passwordInvalid()
  {
    return this.forms.get('password')?.invalid && this.forms.get('password')?.touched;
  }
  goToRegist()
  {
    this.router.navigateByUrl("/register");
  }
}
