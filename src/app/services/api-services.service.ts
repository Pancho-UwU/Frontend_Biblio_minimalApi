import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthServicesService } from '../auth/services/auth-services.service';
import { ResponseApi } from '../Interfaces/response-api';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  private baseUrl: string ="http://localhost:5224/api/";

  constructor(private http:HttpClient,private authServices: AuthServicesService) {
    console.log("hola q tal espero que funcione");
   }
   async login (form: any): Promise<ResponseApi>
   {
    try
    {
      const data = await firstValueFrom(this.http.post<ResponseApi>(this.baseUrl+'Bibliotecaria/login',form.value));
      if(data.token)
        {
          this.authServices.setToken(data.token);
          this.authServices.setUserId(data.idUser.toString());
        }
      return Promise.resolve(data);
    }catch(error:any)
    {
      console.log("error en el login", error);
      let e = error as HttpErrorResponse;
      return Promise.reject(error);
    }
   }
  
}
