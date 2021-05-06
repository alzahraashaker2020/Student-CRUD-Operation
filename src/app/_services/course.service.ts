import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../_models/course';

@Injectable({
  providedIn: 'root'
})
export class Courseervice {

  constructor(public http:HttpClient,public ar:ActivatedRoute,public route:Router) { }
  
  getAll() {
    return this.http.get<Course[]>("http://localhost:8080/Course/list");
  }

  add(Course: Course) {
    return this.http.post<Course>("http://localhost:8080/Course/add/", Course);
  }
  getStudent(id: number) {
    return this.http.get<Course[]>("http://localhost:8080/Course/details/" + id);
  }
  delete(id: number) {
    return this.http.get("http://localhost:8080/Course/delete/" + id)
  }
  edit(id: number, Course: Course) {
    return this.http.post<Course[]>("http://localhost:8080/Course/edit/" + id, Course);
  }
}
