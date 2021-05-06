import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DetailsDepartmentComponent } from './details-department/details-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseEditComponent } from './course-edit/course-edit.component';


const routes: Routes = [

  { path: 'students', component: StudentListComponent },
  { path: 'students/add', component: StudentAddComponent },
  { path: 'students/details/:id', component: StudentDetailsComponent },
  { path: 'students/edit/:id', component: EditStudentComponent },
  {path:'department',component:DepartmentListComponent},
  {path:'department/add',component:AddDepartmentComponent},
  {path:'department/details/:id',component:DetailsDepartmentComponent},
  {path:'department/edit/:id',component:EditDepartmentComponent},
  {path:'course',component:CourseListComponent},
  {path:'course/add',component:CourseAddComponent},
  {path:'course/details/:id',component:CourseDetailsComponent},
  {path:'course/edit/:id',component:CourseEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
