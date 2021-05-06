import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../_models/department';
import { DepartmentService } from '../_services/department.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
  department:Department|any;

  constructor(public DepartmentService:DepartmentService,public ar:ActivatedRoute,public route:Router) { }
  edit() {
    console.log(this.department)
    return this.DepartmentService.edit(this.department._id, this.department).subscribe(
      a => this.route.navigateByUrl('/department')
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
    this.DepartmentService.getStudent(id).subscribe(
      d => this.department = d
    )

    
  }

}
