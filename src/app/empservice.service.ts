import { Injectable } from '@angular/core';
import{Employee} from './employee';
import{Resultemployee} from './resultemployee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor(private ajaxobj:HttpClient) { }

  checkservice(e:Employee):Observable<Employee>
 {
  let x:any ="http://localhost:90/check";
  return this.ajaxobj.post<Employee>(x,e);

 }

  addservice(e:Employee):Observable<Resultemployee>
  {
    let x:any ="http://localhost:90/add";
  return this.ajaxobj.post<Resultemployee>(x,e);

  }

  updateservice(e:Employee):Observable<Resultemployee>
  {
    let x:any ="http://localhost:90/update";
  return this.ajaxobj.post<Resultemployee>(x,e);

  }

  deleteservice(e:Employee):Observable<Resultemployee>
  {
    let x:any ="http://localhost:90/delete";
      return this.ajaxobj.post<Resultemployee>(x,e);

  }


}
