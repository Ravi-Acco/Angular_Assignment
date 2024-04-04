import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../User';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {
    users: User[] = [];
     
    addtoArray(arr: User[])
    {
      this.users = arr;
    }

}
