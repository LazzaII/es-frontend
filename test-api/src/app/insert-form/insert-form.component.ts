import { Component } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { Employee } from '../shared/employee';



@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.css']
})
export class InsertFormComponent {

  visible : boolean = false;
  data : any;
  error : any;
  employee : Employee;

  constructor( private api : ApiRestService ) {
    this.employee = {
      employeeId: 0, 
      firstName: "", 
      lastName: "", 
      email: "", 
      phone: ""
    };
   }

  showHideForm () : void {
    if(this.visible) this.visible = false;
    else this.visible = true;
  }

  addEmployee() : void {

    this.api.getEmployees("http://localhost:4200/api/tutorial/1.0/employees").subscribe(
        data => {
            this.data = data;          
            this.employee.employeeId = this.data.length+1;

            this.api.addEmployee("http://localhost:4200/api/tutorial/1.0/employees", this.employee).subscribe();

            location.reload(); 
        },
        error => console.log(error)
    );
  }
}
