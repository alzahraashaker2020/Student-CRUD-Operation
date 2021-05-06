import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../_models/department';
import { DepartmentService } from '../_services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  ndepartment: Department=new Department(0,"");

  constructor(public DepartmentService: DepartmentService, public route: Router) { }
  save() {
    console.log(this.ndepartment);
    this.DepartmentService.add(this.ndepartment).subscribe(

      a => this.route.navigateByUrl('/department'),
      e => { console.log(e) }
    )
  }

  ngOnInit(): void {
  }

}
