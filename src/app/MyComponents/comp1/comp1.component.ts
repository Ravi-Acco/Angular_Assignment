import { Component, inject } from '@angular/core';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { UserDataService } from '../../Services/user-data.service';
import { CommonModule } from '@angular/common';
import { User } from '../../User';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {
  load=false;
  UsersArray: User[] = [];
  title = 'app-comp1';
  httpclt = inject(HttpClient);
  udservice = inject(UserDataService);

    ngOnInit():void
    {
      this.getDatafromApi();
    }
    getDatafromApi(): void
    {
      this.httpclt.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data: any) =>
      {
        this.udservice.addtoArray(data);
        this.UsersArray = data;
        // console.log(data);
        this.load=true;
      });
    }
}
