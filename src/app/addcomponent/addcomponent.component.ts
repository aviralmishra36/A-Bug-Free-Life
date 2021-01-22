import { Component, OnInit } from '@angular/core';
import{EmpserviceService} from '../empservice.service';
import{Employee} from '../employee';
import{Resultemployee} from '../resultemployee';

@Component({
  selector: 'app-mycomp1',
  templateUrl: './mycomp1.component.html',
  styleUrls: ['./mycomp1.component.css']
})
export class Mycomp1Component {

    result = 'result will come here';

    x = true;

    msg = '.';

    emp:Employee; //creating employee reference

  constructor(private servobj:EmpserviceService) {

        this.emp = new Employee(); //creating employee obj and initializing values
        this.emp.empid = 0;
        this.emp.empname = 'null';
        this.emp.email = 'null';
        this.emp.phone = 0;
   }


  add()
  {
    this.servobj.addservice(this.emp).subscribe(
      (data:Resultemployee)=>{ 

        if(data.status==1)
        {
          this.result = "added";
        }
        else{
          this.result = "unable to add";
        }
      },
        (error) =>{
          this.result ="ajax failed some issue in contacting";
        // this.gsm = JSON.stringify(error); 
       
       
       
      });
  }


  ngOnInit(): void {
  }

}
