import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../_models/course';
import { Courseervice } from '../_services/course.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {
  ncourse:Course=new Course(0,"");

  constructor(public Courseervice:Courseervice ,public route:Router) { }
  save() {
    console.log(this.ncourse);
    this.Courseervice.add(this.ncourse).subscribe(

      a => this.route.navigateByUrl('/course'),
      e => { console.log(e) }
    )
  }

  ngOnInit(): void {
  }

}
