import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './student-service.service';
import { Students } from './Students';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'StudentsPortal';  
  constructor(private studentsService: StudentServiceService) {
  }

  public students: Students[]=[];
  ngOnInit(): void {    
    this.studentsService.getStudent().subscribe(res => {
      this.students = res;                
    });     
  }
}
