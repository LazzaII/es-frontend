import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Employee } from "./shared/employee";

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http : HttpClient) { }

  // get 
  getEmployees(apiURL : string) : Observable<Employee> {
    return this.http.get<Employee>(apiURL).pipe()
  }

  // delete
  deleteEmployee(apiURL : string) {
    return this.http.delete(apiURL)
  }

  // post
  addEmployee(apiURL : string, employee : Employee) {
    return this.http.post(apiURL, employee)
  }

  // patch
  modifyEmployee(apiURL : string, employee : Employee) {
    return this.http.patch(apiURL, employee)
  }

}
