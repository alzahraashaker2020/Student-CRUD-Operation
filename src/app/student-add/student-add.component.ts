// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Student } from '../_models/student';
// import { StudentService } from '../_services/student.service';

// @Component({
//   selector: 'app-student-add',
//   templateUrl: './student-add.component.html',
//   styleUrls: ['./student-add.component.css']
// })
// export class StudentAddComponent implements OnInit {
//   nstudent:Student=new Student(0,"","");

//   constructor(public studentService:StudentService,public router:Router) { }

//   ngOnInit(): void {

//   }
//   save(){
//     this.studentService.add(this.nstudent).subscribe(
//       d=>{
//         this.router.navigateByUrl("/student")

//       }
//     )
//   }

// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../_models/student';
import { StudentService } from '../_services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  nstudent: Student = new Student(0, '', '',0);
  constructor(private studentService: StudentService, private router: Router) { }
  save() {
    console.log(this.nstudent);
    this.studentService.add(this.nstudent).subscribe(

      a => this.router.navigateByUrl('/students'),
      e => { console.log(e) }
    )
  }
  ngOnInit(): void {
  }

}




