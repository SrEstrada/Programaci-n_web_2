import { Injectable, inject } from '@angular/core'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class ApiService {
  private http = inject(HttpClient);
  private baseurl = 'http://127.0.0.1:8000';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  getAllMovies(): Observable<any> {
    return this.http.get(this.baseurl + '/movie/', {
      headers: this.httpHeaders
    });
  }
}
