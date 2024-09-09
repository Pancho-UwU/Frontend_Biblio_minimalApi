import { Injectable } from '@angular/core';
import { ModelApi } from 'src/app/Interfaces/model/model-api';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  private apiUrl = 'http://localhost:5224/api/';
  private tokenKey: string = 'tokenKey';
  private idUser: string = 'idBiblio';
  constructor() { }
  
  setToken(token:string)
  {
    localStorage.setItem(this.tokenKey,token);
  }
  getToken():string|null
  {
    return localStorage.getItem(this.tokenKey);
  }
  removeToken():void
  {
    localStorage.removeItem(this.tokenKey);
  }
  isAuth():boolean
  {
    const token = this.getToken();
    return token !== null;
  }
  getUserId(): number |null
  {
    
    return parseInt(this.idUser);
  }
  setUserId(id:string)
  {
    localStorage.setItem(this.idUser,id);
  }
  logout():void{
    this.removeToken()
  }
}
