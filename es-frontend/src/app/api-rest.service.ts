import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Employee } from "./employee";
import { Observable, throwError} from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) { }

  // get all the employees from db
  getEmployee (apiUrl : string) : Observable<Employee> {
    return this.http.get<Employee>(apiUrl).pipe()
  }

  // delete an employee from db
  deleteEmployee (apiUrl : string) {
    return this.http.delete(apiUrl)
  }

  // add an employee into db
  addEmployee (apiUrl : string, employee : Employee) {
    return this.http.post(apiUrl, employee)
  }

  // modify information about an employee
  modifyEmployee (apiUrl : string, employee : Employee) {
    return this.http.patch(apiUrl, employee)
  }
}


