import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, throwError} from "rxjs";
import {AppError} from "./AppError";


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  protected httpClient: HttpClient

  private apiUrl = "https://localhost:44362/"

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  get<T>(path: String) {
    return this.httpClient.get<T>(this.apiUrl + path).pipe(catchError(this.handleError));
  }

  post<T>(path: String, requestBody: any) {
    return this.httpClient.post<T>(this.apiUrl + path, requestBody).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    // Return an observable with a user-facing error message.
    return throwError(() => {
      return error.error as AppError;
    });
  }
}
