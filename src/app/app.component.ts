import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //selector must be unique
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
      h3 {
        color: dodgerblue;
      }
  `]
}) //inline style
export class AppComponent {
  username = '';
}
