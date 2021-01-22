import { Component } from '@angular/core';
import{LoginserviceService} from './Loginservice.service';
import{Login} from './login';
import{Loginresult} from './Loginresult';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'casestudy';

  x = true;

  result:string = 'login status';

  user:Login;

  constructor(private servobj:LoginserviceService,private r:Router) {

    this.user = new Login(); //creating employee obj and initializing values
    this.user.userid = 'null';
    this.user.password = 'null';
    
}

  login()
  {
    this.servobj.loginservice(this.user).subscribe(
      (data:Loginresult)=>{ 

        if(data.status ==1)
        {
            this.result  ='login successful';
            
            this.r.navigate(['/main-menu']);

        }
        else
          {this.result ='login unsuccessful';   

          
          
       } 
      }
     ,(error)=>{
       this.result ="ajax failed some issue in contacting";
     // this.gsm = JSON.stringify(error); 
    
    
    }
    ); 

  }

  reset()
  {
    this.user.userid = '';
    this.user.password = '';

  }

 
}
