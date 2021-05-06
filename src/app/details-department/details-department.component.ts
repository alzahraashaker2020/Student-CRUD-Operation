import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../_models/department';
import { DepartmentService } from '../_services/department.service';

@Component({
  selector: 'app-details-department',
  templateUrl: './details-department.component.html',
  styleUrls: ['./details-department.component.css']
})
export class DetailsDepartmentComponent implements OnInit {
  department:Department|any;

  constructor(public DepartmentService:DepartmentService,public ar:ActivatedRoute,public router:Router) { }
  deleteById() {
    this.DepartmentService.delete(this.department._id).subscribe(
      a => this.router.navigateByUrl('/department')
    )
  }

  ngOnInit(): void {
    let id = 0;
    this.ar.params.subscribe(
      a => {
        id = a['id'];
      }
    )
    this.DepartmentService.getStudent(id).subscribe(
      d => this.department = d
    )
  }

}
