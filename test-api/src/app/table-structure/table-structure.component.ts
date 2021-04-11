import { Component } from '@angular/core';
import { ApiRestService } from '../api-rest.service';
import { Employee } from '../shared/employee';

@Component({
  selector: 'app-table-structure',
  templateUrl: './table-structure.component.html',
  styleUrls: ['./table-structure.component.css']
})
export class TableStructureComponent {

  data : any;
  error : any;
  form : any;
  visible : boolean = false;
  employee : Employee;

  constructor( private api : ApiRestService) {
    this.loadData();
    this.employee = {
      employeeId: 0, 
      firstName: "", 
      lastName: "", 
      email: "", 
      phone: ""
    };
  }
  
  loadData() : void {
    this.api.getEmployees('http://localhost:4200/api/tutorial/1.0/employees').subscribe(
      data => this.data = data,
      error => this.error = error
    )
  }

  deleteEmployee(event : any){
    let id = event.target.id
    this.api.deleteEmployee('http://localhost:4200/api/tutorial/1.0/employees/' + id).subscribe()
    this.loadData()
  }

  showUpdate(event : any){
    this.employee.employeeId = event.target.id;
    if(this.visible) this.visible = false;
    else this.visible = true;
  }

  updateEmployee(){
    this.api.updateEmployee('http://localhost:4200/api/tutorial/1.0/employees/' + this.employee.employeeId , this.employee).subscribe()
    location.reload()
  }

}
