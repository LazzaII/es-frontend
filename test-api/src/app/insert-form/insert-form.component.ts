import { Component } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { Employee } from "../shared/employee";

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css']
})
export class InsertFormComponent {

  visible : boolean = false;

  constructor( private api : ApiRestService ) { }

  showHideForm () : void {
    if(this.visible) this.visible = false;
    else this.visible = true;
  }

  addEmployee(firstName : string, lastName : string, email : string, phone : string) {

    /* this.api.addEmployee('http://localhost:4200/api/tutorial/1.0/employees', employee) */
  }
}
