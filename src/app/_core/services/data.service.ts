import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

let urlApi = 'https://elearningnew.cybersoft.edu.vn/api';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  shareData: any;
  constructor(private http: HttpClient) {
    
  }

  get(uri: any): Observable<any> {
    const url = `${urlApi}/${uri}`;
    return this.http.get(url).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  post(uri: any, data: any): Observable<any> {
    const url = `${urlApi}/${uri}`;
    return this.http.post(url, data).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  put(uri: any, data: any): Observable<any> {
    const url = `${urlApi}/${uri}`;
    const option: any = {
      responseType: 'text',
    };
    return this.http.put(url, data, option).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  delete(uri: any): Observable<any> {
    const url = `${urlApi}/${uri}`;
    const option: any = {
      responseType: 'text',
    };
    return this.http.delete(url, option).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  postCourse(user: any, uri: any): Observable<any> {
    const url = `${urlApi}/${uri}`;
    let options: any = { responseType: 'text' };
    const observable = this.http.post(url, user, options).pipe(
      tap(() => {}),
      catchError((error: any) => {
        alert(error.HttpErrorResponse);
        return this.handleError(error);
      })
    );
    return observable;
  }

  handleError(error: any) {
    switch (error.status) {
      case 401:
        alert(error.error);
        break;
      case 404:
        alert(error.error);
        break;

      case 400:
        break;

      case 500:
        alert(error.error);
        break;

      default:
        break;
    }

    return throwError(error);
  }
}
