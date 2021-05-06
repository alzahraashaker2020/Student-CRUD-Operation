import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../_models/student';
import { StudentService } from '../_services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: Student | any;
  constructor(private studentService: StudentService, public ar: ActivatedRoute, private router: Router) { }
  deleteById() {
    this.studentService.delete(this.student._id).subscribe(
      a => this.router.navigateByUrl('/students')
    )
  }
  ngOnInit(): void {
    let id = 0;
    this.ar.params.subscribe(
      a => {
        id = a['id'];
      }
    )
    this.studentService.getStudent(id).subscribe(
      d => this.student = d
    )
  }
}
