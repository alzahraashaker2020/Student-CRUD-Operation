import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../_models/student';
import { StudentService } from '../_services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  estudent : Student |any;
  constructor(public studentService: StudentService, public route: Router, public ar: ActivatedRoute) { }
  edit() {
    console.log(this.estudent)
    return this.studentService.edit(this.estudent._id, this.estudent).subscribe(
      a => this.route.navigateByUrl('/students')
    )
  }
  ngOnInit() {
    let id = 0;
    let name = '';
    let email = '';
    this.ar.params.subscribe(
      a => {
        id = a['id'];
        name = a['Name'];
        email = a['Email'];
      }
    )
    this.studentService.getStudent(id).subscribe(
      d => this.estudent = d
    )

  }

}
