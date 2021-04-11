import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Employee } from "./shared/employee";

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor(private http : HttpClient) { }

  // get 
  getEmployees(apiURL : string) : Observable<Employee> {
    return this.http.get<Employee>(apiURL).pipe()
  }

  // delete
  deleteEmployee(apiURL : string) {
    return this.http.delete(apiURL).pipe()
  }

  // post
  addEmployee(apiURL : string, employee : Employee) : Observable<Employee> {
    return this.http.post<Employee>(apiURL, JSON.stringify(employee), this.httpOptions).pipe()
  }

  // put
  updateEmployee(apiURL : string, employee : Employee) {
    return this.http.put(apiURL, JSON.stringify(employee), this.httpOptions).pipe()
  }

}
