import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(public http: HttpClient, public ar: ActivatedRoute, public route: Router) { }

  getAll() {
    return this.http.get<Department[]>("http://localhost:8080/Departments/list");
  }

  add(Department: Department) {
    return this.http.post<Department>("http://localhost:8080/Departments/add/", Department);
  }
  getStudent(id: number) {
    return this.http.get<Department[]>("http://localhost:8080/Departments/details/" + id);
  }
  delete(id: number) {
    return this.http.get("http://localhost:8080/Departments/delete/" + id)
  }
  edit(id: number, department: Department) {
    return this.http.post<Department[]>("http://localhost:8080/Departments/edit/" + id, department);
  }
}
