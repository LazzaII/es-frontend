import { Component } from '@angular/core';
import { ApiRestService } from "../api-rest.service";
import { InsertFormComponent } from '../insert-form/insert-form.component';

@Component({
  selector: 'app-table-structure',
  templateUrl: './table-structure.component.html',
  styleUrls: ['./table-structure.component.css']
})

export class TableStructureComponent {

  data : any;
  error : any;

  constructor( private restClient : ApiRestService, private form : InsertFormComponent) {
    this.loadTable();
  }

  showAddParameters() : void {
    if(this.form.getIsShow())
      this.form.setIsShow(false);
    else
      this.form.setIsShow(true);
  }

  loadTable() : void {
    this.restClient.getEmployee("http://localhost:4200/api/tutorial/1.0/employees").subscribe(
      data => this.data = data,
      error => this.error = error
    )
  }

}
