import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  products: User[] = [];
  gnome: User;

  constructor() {}

  public getProducts(): Observable<User[]> {
    const USERS = require('./users.json');
    return of(USERS).pipe(tap((data) => console.log('service ', data)));
  }
}
