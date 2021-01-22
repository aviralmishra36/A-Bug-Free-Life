import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.css']
})
export class MainmenuComponent implements OnInit {

  constructor(private r:Router ) { }

  ngOnInit() 
  {
    
  }
  add()
    {
      
      this.r.navigate(['/add-component']);
    }

    update()
    {
      this.r.navigate(['/update-component']);
    }

    delete()
    {
      this.r.navigate(['/delete-component']);
    }
    

}
