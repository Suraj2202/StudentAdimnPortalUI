import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/api-models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseApiUri = 'https://localhost:44345';
  constructor(private httpClient: HttpClient ) { }

  getStudents(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.baseApiUri + '/students');
  }

  getStudent(studentId: string):Observable<Student> {
    return this.httpClient.get<Student>(this.baseApiUri + '/students/' + studentId);
  }
}
