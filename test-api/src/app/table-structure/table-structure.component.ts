import { Component } from '@angular/core';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-table-structure',
  templateUrl: './table-structure.component.html',
  styleUrls: ['./table-structure.component.css']
})
export class TableStructureComponent {

  data : any;
  error : any;
  form : any;

  constructor( private api : ApiRestService) {
    this.loadData();
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

  updateEmployee(){
    
  }

}
