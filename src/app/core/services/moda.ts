import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModaService {
  private readonly http= inject(HttpClient)
  private readonly apiUrl = "https://api-senai-angular.vercel.app/api"

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl + "/moda")
  }
   getById(id: any): Observable<any> {
    return this.http.get(this.apiUrl + "/moda/" + id)
  }

  create(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl + "/moda", formData)
  }

  update(formData: FormData, id: any): Observable<any> {
    return this.http.put(this.apiUrl + "/moda/" + id, formData)
  }

delete(id: any): Observable<any> {
    return this.http.delete(this.apiUrl + "/moda/" + id)
  }
}
