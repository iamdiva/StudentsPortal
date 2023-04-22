import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable, of } from 'rxjs';
import { Students } from './Students';
import { DataResult, orderBy, process, SortDescriptor } from '@progress/kendo-data-query';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http: HttpClient) { }

  getStudent()
  {
    return this.http.post<Students[]>('https://localhost:44388/api/Students/data','');
  }
  
}
