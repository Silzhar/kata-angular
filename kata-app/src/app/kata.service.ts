import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KataService {
  // public kata: Details[] = [];
  private users: User[] = [];
  public user : User = null;
  public lastUserId: number = 0;

  constructor() { }

  // getDetails(): Observable<Details> {
  //   const detailList: Observable<Details[]> as Observable<Details[]>;
  //   return detailList;
  // }
  public saveUser(user: User) {
    this.lastUserId++;
    user.id = this.lastUserId;
    this.users.push(user)
  }

  public register(user: User): User {
    return (this.user = user);
  }

}

// export interface Details {
//   id: number;
//   name: string;
//   image: string;
// }

export interface User {
  id: number;
  name: string;
  email: string;
  phone: number;
  location: string;
}
