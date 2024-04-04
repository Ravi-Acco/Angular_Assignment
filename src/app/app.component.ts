import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from "./MyComponents/comp1/comp1.component";
import { Comp2Component } from "./MyComponents/comp2/comp2.component";
import { Comp3Component } from "./MyComponents/comp3/comp3.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, Comp1Component, Comp2Component, Comp3Component]
})
export class AppComponent {
  title = 'ang-assignment';
}

