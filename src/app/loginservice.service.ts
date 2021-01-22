import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Login} from './login';
import{Loginresult} from './Loginresult';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private ajaxobj:HttpClient) { }

  loginservice(u:Login):Observable<Loginresult>
  {
    let x:any ="http://localhost:90/login";
    return this.ajaxobj.post<Loginresult>(x,u);

  }


}
