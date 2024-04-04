import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { UserDataService } from '../../Services/user-data.service';
import { CommonModule } from '@angular/common';
import { User } from '../../User';
import { Comp3Component } from '../comp3/comp3.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comp2',
  standalone: true,
  imports: [HttpClientModule, CommonModule, Comp3Component, RouterLink, RouterOutlet],
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css'
})
export class Comp2Component {

  UsersArray: User[] = [];
  title = 'app-comp2';
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
        console.log(data);
      });
    }

    // ngOnDestroy() {
    //   this.unsubscribe();
    // }
}












// import { Component, OnInit } from '@angular/core';
// import { User } from '../../User';
// import { CommonModule } from '@angular/common';
// import { UserDataService } from "../../Services/user-data.service";



// @Component({
//   selector: 'app-comp2',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './comp2.component.html',
//   styleUrl: './comp2.component.css'
// })
// export class Comp2Component implements OnInit{
//   title = 'app-comp2';
//   Users: User[];
//   constructor(){
//     this.Users =[
//       {
//         name: "Ravi",
//         id: 7
//         dept: "Software Developer",
//         active: true
//       },
//       {
//         name: "Chai",
//         id: 21,
//         // dept: "Data Analyst",
//         active: true
//       },
//       {
//         name: "Dushyant",
//         id: 9,
//         // dept: "Software Developer",
//         active: true
//       },
//     ]
//   }
//   ngOnInit(): void {
      
//   }
// }
