import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../_models/course';
import { Courseervice } from '../_services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course:Course|any;

  constructor(public Courseervice:Courseervice,public router:Router,public ar:ActivatedRoute) { }

  deleteById() {
    this.Courseervice.delete(this.course._id).subscribe(
      a => this.router.navigateByUrl('/course')
    )
  }

  ngOnInit(): void {
    let id = 0;
    this.ar.params.subscribe(
      a => {
        id = a['id'];
      }
    )
    this.Courseervice.getStudent(id).subscribe(
      d => this.course = d
    )
  }

}
