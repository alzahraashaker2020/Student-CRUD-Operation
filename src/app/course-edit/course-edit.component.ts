import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../_models/course';
import { Courseervice } from '../_services/course.service';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  course:Course|any;

  constructor(public Courseervice:Courseervice,public ar:ActivatedRoute,public route:Router) { }

  edit() {
    console.log(this.course)
    return this.Courseervice.edit(this.course._id, this.course).subscribe(
      a => this.route.navigateByUrl('/course')
    )
  }
  

  ngOnInit(): void {
    
    let id = 0;
    let name = '';
    
    this.ar.params.subscribe(
      a => {
        id = a['id'];
        name = a['Name'];
        
      }
    )
    this.Courseervice.getStudent(id).subscribe(
      d => this.course = d
    )

    
  }

}
