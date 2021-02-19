import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KataService {
  public kata: Details[] = [];

  constructor() { }

  // getDetails(): Observable<Details> {
  //   const detailList: Observable<Details> = (

  //   ) as Observable<Details>;
  // }
}

export interface Details {
  id: number;
  name: string;
  image: string;
}