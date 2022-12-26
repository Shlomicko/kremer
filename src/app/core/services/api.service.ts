import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EDIDFile} from "../models";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getFile(name: string): Observable<EDIDFile> {
    return this.http.get<EDIDFile>(`assets/JSONmonitors/${name}.json`);
  }
}
