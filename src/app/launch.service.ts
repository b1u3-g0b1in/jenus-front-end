import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LaunchService {
  private apiUrl = 'http://localhost:3000/api/date-difference'; // Ensure correct URL format

  constructor(private http: HttpClient) {}

  getDaysLeft(): Observable<{ daysDifference: number }> {
    return this.http
      .get<{ daysDifference: number }>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something bad happened; please try again later.');
  }
}
