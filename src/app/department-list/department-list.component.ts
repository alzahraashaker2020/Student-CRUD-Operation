import { Component, OnInit } from '@angular/core';
import { Department } from '../_models/department';
import { DepartmentService } from '../_services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  department:Department[]=[];

  constructor(public DepartmentService:DepartmentService) { }

  ngOnInit(): void {
    this.DepartmentService.getAll().subscribe(
      d => {
        this.department = d;
      }
    )
  }

}
