import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KataService {
  private users: User[] = [];
  public user : User = null;
  public lastUserId: number = 0;

  constructor() { }

  public saveUser(user: User) {
    this.lastUserId++;
    user.id = this.lastUserId;
    this.users.push(user)
  }

  public register(user: User): User {
    return (this.user = user);
  }

}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: number;
  location: string;
}
