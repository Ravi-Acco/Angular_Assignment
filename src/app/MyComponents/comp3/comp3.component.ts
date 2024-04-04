import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../../Services/user-data.service';
import { User } from '../../User';
import { HttpClient } from "@angular/common/http";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp3.component.html',
  styleUrl: './comp3.component.css'
})
export class Comp3Component {
  title = "app-comp3"
  route:ActivatedRoute=inject(ActivatedRoute);
  user : User | undefined;
  UsersArray: User[] = [];
  httpclt = inject(HttpClient);
  load= false;
  
  // userDataService=inject(UserDataService);
  // title = 'app-comp3';
  // udservice = inject(UserDataService);

    // ngOnInit():void
    // {
      
    // }

  getDatafromApi(id:Number): void
    {
      this.httpclt.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .subscribe((data: any) =>
      {
        this.user=data;
        console.log(data);
        this.load=true;
      });
    }
  constructor(){
    const userCardId=Number(this.route.snapshot.params['id']);
    this.getDatafromApi(userCardId);
  }
}
