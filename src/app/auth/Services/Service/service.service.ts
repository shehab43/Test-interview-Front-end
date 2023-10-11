import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../../login/Dto/Dtos';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  login(model:login){
    return this.http.post('https://localhost:7106/api/Auth/Loggin',model)
  }
}
