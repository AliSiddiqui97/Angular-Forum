import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const userUrl = 'http://localhost:3000/users';
const threadUrl = 'http://localhost:3000/threads';
    

@Injectable({
  providedIn: 'root'
})



export class ApiService {

  constructor(private http: HttpClient) { 
    
    
  }

  getThreads() {
    return this.http.get(threadUrl);
  }
  getUsers() {
    return this.http.get(userUrl);
  }
}
